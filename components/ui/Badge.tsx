import type { PropsWithChildren } from "react";
import { cn } from "../../lib/utils";

type BadgeProps = PropsWithChildren<{ className?: string }>;

export function Badge({ className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-soft bg-white/5 px-3 py-1 text-xs text-fg/90",
        className
      )}
    >
      {children}
    </span>
  );
}
