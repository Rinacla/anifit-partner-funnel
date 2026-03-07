import ProvisionsRechner from "../_components/ProvisionsRechner";
import LeadForm from "../_components/LeadForm";
import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/app/_components/Footer";
import Breadcrumb from "../_components/Breadcrumb";

export const metadata: Metadata = {
  title: "Verdienst-Rechner für Anifit-Berater | Enrico Bachmann",
  description:
    "Berechne dein potenzielles monatliches Einkommen als Anifit-Fachberater. Interaktiver Provisionsrechner mit echten Zahlen und allen Provisionsstufen.",
  alternates: {
    canonical: "https://partner.anifutter-shop.de/einkommen-berechnen",
  },
  openGraph: {
    title: "Verdienst-Rechner für Anifit-Berater",
    description:
      "Berechne dein Einkommen als Anifit-Fachberater. Interaktiver Rechner mit echten Provisionsstufen.",
    locale: "de_DE",
  },
};

export default function EarningsCalculatorPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: "https://partner.anifutter-shop.de",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Verdienst-Rechner",
        item: "https://partner.anifutter-shop.de/einkommen-berechnen",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <main className="py-20">
        <div className="mx-auto max-w-xl px-6">
          <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Verdienst-Rechner" }]} />

          <h1 className="text-3xl font-extrabold text-center mb-4 leading-tight">
            Wie viel kannst du als{" "}
            <span className="text-brand-600">Anifit-Berater</span> verdienen?
          </h1>
          <p className="text-center text-gray-500 mb-12">
            Nutze unseren interaktiven Rechner, um dein potenzielles Einkommen
            zu visualisieren. Grundlage sind die offiziellen Provisionsstufen
            von Provital.
          </p>

          <ProvisionsRechner />

          <section className="mt-20 border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              So setzen sich deine Einnahmen zusammen
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  1. Die Handelsspanne (Direkt-Provision)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Du startest mit 15 % Provision auf jeden Euro Umsatz deiner
                  Kunden. Gewinnst du mehr Kunden, steigt deine Provisionsstufe
                  automatisch an – bis hin zu 30 %. Das Beste: Diese Stufen
                  gelten{" "}
                  <span className="font-semibold text-gray-900 italic">
                    lebenslang
                  </span>
                  .
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h4 className="font-bold text-sm mb-4 text-gray-500 uppercase tracking-wider">
                  Provisionsstufen
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { k: "1-9 Kunden", p: "15 %" },
                    { k: "10-24 Kunden", p: "19 %" },
                    { k: "25-49 Kunden", p: "23 %" },
                    { k: "50-95 Kunden", p: "27 %" },
                    { k: "96+ Kunden", p: "30 %" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b border-gray-200 pb-2"
                    >
                      <span className="text-sm text-gray-600">{s.k}</span>
                      <span className="font-bold text-brand-600">{s.p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  2. Passives Einkommen durch Nachbestellungen
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Hunde und Katzen fressen jeden Tag. Einmal von der Qualität
                  überzeugt, bestellen über 67 % der Kunden regelmäßig nach –
                  oft über Jahre hinweg. Du hast einmal die Arbeit der Beratung
                  und wirst monatlich dafür bezahlt, solange der Kunde bestellt.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  3. Der Startbonus (Turbo-Einstieg)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Provital belohnt Fleiß am Anfang besonders stark: Wenn du in
                  deinen ersten 30 Tagen nur 3 Kunden gewinnst, wirst du für 3
                  Monate sofort auf die{" "}
                  <span className="font-bold text-brand-600">30 % Stufe</span>{" "}
                  gesetzt. Das hilft dir, dein Investment für das Einstiegspaket
                  sofort wieder einzuspielen.
                </p>
              </div>
            </div>
          </section>

          {/* Inline Lead Form */}
          <div className="mt-16 bg-brand-50 rounded-2xl p-8 border border-brand-100">
            <h2 className="text-xl font-bold text-center mb-2">
              Überzeugt? Hol dir den kostenlosen Guide
            </h2>
            <p className="text-sm text-gray-600 text-center mb-6">
              5 Emails mit Provisionsmodell, Ablauf und realistischen Zahlen.
              Kein Spam.
            </p>
            <LeadForm source="einkommen-berechnen" />
          </div>

          {/* Internal Links */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-4">
              Weiterlesen
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/kosten"
                className="block p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-brand-50 hover:border-brand-100 transition-colors"
              >
                <p className="font-bold text-sm text-gray-700 mb-1">
                  Kosten & Einstieg
                </p>
                <p className="text-xs text-gray-500">
                  Ehrliche Aufstellung aller Kosten und wann du im Plus bist.
                </p>
              </Link>
              <Link
                href="/erfahrungen"
                className="block p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-brand-50 hover:border-brand-100 transition-colors"
              >
                <p className="font-bold text-sm text-gray-700 mb-1">
                  Berater-Erfahrungen
                </p>
                <p className="text-xs text-gray-500">
                  Echte Berichte von Fachberatern aus Enricos Team.
                </p>
              </Link>
              <Link
                href="/voraussetzungen"
                className="block p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-brand-50 hover:border-brand-100 transition-colors"
              >
                <p className="font-bold text-sm text-gray-700 mb-1">
                  Voraussetzungen
                </p>
                <p className="text-xs text-gray-500">
                  Was du brauchst (und was nicht), um als Berater zu starten.
                </p>
              </Link>
              <Link
                href="/anmeldung"
                className="block p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-brand-50 hover:border-brand-100 transition-colors"
              >
                <p className="font-bold text-sm text-gray-700 mb-1">
                  Anmeldung & Registrierung
                </p>
                <p className="text-xs text-gray-500">
                  So funktioniert die Registrierung in 5 einfachen Schritten.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
