import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import LeadForm from "../_components/LeadForm";
import Footer from "@/app/_components/Footer";
import Breadcrumb from "../_components/Breadcrumb";
import StarterPaketCTA from "@/app/_components/StarterPaketCTA";

export const metadata: Metadata = {
  title: "Nebenverdienst mit Hunden: 7 Wege im Vergleich (2026)",
  description:
    "Du liebst Hunde und willst nebenbei Geld verdienen? Wir vergleichen 7 realistische Möglichkeiten — von Gassi-Service bis Futterberatung. Mit echten Zahlen.",
  robots: "index, follow",
  alternates: { canonical: "https://partner.anifutter-shop.de/nebenverdienst-mit-hunden" },
  openGraph: {
    title: "Nebenverdienst mit Hunden: 7 Wege im Vergleich (2026)",
    description:
      "7 realistische Wege, mit Hunden nebenbei Geld zu verdienen. Mit echten Zahlen und ehrlicher Einschätzung.",
    locale: "de_DE",
  },
};

const ways = [
  {
    title: "Gassi-Service / Hundesitting",
    hours: "10–20 h/Woche",
    income: "300–800 €/Monat",
    startup: "0–50 €",
    passive: false,
    pros: ["Sofort startbar", "Kein Vorwissen nötig", "Viel Bewegung"],
    cons: [
      "Wetter-abhängig",
      "Einkommen stoppt bei Krankheit",
      "Haftungsrisiko (Versicherung nötig)",
    ],
  },
  {
    title: "Hundetrainer / Verhaltensberater",
    hours: "10–30 h/Woche",
    income: "500–3.000 €/Monat",
    startup: "1.500–5.000 €",
    passive: false,
    pros: ["Hohes Stundensatz-Potenzial", "Wachsende Nachfrage", "Erfüllend"],
    cons: [
      "Ausbildung dauert 6–24 Monate",
      "Hohe Anfangsinvestition",
      "Kundengewinnung braucht Zeit",
    ],
  },
  {
    title: "Hundepflege / Hundesalon",
    hours: "15–40 h/Woche",
    income: "800–3.000 €/Monat",
    startup: "3.000–15.000 €",
    passive: false,
    pros: ["Wiederkehrende Kunden", "Gute Margen", "Kreative Arbeit"],
    cons: [
      "Hohe Startkosten (Ausstattung)",
      "Körperlich anstrengend",
      "Gewerbeanmeldung + Sachkunde nötig",
    ],
  },
  {
    title: "Hundezubehör verkaufen (Etsy/Shopify)",
    hours: "10–25 h/Woche",
    income: "0–1.500 €/Monat",
    startup: "500–3.000 €",
    passive: false,
    pros: ["Skalierbar", "Kreativ", "Ortsunabhängig"],
    cons: [
      "Starke Konkurrenz",
      "Lagerkosten",
      "Marketing-Aufwand hoch",
    ],
  },
  {
    title: "Hunde-Content Creator (Instagram/TikTok/YouTube)",
    hours: "5–20 h/Woche",
    income: "0–2.000 €/Monat",
    startup: "0–200 €",
    passive: false,
    pros: ["Macht Spaß mit dem eigenen Hund", "Skalierbar", "Werbepartner möglich"],
    cons: [
      "Dauert Monate bis zu Einnahmen",
      "Algorithmus-abhängig",
      "Unberechenbares Einkommen",
    ],
  },
  {
    title: "Tierfotografie",
    hours: "5–15 h/Woche",
    income: "200–1.500 €/Monat",
    startup: "1.000–3.000 €",
    passive: false,
    pros: ["Kreativ und erfüllend", "Premium-Preise möglich", "Wenig Konkurrenz lokal"],
    cons: [
      "Saisonabhängig",
      "Kameraausrüstung teuer",
      "Akquise zeitaufwändig",
    ],
  },
  {
    title: "Ernährungsberater für Hunde (z. B. Anifit)",
    hours: "2–5 h/Woche",
    income: "300–2.000+ €/Monat",
    startup: "78 €",
    passive: true,
    pros: [
      "Wiederkehrende Provision (lebenslang)",
      "Kein Lager, kein Versand",
      "Persönlicher Mentor",
      "67 % Wiederkaufrate",
    ],
    cons: [
      "Anfangs wenige Kunden",
      "Direktvertrieb liegt nicht jedem",
      "Einstiegspaket nötig (ab 78 €)",
    ],
  },
];

export default function NebenverdienstMitHunden() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Nebenverdienst mit Hunden: 7 Wege im Vergleich (2026)",
    author: { "@type": "Person", name: "Enrico Bachmann" },
    publisher: { "@type": "Person", name: "Enrico Bachmann" },
    datePublished: "2026-03-06",
    dateModified: "2026-03-06",
    description:
      "7 realistische Wege, mit Hunden nebenbei Geld zu verdienen. Mit echten Zahlen und ehrlicher Einschätzung.",
    mainEntityOfPage: "https://partner.anifutter-shop.de/nebenverdienst-mit-hunden",
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <header className="py-20 bg-gradient-to-b from-brand-50/50 to-white">
        <div className="mx-auto max-w-3xl px-6">
          <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Nebenverdienst mit Hunden" }]} />
          <p className="text-xs font-bold tracking-widest uppercase text-brand-700 mb-4">
            Ratgeber · Aktualisiert März 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-5">
            Nebenverdienst mit Hunden: 7 realistische Wege im Vergleich
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Du liebst Hunde und willst nebenbei etwas dazuverdienen? Gut. Es gibt
            mehr Möglichkeiten als die meisten denken. Aber nicht alle sind gleich
            gut. Hier ist ein ehrlicher Vergleich mit echten Zahlen.
          </p>
        </div>
      </header>

      {/* Intro */}
      <section className="py-12 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold mb-4">
            Worauf es beim Nebenverdienst mit Hunden ankommt
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Die entscheidende Frage ist nicht &ldquo;Wie viel kann ich verdienen?&rdquo;
            sondern: <strong>Was passiert, wenn ich eine Woche nicht arbeite?</strong>
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Bei den meisten Hunde-Nebenjobs tauschst du Zeit gegen Geld. Das
            funktioniert, ist aber nicht skalierbar. Die interessantesten Modelle
            sind die, bei denen einmal gewonnene Kunden immer wieder bestellen.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Wir haben 7 Wege verglichen. Alle sind legal, realistisch und von
            normalen Menschen umsetzbar. Kein Schnell-reich-werden-Quatsch.
          </p>
        </div>
      </section>

      {/* 7 Ways */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6 space-y-10">
          {ways.map((way, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 sm:p-8 ${
                way.passive
                  ? "bg-brand-50 border-2 border-brand-200"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {i + 1}. {way.title}
                </h3>
                {way.passive && (
                  <span className="flex-shrink-0 text-xs font-bold bg-brand-100 text-brand-800 px-3 py-1 rounded-full">
                    Passives Einkommen
                  </span>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-5">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Zeitaufwand</p>
                  <p className="text-sm font-semibold text-gray-700">
                    {way.hours}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Verdienst</p>
                  <p
                    className={`text-sm font-semibold ${
                      way.passive ? "text-brand-700" : "text-gray-700"
                    }`}
                  >
                    {way.income}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Startkosten</p>
                  <p className="text-sm font-semibold text-gray-700">
                    {way.startup}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Vorteile
                  </p>
                  <ul className="space-y-1">
                    {way.pros.map((pro, j) => (
                      <li
                        key={j}
                        className="text-sm text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-brand-500 mt-0.5">+</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Nachteile
                  </p>
                  <ul className="space-y-1">
                    {way.cons.map((con, j) => (
                      <li
                        key={j}
                        className="text-sm text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-danger-400 mt-0.5">–</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold mb-4">Unser Fazit</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Wenn du einen Hund hast und gern mit anderen Hundebesitzern redest,
            ist die Futterberatung der Weg mit dem besten Verhältnis aus Aufwand
            und Ertrag. Nicht weil du sofort reich wirst, sondern weil jeder
            Kunde, den du einmal gewinnst, immer wieder bestellt.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Bei 20 Stammkunden und einem durchschnittlichen Bestellwert von 80 €
            pro Monat verdienst du bei 23 % Provision rund 370 € monatlich. Ohne
            dafür etwas zu tun. Das wächst mit jedem neuen Kunden.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Der Haken: Du brauchst Geduld. Die ersten Kunden kommen nicht über
            Nacht. Aber wenn du bereit bist, 2–5 Stunden pro Woche zu
            investieren, baust du dir etwas auf, das bleibt.
          </p>

          <div className="bg-brand-50 rounded-2xl border border-brand-100 p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-3 text-center">
              Klingt nach dem Richtigen für dich?
            </h3>
            <p className="text-gray-500 mb-6 text-sm max-w-md mx-auto text-center">
              Hol dir den kostenlosen 5-teiligen Guide per Email. Alle Infos zu
              Provision, Produkten und Ablauf.
            </p>
            <LeadForm idPrefix="nebenverdienst-" source="nebenverdienst" />
            <p className="text-xs text-gray-500 mt-4 text-center">
              Kein Abo. Jederzeit abbestellbar.
            </p>
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="py-12 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/enrico-bachmann.jpg"
              alt="Enrico Bachmann"
              width={56}
              height={56}
              className="rounded-full w-14 h-14 object-cover border-2 border-white shadow"
            />
            <div>
              <p className="font-semibold text-sm text-gray-900">
                Enrico Bachmann
              </p>
              <p className="text-xs text-gray-500">
                Anifit-Fachberater seit 2018 · 1.000+ aktive Kunden
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* Starter-Paket CTA */}
      <div className="max-w-2xl mx-auto px-4 my-12">
        <StarterPaketCTA />
      </div>

      <Footer />
    </div>
  );
}
