"use client";

import { useState, useEffect } from "react";
import { setConsent, loadMetaPixel, loadGoogleAdsTag, disableMetaPixel } from "../../lib/consent";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setShow(true);
  }, []);

  function accept() {
    setConsent(true);
    loadMetaPixel();
    loadGoogleAdsTag();
    setShow(false);
  }

  function decline() {
    setConsent(false);
    disableMetaPixel();
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-600 flex-1">
          Wir nutzen Cookies und das Meta Pixel, um unsere Seite zu verbessern und relevante Werbung zu zeigen.{" "}
          <a href="/datenschutz" className="text-brand-600 underline">Mehr erfahren</a>
        </p>
        <div className="flex gap-3">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm text-white font-semibold rounded-lg"
            style={{ background: "var(--brand)" }}
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
