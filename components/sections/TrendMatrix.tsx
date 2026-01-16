// FILE: src/sections/TrendMatrix.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { Settings, X, Plus } from "lucide-react";

import { Container } from "../ui/Container";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { MotionReveal } from "../ui/MotionReveal";
import { cn } from "../../lib/utils";

import { fetchKlines, fetchSpotPrice, type Kline } from "../../lib/binance";
import {
  ALL_MA_PERIODS,
  ALL_TIMEFRAMES,
  DEFAULT_SELECTED_PERIODS,
  DEFAULT_SELECTED_TIMEFRAMES,
  calcCellState,
  clamp,
  fmtNum,
  fmtPct,
  nowLabel,
  statusToBadge,
  type CellPayload,
  type MaType,
  type Timeframe
} from "../../lib/maMatrix";

type SymbolOption = { value: string; label: string; icon: string };
type TickerHash = "btc" | "eth" | "sol";

const SYMBOLS: readonly SymbolOption[] = [
  { value: "BTCUSDT", label: "BTC/USDT", icon: "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" },
  // IMPORTANT: Vite public assets must be referenced from root, not "public/..."
  { value: "ETHUSDT", label: "ETH/USDT", icon: "/tickers/ethereum-eth.svg" },
  {
    value: "SOLUSDT",
    label: "SOL/USDT",
    icon: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Solana_logo.png/316px-Solana_logo.png"
  }
] as const;

const HASH_TO_SYMBOL: Record<TickerHash, SymbolOption["value"]> = {
  btc: "BTCUSDT",
  eth: "ETHUSDT",
  sol: "SOLUSDT"
};

const SYMBOL_TO_HASH: Record<SymbolOption["value"], TickerHash> = {
  BTCUSDT: "btc",
  ETHUSDT: "eth",
  SOLUSDT: "sol"
};

const THRESHOLDS = [
  { value: 0.1, label: "0.10%" },
  { value: 0.2, label: "0.20%" },
  { value: 0.35, label: "0.35%" },
  { value: 0.5, label: "0.50%" }
] as const;

type TooltipState =
  | { open: false }
  | { open: true; x: number; y: number; period: number; tfKey: string; payload: CellPayload };

type Matrix = Record<string, Record<number, CellPayload>>;

function meterWidth(distancePct: number): { widthPct: number; side: "left" | "right" } {
  const cap = 5;
  const mag = clamp(Math.abs(distancePct), 0, cap);
  return { widthPct: (mag / cap) * 50, side: distancePct >= 0 ? "right" : "left" };
}

function byNumericAsc(a: number, b: number): number {
  return a - b;
}

function tfByAllOrder(a: string, b: string): number {
  const ia = ALL_TIMEFRAMES.findIndex((x) => x.key === a);
  const ib = ALL_TIMEFRAMES.findIndex((x) => x.key === b);
  return ia - ib;
}

function resolveTimeframes(keys: readonly string[]): Timeframe[] {
  const map = new Map(ALL_TIMEFRAMES.map((t) => [t.key, t] as const));
  return keys.map((k) => map.get(k)).filter(Boolean) as Timeframe[];
}

function parseHashTicker(): TickerHash | null {
  const raw = window.location.hash.replace("#", "").toLowerCase();
  if (raw === "btc" || raw === "eth" || raw === "sol") return raw;
  return null;
}

export function TrendMatrix() {
  const [symbol, setSymbol] = useState<SymbolOption["value"]>("BTCUSDT");
  const [maType, setMaType] = useState<MaType>("SMA");
  const [threshold, setThreshold] = useState<number>(0.2);

  const [selectedPeriods, setSelectedPeriods] = useState<number[]>(
    [...DEFAULT_SELECTED_PERIODS].sort(byNumericAsc)
  );
  const [selectedTimeframeKeys, setSelectedTimeframeKeys] = useState<string[]>(
    [...DEFAULT_SELECTED_TIMEFRAMES].sort(tfByAllOrder)
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [spotPrice, setSpotPrice] = useState<number>(Number.NaN);
  const [updatedAt, setUpdatedAt] = useState("—");
  const [matrix, setMatrix] = useState<Matrix>({});
  const [tooltip, setTooltip] = useState<TooltipState>({ open: false });

  const [settingsOpen, setSettingsOpen] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const selectedTimeframes = useMemo(() => resolveTimeframes(selectedTimeframeKeys), [selectedTimeframeKeys]);
  const currentSymbol = useMemo(() => SYMBOLS.find((s) => s.value === symbol) ?? SYMBOLS[0], [symbol]);

  const maxTimeframes = 8;
  const minKlines = 320;

  useEffect(() => {
    const h = parseHashTicker();
    if (h) setSymbol(HASH_TO_SYMBOL[h]);

    const onHashChange = () => {
      const next = parseHashTicker();
      if (next) setSymbol(HASH_TO_SYMBOL[next]);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setTooltip({ open: false });
        setSettingsOpen(false);
      }
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  useEffect(() => {
    const close = () => setTooltip({ open: false });
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
    };
  }, []);

  function togglePeriod(period: number): void {
    setSelectedPeriods((cur) => {
      const next = cur.includes(period) ? cur.filter((p) => p !== period) : [...cur, period];
      next.sort(byNumericAsc);
      return next.length ? next : cur;
    });
  }

  function toggleTimeframe(key: string): void {
    setSelectedTimeframeKeys((cur) => {
      const isOn = cur.includes(key);
      if (isOn) {
        const next = cur.filter((k) => k !== key).sort(tfByAllOrder);
        return next.length ? next : cur;
      }
      if (cur.length >= maxTimeframes) return cur;
      return [...cur, key].sort(tfByAllOrder);
    });
  }

  function openTooltip(
    e: { clientX: number; clientY: number },
    period: number,
    tfKey: string,
    payload: CellPayload
  ) {
    const pad = 14;
    const w = 320;
    const h = 190;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let x = e.clientX + 14;
    let y = e.clientY + 14;

    if (x + w + pad > vw) x = vw - w - pad;
    if (y + h + pad > vh) y = vh - h - pad;

    setTooltip({ open: true, x, y, period, tfKey, payload });
  }

  async function refresh(): Promise<void> {
    setLoading(true);
    setError("");
    setTooltip({ open: false });

    try {
      const tfs = resolveTimeframes(selectedTimeframeKeys);
      const [price, tfCandles] = await Promise.all([
        fetchSpotPrice(symbol),
        Promise.all(
          tfs.map(async (tf) => {
            const candles = await fetchKlines(symbol, tf.interval, minKlines);
            return [tf.key, candles] as const;
          })
        )
      ]);

      setSpotPrice(price);

      const map = new Map<string, Kline[]>(tfCandles);
      const next: Matrix = {};

      for (const tfKey of selectedTimeframeKeys) {
        const candles = map.get(tfKey) ?? [];
        next[tfKey] = {};

        for (const period of selectedPeriods) {
          if (candles.length < period + 3) {
            next[tfKey][period] = {
              direction: "above",
              status: "Insufficient data",
              statusKey: "insufficient",
              ma: Number.NaN,
              distancePct: Number.NaN
            };
            continue;
          }

          next[tfKey][period] = calcCellState({
            currentPrice: price,
            candles,
            period,
            testingThresholdPct: threshold,
            maType
          });
        }
      }

      setMatrix(next);
      setUpdatedAt(nowLabel());
    } catch {
      setError("Failed to load market data (CORS / network / Binance blocked).");
      setUpdatedAt("error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void refresh();

    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      if (!loading) void refresh();
    }, 60_000);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbol, threshold, maType, selectedPeriods, selectedTimeframeKeys]);

  const tableMinWidth = useMemo(() => {
    const cols = Math.max(1, selectedTimeframeKeys.length);
    return 220 + cols * 260;
  }, [selectedTimeframeKeys.length]);

  return (
    <section className="py-0 min-h-[calc(100dvh-4rem)]">
      <Container className="h-full max-w-none px-0">
        <MotionReveal className="h-full">
          <Card className="h-full rounded-none sm:rounded-2xl overflow-hidden">
            <div className="h-full flex flex-col">
              {/* Top toolbar (matches screenshot) */}
              <div className="border-b border-soft bg-black/40 backdrop-blur">
                <div className="px-4 sm:px-6 py-4 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="h-12 w-12 rounded-2xl border border-soft bg-white/5 grid place-items-center overflow-hidden">
                      <img
                        src={currentSymbol.icon}
                        alt={currentSymbol.label}
                        className="h-9 w-9 object-contain"
                        draggable={false}
                      />
                    </div>

                    <div className="flex flex-col gap-1">

                      <div className="flex items-center gap-2">
                        <select
                          className="h-10 rounded-2xl border border-white/10 bg-black/35 px-4 text-sm text-fg/90 outline-none focus:ring-2 focus:ring-white/10"
                          value={symbol}
                          onChange={(e) => {
                            const next = e.target.value as SymbolOption["value"];
                            setSymbol(next);
                            const h = SYMBOL_TO_HASH[next];
                            if (h) window.location.hash = h;
                          }}
                        >
                          {SYMBOLS.map((s) => (
                            <option key={s.value} value={s.value}>
                              {s.label}
                            </option>
                          ))}
                        </select>

                        <div className="h-10 inline-flex items-center rounded-2xl border border-white/10 bg-black/35 px-4 text-sm text-fg/90">
                          {Number.isFinite(spotPrice) ? fmtNum(spotPrice, 2) : "…"}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="secondary"
                      className="h-10 w-12 px-0 rounded-2xl"
                      onClick={() => setSettingsOpen(true)}
                      aria-label="Open settings"
                      title="Settings"
                    >
                      <Settings className="h-4 w-4" />
                    </Button>

                    <Button variant="secondary" className="h-10 rounded-2xl" disabled={loading} onClick={() => void refresh()}>
                      Refresh
                    </Button>
                  </div>
                </div>

                {/* Row above matrix (logo + meta) */}
                <div className="px-4 sm:px-6 pb-4">
                  <div className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur px-4 py-3 flex items-center justify-between gap-4">
                    <div className="text-xs text-fg/60">
                      cyrptools.com <span className="mx-2 text-fg/35">•</span> Trend Intelligence Matrix{" "}
                      <span className="mx-2 text-fg/35">•</span> MA: {maType}{" "}
                      <span className="mx-2 text-fg/35">•</span> Updated: {updatedAt}
                    </div>
                  </div>
                </div>
              </div>

              {/* Matrix table (card grid style) */}
              <div className="flex-1 min-h-0">
                <div className="h-full overflow-auto bg-black/10 px-2 sm:px-4 pb-6">
                  <table
                    className="w-full border-separate"
                    style={{ borderSpacing: "16px 14px", minWidth: tableMinWidth }}
                    aria-label="Trend Intelligence Matrix"
                  >
                    <thead>
                      <tr>
                        <th className="sticky left-0 top-0 z-30 bg-black/60 backdrop-blur rounded-2xl border border-white/10 px-4 py-3 text-left text-xs text-fg/70">
                          <div className="flex items-center gap-3">
                            <img src="/cryptoolslogo.svg" alt="cyrptools.com" className="h-6 w-auto" draggable={false} />
                          </div>
                        </th>

                        {selectedTimeframes.map((tf) => (
                          <th
                            key={tf.key}
                            className="sticky top-0 z-20 bg-black/60 backdrop-blur rounded-2xl border border-white/10 px-4 py-3 text-center text-xs text-fg/70"
                          >
                            {tf.label}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {selectedPeriods.map((period) => (
                        <tr key={period}>
                          <th className="sticky left-0 z-20 bg-black/55 backdrop-blur rounded-2xl border border-white/10 px-4 py-3 text-left text-xs font-semibold text-fg/80 whitespace-nowrap">
                            {maType} {period}
                          </th>

                          {selectedTimeframes.map((tf) => {
                            const payload = matrix?.[tf.key]?.[period];
                            const direction = payload?.direction ?? "above";
                            const statusKey = payload?.statusKey ?? "testing";
                            const distancePct = payload?.distancePct ?? Number.NaN;
                            const ma = payload?.ma ?? Number.NaN;

                            const outline =
                              statusKey === "testing"
                                ? "ring-1 ring-white/10"
                                : statusKey === "retesting"
                                  ? "ring-1 ring-white/15"
                                  : statusKey === "just-broke"
                                    ? "outline outline-2 outline-dashed outline-white/15 -outline-offset-4"
                                    : statusKey === "confirmed-break"
                                      ? "outline outline-2 outline-white/10 -outline-offset-4"
                                      : "";

                            const pctText = payload ? fmtPct(distancePct, 2) : "…";
                            const maText = payload ? `MA ${fmtNum(ma, 2)}` : "loading";
                            const badge = payload ? statusToBadge(payload.status) : "—";

                            const meter = meterWidth(distancePct);

                            const cardTint =
                              direction === "above"
                                ? "!bg-emerald-500/10 hover:!bg-emerald-500/12"
                                : "!bg-rose-500/10 hover:!bg-rose-500/12";

                            return (
                              <td key={`${tf.key}-${period}`} className="align-middle">
                                <button
                                  type="button"
                                  className={cn(
                                    "w-full rounded-2xl border border-white/10 bg-black/35 backdrop-blur p-5 transition",
                                    "shadow-[0_10px_30px_rgba(0,0,0,0.45)]",
                                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10",
                                    cardTint,
                                    outline
                                  )}
                                  onMouseEnter={(e) => payload && openTooltip(e, period, tf.key, payload)}
                                  onMouseMove={(e) => {
                                    if (!payload) return;
                                    if (tooltip.open) openTooltip(e, period, tf.key, payload);
                                  }}
                                  onMouseLeave={() => setTooltip({ open: false })}
                                  onClick={(e) => {
                                    if (!payload) return;
                                    if (tooltip.open) setTooltip({ open: false });
                                    else openTooltip(e, period, tf.key, payload);
                                  }}
                                  aria-label={`${maType} ${period} on ${tf.label}`}
                                >
                                  <div className="flex items-center justify-center gap-3 text-sm">
                                    <span className="font-semibold text-fg/95">{pctText}</span>
                                    <span className="text-xs text-fg/60">{maText}</span>
                                  </div>

                                  <div className="mt-3 relative h-2 w-full rounded-full border border-white/10 bg-black/35 overflow-hidden">
                                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/15" />
                                    {Number.isFinite(distancePct) ? (
                                      <div
                                        className={cn(
                                          "absolute top-0 bottom-0 rounded-full opacity-90",
                                          direction === "above" ? "bg-emerald-400/70" : "bg-rose-400/60"
                                        )}
                                        style={
                                          meter.side === "right"
                                            ? { left: "50%", width: `${meter.widthPct}%` }
                                            : { right: "50%", width: `${meter.widthPct}%` }
                                        }
                                      />
                                    ) : null}
                                  </div>

                                  <div className="mt-4 flex justify-center">
                                    <span className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-4 py-1 text-[11px] font-semibold text-fg/85">
                                      {badge}
                                    </span>
                                  </div>
                                </button>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {error ? (
                    <div className="px-2 sm:px-4">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-fg/80">
                        <div className="font-semibold text-fg/90">Error</div>
                        <div className="mt-1 text-fg/70">{error}</div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </Card>
        </MotionReveal>
      </Container>

      {/* Settings modal (darker overlay) */}
      {settingsOpen ? (
        <div className="fixed inset-0 z-[9998]">
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            onClick={() => setSettingsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-0 grid place-items-center p-4">
            <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-black/90 p-4 sm:p-5 shadow-[0_30px_80px_rgba(0,0,0,0.75)]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-fg/90">Matrix settings</div>
                  <div className="text-xs text-fg/55 mt-1">Choose MA type, MAs, and timeframes (max 8).</div>
                </div>
                <Button variant="secondary" className="h-10 w-10 px-0 rounded-2xl" onClick={() => setSettingsOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs font-semibold text-fg/80">Moving averages</div>
                    <Badge className="px-2 py-1">Active: {selectedPeriods.length}</Badge>
                  </div>

                  <div className="mt-3">
                    <label className="text-xs text-fg/60" htmlFor="maTypeModal">
                      MA type
                    </label>
                    <select
                      id="maTypeModal"
                      className="mt-1 h-10 w-full rounded-2xl border border-white/10 bg-black/40 px-3 text-sm text-fg/90 outline-none focus:ring-2 focus:ring-white/10"
                      value={maType}
                      onChange={(e) => setMaType(e.target.value as MaType)}
                    >
                      <option value="SMA">SMA</option>
                      <option value="EMA">EMA</option>
                    </select>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {ALL_MA_PERIODS.map((p) => {
                      const active = selectedPeriods.includes(p);
                      return (
                        <button
                          key={p}
                          type="button"
                          onClick={() => togglePeriod(p)}
                          className={cn(
                            "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border transition",
                            active
                              ? "border-white/15 bg-white/10 text-fg/90"
                              : "border-white/10 bg-black/40 text-fg/65 hover:bg-white/6"
                          )}
                        >
                          {active ? <X className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                          MA{p}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs font-semibold text-fg/80">Timeframes</div>
                    <Badge className="px-2 py-1">
                      Active: {selectedTimeframeKeys.length}/{maxTimeframes}
                    </Badge>
                  </div>

                  <div className="mt-3">
                    <label className="text-xs text-fg/60" htmlFor="thresholdModal">
                      Testing threshold
                    </label>
                    <select
                      id="thresholdModal"
                      className="mt-1 h-10 w-full rounded-2xl border border-white/10 bg-black/40 px-3 text-sm text-fg/90 outline-none focus:ring-2 focus:ring-white/10"
                      value={String(threshold)}
                      onChange={(e) => setThreshold(Number(e.target.value))}
                    >
                      {THRESHOLDS.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {ALL_TIMEFRAMES.map((tf) => {
                      const active = selectedTimeframeKeys.includes(tf.key);
                      const atMax = selectedTimeframeKeys.length >= maxTimeframes;
                      const disabled = !active && atMax;

                      return (
                        <button
                          key={tf.key}
                          type="button"
                          disabled={disabled}
                          onClick={() => toggleTimeframe(tf.key)}
                          className={cn(
                            "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border transition",
                            disabled && "opacity-45 cursor-not-allowed",
                            active
                              ? "border-white/15 bg-white/10 text-fg/90"
                              : "border-white/10 bg-black/40 text-fg/65 hover:bg-white/6"
                          )}
                          title={disabled ? "Max timeframes reached" : undefined}
                        >
                          {active ? <X className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                          {tf.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-end gap-2">
                <Button variant="secondary" onClick={() => setSettingsOpen(false)}>
                  Close
                </Button>
                <Button variant="primary" disabled={loading} onClick={() => void refresh()}>
                  {loading ? "Refreshing…" : "Apply + Refresh"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Tooltip */}
      {tooltip.open ? (
        <div
          className="fixed z-[9999] w-[320px] rounded-2xl border border-white/10 bg-black/90 backdrop-blur p-4 shadow-[0_18px_45px_rgba(0,0,0,0.65)]"
          style={{ left: tooltip.x, top: tooltip.y }}
          role="dialog"
          aria-hidden="false"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="text-xs font-semibold text-fg/90">
              {maType} {tooltip.period} • {tooltip.tfKey.toUpperCase()}
            </div>
            <Badge className="px-2 py-1">
              {tooltip.payload.direction === "above" ? "Bullish" : "Bearish"}
            </Badge>
          </div>

          <div className="mt-3 grid gap-2 text-xs">
            <div className="flex justify-between gap-6">
              <span className="text-fg/55">Status</span>
              <span className="text-fg/90 font-semibold">{tooltip.payload.status}</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-fg/55">MA Value</span>
              <span className="text-fg/90 font-semibold">{fmtNum(tooltip.payload.ma, 2)}</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-fg/55">% Away</span>
              <span className="text-fg/90 font-semibold">{fmtPct(tooltip.payload.distancePct, 2)}</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-fg/55">Direction</span>
              <span className="text-fg/90 font-semibold">
                {tooltip.payload.direction === "above" ? "Price ≥ MA" : "Price < MA"}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
