"use client";

import { useState } from "react";

const STUFEN = [
  { min: 0, max: 9, rate: 0.15 },
  { min: 10, max: 24, rate: 0.19 },
  { min: 25, max: 49, rate: 0.23 },
  { min: 50, max: 95, rate: 0.27 },
  { min: 96, max: 999, rate: 0.30 },
];

function getRate(kunden: number): number {
  const stufe = STUFEN.find((s) => kunden >= s.min && kunden <= s.max);
  return stufe?.rate ?? 0.15;
}

export default function ProvisionsRechner() {
  const [kunden, setKunden] = useState(25);
  const [avgOrder, setAvgOrder] = useState(105);
  const rate = getRate(kunden);
  const monatlich = Math.round(kunden * avgOrder * rate);
  const jaehrlich = monatlich * 12;

  // For the start bonus mention (30% for 3 months)
  const bonusMonatlich = Math.round(kunden * avgOrder * 0.30);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
      <h3 className="font-bold text-lg text-center mb-6">
        Berechne deinen Verdienst
      </h3>

      {/* Kunden Slider */}
      <div className="mb-6">
        <label className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Anzahl Kunden</span>
          <span className="font-bold text-gray-900">{kunden}</span>
        </label>
        <input
          type="range"
          min={1}
          max={150}
          value={kunden}
          onChange={(e) => setKunden(Number(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #4CAF50 ${(kunden / 150) * 100}%, #e5e7eb ${(kunden / 150) * 100}%)`,
          }}
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>1</span>
          <span>150</span>
        </div>
      </div>

      {/* Warenkorb Slider */}
      <div className="mb-8">
        <label className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Ø Warenkorb / Monat</span>
          <span className="font-bold text-gray-900">{avgOrder} €</span>
        </label>
        <input
          type="range"
          min={50}
          max={250}
          step={5}
          value={avgOrder}
          onChange={(e) => setAvgOrder(Number(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #4CAF50 ${((avgOrder - 50) / 200) * 100}%, #e5e7eb ${((avgOrder - 50) / 200) * 100}%)`,
          }}
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>50 €</span>
          <span>250 € (z.B. 2 Hunde)</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center mb-6">
        <div className="bg-green-50 rounded-xl p-3 sm:p-4">
          <p className="text-[10px] text-gray-500 mb-1 leading-tight">Provisionsstufe</p>
          <p className="text-xl sm:text-2xl font-extrabold text-green-600">
            {Math.round(rate * 100)}%
          </p>
        </div>
        <div className="bg-green-50 rounded-xl p-3 sm:p-4 border-2 border-green-200 ring-4 ring-green-50">
          <p className="text-[10px] text-gray-500 mb-1 leading-tight">Pro Monat</p>
          <p className="text-xl sm:text-2xl font-extrabold text-green-600">
            {monatlich} €
          </p>
        </div>
        <div className="bg-green-50 rounded-xl p-3 sm:p-4">
          <p className="text-[10px] text-gray-500 mb-1 leading-tight">Pro Jahr</p>
          <p className="text-xl sm:text-2xl font-extrabold text-green-600">
            {jaehrlich.toLocaleString("de-DE")} €
          </p>
        </div>
      </div>

      {/* Bonus Callout */}
      <div className="bg-amber-50 rounded-xl px-4 py-3 border border-amber-100 flex items-center gap-3">
        <span className="text-xl">🚀</span>
        <p className="text-xs text-amber-800 leading-snug">
          Mit dem <strong>Startbonus (30%)</strong> wären es in den ersten 3 Monaten sogar <strong className="text-amber-900">{bonusMonatlich} €</strong> pro Monat!
        </p>
      </div>

      <p className="text-[10px] text-gray-400 text-center mt-4 italic leading-relaxed">
        Echte Werte aus der Berater-Statistik. Provisionsstufen gelten lebenslang für alle Folgebestellungen.
      </p>
    </div>
  );
}
