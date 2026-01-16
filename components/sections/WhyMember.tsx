import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { Chip } from "../ui/Chip";
import { MotionReveal } from "../ui/MotionReveal";
import { MockPanel } from "../MockPanel";

export function WhyMember() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <MotionReveal>
            <MockPanel title="Club benefits" subtitle="Setups • Risk • Copy trades • Rewards" className="min-h-[320px]" />
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="max-w-xl md:pl-6">
              <Badge className="mb-4">Limited access</Badge>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why become a member?</h3>
              <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
                Built for traders who want structure instead of noise. Improve decision-making, execution discipline,
                and consistency.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Chip>Risk & strategy</Chip>
                <Chip>Trading playbooks</Chip>
                <Chip>Community</Chip>
              </div>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}
