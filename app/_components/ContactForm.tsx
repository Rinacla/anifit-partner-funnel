"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [beruf, setBeruf] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || !name.trim() || !email.trim()) return;
    setLoading(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          source: "tierberufe",
          beruf,
          message: message.trim() || undefined,
        }),
      });
      setDone(true);
    } catch {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="text-center py-6">
        <p className="text-2xl mb-2">✅</p>
        <p className="font-bold text-gray-900 mb-1">Nachricht gesendet!</p>
        <p className="text-sm text-gray-600">Ich melde mich innerhalb von 24 Stunden bei Ihnen.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Ihr Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-sm"
      />
      <input
        type="email"
        placeholder="Ihre E-Mail-Adresse"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-sm"
      />
      <select
        value={beruf}
        onChange={(e) => setBeruf(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-gray-700"
      >
        <option value="">Berufsgruppe wählen…</option>
        <option value="tierarzt">Tierarzt / Tierärztin</option>
        <option value="thp">Tierheilpraktiker/in</option>
        <option value="zuechter">Züchter/in</option>
        <option value="sonstiges">Sonstiges</option>
      </select>
      <textarea
        placeholder="Ihre Nachricht (optional)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={3}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-sm resize-none"
      />
      <label className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 rounded"
          required
        />
        <span>
          Ich stimme der Verarbeitung meiner Daten zu.{" "}
          <a href="/datenschutz" className="underline">Datenschutz</a>
        </span>
      </label>
      <button
        type="submit"
        disabled={loading || !consent}
        className="w-full py-4 rounded-xl font-bold text-white text-base transition-all disabled:opacity-50"
        style={{ background: "#2563eb" }}
      >
        {loading ? "Wird gesendet…" : "Unverbindlich anfragen →"}
      </button>
    </form>
  );
}
