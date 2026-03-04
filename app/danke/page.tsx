export const metadata = {
  title: "Danke! — Dein Guide ist unterwegs",
};

export default function DankePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Geschafft!
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Dein Guide ist auf dem Weg in dein Postfach. Schau auch im Spam-Ordner
          nach, falls du ihn nicht sofort findest.
        </p>
        <p className="text-gray-500 text-sm">
          In den nächsten Tagen bekommst du weitere Infos von mir —
          damit du bestens vorbereitet bist.
        </p>
        <a
          href="https://www.anifutter-shop.de"
          className="inline-block mt-8 text-green-600 font-semibold hover:underline"
        >
          Zum Anifit-Shop →
        </a>
      </div>
    </div>
  );
}
