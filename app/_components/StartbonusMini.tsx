"use client";

import { useState, useEffect } from "react";

export default function StartbonusMini() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    d.setHours(23, 59, 59, 0);
    const diff = d.getTime() - Date.now();
    setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
  }, []);

  if (days === null) return null;

  return (
    <div className="flex items-center justify-center gap-2 text-green-100 text-sm mt-4 mb-2">
      <span className="inline-flex items-center gap-1.5 bg-green-700/60 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium">
        <span className="text-amber-300">⏳</span>
        Noch <strong className="text-white">{days} Tage</strong> für den 30%-Startbonus
      </span>
    </div>
  );
}
