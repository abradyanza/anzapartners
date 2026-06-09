"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface HeroProps {
  heading: ReactNode;
  subtext?: ReactNode;
  cta?: ReactNode;
  size?: "full" | "medium" | "short";
  scrollIndicator?: boolean;
}

const sizeClasses: Record<NonNullable<HeroProps["size"]>, string> = {
  full: "min-h-dvh",
  medium: "min-h-[60dvh] md:min-h-[50dvh]",
  short: "min-h-[55dvh] md:min-h-[40dvh]",
};

export default function Hero({
  heading,
  subtext,
  cta,
  size = "full",
  scrollIndicator = false,
}: HeroProps) {
  return (
    <section
      className={`relative bg-navy text-white overflow-hidden ${sizeClasses[size]} flex items-center`}
    >
      <DecorativePattern />

      <div className="container-x relative z-10 pt-32 pb-24">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            {heading}
          </motion.h1>

          {subtext && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-2xl text-lg md:text-xl text-light/85 leading-relaxed"
            >
              {subtext}
            </motion.p>
          )}

          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10"
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
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-silver"
          >
            <span className="eyebrow text-[10px]">Scroll</span>
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
              <path
                d="M1 8l6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.5"
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

function DecorativePattern() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />
      <svg
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-1/2 text-steel/15"
        viewBox="0 0 400 800"
        fill="none"
        preserveAspectRatio="xMaxYMid slice"
      >
        <line x1="0" y1="120" x2="400" y2="120" stroke="currentColor" strokeWidth="1" />
        <line x1="40" y1="0" x2="40" y2="800" stroke="currentColor" strokeWidth="1" />
        <line x1="240" y1="0" x2="240" y2="800" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="640" x2="400" y2="640" stroke="currentColor" strokeWidth="1" />
      </svg>
    </>
  );
}
