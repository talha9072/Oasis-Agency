// FILE: components/sections/Navbar.tsx
import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronDown } from "lucide-react";

import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

type TickerKey = "btc" | "eth" | "sol";

const TICKERS: { key: TickerKey; label: string }[] = [
  { key: "btc", label: "BTC" },
  { key: "eth", label: "ETH" },
  { key: "sol", label: "SOL" }
];

function MatrixMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const activeTicker = useMemo<TickerKey>(() => {
    if (!router.asPath.includes("#")) return "btc";
    const h = router.asPath.split("#")[1]?.toLowerCase();
    if (h === "eth" || h === "sol" || h === "btc") return h;
    return "btc";
  }, [router.asPath]);

  const go = (ticker: TickerKey) => {
    router.push(`/matrix#${ticker}`);
    setOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="inline-flex items-center gap-2 text-sm text-fg/75 hover:text-fg/95 transition"
        onClick={() => go("btc")}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        TI Matrix
        <span className="text-fg/45">•</span>
        <span className="text-fg/90 font-semibold">{activeTicker.toUpperCase()}</span>
        <ChevronDown className="h-4 w-4 text-fg/60" />
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute left-0 mt-2 w-48 rounded-2xl border border-soft bg-black/80 backdrop-blur p-2 shadow-soft"
        >
          {TICKERS.map((it) => (
            <button
              key={it.key}
              role="menuitem"
              type="button"
              onClick={() => go(it.key)}
              className="w-full text-left rounded-xl px-3 py-2 text-sm text-fg/80 hover:bg-white/5 transition"
            >
              {it.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/25 border-b border-soft">
      <Container className="h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/trndtoolslogo.svg"
            alt="trndtools.com"
            className="w-24 h-24 object-contain"
            draggable={false}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <MatrixMenu />
          <a className="text-sm text-fg/75 hover:text-fg/95 transition" href="/#benefits">
            Benefits
          </a>
          <a className="text-sm text-fg/75 hover:text-fg/95 transition" href="/#how">
            How to join
          </a>
          <a className="text-sm text-fg/75 hover:text-fg/95 transition" href="/#faq">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/matrix#btc">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Open matrix
            </Button>
          </Link>
          <Button
            variant="primary"
            onClick={() =>
              document.getElementById("how")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Lifetime Membership
          </Button>
        </div>
      </Container>
    </header>
  );
}