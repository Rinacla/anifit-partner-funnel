"use client";

import { useState, FormEvent, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useUtmParams } from "@/lib/useUtmParams";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);
  const utm = useUtmParams();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, utm, source }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
        setLoading(false);
        return;
      }

      trackPixel("Lead", { content_name: source }, true);
      router.push("/danke");
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-base transition-shadow"
          style={{ ["--tw-ring-color" as string]: "#4CAF50" }}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-base transition-shadow"
          disabled={loading}
        />
      </div>
      <div className="flex items-start gap-3">
        <input
          id={`${idPrefix}consent`}
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
          disabled={loading}
        />
        <label htmlFor={`${idPrefix}consent`} className="text-xs text-gray-500 leading-relaxed">
          Ich stimme zu, dass meine Daten für den Versand des Guides und der
          E-Mail-Serie verarbeitet werden.{" "}
          <a href="/datenschutz" className="text-green-600 underline">Datenschutz</a>
        </label>
      </div>
      {error && (
        <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading || !consent}
        className="w-full py-4 px-6 rounded-xl font-bold text-white text-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
        style={{
          background: loading ? "#81C784" : "#4CAF50",
          boxShadow: loading ? "none" : "0 4px 14px rgba(76,175,80,0.4)",
        }}
      >
        {loading ? "Wird gesendet…" : "Gratis-Guide anfordern →"}
      </button>
      <p className="text-xs text-center text-gray-400">
        Kein Spam. Keine Weitergabe deiner Daten. Jederzeit abmeldbar.
      </p>
    </form>
  );
}
