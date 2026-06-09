import Image from "next/image";

interface HeadshotProps {
  initials: string;
  src?: string;
  name?: string;
  size?: "lg" | "md";
}

const sizes = {
  lg: {
    box: "w-40 h-40 md:w-48 md:h-48",
    text: "text-4xl md:text-5xl",
    px: 192,
  },
  md: {
    box: "w-28 h-28 md:w-32 md:h-32",
    text: "text-2xl md:text-3xl",
    px: 128,
  },
};

export default function Headshot({ initials, src, name, size = "lg" }: HeadshotProps) {
  const s = sizes[size];

  if (src) {
    return (
      <div className={`${s.box} relative rounded-full overflow-hidden bg-light flex-shrink-0`}>
        <Image
          src={src}
          alt={name ? `Portrait of ${name}` : ""}
          fill
          sizes={`${s.px}px`}
          className="object-cover"
          priority={false}
        />
      </div>
    );
  }

  return (
    <div
      className={`${s.box} ${s.text} rounded-full bg-navy text-light flex items-center justify-center font-serif select-none flex-shrink-0`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
