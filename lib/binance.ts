
// FILE: src/lib/binance.ts
export type Kline = {
  openTime: number;
  open: number;
  high: number;
  low: number;
  close: number;
  closeTime: number;
};

const API_BASES = [
  "https://api.binance.com",
  "https://data-api.binance.vision" // fallback that often behaves better for CORS
] as const;

async function fetchWithFallback(pathnameAndQuery: string): Promise<any> {
  let lastErr: unknown = null;

  for (const base of API_BASES) {
    try {
      const res = await fetch(base + pathnameAndQuery, { method: "GET" });
      if (!res.ok) throw new Error(`HTTP ${res.status} from ${base}`);
      return await res.json();
    } catch (err) {
      lastErr = err;
    }
  }

  throw (lastErr instanceof Error ? lastErr : new Error("Failed to fetch from all endpoints"));
}

export async function fetchKlines(symbol: string, interval: string, limit: number): Promise<Kline[]> {
  const q = new URLSearchParams({ symbol, interval, limit: String(limit) });
  const data = await fetchWithFallback(`/api/v3/klines?${q.toString()}`);

  return (data as any[]).map((k) => ({
    openTime: Number(k[0]),
    open: Number(k[1]),
    high: Number(k[2]),
    low: Number(k[3]),
    close: Number(k[4]),
    closeTime: Number(k[6])
  })) satisfies Kline[];
}

export async function fetchSpotPrice(symbol: string): Promise<number> {
  const q = new URLSearchParams({ symbol });
  const data = await fetchWithFallback(`/api/v3/ticker/price?${q.toString()}`);
  return Number((data as { price: string }).price);
}
