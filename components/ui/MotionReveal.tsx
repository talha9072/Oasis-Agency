import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

type MotionRevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  y?: number;
}>;

export function MotionReveal({ className, delay = 0, y = 14, children }: MotionRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.21, 0.8, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
