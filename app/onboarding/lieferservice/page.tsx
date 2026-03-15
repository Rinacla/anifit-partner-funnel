import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/_components/Footer";

export const metadata: Metadata = {
  title: "Lieferservice-Strategie | Anifit Onboarding",
  description: "Warum Abo-Kunden 7x wertvoller sind und wie du sie gewinnst.",
  robots: { index: false, follow: false },
};

const WA_LINK = "https://wa.me/4915204000990?text=Hi%20Enrico%2C%20ich%20habe%20eine%20Frage%20zum%20Lieferservice.";

export default function LieferservicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-50 to-white">
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-3xl px-6 py-4 flex items-center gap-3">
          <Link href="/onboarding" className="text-gray-400 hover:text-gray-600 text-sm">← Zurück</Link>
          <span className="text-gray-300">|</span>
          <span className="text-sm font-medium text-gray-900">Schritt 3: Lieferservice</span>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="flex items-center gap-3 mb-6">
          <Image src="/images/anifit-logo.png" alt="Anifit" width={32} height={32} className="w-8 h-8 object-contain" />
          <h1 className="text-2xl font-bold text-gray-900">Lieferservice = Dein Turbo</h1>
        </div>

        <div className="space-y-6">
          {/* Key Insight */}
          <div className="bg-brand-600 rounded-xl p-6 text-white">
            <p className="text-lg font-bold mb-2">Kunden im Lieferservice sind 7x wertvoller</p>
            <p className="text-brand-100 text-sm">
              Ein Einzelbesteller kauft 1-2 mal und verschwindet.
              Ein Lieferservice-Kunde bestellt jeden Monat automatisch — und bleibt im Schnitt über 2 Jahre.
            </p>
          </div>

          {/* Vergleich */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-4">Der Unterschied</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">Einzelbesteller</p>
                <p className="text-xl font-bold text-gray-400">~150 EUR</p>
                <p className="text-xs text-gray-400">Gesamtumsatz</p>
              </div>
              <div className="bg-brand-50 rounded-lg p-4 text-center border-2 border-brand-200">
                <p className="text-xs text-brand-600 mb-1">Lieferservice-Kunde</p>
                <p className="text-xl font-bold text-brand-700">~2.200 EUR</p>
                <p className="text-xs text-brand-600">Gesamtumsatz</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              Basierend auf echten Daten unserer Kunden. Durchschnittlicher Lieferservice-CLV: 2.193 EUR.
            </p>
          </div>

          {/* Wie ansprechen */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-3">So bringst du Kunden in den Lieferservice</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Nach der ersten Bestellung fragst du einfach:
            </p>
            <div className="bg-brand-50 rounded-lg p-5 border border-brand-100">
              <p className="text-sm text-brand-900 italic leading-relaxed">
                &quot;Hey [Name], hat [Hundename] das Futter gemocht? Wenn ja: Mit dem Lieferservice
                kommt das Futter automatisch jeden Monat — du musst an nichts denken und sparst dir
                die Versandkosten. Soll ich das für dich einrichten?&quot;
              </p>
            </div>
          </div>

          {/* Argumente */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-3">Die 3 besten Argumente</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-lg">🚚</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Bequemlichkeit</p>
                  <p className="text-xs text-gray-500">&quot;Das Futter kommt automatisch — du musst nie wieder dran denken.&quot;</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">💶</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Kostenlos versandt</p>
                  <p className="text-xs text-gray-500">&quot;Ab 19 EUR/Monat ist der Versand gratis.&quot;</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🔄</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Flexibel</p>
                  <p className="text-xs text-gray-500">&quot;Du kannst jederzeit pausieren, ändern oder kündigen. Kein Risiko.&quot;</p>
                </div>
              </div>
            </div>
          </div>

          {/* Deine Provision */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-3">💰 Was das für dich bedeutet</h2>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between py-1.5 border-b border-gray-50">
                <span>10 Lieferservice-Kunden × 80 EUR/Monat</span>
                <span className="font-medium text-gray-900">800 EUR Umsatz</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gray-50">
                <span>Deine Provision (20%)</span>
                <span className="font-medium text-gray-900">160 EUR / Monat</span>
              </div>
              <div className="flex justify-between py-1.5 bg-brand-50 rounded px-2 -mx-2">
                <span className="font-medium text-brand-900">Pro Jahr — ohne Mehraufwand</span>
                <span className="font-bold text-brand-900">~1.920 EUR</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Das ist passives Einkommen. Deine Kunden bestellen automatisch, du bekommst jeden Monat Provision.
            </p>
          </div>

          {/* Zurück */}
          <div className="bg-brand-50 rounded-xl p-6 border border-brand-100 text-center">
            <p className="text-sm text-brand-800 mb-3">
              Du hast Fragen oder brauchst Hilfe beim Einrichten?
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp an Enrico
            </a>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/onboarding"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              ← Zurück zur Übersicht
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
