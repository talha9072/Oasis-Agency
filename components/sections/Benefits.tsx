import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { MotionReveal } from "../ui/MotionReveal";
import { BarChart3, Binary, Copy, Radio } from "lucide-react";

const items = [
  {
    icon: <Binary className="h-5 w-5" />,
    title: "Algorithms",
    desc: "Battle-tested algorithms to trade Gold, Silver and Crypto pairs."
  },
  {
    icon: <Copy className="h-5 w-5" />,
    title: "Copy trading",
    desc: "Automatically follow my trades with minimal effort."
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Quarterly crypto outlooks",
    desc: "High-level market direction and key levels to watch."
  },
  {
    icon: <Radio className="h-5 w-5" />,
    title: "Live trading sessions",
    desc: "Trading sessions breaking down trades in real time."
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20">
      <Container>
        <SectionHeader
          kicker="Benefits"
          title="The Key Benefits of this Trading Club"
          subtitle="By focusing on execution, risk control and understanding how liquidity really moves."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {items.map((it, i) => (
            <MotionReveal key={it.title} delay={i * 0.05}>
              <Card className="p-6 h-full">
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-soft grid place-items-center text-fg/80">
                  {it.icon}
                </div>
                <div className="mt-4 text-sm font-semibold text-fg/90">{it.title}</div>
                <p className="mt-2 text-sm text-muted leading-relaxed">{it.desc}</p>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
