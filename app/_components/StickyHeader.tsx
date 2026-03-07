"use client";

import { useEffect, useState } from "react";

const QUIZ_STORAGE_KEY = "anifit_quiz_progress";

export default function StickyHeader() {
  const [visible, setVisible] = useState(false);
  const [quizDone, setQuizDone] = useState(false);

  useEffect(() => {
    const checkQuizState = () => {
      try {
        const raw = sessionStorage.getItem(QUIZ_STORAGE_KEY);
        if (raw) {
          const data = JSON.parse(raw);
          setQuizDone(!!data?.showResult);
        }
      } catch { /* ignore */ }
    };

    const onScroll = () => {
      setVisible(window.scrollY > 600);
      checkQuizState();
    };

    checkQuizState();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ctaText = quizDone ? "Dein Ergebnis ansehen" : "Gratis-Guide anfordern";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 hidden sm:block transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm mt-[3px]">
        <div className="mx-auto max-w-5xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-brand-600 font-bold text-lg">Anifit</span>
            <span className="text-gray-500 text-sm hidden md:inline">Fachberater werden</span>
          </div>
          <a
            href="#quiz"
            className={`inline-flex items-center gap-2 text-white font-semibold py-2 px-5 rounded-lg transition-colors text-sm shadow-sm ${
              quizDone
                ? "bg-brand-700 hover:bg-brand-800"
                : "bg-brand-600 hover:bg-brand-700"
            }`}
          >
            {ctaText}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
