"use client";

import { useState, useEffect } from "react";

const VISIT_KEY = "anifit_visit_count";
const DISMISS_KEY = "anifit_rv_dismissed";

export default function ReturningVisitorBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      // Don't show if already dismissed this session
      if (sessionStorage.getItem(DISMISS_KEY)) return;

      const count = parseInt(localStorage.getItem(VISIT_KEY) || "0", 10);
      localStorage.setItem(VISIT_KEY, String(count + 1));

      // Show only for returning visitors (2nd+ visit) who haven't converted
      if (count >= 1 && !localStorage.getItem("anifit_converted")) {
        setShow(true);
        if ((window as any).fbq) {
          (window as any).fbq("trackCustom", "ReturningVisitor", { visits: count + 1 });
        }
      }
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  if (!show) return null;

  const handleDismiss = () => {
    setShow(false);
    try { sessionStorage.setItem(DISMISS_KEY, "1"); } catch { /* ignore */ }
  };

  return (
    <div className="bg-brand-50 border-b border-brand-100 animate-fade-in">
      <div className="mx-auto max-w-4xl px-6 py-3 flex items-center justify-between gap-4">
        <p className="text-sm text-brand-800">
          <span className="font-semibold">Schön, dass du nochmal reinschaust.</span>{" "}
          <span className="hidden sm:inline">Hast du noch Fragen? </span>
          <a
            href="https://wa.me/4915204000990?text=Hallo%20Enrico%2C%20ich%20war%20schon%20auf%20partner.anifutter-shop.de%20und%20habe%20noch%20ein%20paar%20Fragen."
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline decoration-brand-300 hover:decoration-brand-600 transition-colors"
            onClick={() => {
              if ((window as any).fbq) {
                (window as any).fbq("trackCustom", "ReturningVisitorWhatsApp");
              }
            }}
          >
            Schreib Enrico direkt
          </a>
        </p>
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 text-brand-400 hover:text-brand-600 transition-colors p-1"
          aria-label="Banner schließen"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
