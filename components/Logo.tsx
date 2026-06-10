import Image from "next/image";
import Link from "next/link";

type LogoVariant = "dark" | "light";
type LogoSize = "xs" | "sm" | "md" | "lg" | "xl";

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  asLink?: boolean;
  href?: string;
  ariaLabel?: string;
  className?: string;
  priority?: boolean;
}

// Native aspect ratio of /public/anza-logo-transparent.png: 1414 x 1014 (~1.394:1).
// We use a container div with fixed dimensions and `relative` positioning,
// then fill it with next/image + object-contain. This avoids the quirks of
// next/image width/height classes fighting the intrinsic size on mobile.

const sizeMap: Record<LogoSize, { container: string; imgSizes: string }> = {
  xs: {
    container: "w-[82px] h-[59px] md:w-[96px] md:h-[69px]",
    imgSizes: "(min-width: 768px) 96px, 82px",
  },
  sm: {
    container: "w-[100px] h-[72px] md:w-[120px] md:h-[86px]",
    imgSizes: "(min-width: 768px) 120px, 100px",
  },
  md: {
    container: "w-[140px] h-[100px] md:w-[160px] md:h-[115px]",
    imgSizes: "(min-width: 768px) 160px, 140px",
  },
  lg: {
    container: "w-[240px] h-[172px] md:w-[280px] md:h-[201px]",
    imgSizes: "(min-width: 768px) 280px, 240px",
  },
  xl: {
    container: "w-[360px] h-[258px] md:w-[440px] md:h-[316px]",
    imgSizes: "(min-width: 768px) 440px, 360px",
  },
};

export default function Logo({
  variant = "dark",
  size = "sm",
  asLink = false,
  href = "/",
  ariaLabel = "Anza Partners",
  className = "",
  priority = false,
}: LogoProps) {
  const filterClass = variant === "light" ? "brightness-0 invert" : "";
  const s = sizeMap[size];

  const mark = (
    <div className={`relative flex-shrink-0 ${s.container} ${className}`}>
      <Image
        src="/anza-logo-transparent.png"
        alt={ariaLabel}
        fill
        sizes={s.imgSizes}
        className={`object-contain object-left ${filterClass}`}
        priority={priority}
      />
    </div>
  );

  if (asLink) {
    return (
      <Link href={href} aria-label={ariaLabel} className="inline-flex items-center">
        {mark}
      </Link>
    );
  }

  return mark;
}
