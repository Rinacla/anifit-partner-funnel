"use client";

import { useState, useEffect } from "react";
import { useStartbonusDeadline } from "@/lib/useStartbonusDeadline";

export default function StartbonusMini() {
  const deadline = useStartbonusDeadline();
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    if (!deadline) return;
    const diff = deadline.getTime() - Date.now();
    setDays(Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))));
  }, [deadline]);

  if (days === null) return null;

  return (
    <div className="flex items-center justify-center gap-2 text-brand-100 text-sm mt-4 mb-2">
      <span className="inline-flex items-center gap-1.5 bg-brand-700/60 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium">
        <span className="text-warm-200">⏳</span>
        Noch <strong className="text-white">{days} Tage</strong> für den 30%-Startbonus
      </span>
    </div>
  );
}
