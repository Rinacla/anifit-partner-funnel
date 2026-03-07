import Image from "next/image";
import ContactForm from "../_components/ContactForm";
import FAQAccordion from "../_components/FAQAccordion";
import type { FAQItem } from "../_components/FAQAccordion";
import Footer from "@/app/_components/Footer";

const tierberufeFaqs: FAQItem[] = [
  {
    q: "Kostet die Registrierung als Partner etwas?",
    a: "Nein. Die Registrierung ist kostenlos. Sie gehen keine Verpflichtungen ein und es gibt keine Mindestabnahme. Sie bestellen einfach zum Einkaufspreis, wenn Sie möchten.",
  },
  {
    q: "Wie funktioniert der 30 % Rabatt?",
    a: "Nach der Registrierung bestellen Sie das gesamte Anifit-Sortiment direkt zum Beraterpreis, das sind rund 30 % unter dem regulären Verkaufspreis. Das gilt ab der ersten Bestellung, ohne Mindestmenge.",
  },
  {
    q: "Muss ich aktiv verkaufen oder Kunden werben?",
    a: "Nein. Viele Tierärzte und THP nutzen den Partner-Status nur für den eigenen Rabatt. Wenn Sie Anifit Ihren Patienten empfehlen und diese über Ihren Link bestellen, erhalten Sie zusätzlich 5 % Provision. Das ist freiwillig.",
  },
  {
    q: "Welche Nachweise brauche ich für die Registrierung?",
    a: "Ein kurzer Tätigkeitsnachweis genügt: Ihre Praxis-Webseite, Ihre Mitgliedskarte im Berufsverband oder ein Ausbildungszertifikat. Provital prüft das unbürokratisch.",
  },
  {
    q: "Gibt es spezielle Pakete für Welpenkäufer?",
    a: "Ja. Züchter können fertige Welpen- und Kitten-Starterpakete bestellen und ihren Käufern als hochwertiges Abschiedspaket mitgeben. Die Käufer bestellen dann direkt nach, Sie erhalten die Provision.",
  },
  {
    q: "Wie läuft der Versand? Muss ich Futter lagern?",
    a: "Provital übernimmt Lagerung, Verpackung und Versand direkt an Ihre Kunden oder an Sie. Sie brauchen kein Lager und keinen logistischen Aufwand.",
  },
];

export const metadata = {
  title: "Anifit für Tierärzte, THP & Züchter | 30 % Rabatt auf Premium-Tiernahrung",
  description: "30 % Sofortrabatt auf das gesamte Anifit-Sortiment für Tierärzte, Tierheilpraktiker und Züchter. Testsieger 2026 (52 Marken). Kostenlose Registrierung.",
  robots: "index, follow",
  alternates: { canonical: "https://partner.anifutter-shop.de/tierberufe" },
};

export default function TierberufePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Back nav */}
      <nav className="border-b border-gray-200 bg-white relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-3 flex items-center justify-between">
          <a href="/" className="text-sm text-gray-500 hover:text-brand-600 transition-colors inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            Fachberater werden
          </a>
          <span className="text-sm text-gray-500">Für Tierärzte, THP &amp; Züchter</span>
        </div>
      </nav>

      {/* Hero with Form */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-50/30" />
        <div className="relative mx-auto max-w-5xl px-6 pt-12 pb-16">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 text-center lg:text-left">
              <p className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-brand-700 bg-brand-100 px-4 py-1.5 rounded-full">
                Für Tierärzte, THP & Züchter
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-tight tracking-tight">
                30 % Rabatt auf <span className="text-brand-600">Anifit Premium-Tiernahrung</span> für Ihre Praxis
              </h1>
              <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-xl">
                Testsieger bei hundeo.com (52 Marken, tierärztlich geprüft). 90 bis 99 % Fleisch in Lebensmittelqualität. Als Partner bestellen Sie zum Einkaufspreis und verdienen 5 % auf Kundenempfehlungen.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Image src="/images/enrico-bachmann.jpg" alt="Enrico Bachmann" width={56} height={56} className="rounded-full w-14 h-14 object-cover border-2 border-white shadow" />
                <div className="text-left">
                  <p className="font-semibold text-sm text-gray-900">Enrico Bachmann</p>
                  <p className="text-xs text-gray-500">Anifit-Fachberater seit 2018, 1.000+ Kunden</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="w-full lg:w-[400px] flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8" id="kontakt">
                <p className="font-bold text-gray-900 text-center mb-1">Unverbindlich anfragen</p>
                <p className="text-xs text-gray-500 text-center mb-5">Antwort innerhalb von 24 Stunden.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { title: "30 % Rabatt", text: "Auf alle eigenen Einkäufe, ab der ersten Bestellung" },
              { title: "5 % Provision", text: "Auf jede Kundenbestellung, dauerhaft" },
              { title: "Welpen-Pakete", text: "Fertige Abschiedspakete für Ihre Welpenkäufer" },
              { title: "Null Aufwand", text: "Provital lagert, verpackt und liefert direkt" },
            ].map((v, i) => (
              <div key={i}>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{v.title}</h3>
                <p className="text-gray-500 text-xs">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produkt + Warum Anifit */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-center mb-10">Futter, das Sie guten Gewissens empfehlen können</h2>
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden">
              <Image src="/images/schnupperpaket.jpg" alt="Anifit Produkte" width={400} height={300} className="w-full h-auto rounded-2xl" />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">90 bis 99 % Fleisch, schwedische Produktion</h3>
                <p className="text-gray-600 text-sm">Lebensmittelqualität, vollständig deklariert. Kein Zucker, kein Getreide. Ideal bei Allergien und sensiblen Mägen.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">Testsieger 2026 bei hundeo.com</h3>
                <p className="text-gray-600 text-sm">52 Marken im Vergleich. Tierärztlich geprüft von Mag.med.vet. Emin Jasarevic. 4,9 Sterne bei Trusted Shops.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">Exklusiver Vertrieb über Fachberater</h3>
                <p className="text-gray-600 text-sm">Kein Supermarkt, kein Amazon. Ihre Patienten kaufen das Futter nicht woanders günstiger.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">Lebenslanger Kundenschutz</h3>
                <p className="text-gray-600 text-sm">Jeder Kunde, den Sie empfehlen, bleibt dauerhaft Ihnen zugeordnet. Jede Nachbestellung bringt Provision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Für wen */}
      <section className="bg-brand-50 py-14">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-center mb-10">Wer kann Partner werden?</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-brand-100">
              <h3 className="font-bold text-gray-900 mb-2">Tierärzte</h3>
              <p className="text-gray-600 text-sm">Sie sehen täglich Hunde mit Futterproblemen. Empfehlen Sie ein Futter, bei dem Sie wissen was drin ist. 30 % günstiger für Ihre Praxis.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-brand-100">
              <h3 className="font-bold text-gray-900 mb-2">Tierheilpraktiker</h3>
              <p className="text-gray-600 text-sm">Ganzheitliche Behandlung beginnt beim Futter. Anifit passt zu einem naturnahen Therapiekonzept. Ihre Kunden vertrauen Ihrer Empfehlung.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-brand-100">
              <h3 className="font-bold text-gray-900 mb-2">Züchter</h3>
              <p className="text-gray-600 text-sm">Spezielle Welpen- und Kittenpakete für Ihre Käufer. Statt einem Zettel mit Futterempfehlung geben Sie ein hochwertiges Starterpaket mit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-14">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Partner werden in 4 Schritten</h2>
          <div className="space-y-3">
            {[
              "Formular ausfüllen oder anrufen",
              "Tätigkeitsnachweis einreichen (Mitgliedskarte, Webseite oder Zertifikat)",
              "Provital registriert Sie als Partner. Kostenlos.",
              "Ab sofort 30 % Rabatt auf alle eigenen Bestellungen",
            ].map((s, i) => (
              <div key={i} className="flex gap-4 items-start bg-gray-50 rounded-xl p-4">
                <span className="text-brand-600 font-bold text-lg flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700 text-sm">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Häufige Fragen zum Partner-Programm</h2>
          <FAQAccordion items={tierberufeFaqs} />
        </div>
      </section>

      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: tierberufeFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* Bottom CTA */}
      <section className="bg-brand-600 py-14">
        <div className="mx-auto max-w-lg px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Fragen zum Partner-Programm?</h2>
          <p className="text-brand-100 mb-6">Ich erkläre Ihnen alles persönlich. Unverbindlich.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4932212619379" className="inline-block py-3 px-8 rounded-xl font-bold text-brand-700 bg-white hover:bg-brand-50 transition-colors shadow-lg">
              Anrufen: +49 322 126 19 379
            </a>
            <a href="#kontakt" className="inline-block py-3 px-8 rounded-xl font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-colors">
              Zum Kontaktformular
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
