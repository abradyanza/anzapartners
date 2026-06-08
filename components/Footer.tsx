export default function Footer() {
  return (
    <footer className="bg-navy text-silver">
      <div className="container-x py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
          <span className="font-serif text-white tracking-[0.18em] uppercase text-sm">
            Anza Partners
          </span>
          <a
            href="mailto:info@anzapartners.com"
            className="text-sm text-silver hover:text-white transition-colors"
          >
            info@anzapartners.com
          </a>
        </div>
        <p className="text-xs text-silver/80">
          © {new Date().getFullYear()} Anza Partners. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
