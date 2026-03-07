"use client";

import { useState } from "react";
import Link from "next/link";

const STUFEN = [
  { min: 0, max: 9, rate: 0.15, label: "Einsteiger" },
  { min: 10, max: 24, rate: 0.19, label: "Aufsteiger" },
  { min: 25, max: 49, rate: 0.23, label: "Profi" },
  { min: 50, max: 95, rate: 0.27, label: "Experte" },
  { min: 96, max: 999, rate: 0.30, label: "Top-Berater" },
];

function getRate(kunden: number): number {
  const stufe = STUFEN.find((s) => kunden >= s.min && kunden <= s.max);
  return stufe?.rate ?? 0.15;
}

function getStufeIndex(kunden: number): number {
  return STUFEN.findIndex((s) => kunden >= s.min && kunden <= s.max);
}

export default function ProvisionsRechner() {
  const [kunden, setKunden] = useState(25);
  const [avgOrder, setAvgOrder] = useState(105);
  const rate = getRate(kunden);
  const currentIdx = getStufeIndex(kunden);
  const monatlich = Math.round(kunden * avgOrder * rate);
  const jaehrlich = monatlich * 12;

  // For the start bonus mention (30% for 3 months)
  const bonusMonatlich = Math.round(kunden * avgOrder * 0.30);

  // Next tier info
  const nextStufe = currentIdx < STUFEN.length - 1 ? STUFEN[currentIdx + 1] : null;
  const kundenBisNaechsteStufe = nextStufe ? nextStufe.min - kunden : 0;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
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
            background: `linear-gradient(to right, var(--brand) ${(kunden / 150) * 100}%, #e5e7eb ${(kunden / 150) * 100}%)`,
          }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
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
            background: `linear-gradient(to right, var(--brand) ${((avgOrder - 50) / 200) * 100}%, #e5e7eb ${((avgOrder - 50) / 200) * 100}%)`,
          }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>50 €</span>
          <span>250 € (z.B. 2 Hunde)</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center mb-6">
        <div className="bg-brand-50 rounded-xl p-3 sm:p-4">
          <p className="text-[10px] text-gray-500 mb-1 leading-tight">Provisionsstufe</p>
          <p className="text-xl sm:text-2xl font-extrabold text-brand-600">
            {Math.round(rate * 100)}%
          </p>
        </div>
        <div className="bg-brand-50 rounded-xl p-3 sm:p-4 border-2 border-brand-200 ring-4 ring-brand-50">
          <p className="text-[10px] text-gray-500 mb-1 leading-tight">Pro Monat</p>
          <p className="text-xl sm:text-2xl font-extrabold text-brand-600">
            {monatlich} €
          </p>
        </div>
        <div className="bg-brand-50 rounded-xl p-3 sm:p-4">
          <p className="text-[10px] text-gray-500 mb-1 leading-tight">Pro Jahr</p>
          <p className="text-xl sm:text-2xl font-extrabold text-brand-600">
            {jaehrlich.toLocaleString("de-DE")} €
          </p>
        </div>
      </div>

      {/* Bonus Callout */}
      <div className="bg-warm-50 rounded-xl px-4 py-3 border border-warm-100 flex items-center gap-3">
        <span className="text-xl">🚀</span>
        <p className="text-xs text-warm-800 leading-snug">
          Mit dem <strong>Startbonus (30%)</strong> wären es in den ersten 3 Monaten sogar <strong className="text-warm-900">{bonusMonatlich} €</strong> pro Monat!
        </p>
      </div>

      {/* Provisionsstufen-Leiter */}
      <div className="mt-6 pt-5 border-t border-gray-100">
        <p className="text-xs font-semibold text-gray-700 mb-3 text-center">Deine Provisionsstufe</p>
        <div className="flex items-center gap-1">
          {STUFEN.map((stufe, i) => {
            const isActive = i === currentIdx;
            const isPast = i < currentIdx;
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={`w-full h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-brand-500 ring-2 ring-brand-200"
                      : isPast
                        ? "bg-brand-300"
                        : "bg-gray-200"
                  }`}
                />
                <span
                  className={`text-[9px] leading-tight text-center transition-colors duration-300 ${
                    isActive
                      ? "text-brand-700 font-bold"
                      : isPast
                        ? "text-brand-400"
                        : "text-gray-400"
                  }`}
                >
                  {Math.round(stufe.rate * 100)}%
                </span>
              </div>
            );
          })}
        </div>
        {nextStufe && kundenBisNaechsteStufe > 0 && (
          <p className="text-[10px] text-gray-500 text-center mt-2">
            Noch <strong className="text-brand-600">{kundenBisNaechsteStufe} {kundenBisNaechsteStufe === 1 ? "Kunde" : "Kunden"}</strong> bis {Math.round(nextStufe.rate * 100)}% ({nextStufe.label})
          </p>
        )}
        {!nextStufe && (
          <p className="text-[10px] text-brand-600 text-center mt-2 font-semibold">
            Höchste Stufe erreicht
          </p>
        )}
      </div>

      <p className="text-[10px] text-gray-500 text-center mt-4 italic leading-relaxed">
        Echte Werte aus der Berater-Statistik. Provisionsstufen gelten lebenslang für alle Folgebestellungen.
      </p>

      {/* Cross-link to /provision detail page */}
      <div className="mt-5 pt-4 border-t border-gray-100 text-center">
        <Link
          href="/provision"
          className="inline-flex items-center gap-1.5 text-brand-700 font-semibold text-sm hover:text-brand-800 transition-colors"
        >
          Alle Provisionsstufen im Detail
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
        </Link>
      </div>
    </div>
  );
}
