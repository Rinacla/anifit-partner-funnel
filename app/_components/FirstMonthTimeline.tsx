"use client";

import { useRef, useState, useEffect } from "react";

const weeks = [
  {
    week: "Woche 1",
    icon: "📩",
    title: "Guide lesen & Startschulung",
    items: [
      "5 Emails mit allen Details zum Geschäftsmodell",
      "Persönliches Kennenlerngespräch mit Enrico",
      "Einstiegspaket bestellen (ab 78 €) und Produkte selbst testen",
    ],
    highlight: false,
  },
  {
    week: "Woche 2",
    icon: "🎯",
    title: "Erste Kontakte ansprechen",
    items: [
      "Fertige Vorlagen und Gesprächsleitfäden nutzen",
      "2-3 Hundebesitzer im Bekanntenkreis ansprechen",
      "Schnupperpakete empfehlen (9,90 € Einstieg für Kunden)",
    ],
    highlight: false,
  },
  {
    week: "Woche 3",
    icon: "🛒",
    title: "Erste Bestellungen & Provision",
    items: [
      "Erste Kunden bestellen über deinen persönlichen Link",
      "Provision wird automatisch gutgeschrieben",
      "Kunden sind begeistert und erzählen es weiter",
    ],
    highlight: false,
  },
  {
    week: "Woche 4",
    icon: "🚀",
    title: "Startbonus sichern",
    items: [
      "3 Kunden gewonnen → 30 % Provision für 3 Monate",
      "Kunden bestellen ab jetzt von selbst nach",
      "Dein passives Einkommen beginnt zu wachsen",
    ],
    highlight: true,
  },
];

export default function FirstMonthTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Vertical connector line */}
      <div className="absolute left-5 sm:left-6 top-8 bottom-8 w-0.5 bg-gray-200" aria-hidden="true" />

      <div className="space-y-8">
        {weeks.map((w, i) => (
          <div
            key={i}
            className={`relative flex gap-4 sm:gap-6 transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: visible ? `${i * 150}ms` : "0ms" }}
          >
            {/* Circle on timeline */}
            <div
              className={`relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl ${
                w.highlight
                  ? "bg-brand-600 shadow-lg shadow-brand-600/30"
                  : "bg-white border-2 border-brand-200"
              }`}
            >
              <span>{w.icon}</span>
            </div>

            {/* Content card */}
            <div
              className={`flex-1 rounded-xl p-4 sm:p-5 ${
                w.highlight
                  ? "bg-brand-50 border-2 border-brand-200 ring-1 ring-brand-100"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              <div className="flex items-baseline gap-2 mb-2">
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    w.highlight ? "text-brand-600" : "text-gray-400"
                  }`}
                >
                  {w.week}
                </span>
                <h3
                  className={`font-bold text-sm sm:text-base ${
                    w.highlight ? "text-brand-800" : "text-gray-900"
                  }`}
                >
                  {w.title}
                </h3>
              </div>
              <ul className="space-y-1.5">
                {w.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        w.highlight ? "bg-brand-400" : "bg-gray-300"
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
