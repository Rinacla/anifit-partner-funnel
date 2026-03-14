"use client";

import { useState, useEffect } from "react";

const OBJECTIONS = [
  { q: "Ist das MLM?", a: "Anifit ist Direktvertrieb. Dein Einkommen kommt aus echten Produktverkäufen, nicht aus dem Anwerben." },
  { q: "Was kostet der Einstieg?", a: "Registrierung kostenlos. Einstiegspaket ab 78 €." },
  { q: "Brauche ich Vorkenntnisse?", a: "Nein. Schulung + Mentor bekommst du von Enrico." },
  { q: "Wie viel Zeit brauche ich?", a: "2–5 Stunden pro Woche reichen für den Start." },
];

export default function ObjectionTicker() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % OBJECTIONS.length);
        setVisible(true);
      }, 300);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const item = OBJECTIONS[index];

  return (
    <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 min-h-[28px]">
      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center">
        <svg className="w-3 h-3 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      </span>
      <p
        className={`text-xs text-gray-600 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="font-semibold text-gray-800">&bdquo;{item.q}&ldquo;</span>
        {" "}
        <span className="text-gray-500">—</span>
        {" "}
        {item.a}
      </p>
    </div>
  );
}
