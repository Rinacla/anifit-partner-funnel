"use client";

import { useState, useEffect } from "react";
import { useStartbonusDeadline } from "@/lib/useStartbonusDeadline";

export default function StartbonusTimer() {
  const deadline = useStartbonusDeadline();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!deadline) return;
    function calc() {
      const diff = deadline!.getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    }
    setTimeLeft(calc());
    const interval = setInterval(() => setTimeLeft(calc()), 1000);
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
      <div className="inline-flex gap-2 sm:gap-3">
        {[
          { value: timeLeft.days, label: "Tage" },
          { value: timeLeft.hours, label: "Stunden" },
          { value: timeLeft.minutes, label: "Minuten" },
          { value: timeLeft.seconds, label: "Sekunden" },
        ].map((unit, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="bg-white rounded-lg shadow-sm border border-amber-200 text-2xl sm:text-3xl font-bold text-amber-900 w-14 sm:w-18 py-2 tabular-nums">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-[9px] sm:text-xs text-amber-700 mt-1 font-medium uppercase tracking-wide">
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
