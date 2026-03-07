'use client';

import { useState, useEffect } from 'react';
import { useStartbonusDeadline } from '@/lib/useStartbonusDeadline';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const deadline = useStartbonusDeadline();
  const [daysLeft, setDaysLeft] = useState(30);

  useEffect(() => {
    setMounted(true);
    const wasDismissed = sessionStorage.getItem('announcement-dismissed');
    if (wasDismissed) setDismissed(true);
  }, []);

  useEffect(() => {
    if (!deadline) return;
    const diff = deadline.getTime() - Date.now();
    setDaysLeft(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))));
  }, [deadline]);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('announcement-dismissed', '1');
  };

  if (dismissed || !mounted) return null;

  return (
    <div className="bg-warm-500 text-white text-center text-xs sm:text-sm font-medium py-2 px-4 relative z-50">
      <span className="inline-flex items-center gap-2">
        <span aria-hidden="true">🔥</span>
        <span>
          <strong>Startbonus:</strong>{' '}
          {daysLeft > 0 ? (
            <>
              Noch <strong>{daysLeft} {daysLeft === 1 ? 'Tag' : 'Tage'}</strong> für 3 Monate{' '}
              <strong>30 % Provision</strong>
            </>
          ) : (
            <>
              Jetzt registrieren und 3 Monate lang{' '}
              <strong>30 % Provision</strong> sichern
            </>
          )}
        </span>
        <a
          href="#quiz"
          className="ml-2 underline underline-offset-2 decoration-white/60 hover:decoration-white transition-colors font-bold hidden sm:inline"
        >
          Jetzt starten →
        </a>
      </span>
      <button
        onClick={handleDismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-1 transition-colors"
        aria-label="Ankündigung schließen"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
