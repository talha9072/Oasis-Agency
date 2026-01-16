import { Navbar } from "../components/sections/Navbar";
import { Hero } from "../components/sections/Hero";
import { WhyDifferent } from "../components/sections/WhyDifferent";
import { HowToJoin } from "../components/sections/HowToJoin";
import { WhyMember } from "../components/sections/WhyMember";
import { BuiltForTraders } from "../components/sections/BuiltForTraders";
import { Benefits } from "../components/sections/Benefits";
import { FAQ } from "../components/sections/FAQ";
import { Footer } from "../components/sections/Footer";


import { useLenis } from "../components/hooks/useLenis";

export default function LandingPage() {
  useLenis();

  return (
    <div className="min-h-dvh bg-bg text-fg antialiased">
      

      <div className="pointer-events-none fixed inset-0 -z-10 opacity-90">
        <div className="absolute left-1/2 top-[-10rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-glow blur-[120px]" />
        <div className="absolute left-[10%] top-[40rem] h-[28rem] w-[28rem] rounded-full bg-glow2 blur-[140px]" />
        <div className="absolute right-[8%] top-[75rem] h-[24rem] w-[24rem] rounded-full bg-glow blur-[140px]" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <WhyDifferent />
        <HowToJoin />
        <WhyMember />
        <BuiltForTraders />
        <Benefits />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
