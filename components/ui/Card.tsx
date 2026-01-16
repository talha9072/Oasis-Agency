import type { PropsWithChildren } from "react";
import { cn } from "../../lib/utils";

type CardProps = PropsWithChildren<{ className?: string }>;

export function Card({ className, children }: CardProps) {
  return <div className={cn("glass glow-border rounded-2xl", className)}>{children}</div>;
}
