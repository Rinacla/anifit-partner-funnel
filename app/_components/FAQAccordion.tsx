"use client";

import { useState, useRef, useEffect } from "react";

const defaultFaqs = [
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
  {
    q: "Brauche ich ein Gewerbe anmelden?",
    a: "Nicht sofort. Du kannst dich erst registrieren und alles kennenlernen. Sobald du regelmäßig Provision verdienst, meldest du ein Kleingewerbe an. Das dauert 15 Minuten beim Ordnungsamt und kostet je nach Stadt 20–60 €. Ich helfe dir dabei.",
  },
];

export type FAQItem = { q: string; a: string };

function FAQItemRow({ faq, isOpen, onToggle }: { faq: FAQItem; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 text-base pr-4">
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            background: isOpen ? "#4CAF50" : "#E8F5E9",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            style={{ color: isOpen ? "#fff" : "#4CAF50" }}
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
      <div
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight: isOpen ? height : 0, opacity: isOpen ? 1 : 0 }}
      >
        <div ref={contentRef} className="px-6 pb-5">
          <p className="text-gray-600 leading-relaxed text-base">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion({ items }: { items?: FAQItem[] } = {}) {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = items || defaultFaqs;

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <FAQItemRow
          key={i}
          faq={faq}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  );
}
