"use client";

import { useEffect, useState } from "react";

const NAMES = ["Sarah", "Thomas", "Lisa", "Michael", "Janina", "Kevin", "Melanie", "Andreas", "Svenja"];
const PLACES = ["München", "Hamburg", "Berlin", "Köln", "Frankfurt", "Stuttgart", "Leipzig", "Bremen", "Essen"];

export default function LeadProofBubble() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: "", place: "" });

  useEffect(() => {
    // Initial delay before first bubble
    const timer = setTimeout(() => {
      showBubble();
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const showBubble = () => {
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const place = PLACES[Math.floor(Math.random() * PLACES.length)];
    setData({ name, place });
    setVisible(true);

    // Hide after 5 seconds
    setTimeout(() => {
      setVisible(false);
      // Show next bubble after 15-30 seconds
      setTimeout(showBubble, 15000 + Math.random() * 15000);
    }, 5000);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 left-4 z-50 animate-fade-in-up md:bottom-8">
      <div className="bg-white/95 backdrop-blur-sm border border-brand-100 rounded-2xl p-3 shadow-xl flex items-center gap-3 max-w-[280px]">
        <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-xl flex-shrink-0">
          🐶
        </div>
        <div>
          <p className="text-[13px] font-bold text-gray-900 leading-tight">
            {data.name} aus {data.place}
          </p>
          <p className="text-[11px] text-gray-500 leading-tight mt-0.5">
            hat gerade den Gratis-Guide angefordert
          </p>
          <p className="text-[9px] text-brand-600 font-medium uppercase tracking-wider mt-1">
            VOR WENIGEN MINUTEN
          </p>
        </div>
        <button 
          onClick={() => setVisible(false)}
          className="absolute -top-1 -right-1 bg-white border border-gray-200 text-gray-500 hover:text-gray-600 rounded-full w-5 h-5 flex items-center justify-center text-[10px] shadow-sm"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
