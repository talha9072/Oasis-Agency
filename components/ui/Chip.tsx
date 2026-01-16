import type { PropsWithChildren } from "react";
import { cn } from "../../lib/utils";

type ChipProps = PropsWithChildren<{ className?: string }>;

export function Chip({ className, children }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-fg/85 border border-soft",
        className
      )}
    >
      {children}
    </span>
  );
}
