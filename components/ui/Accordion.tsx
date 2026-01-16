import { useId, useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import { ChevronDown } from "lucide-react";

export type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  const baseId = useId();
  const ids = useMemo(() => items.map((_, i) => `${baseId}-${i}`), [baseId, items]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((it, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `${ids[idx]}-panel`;
        const buttonId = `${ids[idx]}-button`;

        return (
          <div key={ids[idx]} className="glass glow-border rounded-2xl overflow-hidden">
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex((cur) => (cur === idx ? null : idx))}
              className="w-full px-5 py-4 flex items-center justify-between text-left"
            >
              <span className="text-sm sm:text-base text-fg/90">{it.question}</span>
              <ChevronDown className={cn("h-4 w-4 text-fg/70 transition", isOpen && "rotate-180")} />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-4 text-sm text-muted leading-relaxed">{it.answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
