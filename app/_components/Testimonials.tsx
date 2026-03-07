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

export default function Testimonials() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
        >
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, j) => (
              <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            &ldquo;{t.text}&rdquo;
          </p>
          <div className="border-t border-gray-200 pt-3">
            <p className="font-semibold text-sm text-gray-900">{t.name}</p>
            <p className="text-xs text-gray-500">{t.location}</p>
            <p className="text-xs font-semibold text-brand-600 mt-1">{t.highlight}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
