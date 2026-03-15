import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/_components/Footer";

export const metadata: Metadata = {
  title: "Erste Schritte als Anifit-Berater | Onboarding",
  description: "Startschulung, Academy-Zugang und alles was du in den ersten Tagen brauchst.",
  robots: { index: false, follow: false },
};

const WA_LINK = "https://wa.me/4915204000990?text=Hi%20Enrico%2C%20ich%20habe%20eine%20Frage%20zur%20Startschulung.";

export default function ErsteSchrittePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-50 to-white">
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-3xl px-6 py-4 flex items-center gap-3">
          <Link href="/onboarding" className="text-gray-400 hover:text-gray-600 text-sm">← Zurück</Link>
          <span className="text-gray-300">|</span>
          <span className="text-sm font-medium text-gray-900">Schritt 1: Erste Schritte</span>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="flex items-center gap-3 mb-6">
          <Image src="/images/anifit-logo.png" alt="Anifit" width={32} height={32} className="w-8 h-8 object-contain" />
          <h1 className="text-2xl font-bold text-gray-900">Deine ersten Schritte</h1>
        </div>

        <div className="space-y-6">
          {/* Startpaket */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-brand-600 text-white text-sm flex items-center justify-center font-bold">1</span>
              Startpaket auspacken
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Dein Startpaket ist auf dem Weg (oder schon da). Darin findest du echte Produkte zum Probieren und Vorzeigen.
              <strong> Tipp:</strong> Probiere das Futter selbst an deinem Hund/deiner Katze aus.
              Nichts überzeugt mehr als wenn du aus eigener Erfahrung berichten kannst.
            </p>
          </div>

          {/* Academy */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-brand-600 text-white text-sm flex items-center justify-center font-bold">2</span>
              ANIfit Academy — Startschulung
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Die Startschulung ist <strong>Pflicht</strong> — erst danach schaltest du höhere Provisionsstufen frei.
              Die gute Nachricht: Alles ist online und du kannst es in deinem Tempo machen.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm">
              <p className="font-medium text-gray-900 mb-2">So gehst du vor:</p>
              <ol className="space-y-2 text-gray-600 list-decimal list-inside">
                <li>Geh auf <a href="https://www.provital.academy" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">provital.academy</a> und logge dich mit deinen Zugangsdaten ein</li>
                <li>Starte den Kurs <strong>&quot;Vergütungsplan — Modul 3&quot;</strong> (18 Themen + Quiz)</li>
                <li>Danach: <strong>&quot;Ernährung Hund und Katze&quot;</strong></li>
                <li>Mache die Quizzes am Ende jeder Lektion</li>
              </ol>
            </div>
            <p className="text-gray-500 text-xs mt-3">
              Plan ca. 2–3 Stunden ein. Du musst nicht alles an einem Tag machen.
            </p>
          </div>

          {/* Fachberaterbereich */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-brand-600 text-white text-sm flex items-center justify-center font-bold">3</span>
              Fachberaterbereich kennenlernen
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Im Fachberaterbereich von Provital findest du:
            </p>
            <ul className="space-y-1.5 text-sm text-gray-600">
              <li className="flex items-start gap-2"><span className="text-brand-600 mt-0.5">•</span> Deine Kundenliste und Bestellungen</li>
              <li className="flex items-start gap-2"><span className="text-brand-600 mt-0.5">•</span> Provisionsabrechnungen</li>
              <li className="flex items-start gap-2"><span className="text-brand-600 mt-0.5">•</span> Werbematerialien und Produktinfos</li>
              <li className="flex items-start gap-2"><span className="text-brand-600 mt-0.5">•</span> Deinen persönlichen Berater-Link (für Kundenbestellungen)</li>
            </ul>
          </div>

          {/* WhatsApp Content */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-brand-600 text-white text-sm flex items-center justify-center font-bold">4</span>
              Fertige WhatsApp-Grafiken
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Wusstest du? In der Academy unter <strong>&quot;Downloads&quot;</strong> findest du über 100 fertige Grafiken
              für WhatsApp — Ernährungs-Tipps, Quizzes, Produkt-Infos, saisonale Aktionen. Perfekt um
              deinen Kontakten regelmäßig wertvollen Content zu schicken.
            </p>
          </div>

          {/* Nächster Schritt */}
          <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
            <p className="text-sm text-brand-800 mb-3">
              <strong>Wenn du die Schulung abgeschlossen hast:</strong>
            </p>
            <Link
              href="/onboarding/erste-kunden"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors"
            >
              Weiter zu Schritt 2: Deine ersten 5 Kunden →
            </Link>
          </div>

          {/* Hilfe */}
          <div className="text-center pt-4">
            <p className="text-sm text-gray-500 mb-2">Kommst du bei der Anmeldung nicht weiter?</p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700"
            >
              💬 Schreib mir per WhatsApp
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
