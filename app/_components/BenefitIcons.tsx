import React from 'react';

export default function BenefitIcons() {
  const benefits = [
    { icon: '💰', label: 'Verdienst', text: '15-30% lebenslang' },
    { icon: '🏠', label: 'Flexibilität', text: 'Freie Zeiteinteilung' },
    { icon: '🐕', label: 'Sinnhaftigkeit', text: 'Tieren aktiv helfen' },
    { icon: '📉', label: 'Sicherheit', text: '0€ Risiko, kein Lager' }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
      {benefits.map((b, i) => (
        <div key={i} className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-brand-100/50 shadow-sm text-center transform transition-all hover:scale-105 hover:shadow-md hover:border-brand-200 group">
          <span className="text-2xl mb-1.5 group-hover:animate-bounce">{b.icon}</span>
          <p className="text-[10px] font-bold text-brand-800 uppercase tracking-wider mb-0.5">{b.label}</p>
          <p className="text-[11px] text-gray-600 font-medium leading-tight">{b.text}</p>
        </div>
      ))}
    </div>
  );
}
