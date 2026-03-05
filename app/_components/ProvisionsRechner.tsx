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
  const [kunden, setKunden] = useState(20);
  const avgOrder = 80;
  const rate = getRate(kunden);
  const monatlich = Math.round(kunden * avgOrder * rate);
  const jaehrlich = monatlich * 12;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
      <h3 className="font-bold text-lg text-center mb-6">
        Berechne deinen Verdienst
      </h3>
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
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="bg-green-50 rounded-xl p-4">
          <p className="text-xs text-gray-500 mb-1">Provisionsstufe</p>
          <p className="text-2xl font-extrabold text-green-600">
            {Math.round(rate * 100)}%
          </p>
        </div>
        <div className="bg-green-50 rounded-xl p-4">
          <p className="text-xs text-gray-500 mb-1">Pro Monat</p>
          <p className="text-2xl font-extrabold text-green-600">
            {monatlich} €
          </p>
        </div>
        <div className="bg-green-50 rounded-xl p-4">
          <p className="text-xs text-gray-500 mb-1">Pro Jahr</p>
          <p className="text-2xl font-extrabold text-green-600">
            {jaehrlich.toLocaleString("de-DE")} €
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-400 text-center mt-4">
        Basierend auf Ø {avgOrder} € Bestellwert/Monat pro Kunde. Boni nicht eingerechnet.
      </p>
    </div>
  );
}
