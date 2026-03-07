"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import LeadForm from "./LeadForm";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pageLoadTime = useRef(Date.now());
  const lastScrollY = useRef(0);
  const maxScrollPercent = useRef(0);

  const shouldSuppress = useCallback(() => {
    if (dismissed) return true;
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("exit-popup-dismissed")) return true;
    if (typeof window !== "undefined" && window.location.pathname === "/danke") return true;
    return false;
  }, [dismissed]);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY > 5) return;
      if (shouldSuppress()) return;
      setShow(true);
    },
    [shouldSuppress]
  );

  // Desktop: mouse leave detection
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  // Mobile: scroll-up exit intent detection
  // Triggers when user scrolls up rapidly after being 40%+ down the page
  // and has been on the page for at least 30 seconds
  useEffect(() => {
    if (!window.matchMedia("(pointer: coarse)").matches) return;

    let scrollUpDistance = 0;
    let lastY = window.scrollY;
    const SCROLL_UP_THRESHOLD = 300; // px of rapid scroll-up to trigger
    const MIN_TIME_ON_PAGE = 30000; // 30 seconds
    const MIN_SCROLL_DEPTH = 0.4; // 40% of page

    function handleScroll() {
      const currentY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentPercent = docHeight > 0 ? currentY / docHeight : 0;

      // Track max scroll depth
      if (currentPercent > maxScrollPercent.current) {
        maxScrollPercent.current = currentPercent;
      }

      // Detect scroll-up
      if (currentY < lastY) {
        scrollUpDistance += lastY - currentY;
      } else {
        scrollUpDistance = 0; // reset on scroll down
      }

      lastY = currentY;

      // Trigger conditions: scrolled up enough, was deep enough, on page long enough
      if (
        scrollUpDistance >= SCROLL_UP_THRESHOLD &&
        maxScrollPercent.current >= MIN_SCROLL_DEPTH &&
        Date.now() - pageLoadTime.current >= MIN_TIME_ON_PAGE
      ) {
        if (!shouldSuppress()) {
          setShow(true);
          scrollUpDistance = 0; // reset to prevent re-trigger
        }
      }
    }

    // Delay enabling to avoid false triggers during initial page load
    const timer = setTimeout(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, MIN_TIME_ON_PAGE);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [shouldSuppress]);

  function dismiss() {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem("exit-popup-dismissed", "1");
  }

  // Track exit intent popup display via Meta Pixel
  useEffect(() => {
    if (!show) return;
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (typeof w.fbq === "function") {
      w.fbq("trackCustom", "ExitIntentShown", { device: isMobile ? "mobile" : "desktop" });
    }
  }, [show]);

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

        <LeadForm idPrefix="exit-" source="exit-intent" />

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
