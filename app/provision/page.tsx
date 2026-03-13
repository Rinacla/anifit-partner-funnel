import Link from "next/link";
import type { Metadata } from "next";
import LeadForm from "../_components/LeadForm";
import Footer from "@/app/_components/Footer";
import Breadcrumb from "../_components/Breadcrumb";
import StarterPaketCTA from "@/app/_components/StarterPaketCTA";

export const metadata: Metadata = {
  title: "Anifit Provision: 15–30 % lebenslang auf jede Bestellung",
  description:
    "So funktioniert das Anifit Provisionsmodell: 5 Stufen von 15 bis 30 %, lebenslanger Kundenschutz, automatische Abrechnung. Rechenbeispiele und echte Zahlen.",
  alternates: { canonical: "https://partner.anifutter-shop.de/provision" },
  openGraph: {
    title: "Anifit Provision: 15–30 % lebenslang auf jede Bestellung",
    description:
      "5 Provisionsstufen, lebenslanger Kundenschutz, monatliche Auszahlung. So verdienst du als Anifit-Fachberater.",
    locale: "de_DE",
  },
};

const tiers = [
  { name: "Starter", percent: 15, customers: "0–4", color: "bg-gray-100 text-gray-700 border-gray-200" },
  { name: "Berater", percent: 19, customers: "5–14", color: "bg-gray-100 text-gray-700 border-gray-200" },
  { name: "Fachberater", percent: 23, customers: "15–49", color: "bg-brand-50 text-brand-800 border-brand-200" },
  { name: "Experte", percent: 27, customers: "50–99", color: "bg-brand-50 text-brand-800 border-brand-200" },
  { name: "Top-Berater", percent: 30, customers: "100+", color: "bg-brand-100 text-brand-900 border-brand-300" },
];

const provisionFaqs = [
  {
    q: "Wann wird die Provision ausgezahlt?",
    a: "Monatlich. Provital rechnet alle Bestellungen deiner Kunden automatisch ab und überweist dir deine Provision. Du musst nichts tracken oder nachfassen.",
  },
  {
    q: "Gilt die Provision auch auf Nachbestellungen?",
    a: "Ja, auf jede einzelne. Durch den lebenslangen Kundenschutz ist jeder Kunde, den du gewinnst, dauerhaft dir zugeordnet. Bestellt er in 3 Jahren nochmal, bekommst du deine Provision.",
  },
  {
    q: "Kann ich Kunden an andere Berater verlieren?",
    a: "Nein. Der lebenslange Kundenschutz bedeutet: Dein Kunde bleibt dein Kunde. Auch wenn ein anderer Berater ihn anspricht, läuft die Bestellung über dich.",
  },
  {
    q: "Steigt meine Provisionsstufe automatisch?",
    a: "Ja. Sobald du die Kundenzahl für die nächste Stufe erreichst, wechselst du automatisch. Die höhere Provision gilt dann für ALLE deine Kunden, auch die bestehenden.",
  },
  {
    q: "Was passiert mit meiner Provision, wenn ich im Urlaub bin?",
    a: "Nichts ändert sich. Deine Kunden bestellen weiter über ihren persönlichen Zugang, und du verdienst weiter. Das ist der Kern des passiven Einkommens bei Anifit.",
  },
  {
    q: "Gibt es eine Deckelung der Provision?",
    a: "Nein. Es gibt keine Obergrenze. Je mehr Kunden du hast und je höher deine Stufe, desto mehr verdienst du. Bei 100+ Kunden und 30 % Provision sind 3.000+ € pro Monat realistisch.",
  },
];

export default function ProvisionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: provisionFaqs.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: "Provisionsmodell", item: "https://partner.anifutter-shop.de/provision" },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50/30 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Provisionsmodell" }]} />
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Anifit Provision:{" "}
            <span className="text-brand-600">15 bis 30 % auf jede Bestellung</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Bei Anifit verdienst du nicht einmalig, sondern bei jeder Nachbestellung deiner Kunden.
            Lebenslang. Hier erfährst du genau, wie das Provisionsmodell funktioniert und was realistisch drin ist.
          </p>
        </div>
      </section>

      {/* Wie es funktioniert */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold mb-4">Wie das Provisionsmodell funktioniert</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Du empfiehlst Anifit-Produkte an Hundebesitzer. Bestellt ein Kunde über deinen persönlichen Link, bekommst du
            Provision auf den gesamten Warenkorbwert. Bei jeder Bestellung, nicht nur der ersten.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-xl p-5 text-center border border-gray-200">
              <span className="text-2xl mb-2 block">🔗</span>
              <p className="font-bold text-sm mb-1">Kunde bestellt über deinen Link</p>
              <p className="text-xs text-gray-500">Kein Druck, kein Kaltakquise. Du empfiehlst authentisch.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center border border-gray-200">
              <span className="text-2xl mb-2 block">📦</span>
              <p className="font-bold text-sm mb-1">Provital liefert direkt</p>
              <p className="text-xs text-gray-500">Lager, Versand, Retouren: alles übernimmt der Hersteller.</p>
            </div>
            <div className="bg-brand-50 rounded-xl p-5 text-center border border-brand-200">
              <span className="text-2xl mb-2 block">💰</span>
              <p className="font-bold text-sm text-brand-800 mb-1">Du bekommst Provision</p>
              <p className="text-xs text-gray-600">Monatliche Abrechnung, automatisch. Auch auf Nachbestellungen.</p>
            </div>
          </div>

          {/* Die 5 Stufen */}
          <h2 className="text-2xl font-bold mb-2">Die 5 Provisionsstufen</h2>
          <p className="text-gray-600 mb-6">
            Je mehr Kunden du gewinnst, desto höher steigt deine Provision. Die Stufe gilt dann für alle Bestellungen, auch bestehender Kunden.
          </p>

          <div className="space-y-3 mb-8">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`rounded-xl p-4 border flex items-center justify-between ${tier.color}`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-extrabold w-14 text-center">{tier.percent}%</span>
                  <div>
                    <p className="font-bold text-sm">{tier.name}</p>
                    <p className="text-xs opacity-70">{tier.customers} aktive Kunden</p>
                  </div>
                </div>
                {i < tiers.length - 1 && (
                  <svg className="w-5 h-5 opacity-30 hidden sm:block" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" /></svg>
                )}
                {i === tiers.length - 1 && (
                  <span className="text-xs font-bold bg-brand-600 text-white px-2 py-1 rounded-md">Maximum</span>
                )}
              </div>
            ))}
          </div>

          <div className="bg-warm-50 rounded-xl p-5 border border-warm-100 mb-12">
            <p className="text-sm text-gray-700">
              <strong>Startbonus:</strong> Gewinnst du in den ersten 30 Tagen 3 Kunden, springst du direkt auf 30 % Provision für 3 Monate.
              Auch als kompletter Neueinsteiger.
            </p>
          </div>

          {/* Rechenbeispiele */}
          <h2 className="text-2xl font-bold mb-6">Konkrete Rechenbeispiele</h2>
          <p className="text-gray-600 mb-6">
            Durchschnittlicher Warenkorb bei Anifit: 107 €. So sieht das in der Praxis aus:
          </p>

          <div className="space-y-4 mb-8">
            {[
              { kunden: 5, stufe: "Starter (15%)", provision: 80, monat: "80 €", jahr: "960 €", zeit: "1-2 h/Woche" },
              { kunden: 15, stufe: "Fachberater (23%)", provision: 369, monat: "369 €", jahr: "4.428 €", zeit: "2-4 h/Woche" },
              { kunden: 50, stufe: "Experte (27%)", provision: 1445, monat: "1.445 €", jahr: "17.340 €", zeit: "5-8 h/Woche" },
              { kunden: 100, stufe: "Top-Berater (30%)", provision: 3210, monat: "3.210 €", jahr: "38.520 €", zeit: "Teilzeit/Vollzeit" },
            ].map((ex, i) => (
              <div key={i} className={`rounded-xl p-5 border ${i === 3 ? "bg-brand-50 border-brand-200" : "bg-gray-50 border-gray-200"}`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <div className="sm:w-1/4">
                    <p className="text-xs text-gray-500">Kunden</p>
                    <p className="font-extrabold text-lg">{ex.kunden}</p>
                  </div>
                  <div className="sm:w-1/4">
                    <p className="text-xs text-gray-500">Stufe</p>
                    <p className="font-semibold text-sm">{ex.stufe}</p>
                  </div>
                  <div className="sm:w-1/4">
                    <p className="text-xs text-gray-500">Pro Monat</p>
                    <p className={`font-extrabold text-lg ${i === 3 ? "text-brand-700" : "text-gray-900"}`}>{ex.monat}</p>
                  </div>
                  <div className="sm:w-1/4">
                    <p className="text-xs text-gray-500">Pro Jahr</p>
                    <p className="font-bold text-sm text-gray-700">{ex.jahr}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Zeitaufwand: {ex.zeit}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mb-12">
            Berechnung: Kunden × Ø Warenkorb 107 € × Provisionsstufe. Echte Werte aus der Berater-Statistik.
            Monatliche Nachbestellrate je nach Kundenstamm.
          </p>

          <div className="text-center mb-12">
            <Link
              href="/einkommen-berechnen"
              className="inline-flex items-center gap-2 bg-brand-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-brand-700 transition-colors text-sm shadow-lg shadow-brand-600/20"
            >
              Deinen Verdienst berechnen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>

          {/* Lebenslanger Kundenschutz */}
          <h2 className="text-2xl font-bold mb-4">Lebenslanger Kundenschutz: Der entscheidende Unterschied</h2>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-12">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Bei den meisten Nebenverdiensten verdienst du nur, solange du aktiv arbeitest.
                Anifit ist anders: Jeder Kunde, den du einmal gewinnst, bleibt dir dauerhaft zugeordnet.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-bold text-sm mb-2 text-gray-700">Klassischer Nebenjob</p>
                  <div className="space-y-1 text-xs text-gray-500">
                    <p>✗ Aufhören = kein Einkommen</p>
                    <p>✗ Jede Stunde muss gearbeitet werden</p>
                    <p>✗ Kein Kundenbestand</p>
                  </div>
                </div>
                <div className="bg-brand-50 rounded-xl p-4 border border-brand-100">
                  <p className="font-bold text-sm mb-2 text-brand-800">Anifit-Provision</p>
                  <div className="space-y-1 text-xs text-brand-700">
                    <p>✓ Kunden bestellen weiter, auch ohne dein Zutun</p>
                    <p>✓ Provision auf JEDE Nachbestellung</p>
                    <p>✓ Dein Kundenstamm wächst stetig</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                <strong>67 % der Hundekunden bestellen erneut.</strong> Bei einem durchschnittlichen Warenkorb von 107 €
                und 23 % Provision sind das 24,61 € Provision pro Bestellung, ohne dass du etwas tun musst.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mb-6">Häufige Fragen zum Provisionsmodell</h2>
          <div className="space-y-4 mb-12">
            {provisionFaqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl border border-gray-200">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-gray-700 [&::-webkit-details-marker]:hidden list-none">
                  <span>{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-gray-500 shrink-0 ml-4 transition-transform group-open:rotate-180"
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
          <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100 mb-12">
            <h2 className="text-xl font-bold text-center mb-2">Alle Details im kostenlosen Guide</h2>
            <p className="text-sm text-gray-600 text-center mb-6">
              5 Emails mit dem vollständigen Provisionsmodell, Rechenbeispielen und Startbonus-Details. Kein Spam.
            </p>
            <LeadForm source="provision" />
          </div>

          {/* Internal Links */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-4">Weiterlesen</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/einkommen-berechnen" className="block p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-brand-50 hover:border-brand-100 transition-colors">
                <p className="font-bold text-sm text-gray-700 mb-1">Verdienst-Rechner</p>
                <p className="text-xs text-gray-500">Berechne deinen monatlichen Verdienst mit dem interaktiven Rechner.</p>
              </Link>
              <Link href="/kosten" className="block p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-brand-50 hover:border-brand-100 transition-colors">
                <p className="font-bold text-sm text-gray-700 mb-1">Kosten und Einstieg</p>
                <p className="text-xs text-gray-500">Ab 78 € starten. Die vollständige Kostenaufstellung.</p>
              </Link>
              <Link href="/erfahrungen" className="block p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-brand-50 hover:border-brand-100 transition-colors">
                <p className="font-bold text-sm text-gray-700 mb-1">Berater-Erfahrungen</p>
                <p className="text-xs text-gray-500">Echte Berichte und Verdienstzahlen von Fachberatern.</p>
              </Link>
              <Link href="/anmeldung" className="block p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-brand-50 hover:border-brand-100 transition-colors">
                <p className="font-bold text-sm text-gray-700 mb-1">Anmeldung und Registrierung</p>
                <p className="text-xs text-gray-500">So läuft die Registrierung als Anifit-Fachberater ab.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Starter-Paket CTA */}
      <div className="max-w-2xl mx-auto px-4 my-12">
        <StarterPaketCTA />
      </div>

      <Footer />
    </div>
  );
}
