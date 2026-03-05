import Image from "next/image";
import QuizFunnel from "./_components/QuizFunnel";
import ProvisionsRechner from "./_components/ProvisionsRechner";
import FAQAccordion from "./_components/FAQAccordion";
import StickyMobileCTA from "./_components/StickyMobileCTA";

export const metadata = {
  title: "Zertifizierter Ernährungsberater für Hunde werden | Enrico Bachmann",
  description: "Werde Anifit-Fachberater: 15-30% Provision auf Premium-Hundefutter, lebenslanger Kundenschutz, keine Lagerhaltung. Kostenloser Start.",
  robots: "index, follow",
  alternates: { canonical: "https://partner.anifutter-shop.de" },
  openGraph: { title: "Zertifizierter Ernährungsberater für Hunde werden | Enrico Bachmann", description: "Werde Anifit-Fachberater: 15-30% Provision auf Premium-Hundefutter.", locale: "de_DE" },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "WebPage",
    name: "Anifit Berater werden", url: "https://partner.anifutter-shop.de",
    publisher: { "@type": "Person", name: "Enrico Bachmann" },
    mainEntity: { "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "Muss ich etwas vorab investieren?", acceptedAnswer: { "@type": "Answer", text: "Nein. Die Registrierung ist kostenlos." } },
      { "@type": "Question", name: "Brauche ich Vorkenntnisse?", acceptedAnswer: { "@type": "Answer", text: "Nein. Kostenlose Schulungen inklusive." } },
      { "@type": "Question", name: "Was bedeutet lebenslanger Kundenschutz?", acceptedAnswer: { "@type": "Answer", text: "Jeder Kunde bleibt dauerhaft dir zugeordnet." } },
      { "@type": "Question", name: "Ist das MLM?", acceptedAnswer: { "@type": "Answer", text: "Nein. 100% Provision aus echten Produktverkaeufen." } },
      { "@type": "Question", name: "Wie viel Zeit brauche ich?", acceptedAnswer: { "@type": "Answer", text: "Die meisten starten mit 2-5 Stunden pro Woche." } },
    ]}
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero with Quiz */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-50/30" />
        <div className="relative mx-auto max-w-5xl px-6 pt-12 pb-16">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 text-center lg:text-left">
              <p className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-green-700 bg-green-100 px-4 py-1.5 rounded-full">Kostenloser Guide</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                Du liebst Hunde und willst dabei{" "}
                <span className="text-green-600">etwas Sinnvolles verdienen?</span>
              </h1>
              <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-xl">
                Werde zertifizierter Ernährungsberater für Hunde. Hilf Besitzern bei der Futterumstellung und verdiene
                15–30&nbsp;% Provision — flexibel, ohne Lager, mit persönlichem Mentor.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Image src="/images/enrico-bachmann.jpg" alt="Enrico Bachmann" width={56} height={56} className="rounded-full w-14 h-14 object-cover border-2 border-white shadow" />
                <div className="text-left">
                  <p className="font-semibold text-sm text-gray-900">Enrico Bachmann</p>
                  <p className="text-xs text-gray-500">Anifit-Berater seit 2018 · 1.000+ Kunden</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[420px] flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8" id="quiz">
                <QuizFunnel />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Photo */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/magazin-hero.jpg" alt="Enrico Bachmann mit Hund und ANIfit Produkten" width={800} height={450} className="w-full h-auto" priority />
          </div>
        </div>
      </section>

      {/* So funktioniert es */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-center mb-4">So funktioniert&apos;s</h2>
          <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">Kein Lager, kein Versand, kein Risiko. Provital übernimmt alles — du empfiehlst.</p>
          <div className="grid sm:grid-cols-3 gap-10">
            {[
              { title: "Guide lesen", text: "Alle Infos zu Provision, Produkten und Ablauf — kompakt per E-Mail.", icon: "📩" },
              { title: "Registrieren + Einstiegspaket", text: "Melde dich an und bestelle dein Einstiegspaket (ab 78 €, inkl. Warenproben).", icon: "✅" },
              { title: "Erste Kunden gewinnen", text: "Mit Enricos Unterstützung und Vorlagen startest du sofort.", icon: "🚀" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <span className="text-4xl mb-3 block">{s.icon}</span>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warum Anifit */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Warum Hundebesitzer Anifit lieben</h2>
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden">
              <Image src="/images/schnupperpaket.jpg" alt="ANIfit Schnupperpaket" width={400} height={300} className="w-full h-auto rounded-2xl" />
            </div>
            <div className="space-y-5">
              {[
                { bold: "90–99 % Fleischanteil", text: "Schwedische Lebensmittelqualität" },
                { bold: "Kein Supermarkt-Vertrieb", text: "Kein Preiskampf mit Amazon" },
                { bold: "Kunden bestellen jahrelang nach", text: "Du verdienst automatisch mit" },
                { bold: "Lebenslanger Kundenschutz", text: "Einmal gewonnen, für immer deiner" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-lg mt-0.5">✓</span>
                  <p className="text-gray-700"><strong>{item.bold}</strong> — {item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Hundeo Testsieger */}
      <section className="py-12 border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex-shrink-0 text-center">
              <a href="https://www.hundeo.com/hundefutter" target="_blank" rel="noopener noreferrer">
                <Image src="https://www.hundeo.com/wp-content/uploads/hundeo-logo.svg" alt="Hundeo" width={120} height={40} className="h-8 w-auto mx-auto mb-2" unoptimized />
              </a>
              <p className="text-xs text-gray-400">52 Marken getestet</p>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                <strong>Anifit ist Testsieger im Hundefutter-Test 2026</strong> auf hundeo.com —
                Deutschlands gr\u00f6\u00dftem Hunde-Portal mit 52 getesteten Marken.
                Tier\u00e4rztlich gepr\u00fcft von Mag.med.vet. Emin Jasarevic.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                <em>\u201eAnifit geh\u00f6rt zu den besten Nassfutter-Marken. 93% Fleischanteil in Lebensmittelqualit\u00e4t,
                vorbildliche Deklaration, schwedische Produktion.\u201c</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verdienst Rechner */}
      <section className="bg-green-50 py-20">
        <div className="mx-auto max-w-md px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Was verdienst du?</h2>
          <p className="text-center text-gray-600 mb-8 text-sm">Berechne deinen monatlichen Verdienst:</p>
          <ProvisionsRechner />
        </div>
      </section>

      {/* Mentor */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Dein Mentor</h2>
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-center">
            <Image src="/images/enrico-bachmann.jpg" alt="Enrico Bachmann" width={160} height={160} className="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover border-4 border-white shadow-lg flex-shrink-0" />
            <div>
              <blockquote className="text-gray-700 leading-relaxed">
                &ldquo;Ich bin seit 2018 Anifit-Fachberater und habe über 1.000 aktive Kunden.
                Mein Hund frisst Anifit — ich empfehle nur, was ich selbst nutze.
                Als dein Mentor begleite ich dich persönlich: Einarbeitung, Vorlagen,
                Tipps für die ersten Kunden und laufender Austausch.&rdquo;
              </blockquote>
              <p className="mt-4 font-bold text-gray-900">Enrico Bachmann</p>
              <p className="text-sm text-gray-500">Zertifizierter Ernährungsberater für Hunde &amp; Katzen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zahlen */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "1.000+", label: "aktive Kunden" },
              { value: "seit 2018", label: "dabei" },
              { value: "30 %", label: "max. Provision" },
              { value: "ab 78 €", label: "Einstiegspaket" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-3xl font-extrabold text-green-600">{item.value}</p>
                <p className="text-xs text-gray-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Häufige Fragen</h2>
          <FAQAccordion />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-green-600 py-16">
        <div className="mx-auto max-w-lg px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Bereit für deinen Start?</h2>
          <p className="text-green-100 mb-8">Finde in 60 Sekunden heraus, ob Anifit-Berater zu dir passt.</p>
          <a href="#quiz" className="inline-block py-4 px-10 rounded-xl font-bold text-green-700 bg-white text-lg hover:bg-green-50 transition-colors shadow-lg">
            Quiz starten →
          </a>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-3xl px-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Enrico Bachmann · Anifit-Fachberater</p>
          <p className="mt-1">
            <a href="/impressum" className="hover:text-gray-600">Impressum</a>{" · "}<a href="/datenschutz" className="hover:text-gray-600">Datenschutz</a>
          </p>
        </div>
      </footer>
      <StickyMobileCTA />
    </div>
  );
}
