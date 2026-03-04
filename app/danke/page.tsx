export const metadata = {
  title: "Danke! — Dein Guide ist unterwegs",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DankePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-6 py-16">
      <div className="max-w-lg">
        <div className="text-center mb-10">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
            Geschafft — dein Guide ist unterwegs!
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
              { day: "Heute", icon: "📩", text: "Dein Guide: So funktioniert Anifit im Überblick" },
              { day: "Tag 2", icon: "💰", text: "Konkrete Verdienst-Zahlen und Beispielrechnungen" },
              { day: "Tag 4", icon: "🤝", text: "Warum der richtige Mentor den Unterschied macht" },
              { day: "Tag 7", icon: "❓", text: "Antworten auf die häufigsten Fragen zum Start" },
              { day: "Tag 10", icon: "🚀", text: "Dein persönlicher Registrierungslink + Willkommensbonus" },
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

        <div className="bg-green-50 rounded-xl p-6 border border-green-100 mb-8">
          <p className="text-sm text-green-800 leading-relaxed">
            <strong>Tipp:</strong> Speichere die Absenderadresse{" "}
            <span className="font-mono text-xs">partner@anifutter-shop.de</span>{" "}
            in deinen Kontakten, damit keine Mail im Spam landet.
          </p>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">
            Du willst schon jetzt mehr über Anifit erfahren?
          </p>
          <a
            href="https://www.anifutter-shop.de"
            className="inline-block py-3 px-8 rounded-xl font-semibold text-green-700 border-2 border-green-200 hover:bg-green-50 transition-colors text-sm"
          >
            Zum Anifit-Shop →
          </a>
        </div>
      </div>
    </div>
  );
}
