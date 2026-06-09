import Image from "next/image";

interface HeadshotProps {
  initials: string;
  src?: string;
  name?: string;
  size?: "lg" | "md";
}

const sizes = {
  lg: {
    box: "w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48",
    text: "text-3xl sm:text-4xl md:text-5xl",
    imgSizes: "(min-width: 768px) 192px, (min-width: 640px) 160px, 128px",
  },
  md: {
    box: "w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32",
    text: "text-xl sm:text-2xl md:text-3xl",
    imgSizes: "(min-width: 768px) 128px, (min-width: 640px) 112px, 80px",
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
          sizes={s.imgSizes}
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
