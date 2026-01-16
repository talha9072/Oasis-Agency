import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; a: number; tw: number };

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const tRef = useRef(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor((window.innerWidth * window.innerHeight) / 12000);
      starsRef.current = Array.from({ length: Math.max(140, count) }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: random(0.4, 1.3),
        a: random(0.15, 0.75),
        tw: random(0.6, 1.8)
      }));
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const tick = () => {
      tRef.current += 0.016;
      const t = tRef.current;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const g = ctx.createRadialGradient(
        window.innerWidth / 2,
        window.innerHeight / 3,
        0,
        window.innerWidth / 2,
        window.innerHeight / 2,
        Math.max(window.innerWidth, window.innerHeight) / 1.2
      );
      g.addColorStop(0, "rgba(0,0,0,0)");
      g.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      for (const s of starsRef.current) {
        const tw = (Math.sin(t * s.tw + s.x * 0.01) + 1) / 2;
        const alpha = s.a * (0.5 + tw * 0.8);
        ctx.fillStyle = `rgba(245,245,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-20 opacity-60" aria-hidden="true" />;
}
