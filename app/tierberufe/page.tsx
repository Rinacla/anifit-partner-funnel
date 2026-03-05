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

      {/* Hero with Form */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/30" />
        <div className="relative mx-auto max-w-5xl px-6 pt-12 pb-16">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 text-center lg:text-left">
              <p className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-100 px-4 py-1.5 rounded-full">
                Für Tierärzte, THP & Züchter
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-tight tracking-tight">
                30 % Rabatt auf <span className="text-blue-600">Premium-Tiernahrung</span> für Ihre Praxis
              </h1>
              <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-xl">
                Anifit — Testsieger bei hundeo.com (52 Marken). 90–99 % Fleisch, schwedische Qualität.
                Als Partner erhalten Sie Sofortrabatt + Provision auf Kundenempfehlungen.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Image src="/images/enrico-bachmann.jpg" alt="Enrico Bachmann" width={56} height={56} className="rounded-full w-14 h-14 object-cover border-2 border-white shadow" />
                <div className="text-left">
                  <p className="font-semibold text-sm text-gray-900">Enrico Bachmann</p>
                  <p className="text-xs text-gray-500">Ihr Ansprechpartner · Anifit seit 2018 · 1.000+ Kunden</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="w-full lg:w-[400px] flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8" id="kontakt">
                <p className="font-bold text-gray-900 text-center mb-1">Unverbindlich anfragen</p>
                <p className="text-xs text-gray-500 text-center mb-5">Ich melde mich innerhalb von 24 Stunden.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile — kompakt */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: "💰", title: "30 % Rabatt", text: "Auf alle eigenen Einkäufe, sofort" },
              { icon: "🐾", title: "5 % Provision", text: "Auf Kundenempfehlungen, lebenslang" },
              { icon: "🐕", title: "Welpen-Pakete", text: "Für Ihre Welpenkäufer" },
              { icon: "📦", title: "Null Aufwand", text: "Kein Lager, kein Versand" },
            ].map((v, i) => (
              <div key={i}>
                <span className="text-3xl mb-2 block">{v.icon}</span>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{v.title}</h3>
                <p className="text-gray-500 text-xs">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produkt + Warum Anifit */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-center mb-10">Warum Anifit in Ihrer Praxis?</h2>
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden">
              <Image src="/images/schnupperpaket.jpg" alt="Anifit Produkte" width={400} height={300} className="w-full h-auto rounded-2xl" />
            </div>
            <div className="space-y-4">
              {[
                { bold: "90–99 % Fleischanteil", text: "Schwedische Lebensmittelqualität" },
                { bold: "Testsieger 2026", text: "hundeo.com — 52 Marken, tierärztlich geprüft" },
                { bold: "Exklusiver Vertrieb", text: "Kein Supermarkt, kein Amazon — kein Preiskampf" },
                { bold: "Ideal bei Futterumstellung", text: "Für sensible Mägen, Allergiker und Welpen" },
                { bold: "Lebenslanger Kundenschutz", text: "Ihre Kunden bleiben Ihre Kunden" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-blue-600 font-bold text-lg mt-0.5">✓</span>
                  <p className="text-gray-700 text-sm"><strong>{item.bold}</strong> — {item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Für wen */}
      <section className="bg-blue-50 py-14">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-center mb-10">Für wen ist das Partner-Programm?</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: "🩺", title: "Tierärzte", text: "Empfehlen Sie Futter, dem Sie vertrauen." },
              { icon: "🌿", title: "Tierheilpraktiker", text: "Ernährung als Teil Ihres Therapiekonzepts." },
              { icon: "🐶", title: "Züchter", text: "Beste Ernährung + Pakete für Welpenkäufer." },
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-blue-100">
                <span className="text-3xl mb-3 block">{p.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-14">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-2xl font-bold text-center mb-8">So werden Sie Partner</h2>
          <div className="space-y-3">
            {[
              "Formular ausfüllen oder anrufen",
              "Tätigkeitsnachweis einreichen (Mitgliedskarte oder Webseite)",
              "Provital registriert Sie als Partner (kostenlos)",
              "Sofort 30 % Rabatt auf alle Bestellungen",
            ].map((s, i) => (
              <div key={i} className="flex gap-4 items-start bg-gray-50 rounded-xl p-4">
                <span className="text-blue-600 font-bold text-lg flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700 text-sm">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-blue-600 py-14">
        <div className="mx-auto max-w-lg px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Noch Fragen?</h2>
          <p className="text-blue-100 mb-6">Rufen Sie an oder schreiben Sie mir — unverbindlich.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4932212619379" className="inline-block py-3 px-8 rounded-xl font-bold text-blue-700 bg-white hover:bg-blue-50 transition-colors shadow-lg">
              📞 Anrufen
            </a>
            <a href="#kontakt" className="inline-block py-3 px-8 rounded-xl font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-colors">
              ✉️ Formular →
            </a>
          </div>
        </div>
      </section>

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
