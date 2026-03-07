"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md text-center">
        <div className="w-16 h-16 rounded-full bg-danger-50 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-danger-500"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Da ist etwas schiefgelaufen
        </h1>
        <p className="text-gray-500 mb-8">
          Keine Sorge, deine Daten sind sicher. Versuch es nochmal oder kontaktiere uns direkt.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-brand-700 transition-colors"
          >
            Nochmal versuchen
          </button>
          <a
            href="https://wa.me/4915204000990?text=Hallo%20Enrico%2C%20auf%20partner.anifutter-shop.de%20ist%20ein%20Fehler%20aufgetreten."
            className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors"
          >
            WhatsApp schreiben
          </a>
        </div>
      </div>
    </main>
  );
}
