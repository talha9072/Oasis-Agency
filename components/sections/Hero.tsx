import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { AvatarRow } from "../AvatarRow";
import { MotionReveal } from "../ui/MotionReveal";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-20 sm:pt-24 pb-16">
      <Container>
        <div className="subtle-grid rounded-3xl border border-soft bg-black/20 p-6 sm:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <MotionReveal>
              <div className="flex justify-center">
                <Badge className="px-3">
                  <span className="h-2 w-2 rounded-full bg-white/60" />
                  <span className="text-fg/80">Coming soon</span>
                  <span className="text-fg/55">•</span>
                  <span className="text-fg/80">19 Jan</span>
                </Badge>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.05}>
              <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight">
                Not your average<br /> trading club.
              </h1>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <p className="mt-5 text-sm sm:text-base text-muted leading-relaxed">
                Gold trading, algorithms and crypto set-ups. This is how smart money trades.
              </p>
            </MotionReveal>

            <MotionReveal delay={0.15}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => document.getElementById("how")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Buy the club pass <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
                >
                  More info
                </Button>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <AvatarRow className="mt-10" />
            </MotionReveal>

            <MotionReveal delay={0.25}>
              <div className="mt-8 text-xs text-fg/55">
                Club members • Market structure • Execution • Risk control
              </div>
            </MotionReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
