import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  /** On the landing page, show "#quiz" for guide CTA; on subpages, link to "/#quiz" */
  guideHref?: string;
}

export default function Footer({ guideHref = "/#quiz" }: FooterProps) {
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="mx-auto max-w-3xl px-6">
        <nav
          aria-label="Footer-Navigation"
          className="flex flex-col sm:flex-row sm:justify-between gap-6 mb-6"
        >
          <div>
            <p className="font-bold text-gray-900 text-sm mb-2">
              Anifit-Fachberater werden
            </p>
            <ul className="space-y-1 text-sm text-gray-500">
              <li>
                <a
                  href={guideHref}
                  className="hover:text-brand-600 transition-colors"
                >
                  Gratis-Guide anfordern
                </a>
              </li>
              <li>
                <Link
                  href="/guide"
                  className="hover:text-brand-600 transition-colors"
                >
                  Guide-Vorschau lesen
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm mb-2">
              Weitere Infos
            </p>
            <ul className="space-y-1 text-sm text-gray-500">
              <li>
                <Link
                  href="/provision"
                  className="hover:text-brand-600 transition-colors font-semibold text-brand-700"
                >
                  Provisionsmodell
                </Link>
              </li>
              <li>
                <Link
                  href="/einkommen-berechnen"
                  className="hover:text-brand-600 transition-colors"
                >
                  Verdienst-Rechner
                </Link>
              </li>
              <li>
                <Link
                  href="/nebenverdienst-mit-hunden"
                  className="hover:text-brand-600 transition-colors"
                >
                  Nebenverdienst mit Hunden
                </Link>
              </li>
              <li>
                <Link
                  href="/erfahrungen"
                  className="hover:text-brand-600 transition-colors"
                >
                  Berater-Erfahrungen
                </Link>
              </li>
              <li>
                <Link
                  href="/kosten"
                  className="hover:text-brand-600 transition-colors"
                >
                  Kosten &amp; Einstieg
                </Link>
              </li>
              <li>
                <Link
                  href="/anmeldung"
                  className="hover:text-brand-600 transition-colors"
                >
                  Anmeldung &amp; Registrierung
                </Link>
              </li>
              <li>
                <Link
                  href="/voraussetzungen"
                  className="hover:text-brand-600 transition-colors"
                >
                  Voraussetzungen
                </Link>
              </li>
              <li>
                <Link
                  href="/ueber-mich"
                  className="hover:text-brand-600 transition-colors"
                >
                  Über Enrico Bachmann
                </Link>
              </li>
              <li>
                <Link
                  href="/tierberufe"
                  className="hover:text-brand-600 transition-colors"
                >
                  Für Tierärzte, THP &amp; Züchter
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-brand-600 transition-colors"
                >
                  Häufige Fragen (FAQ)
                </Link>
              </li>
              <li>
                <a
                  href="https://www.anifutter-shop.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-600 transition-colors"
                >
                  Zum Anifit-Shop →
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm mb-2">Rechtliches</p>
            <ul className="space-y-1 text-sm text-gray-500">
              <li>
                <Link
                  href="/impressum"
                  className="hover:text-brand-600 transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:text-brand-600 transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex items-center justify-center gap-2 border-t border-gray-50 pt-4">
          <Image src="/images/anifit-logo.png" alt="Anifit" width={20} height={20} className="w-5 h-5 object-contain opacity-60" />
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Enrico Bachmann · Anifit-Fachberater
          </p>
        </div>
      </div>
    </footer>
  );
}
