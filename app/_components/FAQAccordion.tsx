"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Muss ich etwas vorab investieren?",
    a: "Nein. Die Registrierung ist vollständig kostenlos. Provital übernimmt Lagerung, Versand und Retouren. Du trägst kein finanzielles Risiko – du startest ohne Vorkosten.",
  },
  {
    q: "Brauche ich Vorkenntnisse in Tierernährung?",
    a: "Nicht zwingend – aber du bekommst kostenlose Schulungen direkt von Anifit und kannst die offizielle Zertifizierung zum Tierernährungsberater ablegen. Das macht dich glaubwürdiger und Gespräche mit Hundebesitzern deutlich einfacher.",
  },
  {
    q: "Was bedeutet 'lebenslanger Kundenschutz'?",
    a: "Sobald ein Kunde über deinen Link bestellt, ist er dauerhaft dir zugeordnet. Jede Nachbestellung – auch Monate oder Jahre später – bringt dir Provision. Du baust echtes passives Einkommen auf, das mit jedem Kunden wächst.",
  },
  {
    q: "Ist das ein MLM- oder Schneeballsystem?",
    a: "Nein. Du verdienst ausschließlich an deinen eigenen Kunden und deren Bestellungen. Es gibt keine Verpflichtung, andere Berater zu rekrutieren. Deine Provision entsteht zu 100% aus echten Produktverkäufen.",
  },
  {
    q: "Wie viel Zeit muss ich investieren?",
    a: "Die meisten Berater starten mit 2–5 Stunden pro Woche. Du empfiehlst bei Gesprächen, die du ohnehin führst – im Hundepark, im Verein, in sozialen Netzwerken. Es gibt keine Mindestanforderungen an Arbeitszeit.",
  },
  {
    q: "Wie läuft die Anmeldung ab?",
    a: "Klick auf den Registrierungslink, fülle das kurze Formular aus – fertig. Das dauert keine 5 Minuten. Danach bekommst du Zugang zu deinem Beraterbereich und ich melde mich persönlich bei dir für das erste Gespräch.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
            aria-expanded={open === i}
          >
            <span className="font-semibold text-gray-900 text-base pr-4">
              {faq.q}
            </span>
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200"
              style={{
                background: open === i ? "#4CAF50" : "#E8F5E9",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                style={{ color: open === i ? "#fff" : "#4CAF50" }}
              >
                <path
                  d="M6 2v8M2 6h8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-gray-600 leading-relaxed text-base">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
