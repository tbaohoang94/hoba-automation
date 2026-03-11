import Link from "next/link";

const footerLinks = {
  leistungen: [
    { name: "Consulting", href: "/leistungen#consulting" },
    { name: "Automation", href: "/leistungen#automation" },
    { name: "Software & Dashboards", href: "/leistungen#software" },
  ],
  unternehmen: [
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Team", href: "/team" },
    { name: "Karriere", href: "/karriere" },
    { name: "Blog", href: "/blog" },
  ],
  rechtliches: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ],
};

export function Footer() {
  return (
    <footer style={{ background: "var(--bg-base)" }}>
      <div className="mx-auto max-w-[1280px] px-4 py-12 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Logo & Beschreibung */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-medium tracking-tight text-white">
              Hoba <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Automation</span>
            </Link>
            <p className="mt-3 text-sm text-[var(--text-muted)]">
              Automatisierung, Consulting und Software-Entwicklung für den
              Mittelstand in der DACH-Region.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="mb-3 text-sm font-medium text-white">Leistungen</h4>
            <ul className="space-y-2">
              {footerLinks.leistungen.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="mb-3 text-sm font-medium text-white">Unternehmen</h4>
            <ul className="space-y-2">
              {footerLinks.unternehmen.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt & Rechtliches */}
          <div>
            <h4 className="mb-3 text-sm font-medium text-white">Kontakt</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm text-[var(--text-muted)] transition-colors hover:text-white"
                >
                  Kontakt aufnehmen
                </Link>
              </li>
              {footerLinks.rechtliches.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-sm text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} Hoba Automation. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
