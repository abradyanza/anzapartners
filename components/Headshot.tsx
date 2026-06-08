interface HeadshotProps {
  initials: string;
  size?: "lg" | "md";
}

const sizes = {
  lg: "w-40 h-40 md:w-48 md:h-48 text-4xl md:text-5xl",
  md: "w-28 h-28 md:w-32 md:h-32 text-2xl md:text-3xl",
};

export default function Headshot({ initials, size = "lg" }: HeadshotProps) {
  return (
    <div
      className={`${sizes[size]} rounded-full bg-navy text-light flex items-center justify-center font-serif select-none`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
