import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { Chip } from "../ui/Chip";
import { MotionReveal } from "../ui/MotionReveal";
import { MockPanel } from "../MockPanel";

export function WhyDifferent() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <MotionReveal>
          <img
            src="/Ti-matrix.png"
            alt="Trend Intelligence Matrix"
            className="w-full h-auto"
            draggable={false}
          />
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="max-w-xl md:pl-6">
              <Badge className="mb-4">Trend Intelligence Matrix</Badge>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Multi-timeframe MA structure, trend health and momentum — mapped into one powerful crypto trading matrix.
              </h3>
              <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
                Get real-time notifications when trends are gained, lost, or broken.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="/get-started" className="btn-cta-outline w-full sm:w-auto text-center">
                  Get Started
                </a>

                <a href="/subscribe" className="btn-cta-outline w-full sm:w-auto text-center">
                  Subscribe
                </a>
              </div>

            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}
