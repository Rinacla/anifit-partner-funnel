"use client";

import { useEffect, useState, useCallback } from "react";
import LeadForm from "./LeadForm";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      // Only trigger when mouse exits through the top of the viewport
      if (e.clientY > 5) return;
      // Don't show if already dismissed or already converted
      if (dismissed) return;
      if (sessionStorage.getItem("exit-popup-dismissed")) return;
      // Don't show if user already submitted the form (on /danke)
      if (window.location.pathname === "/danke") return;
      setShow(true);
    },
    [dismissed]
  );

  useEffect(() => {
    // Don't run on mobile (no mouse leave events anyway)
    if (window.matchMedia("(pointer: coarse)").matches) return;
    // Wait 10s before enabling — don't annoy quick visitors
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  function dismiss() {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem("exit-popup-dismissed", "1");
  }

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={dismiss}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 animate-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: "popup-enter 0.3s ease-out",
        }}
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Schließen"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <p className="text-3xl mb-3">📩</p>
          <h3 className="text-xl font-bold text-gray-900">
            Warte, den Guide hast du noch nicht!
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Alle Infos zu Provision, Produkten und Ablauf. Kostenlos per Mail, in 2 Minuten gelesen.
          </p>
        </div>

        <LeadForm idPrefix="exit-" />

        <style>{`
          @keyframes popup-enter {
            from { opacity: 0; transform: scale(0.95) translateY(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>
      </div>
    </div>
  );
}
