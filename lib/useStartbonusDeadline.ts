"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "anifit_startbonus_deadline";

function createDeadline(): Date {
  const d = new Date();
  d.setDate(d.getDate() + 30);
  d.setHours(23, 59, 59, 0);
  return d;
}

/**
 * Returns a persistent deadline (30 days from first visit).
 * Stored in localStorage so returning visitors see a real countdown.
 */
export function useStartbonusDeadline(): Date | null {
  const [deadline, setDeadline] = useState<Date | null>(null);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {}

    let d: Date;
    if (stored) {
      d = new Date(stored);
      if (isNaN(d.getTime()) || d.getTime() <= Date.now()) {
        d = createDeadline();
        persist(d);
      }
    } else {
      d = createDeadline();
      persist(d);
    }
    setDeadline(d);
  }, []);

  return deadline;
}

function persist(d: Date): void {
  try {
    localStorage.setItem(STORAGE_KEY, d.toISOString());
  } catch {}
}
