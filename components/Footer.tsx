import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="container-x py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo variant="light" size="sm" />
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
            <nav aria-label="Footer" className="flex flex-col gap-3">
              <span className="meta mb-1">Navigate</span>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <span className="meta mb-1">Contact</span>
              <a
                href="mailto:info@anzapartners.com"
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                info@anzapartners.com
              </a>
              <span className="text-sm text-ink-subtle">New York, NY</span>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-line/70 pt-8">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} Anza Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
