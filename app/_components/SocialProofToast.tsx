"use client";

import { useEffect, useState, useCallback } from "react";

interface ProofEntry {
  name: string;
  location: string;
  timeAgo: string;
}

const ENTRIES: ProofEntry[] = [
  { name: "Sarah M.", location: "Bayern", timeAgo: "vor 12 Minuten" },
  { name: "Julia H.", location: "NRW", timeAgo: "vor 23 Minuten" },
  { name: "Sandra K.", location: "Baden-Württemberg", timeAgo: "vor 34 Minuten" },
  { name: "Thomas R.", location: "Niedersachsen", timeAgo: "vor 1 Stunde" },
  { name: "Lisa W.", location: "Hessen", timeAgo: "vor 2 Stunden" },
  { name: "Melanie F.", location: "Sachsen", timeAgo: "vor 3 Stunden" },
  { name: "Christina B.", location: "Hamburg", timeAgo: "vor 4 Stunden" },
  { name: "Anna S.", location: "Berlin", timeAgo: "vor 5 Stunden" },
];

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(-1);
  const [dismissed, setDismissed] = useState(false);

  const showNext = useCallback(() => {
    if (dismissed) return;
    setIndex((prev) => {
      const next = (prev + 1) % ENTRIES.length;
      return next;
    });
    setVisible(true);
    setTimeout(() => setVisible(false), 4000);
  }, [dismissed]);

  useEffect(() => {
    // Don't show on /danke (already converted)
    if (typeof window !== "undefined" && window.location.pathname === "/danke") return;

    // First toast after 15s, then every 30s
    const firstTimer = setTimeout(showNext, 15000);
    const interval = setInterval(showNext, 30000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, [showNext]);

  if (dismissed || index < 0) return null;

  const entry = ENTRIES[index];

  return (
    <div
      className={`fixed bottom-20 left-4 z-40 max-w-xs transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 px-4 py-3 flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-sm">
          📩
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-900 font-medium leading-snug">
            {entry.name} aus {entry.location}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            hat den Guide angefordert · {entry.timeAgo}
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="flex-shrink-0 text-gray-300 hover:text-gray-500 text-xs mt-0.5"
          aria-label="Schließen"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
