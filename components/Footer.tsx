import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy text-silver">
      <div className="container-x py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <Logo variant="light" size="md" />
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
