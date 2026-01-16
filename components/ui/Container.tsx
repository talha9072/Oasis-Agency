import type { PropsWithChildren } from "react";
import { cn } from "../../lib/utils";

type ContainerProps = PropsWithChildren<{ className?: string }>;

export function Container({ className, children }: ContainerProps) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5", className)}>{children}</div>;
}
