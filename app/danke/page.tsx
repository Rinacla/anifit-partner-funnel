"use client";

import { useEffect } from "react";

export default function DankePage() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-6 py-16">
        <div className="max-w-lg">
          <div className="text-center mb-10">
            <div className="text-6xl mb-6">✅</div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
              Geschafft. Dein Guide ist unterwegs!
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Schau in dein Postfach (auch Spam checken). Die erste Mail kommt
              innerhalb weniger Minuten.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="font-bold text-lg mb-4 text-gray-900">
              Was dich in den nächsten Tagen erwartet:
            </h2>
            <div className="space-y-4">
              {[
                { day: "Heute", icon: "📩", text: "Dein Guide + Startbonus-Infos" },
                { day: "Morgen", icon: "💰", text: "Echte Verdienst-Zahlen und Rechenbeispiele" },
                { day: "Tag 3", icon: "📋", text: "So startest du (Schritt für Schritt + Willkommenspaket)" },
                { day: "Tag 5", icon: "🚀", text: "Deine ersten 5 Kunden + Mentor-Vorstellung" },
                { day: "Tag 7", icon: "🎯", text: "Dein persönlicher Registrierungslink" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 text-center">
                    <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                      {item.day}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <p className="text-gray-700 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone CTA */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8 text-center">
            <p className="text-2xl mb-2">📞</p>
            <h3 className="font-bold text-gray-900 mb-2">Fragen? Ruf einfach an.</h3>
            <p className="text-sm text-gray-600 mb-4">
              Unsere Beraterin Lisa erklärt dir alles rund um den Start als Anifit-Berater. Kostenlos und unverbindlich.
            </p>
            <a
              href="tel:+4932212619379"
              className="inline-block py-3 px-8 rounded-xl font-bold text-white text-sm transition-colors"
              style={{ background: "#4CAF50" }}
            >
              +49 322 126 19 379 anrufen
            </a>
            <p className="text-xs text-gray-400 mt-2">Mo–Fr, deutschsprachig, KI-Beratung</p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-100 mb-8">
            <p className="text-sm text-green-800 leading-relaxed">
              <strong>Tipp:</strong> Speichere die Absenderadresse{" "}
              <span className="font-mono text-xs">partner@anifutter-shop.de</span>{" "}
              in deinen Kontakten, damit keine Mail im Spam landet.
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://www.anifutter-shop.de"
              className="inline-block py-3 px-8 rounded-xl font-semibold text-green-700 border-2 border-green-200 hover:bg-green-50 transition-colors text-sm"
            >
              Zum Anifit-Shop →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
