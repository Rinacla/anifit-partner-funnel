"use client";

function trackPixel(event: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("trackCustom", event, params);
  }
}

export default function ContactSection() {
  return (
    <section className="py-16 border-t border-gray-100">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Noch unsicher? Lass uns reden.</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Keine Verkaufsgespräche. Stell deine Fragen und entscheide danach in Ruhe.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+4932212619379"
            onClick={() => trackPixel("ContactClick", { method: "phone" })}
            className="inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl font-semibold text-white text-sm transition-colors shadow-sm"
            style={{ background: "#4CAF50" }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
            Kostenlos anrufen
          </a>
          <a
            href="mailto:partner@anifutter-shop.de?subject=Frage%20zum%20Einstieg%20als%20Anifit-Berater"
            onClick={() => trackPixel("ContactClick", { method: "email" })}
            className="inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl font-semibold text-gray-700 text-sm border-2 border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            E-Mail schreiben
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-4">Mo–Fr · Deutschsprachig · Antwort innerhalb von 24h</p>
      </div>
    </section>
  );
}
