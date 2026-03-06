"use client";

import { useState, useRef } from "react";
import { useUtmParams } from "@/lib/useUtmParams";

const STEPS = [
  {
    question: "Hast du einen Hund oder eine Katze?",
    options: [
      { label: "🐕 Ja, einen Hund", value: "hund" },
      { label: "🐈 Ja, eine Katze", value: "katze" },
      { label: "🐾 Beides", value: "beides" },
      { label: "💭 Nein, aber ich liebe Tiere", value: "keins" },
    ],
  },
  {
    question: "Was beschreibt dich am besten?",
    options: [
      { label: "💰 Ich suche einen flexiblen Nebenverdienst", value: "nebenverdienst" },
      { label: "🤝 Ich suche eine sinnvolle Tätigkeit", value: "sinnvoll" },
      { label: "🔄 Ich möchte mich beruflich verändern", value: "berufswechsel" },
      { label: "🐾 Ich arbeite bereits mit Tieren", value: "tierprofi" },
    ],
  },
  {
    question: "Wie viel Zeit könntest du pro Woche investieren?",
    options: [
      { label: "⏱️ 2–5 Stunden", value: "wenig" },
      { label: "⏰ 5–10 Stunden", value: "mittel" },
      { label: "🕐 10+ Stunden", value: "viel" },
      { label: "🤷 Weiß ich noch nicht", value: "unsicher" },
    ],
  },
];

function getResult(answers: string[]) {
  const pet = answers[0];
  const time = answers[2];

  // Earnings estimate based on time investment
  const earnings = time === "viel"
    ? { min: 800, max: 2000, customers: "30–60", months: "6–12" }
    : time === "mittel"
    ? { min: 400, max: 1000, customers: "15–30", months: "8–14" }
    : { min: 150, max: 500, customers: "5–15", months: "10–18" };

  // Pet-specific angle
  const petText = pet === "katze"
    ? "Katzenbesitzer sind eine treue Zielgruppe mit hoher Nachbestellrate."
    : pet === "beides"
    ? "Mit Hund und Katze erreichst du beide Zielgruppen gleichzeitig."
    : pet === "keins"
    ? "Auch ohne eigenes Tier kannst du Tierbesitzer kompetent beraten."
    : "Hundebesitzer sind die größte Zielgruppe — perfekt für den Start.";

  const headline = time === "viel"
    ? "Du hast das Potenzial für ein Vollzeit-Einkommen!"
    : time === "mittel"
    ? "Perfekt für einen soliden Nebenverdienst!"
    : "Auch mit wenig Zeit kannst du starten!";

  const emoji = time === "viel" ? "🚀" : time === "mittel" ? "💪" : "✨";

  return { emoji, headline, petText, earnings };
}

export default function QuizFunnel() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [phone, setPhone] = useState("");
  const [wantsCall, setWantsCall] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLDivElement>(null);
  const utm = useUtmParams();

  const trackPixel = (event: string, params?: Record<string, unknown>, standard = false) => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      const method = standard ? "track" : "trackCustom";
      if (params) {
        (window as any).fbq(method, event, params);
      } else {
        (window as any).fbq(method, event);
      }
    }
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
      setAnswers(answers.slice(0, -1));
      setStep(STEPS.length - 1);
    } else if (step > 0) {
      setAnswers(answers.slice(0, -1));
      setStep(step - 1);
    }
  };

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    trackPixel("QuizAnswer", { step: step + 1, question: STEPS[step].question, answer: value });
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
      trackPixel("QuizComplete", { answers: newAnswers.join(",") });
      setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 300);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || !name.trim() || !email.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), phone: phone.trim() || undefined, wantsCall, quiz: answers, utm, source: "quiz" }),
      });
      if (!res.ok) throw new Error("server");
      // Lead pixel fires on /danke page (single source of truth)
      setDone(true);
      window.location.href = `/danke?name=${encodeURIComponent(name.trim().split(" ")[0])}`;
    } catch {
      setLoading(false);
      setError("Das hat leider nicht geklappt. Bitte versuch es nochmal.");
    }
  };

  if (done) return null;

  const progress = showResult ? 100 : Math.round(((step) / STEPS.length) * 100);

  return (
    <div className="w-full">
      {/* Progress bar */}
      <div className="h-1.5 bg-gray-100 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-green-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {!showResult ? (
        <div className="animate-fade-in" key={step}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-medium text-green-600">
              Frage {step + 1} von {STEPS.length}
            </p>
            {step > 0 && (
              <button
                onClick={handleBack}
                className="text-xs text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                Zurück
              </button>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            {STEPS[step].question}
          </h3>
          <div className="space-y-3">
            {STEPS[step].options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(opt.value)}
                className="w-full text-left px-5 py-4 rounded-xl border-2 border-gray-100 hover:border-green-400 hover:bg-green-50 transition-all duration-200 text-gray-700 font-medium group"
              >
                <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">
                  {opt.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div ref={formRef}>
          {/* Back to quiz */}
          <button
            onClick={handleBack}
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1 mb-4"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            Zurück zur letzten Frage
          </button>
          {/* Result */}
          {(() => {
            const result = getResult(answers);
            return (
              <div className="mb-8 animate-fade-in">
                <div className="text-center mb-5">
                  <span className="text-4xl mb-3 block">{result.emoji}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {result.headline}
                  </h3>
                </div>

                {/* Personalized earnings preview */}
                <div className="bg-green-50 rounded-xl p-4 mb-5 border border-green-100">
                  <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-3">Deine Prognose</p>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white rounded-lg p-3 text-center">
                      <p className="text-lg font-extrabold text-green-600">{result.earnings.min}–{result.earnings.max} €</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">pro Monat möglich</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <p className="text-lg font-extrabold text-green-600">{result.earnings.customers}</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">Kunden in {result.earnings.months} Mon.</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{result.petText}</p>
                </div>
              </div>
            );
          })()}

          {/* Form */}
          <div className="border-t border-gray-100 pt-6">
            <p className="text-sm font-semibold text-gray-900 mb-4 text-center">
              Hol dir deinen persönlichen Guide. Kostenlos:
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Dein Vorname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none text-sm"
              />
              <input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none text-sm"
              />
              <label className="flex items-start gap-2 text-xs text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={wantsCall}
                  onChange={(e) => setWantsCall(e.target.checked)}
                  className="mt-0.5 rounded"
                />
                <span>Ja, ich möchte einen kurzen Rückruf (optional)</span>
              </label>
              {wantsCall && (
                <input
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="z. B. 0170 1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none text-sm"
                />
              )}
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
              {error && (
                <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2 text-center">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading || !consent}
                className="w-full py-4 rounded-xl font-bold text-white text-base transition-all disabled:opacity-50"
                style={{ background: "#4CAF50", boxShadow: "0 4px 14px rgba(76,175,80,0.4)" }}
              >
                {loading ? "Wird gesendet…" : name.trim() ? `${name.trim().split(" ")[0]}, hol dir deinen Guide →` : "Meinen Guide anfordern →"}
              </button>
            </form>
            <p className="text-center text-xs text-gray-400 mt-3">
              Kein Spam. Jederzeit abmeldbar.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
