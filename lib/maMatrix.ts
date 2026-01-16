// FILE: src/lib/maMatrix.ts
import type { Kline } from "./binance";

export type Direction = "above" | "below";
export type StatusKey =
  | "testing"
  | "retesting"
  | "just-broke"
  | "confirmed-break"
  | "above"
  | "below"
  | "insufficient";

export type MaType = "SMA" | "EMA";

export type CellPayload = {
  direction: Direction;
  status: string;
  statusKey: StatusKey;
  ma: number;
  distancePct: number;
};

export type Timeframe = {
  key: string;
  label: string;
  interval: string;
};

export const ALL_TIMEFRAMES: readonly Timeframe[] = [
  { key: "15m", label: "15m", interval: "15m" },
  { key: "30m", label: "30m", interval: "30m" },
  { key: "1h", label: "1h", interval: "1h" },
  { key: "4h", label: "4h", interval: "4h" },
  { key: "6h", label: "6h", interval: "6h" },
  { key: "12h", label: "12h", interval: "12h" },
  { key: "1d", label: "1D", interval: "1d" },
  { key: "3d", label: "3D", interval: "3d" },
  { key: "1w", label: "1W", interval: "1w" },
  { key: "2w", label: "2W", interval: "2w" },
  { key: "1M", label: "1M", interval: "1M" }
] as const;

export const ALL_MA_PERIODS = [14, 20, 50, 100, 200] as const;

export const DEFAULT_SELECTED_PERIODS: readonly number[] = [20, 50, 200] as const;
export const DEFAULT_SELECTED_TIMEFRAMES: readonly string[] = ["1h", "4h", "1d", "3d", "1w"] as const;

export function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

export function fmtNum(n: number, decimals = 2): string {
  if (!Number.isFinite(n)) return "—";
  return n.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals
  });
}

export function fmtPct(n: number, decimals = 2): string {
  if (!Number.isFinite(n)) return "—";
  const sign = n > 0 ? "+" : "";
  return `${sign}${n.toFixed(decimals)}%`;
}

export function nowLabel(): string {
  return new Date().toLocaleString();
}

export function statusToBadge(status: string): string {
  if (status.includes("Confirmed break")) return "CONFIRMED";
  if (status.includes("Just broke")) return "PENDING";
  if (status.includes("Retesting")) return "RETEST";
  if (status.includes("Testing")) return "TEST";
  if (status.includes("Above")) return "ABOVE";
  if (status.includes("Below")) return "BELOW";
  return "—";
}

function smaSeries(values: number[], period: number): number[] {
  const out = Array<number>(values.length).fill(Number.NaN);
  if (period <= 0) return out;
  let sum = 0;

  for (let i = 0; i < values.length; i++) {
    sum += values[i];
    if (i >= period) sum -= values[i - period];
    if (i >= period - 1) out[i] = sum / period;
  }
  return out;
}

function emaSeries(values: number[], period: number): number[] {
  const out = Array<number>(values.length).fill(Number.NaN);
  if (period <= 0) return out;
  if (values.length < period) return out;

  const alpha = 2 / (period + 1);

  // Seed with SMA at first valid index
  let seed = 0;
  for (let i = 0; i < period; i++) seed += values[i];
  let prevEma = seed / period;

  const firstIdx = period - 1;
  out[firstIdx] = prevEma;

  for (let i = firstIdx + 1; i < values.length; i++) {
    const ema = alpha * values[i] + (1 - alpha) * prevEma;
    out[i] = ema;
    prevEma = ema;
  }

  return out;
}

function maSeries(values: number[], period: number, maType: MaType): number[] {
  return maType === "EMA" ? emaSeries(values, period) : smaSeries(values, period);
}

export function calcCellState(args: {
  currentPrice: number;
  candles: Kline[];
  period: number;
  testingThresholdPct: number;
  maType: MaType;
}): CellPayload {
  const { currentPrice, candles, period, testingThresholdPct, maType } = args;

  const idxCurrent = candles.length - 1;
  const idxLastClosed = candles.length - 2;
  const idxPrevClosed = candles.length - 3;

  if (idxPrevClosed < 0) {
    return {
      direction: "above",
      status: "Insufficient data",
      statusKey: "insufficient",
      ma: Number.NaN,
      distancePct: Number.NaN
    };
  }

  const closes = candles.map((c) => c.close);
  const series = maSeries(closes, period, maType);

  const maCurrent = series[idxCurrent];
  const maLastClosed = series[idxLastClosed];
  const maPrevClosed = series[idxPrevClosed];

  const lastClosed = candles[idxLastClosed];
  const prevClosed = candles[idxPrevClosed];
  const current = candles[idxCurrent];

  const distancePct = ((currentPrice - maCurrent) / maCurrent) * 100;
  const isAboveNow = currentPrice >= maCurrent;

  const lastClosedAbove = lastClosed.close >= maLastClosed;
  const prevClosedAbove = prevClosed.close >= maPrevClosed;

  const lastClosedTouched = lastClosed.low <= maLastClosed && lastClosed.high >= maLastClosed;
  const currentTouched = current.low <= maCurrent && current.high >= maCurrent;

  const absDist = Math.abs(distancePct);

  if (prevClosedAbove !== lastClosedAbove) {
    return {
      direction: lastClosedAbove ? "above" : "below",
      status: "Confirmed break (closed candle)",
      statusKey: "confirmed-break",
      ma: maCurrent,
      distancePct
    };
  }

  if (lastClosedAbove !== isAboveNow) {
    return {
      direction: isAboveNow ? "above" : "below",
      status: "Just broke MA (pending close)",
      statusKey: "just-broke",
      ma: maCurrent,
      distancePct
    };
  }

  if (absDist <= testingThresholdPct || currentTouched) {
    return {
      direction: isAboveNow ? "above" : "below",
      status: "Testing MA",
      statusKey: "testing",
      ma: maCurrent,
      distancePct
    };
  }

  if (lastClosedTouched) {
    return {
      direction: isAboveNow ? "above" : "below",
      status: "Retesting MA (last candle interaction)",
      statusKey: "retesting",
      ma: maCurrent,
      distancePct
    };
  }

  return {
    direction: isAboveNow ? "above" : "below",
    status: isAboveNow ? "Above MA (trend supportive)" : "Below MA (trend suppressive)",
    statusKey: isAboveNow ? "above" : "below",
    ma: maCurrent,
    distancePct
  };
}
