'use client';

import { useRef, useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    name: "Sarah M.",
    location: "Bayern",
    months: 8,
    text: "Nach 8 Monaten habe ich 35 feste Kunden und verdiene nebenbei über 600 € im Monat. Die Schulungen waren top und Enrico hat mir am Anfang bei jedem Kundengespräch geholfen.",
    highlight: "35 Kunden · ~600 €/Monat",
  },
  {
    name: "Thomas K.",
    location: "NRW", 
    months: 14,
    text: "Ich war erst skeptisch, ob das wirklich funktioniert. Heute, 14 Monate später, betreue ich über 60 Kunden. Das Beste: Die bestellen jeden Monat nach, ohne dass ich etwas tun muss.",
    highlight: "60+ Kunden · passives Einkommen",
  },
  {
    name: "Lisa R.",
    location: "Niedersachsen",
    months: 5,
    text: "Als Hundetrainerin passt Anifit perfekt zu meiner Arbeit. Ich empfehle es meinen Kunden und verdiene zusätzlich. Nach 5 Monaten sind es schon 20 Stammkunden.",
    highlight: "20 Kunden nach 5 Monaten",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 mb-3">
      {[...Array(5)].map((_, j) => (
        <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[number] }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm h-full flex flex-col">
      <Stars />
      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="border-t border-gray-200 pt-3">
        <p className="font-semibold text-sm text-gray-900">{t.name}</p>
        <p className="text-xs text-gray-500">{t.location}</p>
        <p className="text-xs font-semibold text-brand-600 mt-1">{t.highlight}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const updateActive = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.offsetWidth;
    const idx = Math.round(scrollLeft / cardWidth);
    setActive(Math.min(idx, testimonials.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateActive, { passive: true });
    return () => el.removeEventListener('scroll', updateActive);
  }, [updateActive]);

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.offsetWidth, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop: 3-column grid */}
      <div className="hidden sm:grid gap-6 sm:grid-cols-3">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>

      {/* Mobile: horizontal scroll-snap carousel */}
      <div className="sm:hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-2 px-2 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[85vw] max-w-[340px] snap-center"
            >
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-2" role="tablist" aria-label="Erfahrungsberichte">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              role="tab"
              aria-selected={active === i}
              aria-label={`Erfahrungsbericht ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                active === i
                  ? 'bg-brand-600 w-4'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
