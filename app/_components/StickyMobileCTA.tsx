"use client";

import { useEffect, useState } from "react";

const QUIZ_STORAGE_KEY = "anifit_quiz_progress";

export default function StickyMobileCTA() {
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
      const quiz = document.getElementById("quiz");
      if (!quiz) return;
      const rect = quiz.getBoundingClientRect();
      setVisible(rect.bottom < 0);
      checkQuizState();
    };

    checkQuizState();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 backdrop-blur border-t border-gray-200 px-4 py-3"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href="#quiz"
        className="block w-full py-3 rounded-xl font-bold text-white text-center text-base transition-all"
        style={{
          background: quizDone ? "var(--brand-700, #15803d)" : "var(--brand)",
          boxShadow: quizDone
            ? "0 4px 14px rgba(21,128,61,0.35)"
            : "0 4px 14px var(--brand-shadow)",
        }}
        onClick={() => setVisible(false)}
      >
        {quizDone ? "Dein Ergebnis wartet — Guide holen →" : "Gratis-Guide anfordern"}
      </a>
    </div>
  );
}
