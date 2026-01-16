// FILE: pages/matrix.tsx
// (converted from src/pages/MatrixPage.tsx for Next.js Pages Router)

import { Starfield } from "../components/Starfield";
import { Navbar } from "../components/sections/Navbar";
import { TrendMatrix } from "../components/sections/TrendMatrix";

export default function MatrixPage() {
  return (
    <div className="min-h-dvh bg-bg text-fg antialiased">
      <Starfield />

      <div className="pointer-events-none fixed inset-0 -z-10 opacity-90">
        <div className="absolute left-1/2 top-[-10rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-glow blur-[120px]" />
        <div className="absolute left-[10%] top-[40rem] h-[28rem] w-[28rem] rounded-full bg-glow2 blur-[140px]" />
        <div className="absolute right-[8%] top-[75rem] h-[24rem] w-[24rem] rounded-full bg-glow blur-[140px]" />
      </div>

      <Navbar />
      <TrendMatrix />
    </div>
  );
}
