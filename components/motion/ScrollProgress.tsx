"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Reading-progress hairline: a 1px accent line pinned to the very top of the
 * viewport that fills left-to-right as the page scrolls. Pure orientation — it
 * tells the reader how far through the page they are. Spring-smoothed so it
 * glides rather than jitters. Works fine under reduced-motion (it tracks scroll
 * position, not a timed animation).
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-accent"
    />
  );
}
