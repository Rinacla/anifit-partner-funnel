"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useUtmParams } from "@/lib/useUtmParams";
import { suggestEmailCorrection } from "@/lib/email-typo";
import { getEmailProvider } from "@/lib/email-provider";

function trackPixel(event: string, params?: Record<string, unknown>, standard = false) {
  if (typeof window !== "undefined" && (window as any).fbq) {
    const method = standard ? "track" : "trackCustom";
    if (params) {
      (window as any).fbq(method, event, params);
    } else {
      (window as any).fbq(method, event);
    }
  }
}

export default function LeadForm({ idPrefix = "", source = "inline" }: { idPrefix?: string, source?: string }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [wantsCall, setWantsCall] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);
  const [emailSuggestion, setEmailSuggestion] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const utm = useUtmParams();

  // Prefetch /danke for instant post-submit navigation
  useEffect(() => {
    router.prefetch("/danke");
  }, [router]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (honeypot) return; // bot trap
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone: phone.trim() || undefined, wantsCall, utm, source, _hp: honeypot }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
        setLoading(false);
        return;
      }

      // Lead pixel fires on /danke page (single source of truth)
      setSuccess(true);
      // Brief success feedback before client-side navigation
      const provider = getEmailProvider(email.trim());
      setTimeout(() => {
        const params = new URLSearchParams({ name: name.trim().split(" ")[0] });
        if (provider) params.set("p", provider);
        router.push(`/danke?${params.toString()}`);
      }, 600);
    } catch {
      setError("Netzwerkfehler. Bitte prüfe deine Verbindung.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor={`${idPrefix}name`}
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Dein Name
        </label>
        <input
          id={`${idPrefix}name`}
          type="text"
          required
          autoComplete="given-name"
          placeholder="z. B. Sarah"
          enterKeyHint="next"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          disabled={loading}
        />
      </div>
      <div>
        <label
          htmlFor={`${idPrefix}email`}
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Deine E-Mail-Adresse
        </label>
        <input
          id={`${idPrefix}email`}
          type="email"
          required
          autoComplete="email"
          placeholder="sarah@beispiel.de"
          enterKeyHint="done"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setEmailSuggestion(null); }}
          onBlur={() => setEmailSuggestion(suggestEmailCorrection(email))}
          className="input"
          disabled={loading}
        />
        {emailSuggestion && (
          <button
            type="button"
            onClick={() => { setEmail(emailSuggestion); setEmailSuggestion(null); }}
            className="text-xs text-brand-700 mt-1 hover:underline"
          >
            Meintest du <strong>{emailSuggestion}</strong>?
          </button>
        )}
      </div>
      {/* Honeypot — invisible to real users, catches bots */}
      <div className="absolute opacity-0 -z-10 h-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
        <label htmlFor={`${idPrefix}website`}>Website</label>
        <input id={`${idPrefix}website`} type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
      </div>
      <div className="flex items-start gap-3">
        <input
          id={`${idPrefix}callback`}
          type="checkbox"
          checked={wantsCall}
          onChange={(e) => setWantsCall(e.target.checked)}
          className="mt-1 w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
          disabled={loading}
        />
        <label htmlFor={`${idPrefix}callback`} className="text-sm text-gray-600 leading-relaxed">
          Ja, ich möchte einen kurzen Rückruf (optional)
        </label>
      </div>
      {wantsCall && (
        <div>
          <label
            htmlFor={`${idPrefix}phone`}
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Deine Telefonnummer
          </label>
          <input
            id={`${idPrefix}phone`}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="z. B. 0170 1234567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input"
            disabled={loading}
          />
        </div>
      )}
      <div className="flex items-start gap-3">
        <input
          id={`${idPrefix}consent`}
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
          disabled={loading}
        />
        <label htmlFor={`${idPrefix}consent`} className="text-xs text-gray-500 leading-relaxed">
          Ich stimme zu, dass meine Daten für den Versand des Guides und der
          E-Mail-Serie verarbeitet werden.{" "}
          <a href="/datenschutz" className="text-brand-600 underline">Datenschutz</a>
        </label>
      </div>
      {error && (
        <p className="text-sm text-danger-600 bg-danger-50 px-4 py-3 rounded-lg">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading || success || !consent}
        className={`w-full py-4 px-6 rounded-xl font-bold text-white text-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed ${success ? "!opacity-100" : ""}`}
        style={{
          background: success ? "#22c55e" : loading ? "var(--brand-light)" : "var(--brand)",
          boxShadow: success ? "0 4px 14px rgba(34,197,94,0.3)" : loading ? "none" : "0 4px 14px var(--brand-shadow)",
        }}
      >
        {success ? (
          <span className="inline-flex items-center justify-center gap-2">
            <svg className="w-5 h-5 animate-bounce-once" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            Guide ist unterwegs!
          </span>
        ) : loading ? "Wird gesendet…" : name.trim() ? `${name.trim().split(" ")[0]}, hol dir deinen Guide →` : "Gratis-Guide anfordern →"}
      </button>
      <p className="text-xs text-center text-gray-500">
        Kein Spam. Keine Weitergabe deiner Daten. Jederzeit abmeldbar.
      </p>

      {/* WhatsApp alternative CTA */}
      <div className="mt-5 pt-4 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-500 mb-2.5">Lieber direkt schreiben?</p>
        <a
          href={`https://wa.me/4915204000990?text=${encodeURIComponent(
            "Hallo Enrico, ich interessiere mich für den Einstieg als Anifit-Berater. Kannst du mir mehr erzählen?"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackPixel("FormWhatsAppClick", { source })}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
          style={{ background: "var(--color-whatsapp)", boxShadow: "0 2px 8px rgba(37,211,102,0.25)" }}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Per WhatsApp starten
        </a>
      </div>
    </form>
  );
}
