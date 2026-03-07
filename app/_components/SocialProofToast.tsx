"use client";

import { useEffect, useState, useCallback, useRef } from "react";

const NAMES = [
  "Sarah M.", "Julia H.", "Sandra K.", "Thomas R.", "Lisa W.",
  "Melanie F.", "Christina B.", "Anna S.", "Michael K.", "Janina P.",
  "Kevin B.", "Svenja L.", "Andreas W.", "Stefanie H.", "Markus D.",
];
const LOCATIONS = [
  "Bayern", "NRW", "Baden-Württemberg", "Niedersachsen", "Hessen",
  "Sachsen", "Hamburg", "Berlin", "Rheinland-Pfalz", "Schleswig-Holstein",
  "Brandenburg", "Thüringen", "Bremen",
];

function dynamicTimeAgo(baseMinutes: number, elapsedSec: number): string {
  const totalMin = baseMinutes + Math.floor(elapsedSec / 60);
  if (totalMin < 60) return `vor ${totalMin} Minuten`;
  const hours = Math.floor(totalMin / 60);
  return hours === 1 ? "vor 1 Stunde" : `vor ${hours} Stunden`;
}

function shuffled<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(-1);
  const [dismissed, setDismissed] = useState(false);
  const [consentResolved, setConsentResolved] = useState(false);
  const mountTime = useRef(Date.now());
  const entriesRef = useRef<{ name: string; location: string; baseMin: number }[]>([]);

  // Generate randomized entries once on mount
  useEffect(() => {
    const names = shuffled(NAMES);
    const locations = shuffled(LOCATIONS);
    entriesRef.current = names.slice(0, 8).map((name, i) => ({
      name,
      location: locations[i % locations.length],
      baseMin: 3 + Math.floor(Math.random() * 45), // 3-47 minutes ago at page load
    }));
  }, []);

  // Wait until cookie banner is dismissed before showing toasts
  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (consent !== null) {
      setConsentResolved(true);
      return;
    }
    // Poll for consent resolution (banner dismiss)
    const interval = setInterval(() => {
      if (localStorage.getItem("cookie_consent") !== null) {
        setConsentResolved(true);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const showNext = useCallback(() => {
    if (dismissed) return;
    setIndex((prev) => {
      const next = (prev + 1) % 8;
      return next;
    });
    setVisible(true);
    setTimeout(() => setVisible(false), 4500);
  }, [dismissed]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.pathname === "/danke") return;
    if (!consentResolved) return;

    const firstTimer = setTimeout(showNext, 15000);
    const interval = setInterval(showNext, 35000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, [showNext, consentResolved]);

  if (dismissed || index < 0 || !entriesRef.current.length) return null;

  const entry = entriesRef.current[index];
  const elapsedSec = Math.floor((Date.now() - mountTime.current) / 1000);

  return (
    <div
      className={`fixed bottom-20 left-4 z-40 max-w-xs transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 px-4 py-3 flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-sm">
          📩
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-900 font-medium leading-snug">
            {entry.name} aus {entry.location}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            hat den Guide angefordert · {dynamicTimeAgo(entry.baseMin, elapsedSec)}
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
