"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setShow(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie_consent", "accepted");
    setShow(false);
  }

  function decline() {
    localStorage.setItem("cookie_consent", "declined");
    setShow(false);
    // Disable Meta Pixel
    if (typeof window !== "undefined") {
      (window as any).fbq = function () {};
    }
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-600 flex-1">
          Wir nutzen Cookies und das Meta Pixel, um unsere Seite zu verbessern und relevante Werbung zu zeigen.{" "}
          <a href="/datenschutz" className="text-green-600 underline">Mehr erfahren</a>
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
            style={{ background: "#4CAF50" }}
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
