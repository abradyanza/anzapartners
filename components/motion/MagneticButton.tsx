"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import type { ReactNode, PointerEvent } from "react";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}

/**
 * Magnetic CTA. Pointer feedback driven by Motion values + springs (never
 * useState — that would re-render the tree on every pointer move and collapse on
 * mobile). The button leans toward the cursor, then springs home on leave.
 */
export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
}: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    x.set(mx * 0.28);
    y.set(my * 0.32);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center gap-3 px-7 py-3.5 text-sm font-medium tracking-tight rounded-md transition-colors duration-300 active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-ink text-canvas hover:bg-white"
      : "text-ink border border-line-strong hover:border-ink/40 hover:bg-surface";

  return (
    <motion.div style={{ x: sx, y: sy }} className="inline-block">
      <Link
        href={href}
        onPointerMove={onMove}
        onPointerLeave={reset}
        className={`${base} ${styles} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
