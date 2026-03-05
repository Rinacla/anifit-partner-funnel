import StickyMobileCTA from "./_components/StickyMobileCTA";
import LeadForm from "./_components/LeadForm";
import FAQAccordion from "./_components/FAQAccordion";
import Testimonials from "./_components/Testimonials";
import ProvisionsRechner from "./_components/ProvisionsRechner";

export const metadata = {
  title: "Anifit Berater werden — Dein Start als Tierernährungsberater",
  description:
    "Werde Anifit-Fachberater und verdiene 15–30 % Provision auf Premium-Hundefutter. Kostenloser Guide, persönlicher Mentor, flexible Zeiteinteilung.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Anifit Berater werden",
    description: "Werde Anifit-Fachberater und verdiene 15-30% Provision auf Premium-Hundefutter.",
    url: "https://partner.anifutter-shop.de",
    publisher: { "@type": "Person", name: "Enrico Bachmann", jobTitle: "Zertifizierter Ernährungsberater für Hunde & Katzen" },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Muss ich etwas vorab investieren?", acceptedAnswer: { "@type": "Answer", text: "Nein. Die Registrierung ist vollständig kostenlos. Provital übernimmt Lagerung, Versand und Retouren. Du trägst kein finanzielles Risiko." } },
        { "@type": "Question", name: "Brauche ich Vorkenntnisse in Tierernährung?", acceptedAnswer: { "@type": "Answer", text: "Nicht zwingend – du bekommst kostenlose Schulungen direkt von Anifit und kannst die offizielle Zertifizierung zum Tierernährungsberater ablegen." } },
        { "@type": "Question", name: "Was bedeutet lebenslanger Kundenschutz?", acceptedAnswer: { "@type": "Answer", text: "Sobald ein Kunde über deinen Link bestellt, ist er dauerhaft dir zugeordnet. Jede Nachbestellung bringt dir Provision – auch Jahre später." } },
        { "@type": "Question", name: "Ist das ein MLM- oder Schneeballsystem?", acceptedAnswer: { "@type": "Answer", text: "Nein. Du verdienst ausschließlich an deinen eigenen Kunden und deren Bestellungen. Provision entsteht zu 100% aus echten Produktverkäufen." } },
        { "@type": "Question", name: "Wie viel Zeit muss ich investieren?", acceptedAnswer: { "@type": "Answer", text: "Die meisten Berater starten mit 2–5 Stunden pro Woche. Es gibt keine Mindestanforderungen." } },
        { "@type": "Question", name: "Wie läuft die Anmeldung ab?", acceptedAnswer: { "@type": "Answer", text: "Registrierungslink klicken, kurzes Formular ausfüllen – fertig in unter 5 Minuten. Danach meldet sich Enrico persönlich bei dir." } },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-white">
        <div className="mx-auto max-w-3xl px-6 pt-16 pb-20 text-center">
          <p className="inline-block mb-4 text-sm font-semibold tracking-wide uppercase text-green-700 bg-green-100 px-4 py-1.5 rounded-full">
            Kostenloser Guide
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
            Dein Start als{" "}
            <span className="text-green-600">Tierernährungsberater</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Erfahre, wie du mit Premium-Hundefutter 15–30&nbsp;% Provision verdienst
            — flexibel, ohne Lager, mit persönlichem Mentor und lebenslangem
            Kundenschutz.
          </p>
        </div>
      </section>
      {/* Trust Bar */}
      <section className="bg-white border-y border-gray-100 py-5">
        <div className="mx-auto max-w-3xl px-6 flex flex-wrap justify-center gap-8 sm:gap-12 text-center">
          {[
            { value: "1.000+", label: "aktive Kunden" },
            { value: "seit 2018", label: "aktiver Berater" },
            { value: "30 %", label: "max. Provision" },
            { value: "0 €", label: "Startkosten" },
          ].map((item, i) => (
            <div key={i} className="min-w-[100px]">
              <p className="text-xl sm:text-2xl font-extrabold text-green-600">{item.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Lead Form */}
      <section id="guide" className="-mt-6 relative z-10 mx-auto max-w-md px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-center mb-1">
            Gratis-Guide anfordern
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Alles, was du für deinen Start wissen musst — in einer kompakten Übersicht.
          </p>
          <LeadForm />
        </div>
      </section>

      {/* Vorteile */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Warum Anifit-Berater werden?
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {[
            {
              icon: "💰",
              title: "15–30 % Provision",
              text: "Auf jede Bestellung deiner Kunden — ein Leben lang dank Kundenschutz.",
            },
            {
              icon: "🏠",
              title: "Kein Lager, kein Versand",
              text: "Provital übernimmt alles: Lager, Versand, Retouren, Zahlungen.",
            },
            {
              icon: "⏰",
              title: "Flexible Zeiteinteilung",
              text: "Nebenjob oder Vollzeit — du entscheidest wann, wo und wie viel.",
            },
            {
              icon: "🎓",
              title: "Kostenlose Ausbildung",
              text: "Online-Schulungen, Webinare und offizielle Zertifizierung inklusive.",
            },
            {
              icon: "🐕",
              title: "Premium-Produkt",
              text: "90–99 % Fleischanteil, schwedische Qualität. Kunden bleiben jahrelang.",
            },
            {
              icon: "🤝",
              title: "Persönlicher Mentor",
              text: "Enrico unterstützt dich beim Start — mit Erfahrung aus 1.000+ Kunden.",
            },
          ].map((v, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-3xl flex-shrink-0">{v.icon}</span>
              <div>
                <h3 className="font-bold text-lg">{v.title}</h3>
                <p className="text-gray-600 mt-1">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* So funktioniert's */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            So funktioniert&apos;s — in 3 Schritten
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Guide lesen",
                text: "Du bekommst alle Infos zu Provision, Produkten und Ablauf — kompakt per E-Mail.",
              },
              {
                step: "2",
                title: "Kostenlos registrieren",
                text: "Melde dich bei Provital an. Keine Kosten, kein Risiko, kein Mindestabsatz.",
              },
              {
                step: "3",
                title: "Erste Kunden gewinnen",
                text: "Mit Enricos Unterstützung, Vorlagen und Schulungen startest du sofort.",
              },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-green-600 text-white text-xl font-bold flex items-center justify-center mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verdienst */}
      <section className="bg-green-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Was verdienst du als Anifit-Berater?
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Deine Provision steigt mit der Anzahl deiner Kunden. Hier ein paar
            Beispiele (Quelle: Provital GmbH):
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { kunden: 12, stufe: "19 %", betrag: "~182 €" },
              { kunden: 25, stufe: "23 %", betrag: "~460 €" },
              { kunden: 50, stufe: "27 %", betrag: "~1.080 €" },
              { kunden: 96, stufe: "30 %", betrag: "~2.304 €" },
            ].map((e, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-green-100"
              >
                <p className="text-3xl font-extrabold text-green-600">
                  {e.betrag}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {e.kunden} Kunden · {e.stufe}
                </p>
                <p className="text-xs text-gray-400 mt-1">monatlich</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-6">
            Basierend auf durchschnittlichen Bestellsummen. Dazu kommen Boni für
            Neukunden, Wiederholungen und mehr.
          </p>
        </div>
      </section>

      {/* Provisionsrechner */}
      <section className="mx-auto max-w-md px-6 py-20">
        <ProvisionsRechner />
      </section>

      {/* Über Enrico */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">
          Dein Mentor: Enrico Bachmann
        </h2>
        <div className="bg-gray-50 rounded-2xl p-8 sm:p-10">
          <blockquote className="text-lg text-gray-700 leading-relaxed">
            „Ich bin seit 2018 Anifit-Fachberater und habe mir ein Business mit
            über 1.000 aktiven Kunden aufgebaut. Mein eigener Hund frisst Anifit
            — ich empfehle nur, was ich selbst nutze. Als dein Mentor unterstütze
            ich dich beim Start: mit Tipps für die ersten Kunden, E-Mail-Vorlagen,
            Werbematerial und regelmäßigem Austausch."
          </blockquote>
          <p className="mt-4 font-semibold text-gray-900">
            Enrico Bachmann
          </p>
          <p className="text-sm text-gray-500">
            Zertifizierter Ernährungsberater für Hunde &amp; Katzen
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">
          Das sagen unsere Berater
        </h2>
        <p className="text-center text-gray-500 mb-10 text-sm">
          Echte Erfahrungen von Anifit-Fachberatern aus unserem Team
        </p>
        <Testimonials />
      </section>
      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Häufige Fragen
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* Bottom CTA with inline form */}
      <section className="bg-green-50 py-20">
        <div className="mx-auto max-w-md px-6">
          <h2 className="text-2xl font-bold text-center mb-2">Bereit für den ersten Schritt?</h2>
          <p className="text-center text-gray-600 mb-8">
            Fordere jetzt den kostenlosen Guide an — dauert nur 30 Sekunden.
          </p>
          <LeadForm idPrefix="bottom-" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-3xl px-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Enrico Bachmann · Anifit-Fachberater</p>
          <p className="mt-1">
            <a href="/impressum" className="hover:text-gray-600">Impressum</a>
            {" · "}
            <a href="/datenschutz" className="hover:text-gray-600">Datenschutz</a>
          </p>
        </div>
      </footer>
      <StickyMobileCTA />
    </div>
  );
}
