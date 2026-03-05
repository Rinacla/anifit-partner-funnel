import Image from "next/image";
import ContactForm from "../_components/ContactForm";

export const metadata = {
  title: "Anifit für Tierärzte, THP & Züchter | 30% Rabatt",
  description: "Als Tierarzt, Tierheilpraktiker oder Züchter: 30% Sofortrabatt auf Anifit Premium-Tiernahrung + 5% Provision auf Kundenempfehlungen.",
  robots: "index, follow",
  alternates: { canonical: "https://partner.anifutter-shop.de/tierberufe" },
};

export default function TierberufePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/30" />
        <div className="relative mx-auto max-w-4xl px-6 pt-12 pb-16 text-center">
          <p className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-100 px-4 py-1.5 rounded-full">
            Für Tierärzte, THP & Züchter
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            30 % Rabatt auf <span className="text-blue-600">Premium-Tiernahrung</span> für Ihre Praxis
          </h1>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Als Tierarzt, Tierheilpraktiker oder Züchter erhalten Sie 30 % Sofortrabatt auf das gesamte Anifit-Sortiment — Testsieger bei hundeo.com (52 Marken, tierärztlich geprüft).
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Image src="/images/enrico-bachmann.jpg" alt="Enrico Bachmann" width={48} height={48} className="rounded-full w-12 h-12 object-cover border-2 border-white shadow" />
            <div className="text-left">
              <p className="font-semibold text-sm text-gray-900">Enrico Bachmann</p>
              <p className="text-xs text-gray-500">Ihr Ansprechpartner · Anifit seit 2018</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produkt */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/sortiment.jpg" alt="Anifit Sortiment" width={800} height={400} className="w-full h-auto" priority />
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-center mb-10">Ihre Vorteile als Provital Partner</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: "💰", title: "30 % Sofortrabatt", text: "Auf alle eigenen Einkäufe aus dem gesamten Anifit-Sortiment. Direkt ab der ersten Bestellung." },
              { icon: "🐾", title: "5 % Kundenempfehlung", text: "Empfehlen Sie Anifit an Ihre Kunden/Welpenkäufer und erhalten Sie 5 % Provision auf deren Bestellungen." },
              { icon: "🐕", title: "Welpen- & Kittenpakete", text: "Spezielle Pakete für Ihre Welpen- und Kittenkäufer — ein hochwertiges Abschiedsgeschenk." },
              { icon: "📦", title: "Kein Aufwand", text: "Kein Lager, kein Versand. Provital liefert direkt an Sie und Ihre Kunden." },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                <span className="text-2xl mb-3 block">{v.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warum Anifit */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-center mb-10">Warum Anifit in Ihrer Praxis?</h2>
          <div className="space-y-4">
            {[
              { bold: "90–99 % Fleischanteil", text: "Schwedische Lebensmittelqualität, deklariert bis auf die letzte Zutat" },
              { bold: "Testsieger 2026", text: "hundeo.com — 52 Marken getestet, tierärztlich geprüft" },
              { bold: "Kein Supermarkt-Vertrieb", text: "Exklusiv über Fachberater und Partner — kein Preiskampf" },
              { bold: "Ideal bei Futterumstellung", text: "Hochwertige Zusammensetzung für sensible Mägen, Allergiker und Welpen" },
              { bold: "Ihre Kunden bleiben Ihre Kunden", text: "Lebenslanger Kundenschutz — jede Nachbestellung bringt Ihnen Provision" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-blue-600 font-bold text-lg mt-0.5">✓</span>
                <p className="text-gray-700"><strong>{item.bold}</strong> — {item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fuer wen */}
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-center mb-10">Für wen ist das Partner-Programm?</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: "🩺", title: "Tierärzte", text: "Empfehlen Sie Ihren Patienten Futter, dem Sie vertrauen." },
              { icon: "🌿", title: "Tierheilpraktiker", text: "Ganzheitliche Ernährung als Teil Ihres Therapiekonzepts." },
              { icon: "🐶", title: "Züchter", text: "Beste Ernährung für Ihre Welpen + Pakete für Welpenkäufer." },
            ].map((p, i) => (
              <div key={i}>
                <span className="text-4xl mb-3 block">{p.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-center mb-10">So werden Sie Partner</h2>
          <div className="space-y-4 max-w-md mx-auto">
            {[
              "Tätigkeitsnachweis einreichen (Mitgliedskarte oder Webseite)",
              "Provital registriert Sie als Partner (kostenlos)",
              "Sofort 30 % Rabatt auf alle eigenen Bestellungen",
              "Optional: Kunden empfehlen und 5 % Provision erhalten",
            ].map((s, i) => (
              <div key={i} className="flex gap-4 items-start bg-gray-50 rounded-xl p-4">
                <span className="text-blue-600 font-bold text-lg flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Kontaktformular */}
      <section className="bg-blue-600 py-16" id="kontakt">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl font-bold text-white mb-4">Interesse am Partner-Programm?</h2>
              <p className="text-blue-100 mb-6">
                Ich erkläre Ihnen alles persönlich und unverbindlich. Schreiben Sie mir oder rufen Sie direkt an.
              </p>
              <a
                href="tel:+4932212619379"
                className="inline-block py-3 px-8 rounded-xl font-bold text-blue-700 bg-white text-base hover:bg-blue-50 transition-colors shadow-lg"
              >
                📞 +49 322 126 19 379
              </a>
              <p className="text-blue-200 text-sm mt-4">
                Lisa (KI-Beraterin) beantwortet erste Fragen sofort.
                <br />Für Details meldet sich Enrico persönlich.
              </p>
            </div>
            <div className="w-full lg:w-[400px] flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                <p className="font-bold text-gray-900 text-center mb-4">Unverbindlich anfragen</p>
                <ContactForm />
              </div>
            </div>
          </div>
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
    </div>
  );
}
