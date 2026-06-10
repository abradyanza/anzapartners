"use client";

import { useEffect, useRef } from "react";

/**
 * Atmospheric hero backdrop: a slow-drifting field of faint "dust" motes over a
 * gently migrating soft light, painted on canvas. This is the hero's real visual
 * (per the brief's "cinematic / dynamic" read) — deliberately not a constellation
 * line-mesh (overexposed) and not a flat gradient blob (a placeholder tell).
 *
 * Motion is purely ambient and motivated as atmosphere. Under prefers-reduced-
 * motion it paints a single static frame and stops.
 */
export default function CinematicBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;

    type Mote = { x: number; y: number; r: number; a: number; vx: number; vy: number; tw: number };
    let motes: Mote[] = [];

    const seed = () => {
      const count = Math.min(90, Math.floor((w * h) / 22000));
      motes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.4,
        a: Math.random() * 0.5 + 0.1,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        tw: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const paintLight = (cx: number, cy: number) => {
      // Soft drifting key light — the cinematic "spotlight" through the dark.
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.7);
      grd.addColorStop(0, "rgba(108, 166, 224, 0.10)");
      grd.addColorStop(0.4, "rgba(78, 132, 189, 0.045)");
      grd.addColorStop(1, "rgba(6, 8, 15, 0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);
    };

    const frame = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const cx = w * (0.5 + Math.sin(t * 0.00006) * 0.22);
      const cy = h * (0.42 + Math.cos(t * 0.00005) * 0.18);
      paintLight(cx, cy);

      for (const m of motes) {
        m.x += m.vx;
        m.y += m.vy;
        if (m.x < -10) m.x = w + 10;
        if (m.x > w + 10) m.x = -10;
        if (m.y < -10) m.y = h + 10;
        if (m.y > h + 10) m.y = -10;
        const tw = 0.6 + Math.sin(t * 0.001 + m.tw) * 0.4;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(174, 178, 197, ${m.a * tw})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduce) {
      paintLight(w * 0.5, h * 0.4);
      for (const m of motes) {
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(174, 178, 197, ${m.a})`;
        ctx.fill();
      }
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
