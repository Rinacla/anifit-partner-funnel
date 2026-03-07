import Link from "next/link";
import type { Metadata } from "next";
import FAQAccordion from "../_components/FAQAccordion";
import LeadForm from "../_components/LeadForm";
import Footer from "@/app/_components/Footer";

export const metadata: Metadata = {
  title: "Anifit Berater Anmeldung: So funktioniert die Registrierung",
  description:
    "Schritt-für-Schritt Anleitung zur Anmeldung als Anifit-Fachberater. Registrierung in 5 Minuten, kostenlos, mit persönlicher Einarbeitung durch deinen Mentor.",
  alternates: { canonical: "https://partner.anifutter-shop.de/anmeldung" },
  openGraph: {
    title: "Anifit Berater Anmeldung: So funktioniert die Registrierung",
    description:
      "In 5 Minuten registriert, persönliche Einarbeitung, kostenloser Start. So wirst du Anifit-Fachberater.",
    locale: "de_DE",
  },
};

const registrationFaqs = [
  {
    q: "Wie lange dauert die Registrierung?",
    a: "Etwa 5 Minuten. Du füllst ein kurzes Formular mit deinen Kontaktdaten aus — Name, Adresse, E-Mail, Telefon. Danach bist du sofort als Fachberater registriert und bekommst Zugang zu deinem persönlichen Beraterbereich.",
  },
  {
    q: "Brauche ich ein Gewerbe für die Anmeldung?",
    a: "Nicht sofort. Du kannst dich erst registrieren und die ersten Schritte machen. Sobald du regelmäßig Provision verdienst, brauchst du eine Gewerbeanmeldung. Die ist in 30 Minuten beim Ordnungsamt erledigt und kostet je nach Stadt 15–65 €. Ich helfe dir dabei.",
  },
  {
    q: "Was passiert nach der Registrierung?",
    a: "Du bekommst sofort deine Zugangsdaten für den Beraterbereich per E-Mail. Innerhalb von 24 Stunden melde ich (Enrico) mich persönlich bei dir, um das erste Gespräch zu planen. Dann besprechen wir deinen individuellen Start — kein Standardprogramm.",
  },
  {
    q: "Kann ich mich wieder abmelden?",
    a: "Ja, jederzeit und ohne Angabe von Gründen. Es gibt keine Vertragslaufzeit, keine Kündigungsfrist und keine versteckten Kosten. Wenn es nichts für dich ist, meldest du dich einfach ab.",
  },
  {
    q: "Muss ich das Einstiegspaket sofort bestellen?",
    a: "Die Registrierung selbst ist kostenlos. Das Einstiegspaket (ab 78 €) enthält Futterproben zum Selbsttesten und Werbematerial. Es ist empfohlen, damit du die Produkte kennenlernst, aber du kannst den Zeitpunkt selbst wählen.",
  },
  {
    q: "Gibt es eine Altersbeschränkung?",
    a: "Du musst mindestens 18 Jahre alt sein, um dich als Fachberater zu registrieren. Ansonsten gibt es keine Einschränkungen — egal ob Student, Angestellter, Rentner oder Selbstständiger.",
  },
];

const steps = [
  {
    num: "1",
    title: "Guide anfordern",
    desc: "Hol dir unseren kostenlosen 5-teiligen E-Mail-Guide. Du erfährst alles über Provision, Produkte und den Ablauf — ohne Verpflichtung.",
    time: "2 Minuten",
    icon: "📩",
  },
  {
    num: "2",
    title: "Persönliches Gespräch",
    desc: "Nach dem Guide melde ich mich bei dir. Wir klären offene Fragen und besprechen, ob der Einstieg für dich passt. Kein Verkaufsgespräch.",
    time: "15–30 Minuten",
    icon: "📞",
  },
  {
    num: "3",
    title: "Registrierung bei Provital",
    desc: "Du füllst das Registrierungsformular aus. Name, Adresse, Kontaktdaten — fertig. Ich schicke dir den Link und begleite dich durch den Prozess.",
    time: "5 Minuten",
    icon: "✅",
  },
  {
    num: "4",
    title: "Einstiegspaket bestellen",
    desc: "Bestelle dein Startpaket (ab 78 €) mit Futterproben zum Selbsttesten. Dein Hund (oder deine Katze) probiert die Produkte — und du kannst authentisch empfehlen.",
    time: "3–5 Werktage Lieferung",
    icon: "📦",
  },
  {
    num: "5",
    title: "Startschulung + erste Kunden",
    desc: "Ich arbeite dich persönlich ein: Kundenansprache, fertige Vorlagen, Fahrplan für deine ersten 5 Kunden. Du startest nicht allein.",
    time: "1. Woche",
    icon: "🚀",
  },
];

const checklistItems = [
  "Kostenloser Guide gelesen",
  "Persönliches Gespräch mit Enrico",
  "Registrierung bei Provital (5 Min.)",
  "Einstiegspaket bestellt (ab 78 €)",
  "Startschulung absolviert",
  "Erste Kunden im Freundes-/Bekanntenkreis angesprochen",
];

export default function AnmeldungPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 py-6">
        <div className="mx-auto max-w-3xl px-6 flex justify-between items-center">
          <Link
            href="/"
            className="font-bold text-gray-900 border-2 border-brand-600 px-3 py-1 rounded-lg"
          >
            Anifit-Partner
          </Link>
          <Link href="/" className="text-sm text-gray-500 hover:text-brand-600">
            &larr; Zurück
          </Link>
        </div>
      </header>

      <main className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          {/* Hero */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-brand-600 uppercase tracking-wider mb-3">
              Anmeldung &amp; Registrierung
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              In 5 Schritten zum{" "}
              <span className="text-brand-600">Anifit-Fachberater</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Die Registrierung dauert 5 Minuten und ist kostenlos. Danach wirst
              du persönlich eingearbeitet — kein Selbststudium, kein
              Alleingelassen-Werden.
            </p>
          </div>

          {/* Steps */}
          <section className="mb-20">
            <div className="space-y-0">
              {steps.map((step, i) => (
                <div key={i} className="relative flex gap-6 pb-10">
                  {/* Vertical line */}
                  {i < steps.length - 1 && (
                    <div
                      className="absolute left-6 top-14 w-0.5 bg-brand-100"
                      style={{ height: "calc(100% - 2rem)" }}
                    />
                  )}
                  {/* Number circle */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center text-lg font-bold shadow-md shadow-brand-600/20 relative z-10">
                    {step.num}
                  </div>
                  {/* Content */}
                  <div className="pt-1 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-xl font-bold text-gray-900">
                        {step.title}
                      </h2>
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What you need */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Was du für die Anmeldung brauchst
            </h2>
            <p className="text-gray-500 mb-6">
              Kein Startkapital, keine Vorkenntnisse. Nur diese Basics:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "📧",
                  label: "E-Mail-Adresse",
                  sub: "Für Login und Kundenkommunikation",
                },
                {
                  icon: "📱",
                  label: "Telefonnummer",
                  sub: "Für die Startschulung mit Enrico",
                },
                {
                  icon: "🏠",
                  label: "Deutsche Adresse",
                  sub: "Für die Registrierung bei Provital",
                },
                {
                  icon: "🐕",
                  label: "Begeisterung für Tiere",
                  sub: "Kein Muss, aber es hilft enorm",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.label}</p>
                    <p className="text-sm text-gray-500">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Checklist */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Deine Starter-Checkliste
            </h2>
            <p className="text-gray-500 mb-6">
              Die meisten neuen Berater sind innerhalb einer Woche startklar:
            </p>
            <div className="space-y-3">
              {checklistItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded border-2 border-gray-300 flex items-center justify-center">
                    <span className="text-xs text-gray-300">
                      {i + 1}
                    </span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Mentor section */}
          <section className="mb-20 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Du startest nicht allein
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-8">
              Jeder neue Berater in meinem Team bekommt persönliche Einarbeitung.
              Keine Onlinekurse, keine Videos — ein echtes Gespräch mit mir.
            </p>
            <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100 max-w-lg mx-auto">
              <div className="space-y-4 text-left">
                {[
                  "Persönliches Startgespräch (Telefon oder Video)",
                  "Fertige Vorlagen für Kundenansprache",
                  "Gemeinsamer Fahrplan für deine ersten 5 Kunden",
                  "Laufender Austausch per WhatsApp oder Telefon",
                  "Zugang zur Berater-Community",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-600 rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                      >
                        <path
                          d="M1 4l2.5 2.5L9 1"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Häufige Fragen zur Anmeldung
            </h2>
            <p className="text-gray-500 mb-8 text-center">
              Was neue Berater am häufigsten wissen wollen:
            </p>
            <FAQAccordion items={registrationFaqs} />
          </section>

          {/* Lead Form CTA */}
          <section className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Erster Schritt: Kostenlosen Guide holen
              </h2>
              <p className="text-gray-500 max-w-md mx-auto">
                Bevor du dich registrierst, lies den Guide. 5 kompakte E-Mails
                mit allem was du wissen musst. Danach entscheidest du.
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <LeadForm source="anmeldung" />
            </div>
          </section>
        </div>
      </main>

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: registrationFaqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Anifit-Fachberater werden",
                item: "https://partner.anifutter-shop.de",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Anmeldung",
                item: "https://partner.anifutter-shop.de/anmeldung",
              },
            ],
          }),
        }}
      />

      {/* JSON-LD: HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Anifit-Fachberater werden: Anmeldung Schritt für Schritt",
            description:
              "So meldest du dich als Anifit-Fachberater an und startest mit persönlicher Einarbeitung.",
            totalTime: "PT30M",
            estimatedCost: {
              "@type": "MonetaryAmount",
              currency: "EUR",
              value: "78",
            },
            step: steps.map((s, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: s.title,
              text: s.desc,
            })),
          }),
        }}
      />

      <Footer />
    </div>
  );
}
