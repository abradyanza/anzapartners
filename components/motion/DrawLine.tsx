"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * A hairline divider that wipes in from the left as it enters the viewport.
 * Reinforces page structure with a quiet editorial gesture (the line "draws"
 * itself). Fires once; honors reduced-motion by rendering fully drawn.
 */
export default function DrawLine({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className={`h-px w-full origin-left bg-line ${className}`}
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
