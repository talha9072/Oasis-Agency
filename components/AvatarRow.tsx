import { cn } from "../lib/utils";

type AvatarRowProps = {
  className?: string;
};

function Avatar({ i }: { i: number }) {
  const hue = 240 + i * 18;
  return (
    <div className="relative">
      <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 shadow-soft grid place-items-center overflow-hidden">
        <div
          className="h-full w-full"
          style={{
            background: `radial-gradient(circle at 30% 30%, hsla(${hue}, 95%, 70%, .8), transparent 45%),
               radial-gradient(circle at 70% 70%, hsla(${hue + 35}, 95%, 55%, .65), transparent 55%),
               rgba(255,255,255,.04)`
          }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />
    </div>
  );
}

export function AvatarRow({ className }: AvatarRowProps) {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className={cn(i === 0 || i === 6 ? "opacity-35" : "opacity-95")}>
          <Avatar i={i} />
        </div>
      ))}
    </div>
  );
}
