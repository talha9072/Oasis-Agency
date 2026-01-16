import { cn } from "../../lib/utils";
import { Badge } from "./Badge";

type SectionHeaderProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeader({ kicker, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {kicker ? <Badge className="mb-4">{kicker}</Badge> : null}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">{subtitle}</p> : null}
    </div>
  );
}
