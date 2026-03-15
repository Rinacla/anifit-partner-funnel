import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/_components/Footer";

export const metadata: Metadata = {
  title: "Deine ersten 5 Kunden | Anifit Onboarding",
  description: "Konkrete Anleitung: So gewinnst du als neuer Anifit-Berater deine ersten Kunden.",
  robots: { index: false, follow: false },
};

const WA_LINK = "https://wa.me/4915204000990?text=Hi%20Enrico%2C%20ich%20brauche%20Hilfe%20bei%20meinen%20ersten%20Kunden.";

export default function ErsteKundenPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-50 to-white">
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-3xl px-6 py-4 flex items-center gap-3">
          <Link href="/onboarding" className="text-gray-400 hover:text-gray-600 text-sm">← Zurück</Link>
          <span className="text-gray-300">|</span>
          <span className="text-sm font-medium text-gray-900">Schritt 2: Erste Kunden</span>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="flex items-center gap-3 mb-6">
          <Image src="/images/anifit-logo.png" alt="Anifit" width={32} height={32} className="w-8 h-8 object-contain" />
          <h1 className="text-2xl font-bold text-gray-900">Deine ersten 5 Kunden</h1>
        </div>

        <div className="space-y-6">
          {/* Intro */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-600 text-sm leading-relaxed">
              Die meisten erfolgreichen Berater gewinnen ihre ersten Kunden im persönlichen Umfeld.
              Das klingt einfacher als es sich anfühlt — deshalb hier eine konkrete Anleitung.
            </p>
          </div>

          {/* Schritt 1: Liste */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-brand-600 text-white text-sm flex items-center justify-center font-bold">1</span>
              Mach eine Liste
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Schreib alle Personen auf, die du kennst und die einen Hund oder eine Katze haben.
              Familie, Freunde, Nachbarn, Kollegen, Hundewiese-Bekanntschaften.
              Du brauchst nicht viele — 10-15 Namen reichen für den Start.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
              <p className="font-medium text-gray-900 mb-1">Denk an:</p>
              <ul className="space-y-1">
                <li>• Wer postet Hundebilder auf Social Media?</li>
                <li>• Wer hat sich kürzlich einen Hund/eine Katze geholt?</li>
                <li>• Wer beschwert sich über Blähungen, Durchfall oder stumpfes Fell beim Tier?</li>
                <li>• Wer gibt viel Geld für seinen Hund aus? (= qualitätsbewusst)</li>
              </ul>
            </div>
          </div>

          {/* Schritt 2: Ansprechen */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-brand-600 text-white text-sm flex items-center justify-center font-bold">2</span>
              So sprichst du sie an
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Kein Verkaufsgespräch. Du teilst einfach, was du entdeckt hast.
              Hier eine Vorlage die funktioniert:
            </p>
            <div className="bg-brand-50 rounded-lg p-5 border border-brand-100">
              <p className="text-sm text-brand-900 italic leading-relaxed">
                &quot;Hey [Name], ich hab mich gerade als Anifit-Berater selbständig gemacht.
                Das ist schwedisches Premium-Hundefutter mit 90-99% Fleischanteil — richtig gute Qualität.
                Ich hab hier ein Schnupperpaket, wenn du das mal testen willst?
                Dein [Hundename] wird&apos;s lieben. Kostet dich nichts, ich will einfach mal sehen
                wie es ankommt.&quot;
              </p>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Passe den Text an deinen Stil an. Hauptsache authentisch, nicht auswendig gelernt.
            </p>
          </div>

          {/* Schritt 3: Futterproben */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-brand-600 text-white text-sm flex items-center justify-center font-bold">3</span>
              Die Futterproben-Strategie
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Aus deinem Startpaket kannst du kleine Portionen abfüllen und verschenken.
              Das ist dein stärkstes Werkzeug — wenn ein Hund das Futter liebt, verkauft es sich von selbst.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
              <p className="font-medium text-gray-900 mb-2">So funktioniert&apos;s:</p>
              <ol className="space-y-1.5 list-decimal list-inside">
                <li>Gib 2-3 Portionen zum Probieren mit</li>
                <li>Frag nach 2-3 Tagen nach: &quot;Wie hat&apos;s geschmeckt?&quot;</li>
                <li>Wenn positiv: &quot;Soll ich dir ein Schnupperpaket bestellen?&quot;</li>
                <li>Bestelle über deinen Berater-Link → du bekommst Provision</li>
              </ol>
            </div>
          </div>

          {/* Schritt 4: Follow-up */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-brand-600 text-white text-sm flex items-center justify-center font-bold">4</span>
              Dranbleiben (der wichtigste Schritt)
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Die meisten neuen Berater geben nach 1-2 Absagen auf. Das ist normal — nicht jeder braucht
              neues Hundefutter. Aber: Von 10 Gesprächen werden 3-4 interessiert sein und 1-2 bestellen.
              Das ist eine gute Quote. Bleib dran.
            </p>
          </div>

          {/* Beispielrechnung */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-3">💰 Was du mit 5 Kunden verdienst</h2>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between py-1.5 border-b border-gray-50">
                <span>Durchschnittliche Bestellung</span>
                <span className="font-medium text-gray-900">~100 EUR</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gray-50">
                <span>Deine Provision (15-20%)</span>
                <span className="font-medium text-gray-900">~17 EUR / Bestellung</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gray-50">
                <span>5 Kunden × monatliche Nachbestellung</span>
                <span className="font-medium text-gray-900">~85 EUR / Monat</span>
              </div>
              <div className="flex justify-between py-1.5 bg-brand-50 rounded px-2 -mx-2">
                <span className="font-medium text-brand-900">Davon passiv (Lieferservice)</span>
                <span className="font-bold text-brand-900">~85 EUR / Monat</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Klingt wenig? Bedenke: Das wächst mit jedem neuen Kunden. Und die bestellen jeden Monat nach — ohne dass du etwas tun musst.
              20 Kunden = ~340 EUR/Monat passiv. 50 Kunden = ~850 EUR/Monat.
            </p>
          </div>

          {/* Nächster Schritt */}
          <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
            <p className="text-sm text-brand-800 mb-3">
              <strong>Du hast deine ersten Bestellungen? Perfekt!</strong>
            </p>
            <Link
              href="/onboarding/lieferservice"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors"
            >
              Weiter zu Schritt 3: Lieferservice-Strategie →
            </Link>
          </div>

          <div className="text-center pt-4">
            <p className="text-sm text-gray-500 mb-2">Unsicher wie du starten sollst?</p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700"
            >
              💬 Lass uns kurz reden
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
