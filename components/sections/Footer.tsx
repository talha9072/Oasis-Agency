import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-soft">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <div className="absolute left-1/2 top-[-6rem] h-[18rem] w-[60rem] -translate-x-1/2 bg-glow blur-[120px]" />
        </div>

        <Container className="py-14">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-white/5 border border-soft grid place-items-center">
                  <div className="h-4 w-4 rounded-sm bg-white/80" />
                </div>
                <div className="text-sm font-semibold text-fg/90">Trading club</div>
              </div>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                A dark, glow-first landing system built with React, Framer Motion and Lenis.
              </p>
              <div className="mt-5">
                <Button variant="primary" size="sm" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Back to top
                </Button>
              </div>
            </div>

            <div>
              <div className="text-xs text-fg/70 mb-3">Links</div>
              <ul className="space-y-2 text-sm text-fg/75">
                <li>
                  <a className="hover:text-fg/95 transition" href="#benefits">
                    Benefits
                  </a>
                </li>
                <li>
                  <a className="hover:text-fg/95 transition" href="#how">
                    Buy club pass
                  </a>
                </li>
                <li>
                  <a className="hover:text-fg/95 transition" href="#faq">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs text-fg/70 mb-3">Need help</div>
              <ul className="space-y-2 text-sm text-fg/75">
                <li>
                  <a className="hover:text-fg/95 transition" href="#faq">
                    How to buy the club pass
                  </a>
                </li>
                <li>
                  <a className="hover:text-fg/95 transition" href="#faq">
                    How to access the club
                  </a>
                </li>
                <li>
                  <a className="hover:text-fg/95 transition" href="#faq">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs text-fg/70 mb-3">Socials</div>
              <ul className="space-y-2 text-sm text-fg/75">
                <li>
                  <span className="text-fg/55">x</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-soft pt-6 text-xs text-fg/55">
            <div>Created by you • Local-ready system</div>
            <div>All rights reserved</div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
