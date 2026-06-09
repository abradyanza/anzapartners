import Image from "next/image";
import Link from "next/link";

type LogoVariant = "dark" | "light";
type LogoSize = "sm" | "md" | "lg" | "xl";

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  asLink?: boolean;
  href?: string;
  ariaLabel?: string;
  className?: string;
  priority?: boolean;
}

// Native aspect ratio of /public/anza-logo.png: 1414 x 1014 (~1.394:1).
const LOGO_W = 1414;
const LOGO_H = 1014;

const sizeMap: Record<LogoSize, string> = {
  sm: "h-10 md:h-11 w-auto",
  md: "h-14 md:h-16 w-auto",
  lg: "h-24 md:h-28 w-auto",
  xl: "h-40 md:h-48 w-auto",
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
  // "light" variant collapses the logo to a white silhouette for use on
  // dark backgrounds (navy hero, footer). "dark" renders it as-is.
  const filterClass = variant === "light" ? "brightness-0 invert" : "";

  const mark = (
    <Image
      src="/anza-logo-transparent.png"
      alt={ariaLabel}
      width={LOGO_W}
      height={LOGO_H}
      className={`${sizeMap[size]} ${filterClass} ${className}`}
      priority={priority}
    />
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
