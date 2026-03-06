import Link from "next/link";
import type { Metadata } from "next";
import LeadForm from "../_components/LeadForm";

export const metadata: Metadata = {
  title: "Anifit Berater werden: Kosten & Einstieg im Detail",
  description:
    "Was kostet der Einstieg als Anifit-Fachberater? Ab 78 € Startpaket, keine laufenden Kosten, keine Lagerhaltung. Ehrliche Aufstellung aller Kosten und wann du im Plus bist.",
  alternates: { canonical: "https://partner.anifutter-shop.de/kosten" },
  openGraph: {
    title: "Anifit Berater werden: Kosten & Einstieg im Detail",
    description:
      "Ab 78 € starten, keine laufenden Kosten. Ehrliche Aufstellung und ROI-Berechnung.",
    locale: "de_DE",
  },
};

const costFaqs = [
  {
    q: "Gibt es monatliche Gebühren oder laufende Kosten?",
    a: "Nein. Nach dem einmaligen Einstiegspaket fallen keine weiteren Pflichtkosten an. Kein Abo, keine Lizenzgebühr, keine Mindestbestellmenge. Du verdienst ab dem ersten Tag Provision auf jede Bestellung.",
  },
  {
    q: "Muss ich Ware auf Lager halten oder vorfinanzieren?",
    a: "Nein. Provital (der Hersteller hinter Anifit) übernimmt Lagerung, Versand und Retouren komplett. Du empfiehlst, der Kunde bestellt direkt, du bekommst Provision. Null Risiko.",
  },
  {
    q: "Was ist im Einstiegspaket enthalten?",
    a: "Das Paket ab 78 € enthält Warenproben verschiedener Sorten zum Selbsttesten, Werbematerial und Zugang zum Beraterbereich. Du kannst das Futter selbst probieren (bzw. dein Hund) und authentisch empfehlen.",
  },
  {
    q: "Wann habe ich die Startkosten wieder rein?",
    a: "Bei einem durchschnittlichen Warenkorb von 107 € und 23 % Provision verdienst du ca. 25 € pro Bestellung. Nach 3-4 Kundenbestellungen hast du dein Einstiegspaket refinanziert. Die meisten Berater schaffen das im ersten Monat.",
  },
  {
    q: "Brauche ich ein Gewerbe anmelden?",
    a: "Ja, du brauchst einen Gewerbeschein. Die Kosten dafür liegen je nach Gemeinde bei 15 bis 65 €. Das ist eine einmalige Gebühr. Enrico hilft dir beim Ausfüllen.",
  },
  {
    q: "Kann ich das neben meinem Hauptjob machen?",
    a: "Ja. Die meisten Berater starten nebenberuflich mit 2-5 Stunden pro Woche. Es gibt keine Mindestarbeitszeit oder Umsatzvorgaben. Du entscheidest selbst, wie viel Zeit du investierst.",
  },
  {
    q: "Was passiert, wenn es nicht klappt? Kann ich aufhören?",
    a: "Jederzeit. Es gibt keine Vertragslaufzeit und keine Kündigungsfrist. Du verlierst maximal die 78 € für das Einstiegspaket, das du aber als Futter für deinen eigenen Hund nutzen kannst.",
  },
  {
    q: "Sind die Provisionen wirklich lebenslang?",
    a: "Ja. Durch den lebenslangen Kundenschutz ist jeder Kunde, den du gewinnst, dauerhaft dir zugeordnet. Jede Nachbestellung bringt dir Provision, auch Jahre später, ohne dass du etwas tun musst.",
  },
];

export default function KostenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: costFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: "https://partner.anifutter-shop.de" },
      { "@type": "ListItem", position: 2, name: "Kosten & Einstieg", item: "https://partner.anifutter-shop.de/kosten" },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50/30 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <Link href="/" className="text-sm text-green-700 hover:underline mb-6 inline-block">
            ← Zurück zur Hauptseite
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Was kostet der Einstieg als{" "}
            <span className="text-green-600">Anifit-Fachberater?</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Die ehrliche Antwort: ab 78 € einmalig. Keine laufenden Kosten, kein Lager, kein Risiko.
            Hier die komplette Aufstellung, damit du weißt, worauf du dich einlässt.
          </p>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold mb-8">Alle Kosten auf einen Blick</h2>

          <div className="space-y-4 mb-12">
            {/* Einmalige Kosten */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-green-800 text-lg">Einmalige Kosten</h3>
                <span className="text-2xl font-extrabold text-green-700">ab 78 €</span>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <div>
                    <strong>Einstiegspaket (ab 78 €)</strong> — Warenproben verschiedener Sorten zum Selbsttesten. 
                    Du probierst das Futter mit deinem Hund und kannst danach authentisch empfehlen.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <div>
                    <strong>Gewerbeschein (15-65 €)</strong> — Einmalige Anmeldung beim Gewerbeamt deiner Gemeinde. 
                    Enrico hilft dir beim Ausfüllen.
                  </div>
                </div>
              </div>
            </div>

            {/* Laufende Kosten */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-800 text-lg">Laufende Kosten</h3>
                <span className="text-2xl font-extrabold text-green-600">0 €</span>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Keine monatlichen Gebühren</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Keine Mindestbestellmenge</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Kein Lager, kein Versand (macht alles Provital)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Kein Werbematerial-Zwang</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Schulungen und Zertifizierung: kostenlos</span>
                </div>
              </div>
            </div>

            {/* Was du NICHT brauchst */}
            <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100/50">
              <h3 className="font-bold text-gray-800 text-lg mb-3">Was du NICHT brauchst</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>Eigene Website (Provital stellt deinen Shop)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>Büro oder Geschäftsräume</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>Vorkenntnisse in Tierernährung (lernst du in der Schulung)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>Buchhaltungssoftware (reicht eine einfache Einnahmenüberschussrechnung)</span>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Berechnung */}
          <h2 className="text-2xl font-bold mb-6">Wann bist du im Plus?</h2>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-12">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <p className="text-3xl font-extrabold text-gray-900">78 €</p>
                  <p className="text-xs text-gray-500 mt-1">Dein Einstieg</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <p className="text-3xl font-extrabold text-green-700">~25 €</p>
                  <p className="text-xs text-gray-500 mt-1">Provision pro Bestellung</p>
                </div>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                <p className="text-sm text-gray-700">
                  <strong>Rechenbeispiel:</strong> Durchschnittlicher Warenkorb 107 € × 23 % Provision = 
                  <strong> 24,61 € pro Bestellung</strong>. Nach nur 3-4 Bestellungen deiner Kunden hast du 
                  dein Einstiegspaket refinanziert. Die meisten Berater schaffen das im ersten Monat.
                </p>
              </div>
              <div className="text-center pt-2">
                <Link
                  href="/einkommen-berechnen"
                  className="inline-block text-sm font-semibold text-green-700 hover:text-green-800 underline decoration-green-300 underline-offset-4"
                >
                  → Verdienst mit dem Provisionsrechner berechnen
                </Link>
              </div>
            </div>
          </div>

          {/* Vergleich mit anderen Nebenjobs */}
          <h2 className="text-2xl font-bold mb-6">Startkosten im Vergleich</h2>
          <p className="text-gray-600 mb-6">
            Jeder Nebenverdienst hat Startkosten. So schneidet Anifit ab:
          </p>
          <div className="space-y-3 mb-12">
            {[
              { name: "Dropshipping / Online-Shop", cost: "500-5.000 €", note: "Produktentwicklung, Shopify, Werbung, Retouren", risk: "Hoch" },
              { name: "Franchise (Hundeschule etc.)", cost: "5.000-50.000 €", note: "Lizenzgebühr, Ausstattung, Räumlichkeiten", risk: "Sehr hoch" },
              { name: "Freelancing / Beratung", cost: "200-2.000 €", note: "Website, Tools, Akquise, Zertifizierungen", risk: "Mittel" },
              { name: "Anifit-Fachberater", cost: "ab 78 €", note: "Einstiegspaket, kein weiteres Risiko", risk: "Minimal", highlight: true },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-xl p-4 border ${
                  item.highlight
                    ? "bg-green-50 border-green-200"
                    : "bg-gray-50 border-gray-100"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-bold text-sm ${item.highlight ? "text-green-800" : "text-gray-800"}`}>
                    {item.name}
                  </span>
                  <span className={`font-extrabold text-sm ${item.highlight ? "text-green-700" : "text-gray-700"}`}>
                    {item.cost}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{item.note}</p>
                <p className="text-xs mt-1">
                  Risiko: <span className={`font-semibold ${item.highlight ? "text-green-600" : "text-gray-600"}`}>{item.risk}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Sicherheitsnetz */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-12">
            <h2 className="text-xl font-bold mb-4">Dein Sicherheitsnetz</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg">🛡️</span>
                <div>
                  <strong>Kein Vertrag, keine Laufzeit.</strong> Du kannst jederzeit aufhören. Keine Kündigungsfrist, keine Strafgebühr.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg">🐕</span>
                <div>
                  <strong>Das Einstiegspaket ist echtes Futter.</strong> Selbst wenn du keinen einzigen Kunden gewinnst, hat dein Hund gutes Futter für mehrere Wochen.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg">🤝</span>
                <div>
                  <strong>Persönlicher Mentor.</strong> Enrico begleitet dich in den ersten Wochen. Du bist nicht auf dich allein gestellt.
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mb-6">Häufige Fragen zu Kosten und Einstieg</h2>
          <div className="space-y-4 mb-12">
            {costFaqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl border border-gray-100">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-gray-800 [&::-webkit-details-marker]:hidden list-none">
                  <span>{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-gray-400 shrink-0 ml-4 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>

          {/* Lead Form */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100 mb-12">
            <h2 className="text-xl font-bold text-center mb-2">Alle Details im kostenlosen Guide</h2>
            <p className="text-sm text-gray-600 text-center mb-6">
              5 Emails mit Provisionsmodell, Ablauf und realistischen Zahlen. Kein Spam.
            </p>
            <LeadForm source="kosten" />
          </div>

          {/* Internal Links */}
          <div className="border-t border-gray-100 pt-8">
            <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-4">Weiterlesen</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/einkommen-berechnen" className="block p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-green-50 hover:border-green-100 transition-colors">
                <p className="font-bold text-sm text-gray-800 mb-1">Verdienst-Rechner</p>
                <p className="text-xs text-gray-500">Berechne dein Einkommen mit dem interaktiven Provisionsrechner.</p>
              </Link>
              <Link href="/erfahrungen" className="block p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-green-50 hover:border-green-100 transition-colors">
                <p className="font-bold text-sm text-gray-800 mb-1">Berater-Erfahrungen</p>
                <p className="text-xs text-gray-500">Echte Berichte von Fachberatern aus Enricos Team.</p>
              </Link>
              <Link href="/nebenverdienst-mit-hunden" className="block p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-green-50 hover:border-green-100 transition-colors">
                <p className="font-bold text-sm text-gray-800 mb-1">7 Wege zum Nebenverdienst mit Hunden</p>
                <p className="text-xs text-gray-500">Anifit im Vergleich mit anderen Nebenverdiensten.</p>
              </Link>
              <Link href="/tierberufe" className="block p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-green-50 hover:border-green-100 transition-colors">
                <p className="font-bold text-sm text-gray-800 mb-1">Für Tierärzte, THP & Züchter</p>
                <p className="text-xs text-gray-500">Anifit als Zusatzeinkommen für Fachleute.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-3xl px-6 text-center text-xs text-gray-400">
          <nav aria-label="Footer-Navigation" className="flex flex-wrap justify-center gap-4 mb-3">
            <Link href="/" className="hover:text-gray-600">Startseite</Link>
            <Link href="/guide" className="hover:text-gray-600">Guide</Link>
            <Link href="/impressum" className="hover:text-gray-600">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-gray-600">Datenschutz</Link>
          </nav>
          <p>© 2026 Enrico Bachmann · Anifit-Fachberater</p>
        </div>
      </footer>
    </div>
  );
}
