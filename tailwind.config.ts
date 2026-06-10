import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ── Cinematic dark system (navy-tinted near-black canvas + surface ladder).
        // Lineage of the original brand navy, pushed to a deep cinematic ink so the
        // single accent and the type carry the page. Never pure #000 / #fff.
        canvas: "#06080F",
        surface: {
          DEFAULT: "#0B0E17",
          2: "#11151F",
          3: "#161B27",
        },
        line: {
          DEFAULT: "#1C2130",
          strong: "#2A3043",
        },
        ink: {
          DEFAULT: "#EDF0F6",
          muted: "#AAB2C5",
          subtle: "#79839A",
          faint: "#525B70",
        },
        // ── The one scarce chromatic accent. A refined luminous steel-blue,
        // < 80% saturation. Used only on focus, the primary CTA, link emphasis,
        // and a few intentional moments — never as decoration or section fill.
        accent: {
          DEFAULT: "#6CA6E0",
          hover: "#94C2F1",
          deep: "#4E84BD",
        },
        // Legacy tokens kept so any un-migrated reference still resolves.
        navy: "#0A1628",
        slate: "#1B2A4A",
        steel: "#3D5A80",
        sky: "#5B8DBE",
        silver: "#94A3B8",
        light: "#F1F5F9",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        // Safety net: any lingering `font-serif` renders as the grotesque,
        // not an ugly default serif.
        serif: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      keyframes: {
        "grain-shift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -5%)" },
          "30%": { transform: "translate(3%, -8%)" },
          "50%": { transform: "translate(-4%, 6%)" },
          "70%": { transform: "translate(6%, 3%)" },
          "90%": { transform: "translate(-3%, 5%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "grain-shift": "grain-shift 8s steps(6) infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
