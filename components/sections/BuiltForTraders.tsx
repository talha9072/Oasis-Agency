import React from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { MotionReveal } from "../ui/MotionReveal";
import { Badge } from "../ui/Badge";
import { Check, Sparkles, TrendingUp } from "lucide-react";

function FeatureCard({
  kicker,
  title,
  desc,
  icon
}: {
  kicker: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs text-fg/70">{kicker}</div>
          <div className="mt-2 text-lg font-semibold text-fg/90">{title}</div>
          <p className="mt-2 text-sm text-muted leading-relaxed">{desc}</p>
        </div>
        <div className="h-10 w-10 rounded-xl bg-white/5 border border-soft grid place-items-center">{icon}</div>
      </div>

      <div className="mt-5 rounded-xl border border-soft bg-black/25 p-4">
        <div className="flex items-center justify-between text-xs text-fg/70">
          <span>Included</span>
          <Badge className="px-2 py-0.5">Live</Badge>
        </div>
        <div className="mt-3 space-y-2">
          {["Clear rules", "Repeatable process", "Confidence checkpoints"].map((t) => (
            <div key={t} className="flex items-center gap-2 text-xs text-fg/80">
              <Check className="h-4 w-4 text-fg/55" />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function BuiltForTraders() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          title="Built for Traders Who Want an Edge"
          subtitle="Every feature exists to reduce mistakes and improve consistency."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <MotionReveal>
            <FeatureCard
              kicker="Actionable edge"
              title="Daily trading set-ups"
              desc="Clear execution frameworks, not random calls."
              icon={<TrendingUp className="h-5 w-5 text-fg/80" />}
            />
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <FeatureCard
              kicker="Auto-trade utility"
              title="Copy trading"
              desc="Automatically follow top trades with controlled risk."
              icon={<Sparkles className="h-5 w-5 text-fg/80" />}
            />
          </MotionReveal>

          <MotionReveal delay={0.16}>
            <FeatureCard
              kicker="Extra benefits"
              title="Club rewards"
              desc="Whitelist access + perks for active members."
              icon={<Check className="h-5 w-5 text-fg/80" />}
            />
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}
