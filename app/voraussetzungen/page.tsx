import type { Metadata } from "next";
import LeadForm from "../_components/LeadForm";

export const metadata: Metadata = {
  title: "Voraussetzungen als Anifit-Berater — Was du wirklich brauchst",
  description:
    "Was braucht man, um Anifit-Berater zu werden? Keine Ausbildung, kein Startkapital, kein Gewerbeschein. Die ehrlichen Anforderungen im Überblick.",
  alternates: { canonical: "https://partner.anifutter-shop.de/voraussetzungen" },
  openGraph: {
    title: "Voraussetzungen als Anifit-Berater",
    description:
      "Keine Ausbildung, kein Startkapital, kein Gewerbeschein. Was du wirklich brauchst, um als Anifit-Fachberater zu starten.",
    locale: "de_DE",
  },
};

const REQUIREMENTS = [
  {
    icon: "✅",
    title: "Du bist mindestens 18 Jahre alt",
    text: "Das einzige formale Kriterium. Du brauchst keinen bestimmten Schulabschluss und keine Berufsausbildung.",
  },
  {
    icon: "✅",
    title: "Du hast einen Wohnsitz in Deutschland, Österreich oder der Schweiz",
    text: "Anifit liefert in DACH. Du kannst von überall beraten, aber deine Kunden bestellen im deutschsprachigen Raum.",
  },
  {
    icon: "✅",
    title: "Du magst Tiere und ihre Besitzer",
    text: "Du musst kein Tierexperte sein. Aber ehrliches Interesse an artgerechter Ernährung macht die Beratung authentisch.",
  },
  {
    icon: "✅",
    title: "Du kannst 2–5 Stunden pro Woche investieren",
    text: "Kein Vollzeit-Job nötig. Die meisten starten nebenher und wachsen organisch. Es gibt keine Mindest-Arbeitszeit.",
  },
  {
    icon: "✅",
    title: "Du hast ein Smartphone oder einen Computer",
    text: "Für Kundenkontakt per WhatsApp, Email oder Telefon. Mehr Technik brauchst du nicht.",
  },
];

const NOT_NEEDED = [
  { icon: "✗", text: "Keine Ausbildung in Tierernährung (kostenlose Schulung inklusive)" },
  { icon: "✗", text: "Kein Gewerbeschein (steuerfrei bis 410 €/Jahr, danach einfach als Nebeneinkommen)" },
  { icon: "✗", text: "Kein Startkapital (Einstiegspaket ab 78 €, keine laufenden Kosten)" },
  { icon: "✗", text: "Kein Lager, kein Versand (übernimmt Provital komplett)" },
  { icon: "✗", text: "Keine Vertragsbindung (jederzeit aufhören, kein Risiko)" },
  { icon: "✗", text: "Keine Erfahrung im Vertrieb (Einarbeitung durch deinen Mentor)" },
];

const IDEAL_FOR = [
  { emoji: "🐕", title: "Hundebesitzer & Katzenbesitzer", text: "Du kennst die Herausforderungen bei der Fütterung aus erster Hand." },
  { emoji: "🏥", title: "Tierärzte, Tierheilpraktiker, Züchter", text: "Anifit passt perfekt als Zusatzempfehlung in deiner Praxis." },
  { emoji: "🎓", title: "Hundetrainer & Tierphysiotherapeuten", text: "Deine Kunden vertrauen dir bereits. Ernährung ist der nächste Schritt." },
  { emoji: "👩‍👧", title: "Eltern in Teilzeit / Elternzeit", text: "Flexible Zeiteinteilung, von zu Hause aus, kein Chef." },
  { emoji: "👴", title: "Rentner & Vorruheständler", text: "Sinnvolle Beschäftigung mit echtem Einkommen, im eigenen Tempo." },
  { emoji: "💼", title: "Angestellte mit Nebenjob-Wunsch", text: "2–5 Stunden pro Woche reichen für einen spürbaren Zusatzverdienst." },
];

const FAQ_ITEMS = [
  {
    q: "Brauche ich einen Gewerbeschein?",
    a: "Nein, nicht sofort. Bis 410 € Gewinn pro Jahr ist es steuerfrei. Darüber hinaus meldest du ein Kleingewerbe an — das kostet je nach Stadt 20–60 € und dauert 15 Minuten. Dein Steuerberater hilft dir dabei.",
  },
  {
    q: "Muss ich mich in Tierernährung auskennen?",
    a: "Nein. Anifit bietet kostenlose Online-Schulungen und eine offizielle Zertifizierung zum Ernährungsberater für Hunde und Katzen. Du lernst alles Schritt für Schritt.",
  },
  {
    q: "Wie schnell kann ich starten?",
    a: "Innerhalb von 24 Stunden. Registrierung dauert 5 Minuten, Einstiegspaket kommt in 2–3 Werktagen. Dein Mentor meldet sich am selben Tag.",
  },
  {
    q: "Kann ich das neben meinem Job machen?",
    a: "Ja, die meisten Berater starten nebenberuflich. 2–5 Stunden pro Woche reichen. Es gibt keine Mindestanforderungen oder Umsatzvorgaben.",
  },
  {
    q: "Brauche ich eigene Produkte auf Lager?",
    a: "Nein. Provital übernimmt Produktion, Lagerung, Versand und Retouren. Du empfiehlst, der Kunde bestellt direkt, du bekommst Provision.",
  },
  {
    q: "Was passiert, wenn es nichts für mich ist?",
    a: "Dann hörst du auf. Es gibt keinen Vertrag, keine Mindestlaufzeit, keine Kündigung. Du trägst kein finanzielles Risiko.",
  },
];

export default function VoraussetzungenPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: "https://partner.anifutter-shop.de" },
      { "@type": "ListItem", position: 2, name: "Voraussetzungen", item: "https://partner.anifutter-shop.de/voraussetzungen" },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-3xl px-6 pt-8 text-xs text-gray-400">
        <a href="/" className="hover:text-green-600 transition-colors">Start</a>
        <span className="mx-1.5">/</span>
        <span className="text-gray-600">Voraussetzungen</span>
      </nav>

      {/* Hero */}
      <section className="pt-8 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-5">
            Was brauchst du, um Anifit-Berater zu werden?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Kurze Antwort: weniger als du denkst. Keine Ausbildung, kein Startkapital, keine Erfahrung im Vertrieb.
            Hier ist die ehrliche Liste.
          </p>
        </div>
      </section>

      {/* Was du brauchst */}
      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold mb-8">Die 5 echten Voraussetzungen</h2>
          <div className="space-y-5">
            {REQUIREMENTS.map((r, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                  {r.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{r.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Was du NICHT brauchst */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold mb-8">Was du nicht brauchst</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {NOT_NEEDED.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <span className="text-red-400 font-bold text-lg flex-shrink-0">{item.icon}</span>
                <p className="text-sm text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal für */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold mb-4">Besonders geeignet für</h2>
          <p className="text-gray-500 mb-8">
            Es gibt keinen typischen Anifit-Berater. Aber bestimmte Ausgangssituationen machen den Start leichter:
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {IDEAL_FOR.map((p, i) => (
              <div key={i} className="rounded-xl border border-gray-100 p-5 hover:border-green-200 transition-colors">
                <div className="text-2xl mb-2">{p.emoji}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{p.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-green-50 py-12">
        <div className="mx-auto max-w-3xl px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-extrabold text-green-700">0 €</p>
              <p className="text-xs text-gray-600 mt-1">Registrierungskosten</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-green-700">78 €</p>
              <p className="text-xs text-gray-600 mt-1">Einstiegspaket (einmalig)</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-green-700">5 Min.</p>
              <p className="text-xs text-gray-600 mt-1">Anmeldung</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-green-700">24h</p>
              <p className="text-xs text-gray-600 mt-1">Mentor meldet sich</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Häufige Fragen zu den Voraussetzungen</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, i) => (
              <details key={i} className="group rounded-xl border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-gray-900 text-sm hover:bg-gray-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <svg
                    className="w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
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
        </div>
      </section>

      {/* CTA + LeadForm */}
      <section className="bg-green-600 py-16">
        <div className="mx-auto max-w-md px-6">
          <h2 className="text-2xl font-bold text-white text-center mb-3">
            Erfüllst du die Voraussetzungen?
          </h2>
          <p className="text-green-100 text-center mb-6">
            Dann hol dir den kostenlosen Guide und erfahre, wie der Start konkret aussieht:
          </p>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
            <LeadForm idPrefix="voraussetzungen-" source="voraussetzungen" />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-bold text-gray-900 mb-4">Weiterlesen</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="/kosten" className="block rounded-xl border border-gray-100 p-4 hover:border-green-200 transition-colors">
              <p className="font-semibold text-sm text-gray-900">Kosten &amp; Einstieg</p>
              <p className="text-xs text-gray-500 mt-1">Was der Start kostet und ab wann er sich rechnet</p>
            </a>
            <a href="/anmeldung" className="block rounded-xl border border-gray-100 p-4 hover:border-green-200 transition-colors">
              <p className="font-semibold text-sm text-gray-900">Anmeldung &amp; Registrierung</p>
              <p className="text-xs text-gray-500 mt-1">Schritt-für-Schritt-Anleitung zum Start</p>
            </a>
            <a href="/erfahrungen" className="block rounded-xl border border-gray-100 p-4 hover:border-green-200 transition-colors">
              <p className="font-semibold text-sm text-gray-900">Berater-Erfahrungen</p>
              <p className="text-xs text-gray-500 mt-1">Was andere Berater über den Einstieg berichten</p>
            </a>
            <a href="/einkommen-berechnen" className="block rounded-xl border border-gray-100 p-4 hover:border-green-200 transition-colors">
              <p className="font-semibold text-sm text-gray-900">Verdienst-Rechner</p>
              <p className="text-xs text-gray-500 mt-1">Berechne dein monatliches Einkommen</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer nav back */}
      <div className="pb-8 text-center">
        <a href="/" className="text-sm text-green-700 font-semibold hover:text-green-800 transition-colors">
          ← Zurück zur Startseite
        </a>
      </div>
    </main>
  );
}
