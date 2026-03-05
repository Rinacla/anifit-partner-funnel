"use client";

import { useState, useEffect } from "react";

export default function StartbonusTimer() {
  const [deadline, setDeadline] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    d.setHours(23, 59, 59, 0);
    setDeadline(d);
  }, []);

  useEffect(() => {
    if (!deadline) return;
    function calc() {
      const now = new Date();
      const diff = deadline!.getTime() - now.getTime();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      };
    }
    setTimeLeft(calc());
    const interval = setInterval(() => setTimeLeft(calc()), 60000);
    return () => clearInterval(interval);
  }, [deadline]);

  if (!deadline) return null;

  const dateStr = deadline.toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mt-6">
      <div className="inline-flex gap-3 sm:gap-4">
        {[
          { value: timeLeft.days, label: "Tage" },
          { value: timeLeft.hours, label: "Stunden" },
          { value: timeLeft.minutes, label: "Minuten" },
        ].map((unit, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="bg-white rounded-lg shadow-sm border border-amber-200 text-2xl sm:text-3xl font-bold text-amber-900 w-16 sm:w-20 py-2 tabular-nums">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs text-amber-700 mt-1 font-medium uppercase tracking-wide">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
      <p className="text-xs text-amber-700 mt-4">
        Registrierst du dich heute, hast du bis <strong>{dateStr}</strong> Zeit.
      </p>
    </div>
  );
}
