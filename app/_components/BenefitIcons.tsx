import React from 'react';

export default function BenefitIcons() {
  const benefits = [
    { icon: '💰', label: 'Provision', text: '15-30% lebenslang' },
    { icon: '🏠', label: 'Home Office', text: 'Freie Zeiteinteilung' },
    { icon: '🐕', label: 'Hundeliebe', text: 'Artgerechtes Futter' },
    { icon: '📉', label: '0€ Risiko', text: 'Kein Lager notwendig' }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
      {benefits.map((b, i) => (
        <div key={i} className="flex flex-col items-center p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-green-100/50 shadow-sm text-center transform transition-transform hover:scale-105">
          <span className="text-2xl mb-1.5">{b.icon}</span>
          <p className="text-[10px] font-bold text-green-800 uppercase tracking-wider mb-0.5">{b.label}</p>
          <p className="text-[11px] text-gray-600 font-medium leading-tight">{b.text}</p>
        </div>
      ))}
    </div>
  );
}
