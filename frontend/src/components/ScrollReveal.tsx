import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  distance?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 24,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const axis = direction === "up" ? "Y" : "X";
  const sign = direction === "right" ? -1 : 1;

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        transform: `translate${axis}(${sign * distance}px)`,
      }}
      whileInView={{
        opacity: 1,
        transform: `translate${axis}(0px)`,
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        type: "spring",
        duration: 0.8,
        bounce: 0,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
