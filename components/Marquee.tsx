"use client";

interface MarqueeProps {
  items: string[];
}

/**
 * A single, slow pedigree ribbon (marquee max-one-per-page). These are the real
 * institutions the team comes from — a truthful credibility cue, not a fabricated
 * logo wall. Edge-masked so it dissolves into the canvas rather than clipping.
 */
export default function Marquee({ items }: MarqueeProps) {
  const track = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden py-1"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {track.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="px-7 text-base font-medium tracking-tight text-ink-subtle md:text-lg">
              {item}
            </span>
            <span aria-hidden className="text-accent/50">
              &middot;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
