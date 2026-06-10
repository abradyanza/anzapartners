"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Seconds of stagger delay. */
  delay?: number;
  /** Vertical travel in px. */
  y?: number;
  className?: string;
  as?: "div" | "li" | "span";
}

/**
 * Scroll-reveal primitive. Motivated motion: content rises into place once as it
 * enters the viewport (hierarchy + pacing), then stays put. Honors reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
