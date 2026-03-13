export default function StarterPaketCTA() {
  return (
    <div className="bg-brand-50 rounded-2xl p-6 border-2 border-brand-200 mb-8">
      <div className="text-center mb-4">
        <p className="text-xs font-bold tracking-widest uppercase text-brand-700 bg-brand-100 px-3 py-1 rounded-full inline-block mb-2">Jetzt loslegen</p>
        <h3 className="font-bold text-lg text-gray-900 mb-2">
          Bestelle dein Starter-Paket
        </h3>
        <p className="text-sm text-gray-600">
          Starte jetzt mit dem Einsteiger-Paket (80 EUR) oder dem Durchstarter-Paket (230 EUR).
        </p>
      </div>
      <a
        href="https://provital.com/registrierung?code=EB-Hundeo"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-4 px-6 rounded-xl font-bold text-white text-center bg-brand-600 hover:bg-brand-700 transition-colors shadow-lg"
      >
        Jetzt Starter-Paket bestellen →
      </a>
      <p className="text-xs text-gray-500 text-center mt-3">
        <strong>Bonus:</strong> Nach Bestellung + Startschulung erhältst du Waren im <strong>gleichen Wert</strong> oben drauf. Bestellst du für 80 EUR, bekommst du 80 EUR extra. Bestellst du für 160 EUR, bekommst du 160 EUR extra.
      </p>
    </div>
  );
}
