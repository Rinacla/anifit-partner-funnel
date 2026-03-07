import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-gray-200 mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Seite nicht gefunden
        </h1>
        <p className="text-gray-500 mb-8">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link
          href="/"
          className="inline-block bg-brand-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-brand-700 transition-colors text-sm shadow-lg shadow-brand-600/20"
        >
          Zur Startseite
        </Link>
        <p className="text-xs text-gray-500 mt-6">
          Du willst Anifit-Fachberater werden?{" "}
          <Link href="/#quiz" className="underline hover:text-brand-600 transition-colors">
            Hol dir den kostenlosen Guide
          </Link>
        </p>
      </div>
    </div>
  );
}
