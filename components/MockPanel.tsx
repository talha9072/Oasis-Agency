import { Card } from "./ui/Card";
import { cn } from "../lib/utils";
import { Check, ChevronRight, CircleDot } from "lucide-react";

type MockPanelProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function MockPanel({ title, subtitle, className }: MockPanelProps) {
  return (
    <Card className={cn("p-5", className)}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs text-fg/70">Market insights</div>
          <div className="mt-1 text-sm font-semibold text-fg/90">{title}</div>
          {subtitle ? <div className="mt-1 text-xs text-muted">{subtitle}</div> : null}
        </div>
        <div className="h-9 w-9 rounded-xl bg-white/5 border border-soft grid place-items-center">
          <CircleDot className="h-4 w-4 text-fg/80" />
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-soft bg-black/30 overflow-hidden">
        <div className="px-3 py-2 text-[11px] text-fg/70 border-b border-soft flex items-center justify-between">
          <span>Club feed</span>
          <span className="text-fg/55">Live</span>
        </div>
        <div className="p-3 space-y-2">
          {["Daily setups", "Risk framework", "Copy trading", "Crypto outlook"].map((t, i) => (
            <div
              key={t}
              className="flex items-center justify-between rounded-lg border border-white/5 bg-white/3 px-3 py-2"
            >
              <div className="flex items-center gap-2 text-xs text-fg/80">
                <Check className="h-3.5 w-3.5 text-fg/60" />
                <span>{t}</span>
              </div>
              <ChevronRight className={cn("h-4 w-4 text-fg/40", i === 0 && "text-fg/60")} />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
