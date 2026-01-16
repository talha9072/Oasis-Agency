import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { MotionReveal } from "../ui/MotionReveal";
import { MockPanel } from "../MockPanel";

export function HowToJoin() {
  return (
    <section id="how" className="py-16">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <MotionReveal>
            <div className="max-w-xl">
              <Badge className="mb-4">Price Discovery Intelligence</Badge>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Trade the breakout before the breakout.</h3>
              <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
                Our AI Price Discovery Engine scans the entire crypto market in real-time to identify coins approaching All-Time Highs with strong trend structure and moving average support — and alerts you before the crowd arrives.
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

          <MotionReveal delay={0.08}>
            <MockPanel
              title="Wallet verifies access"
              subtitle="Connect wallet → verify → unlock sections"
              className="min-h-[320px]"
            />
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}
