import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/_components/Footer";

export const metadata: Metadata = {
  title: "Dein Onboarding als Anifit-Berater | Bachmann & Team",
  description: "Schritt-für-Schritt Anleitung für deinen erfolgreichen Start als Anifit-Fachberater.",
  robots: { index: false, follow: false },
};

const WA_LINK = "https://wa.me/4915204000990?text=Hi%20Enrico%2C%20ich%20bin%20neu%20im%20Team%20und%20habe%20eine%20Frage.";

const steps = [
  {
    nr: 1,
    title: "Startschulung absolvieren",
    desc: "Melde dich bei der ANIfit Academy an und starte den Grundlagenkurs. Die Schulung ist Pflicht, bevor du höhere Provisionen freischalten kannst.",
    link: "/onboarding/erste-schritte",
    linkText: "Zur Anleitung →",
    icon: "🎓",
    time: "Tag 1–3",
  },
  {
    nr: 2,
    title: "Deine ersten 5 Kunden",
    desc: "Lerne, wie du mit einfachen Gesprächen im Bekanntenkreis deine ersten Kunden gewinnst. Mit Gesprächsvorlage und Futterproben-Strategie.",
    link: "/onboarding/erste-kunden",
    linkText: "Zum Kundenplan →",
    icon: "🐕",
    time: "Woche 1–2",
  },
  {
    nr: 3,
    title: "Lieferservice = passives Einkommen",
    desc: "Warum Abo-Kunden 7x mehr wert sind und wie du Kunden in den Lieferservice bringst.",
    link: "/onboarding/lieferservice",
    linkText: "Zur Strategie →",
    icon: "📦",
    time: "Ab Woche 2",
  },
];

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-3xl px-6 py-6 flex items-center gap-3">
          <Image src="/images/anifit-logo.png" alt="Anifit" width={36} height={36} className="w-9 h-9 object-contain" />
          <div>
            <h1 className="text-lg font-bold text-gray-900">Willkommen im Team!</h1>
            <p className="text-sm text-gray-500">Dein Onboarding als Anifit-Fachberater</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10">
        {/* Intro */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-8">
          <p className="text-gray-700 leading-relaxed">
            Hey, schön dass du dabei bist! Ich bin Enrico, dein persönlicher Ansprechpartner.
            Auf dieser Seite findest du alles, was du für deinen Start brauchst — Schritt für Schritt.
            Keine Eile, geh in deinem Tempo vor. Und bei Fragen: schreib mir einfach.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
          >
            💬 WhatsApp an Enrico
          </a>
        </div>

        {/* Checkliste */}
        <h2 className="text-xl font-bold text-gray-900 mb-6">Dein Fahrplan</h2>

        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.nr} className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-2xl">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">
                      Schritt {step.nr}
                    </span>
                    <span className="text-xs text-gray-400">{step.time}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{step.desc}</p>
                  <Link
                    href={step.link}
                    className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    {step.linkText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academy Hinweis */}
        <div className="mt-8 bg-amber-50 border border-amber-100 rounded-xl p-5">
          <h3 className="text-sm font-bold text-amber-900 mb-2">📚 ANIfit Academy</h3>
          <p className="text-sm text-amber-800">
            Provital hat eine eigene Online-Akademie mit Kursen, Wissensdatenbank und sogar einem KI-Assistenten.
            Dort findest du auch fertige WhatsApp-Grafiken, die du an Kunden schicken kannst.
          </p>
          <a
            href="https://www.provital.academy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-2 text-sm font-medium text-amber-700 hover:text-amber-800"
          >
            Zur ANIfit Academy →
          </a>
        </div>

        {/* Kontakt */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Fragen? Schreib mir jederzeit per WhatsApp oder ruf an: <strong>+49 152 0400 0990</strong></p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
