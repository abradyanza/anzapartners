"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import CinematicBackdrop from "./CinematicBackdrop";

interface HeroProps {
  /** Animated headline as masked rising lines (used on the home hero). */
  lines?: ReactNode[];
  /** Simple static heading (interior pages). */
  heading?: ReactNode;
  meta?: string;
  subtext?: ReactNode;
  cta?: ReactNode;
  size?: "full" | "medium" | "short";
  backdrop?: boolean;
  scrollIndicator?: boolean;
}

const sizeClasses: Record<NonNullable<HeroProps["size"]>, string> = {
  full: "min-h-dvh",
  medium: "min-h-[64dvh] md:min-h-[58dvh]",
  short: "min-h-[48dvh] md:min-h-[42dvh]",
};

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero({
  lines,
  heading,
  meta,
  subtext,
  cta,
  size = "full",
  backdrop = false,
  scrollIndicator = false,
}: HeroProps) {
  const reduce = useReducedMotion();

  return (
    <section
      className={`relative isolate overflow-hidden bg-canvas ${sizeClasses[size]} ${
        backdrop ? "grain" : ""
      } flex items-center`}
    >
      {backdrop && <CinematicBackdrop />}

      {/* Fade the backdrop into the page below so the hero dissolves, not cuts. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-b from-transparent to-canvas"
      />

      <div className="container-x relative z-10 w-full pt-28 pb-20 md:pt-32">
        <div className="max-w-4xl">
          {meta && (
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="meta mb-7 flex items-center gap-3"
            >
              <span className="inline-block h-px w-8 bg-accent/60" />
              {meta}
            </motion.p>
          )}

          {lines ? (
            <h1 className="display-1 text-ink">
              {lines.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-[0.08em]">
                  <motion.span
                    className="block"
                    initial={reduce ? false : { y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.12 + i * 0.12, ease: EASE }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          ) : (
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="display-1 text-ink"
            >
              {heading}
            </motion.h1>
          )}

          {subtext && (
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted"
            >
              {subtext}
            </motion.p>
          )}

          {cta && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
              className="mt-11 flex flex-wrap items-center gap-4"
            >
              {cta}
            </motion.div>
          )}
        </div>
      </div>

      {scrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="absolute bottom-9 left-1/2 z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, 7, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-ink-faint"
          >
            <span className="meta text-[10px]">Scroll</span>
            <svg width="13" height="18" viewBox="0 0 13 18" fill="none">
              <path
                d="M1 7l5.5 5.5L12 7"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
