"use client";

import { useState, useEffect } from "react";

function trackPixel(event: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("trackCustom", event, params);
  }
}

/** Returns availability info based on Berlin time (target audience is DACH). */
function getAvailability(): { label: string; online: boolean } {
  const now = new Date();
  // Convert to Europe/Berlin local hour (audience timezone)
  const berlinHour = parseInt(
    new Intl.DateTimeFormat("en-US", { hour: "numeric", hour12: false, timeZone: "Europe/Berlin" }).format(now),
    10
  );
  const berlinDay = parseInt(
    new Intl.DateTimeFormat("en-US", { weekday: "narrow", timeZone: "Europe/Berlin" }).format(now) === "S"
      ? // Need proper weekday number
        new Intl.DateTimeFormat("en-US", { weekday: "long", timeZone: "Europe/Berlin" }).format(now)
      : "",
    10
  );
  // Get actual weekday (0=Sun, 6=Sat)
  const weekday = new Date(
    now.toLocaleString("en-US", { timeZone: "Europe/Berlin" })
  ).getDay();

  const isWeekday = weekday >= 1 && weekday <= 5;
  const isBusinessHours = berlinHour >= 9 && berlinHour < 18;
  const isEvening = berlinHour >= 18 && berlinHour < 22;

  if (isWeekday && isBusinessHours) {
    return { label: "Jetzt erreichbar · Antwort in Minuten", online: true };
  }
  if (isWeekday && isEvening) {
    return { label: "Antwort heute Abend oder morgen früh", online: false };
  }
  if (weekday === 5 && berlinHour >= 18) {
    return { label: "Antwort am Montag", online: false };
  }
  if (weekday === 6) {
    return { label: "Antwort am Montag", online: false };
  }
  if (weekday === 0) {
    return { label: "Antwort morgen früh", online: false };
  }
  // Early morning weekday
  if (isWeekday && berlinHour < 9) {
    return { label: "Antwort ab 9 Uhr", online: false };
  }
  // Late night
  return { label: "Antwort morgen früh", online: false };
}

export default function ContactSection() {
  const [availability, setAvailability] = useState<{ label: string; online: boolean } | null>(null);

  useEffect(() => {
    setAvailability(getAvailability());
    // Update every minute
    const id = setInterval(() => setAvailability(getAvailability()), 60_000);
    return () => clearInterval(id);
  }, []);

  // SSR fallback
  const fallbackLabel = "Deutschsprachig · Antwort innerhalb von 24h";

  return (
    <section className="py-16 border-t border-gray-200">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Noch unsicher? Lass uns reden.</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Keine Verkaufsgespräche. Stell deine Fragen und entscheide danach in Ruhe.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/4915204000990?text=Hallo%20Enrico%2C%20ich%20interessiere%20mich%20f%C3%BCr%20den%20Einstieg%20als%20Anifit-Berater."
            onClick={() => trackPixel("ContactClick", { method: "whatsapp" })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl font-semibold text-white text-sm transition-colors shadow-sm hover:opacity-90"
            style={{ background: "var(--color-whatsapp)" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp schreiben
          </a>
          <a
            href="tel:+4932212619379"
            onClick={() => trackPixel("ContactClick", { method: "phone" })}
            className="inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl font-semibold text-gray-700 text-sm border-2 border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
            Anrufen
          </a>
          <a
            href="mailto:partner@anifutter-shop.de?subject=Frage%20zum%20Einstieg%20als%20Anifit-Berater"
            onClick={() => trackPixel("ContactClick", { method: "email" })}
            className="inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl font-semibold text-gray-700 text-sm border-2 border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            E-Mail
          </a>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          {availability ? (
            <>
              {availability.online && (
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1.5 align-middle animate-pulse" aria-hidden="true" />
              )}
              {availability.label}
            </>
          ) : (
            fallbackLabel
          )}
        </p>
      </div>
    </section>
  );
}
