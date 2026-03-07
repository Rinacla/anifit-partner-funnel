"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "anifit_quiz_progress";

function getEarningsFromAnswers(answers: string[]): { min: number; max: number } | null {
  if (!answers || answers.length < 3) return null;
  const time = answers[2];
  if (time === "viel") return { min: 800, max: 2000 };
  if (time === "mittel") return { min: 400, max: 1000 };
  return { min: 150, max: 500 };
}

export default function QuizEarningsReminder() {
  const [earnings, setEarnings] = useState<{ min: number; max: number } | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data?.answers?.length >= 3 && data.showResult) {
        setEarnings(getEarningsFromAnswers(data.answers));
      }
    } catch { /* ignore */ }
  }, []);

  if (!earnings) return null;

  return (
    <div className="flex items-center justify-center gap-2 text-brand-100 text-sm mt-2 mb-1">
      <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium">
        <span aria-hidden="true">💰</span>
        Dein Potenzial: <strong className="text-white">{earnings.min}–{earnings.max} €/Monat</strong>
      </span>
    </div>
  );
}
