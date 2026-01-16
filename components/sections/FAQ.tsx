import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Accordion, type AccordionItem } from "../ui/Accordion";

const items: AccordionItem[] = [
  {
    question: "What exactly am I buying when I join the club?",
    answer:
      "Access to the club content: setups, frameworks, market structure notes, and member-only resources. Replace this copy with your real offer text."
  },
  {
    question: "How do I buy the club pass?",
    answer:
      "Typically: connect wallet → purchase pass → access unlocks automatically. You can wire this to your checkout / mint page later."
  },
  {
    question: "How do I get access after purchasing the club pass?",
    answer:
      "This demo is frontend-only. In production you’d verify ownership (token/NFT/subscription) and gate routes/content accordingly."
  },
  {
    question: "Is this a one-time payment or a subscription?",
    answer:
      "Up to you. The design supports either. Add pricing + plan cards when you’re ready."
  },
  {
    question: "Can I sell or transfer my club pass later?",
    answer:
      "If you use token gating, transferability depends on your contract rules. If you use subscriptions, it’s typically non-transferable."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20">
      <Container>
        <SectionHeader
          kicker="FAQs"
          title="We’ve Got the Answers You’re Looking For"
          subtitle="Quick answers about joining the trading club."
        />
        <div className="mt-10 mx-auto max-w-3xl">
          <Accordion items={items} />
        </div>
      </Container>
    </section>
  );
}
