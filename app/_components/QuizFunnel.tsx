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
      { label: "🏠 Ich suche einen flexiblen Nebenverdienst", value: "nebenverdienst" },
      { label: "🔄 Ich möchte mich beruflich verändern", value: "berufswechsel" },
      { label: "🐾 Ich arbeite bereits mit Tieren", value: "tierprofi" },
      { label: "🌱 Ich suche eine sinnvolle Beschäftigung", value: "sinnvoll" },
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
  const time = answers[2];
  if (time === "viel") return { emoji: "🚀", headline: "Du hast das Potenzial für ein Vollzeit-Einkommen!", sub: "Mit 10+ Stunden pro Woche kannst du dir schnell einen stabilen Kundenstamm aufbauen." };
  if (time === "mittel") return { emoji: "💪", headline: "Perfekt für einen soliden Nebenverdienst!", sub: "5–10 Stunden reichen, um dir 500–1.000 € monatlich aufzubauen." };
  return { emoji: "✨", headline: "Auch mit wenig Zeit kannst du starten!", sub: "Viele unserer Berater haben mit 2–3 Stunden pro Woche angefangen." };
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
  const formRef = useRef<HTMLDivElement>(null);
  const utm = useUtmParams();

  const trackPixel = (event: string, params?: Record<string, unknown>) => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      if (params) {
        (window as any).fbq("trackCustom", event, params);
      } else {
        (window as any).fbq("trackCustom", event);
      }
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
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), phone: phone.trim() || undefined, wantsCall, quiz: answers, utm }),
      });
      trackPixel("FormSubmit", { wantsCall, quizAnswers: answers.join(",") });
      setDone(true);
      window.location.href = "/danke";
    } catch {
      setLoading(false);
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
          <p className="text-xs font-medium text-green-600 mb-2">
            Frage {step + 1} von {STEPS.length}
          </p>
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
          {/* Result */}
          <div className="text-center mb-8 animate-fade-in">
            <span className="text-4xl mb-3 block">{getResult(answers).emoji}</span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {getResult(answers).headline}
            </h3>
            <p className="text-gray-600 text-sm">
              {getResult(answers).sub}
            </p>
          </div>

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
                  placeholder="Deine Telefonnummer"
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
              <button
                type="submit"
                disabled={loading || !consent}
                className="w-full py-4 rounded-xl font-bold text-white text-base transition-all disabled:opacity-50"
                style={{ background: "#4CAF50", boxShadow: "0 4px 14px rgba(76,175,80,0.4)" }}
              >
                {loading ? "Wird gesendet…" : "Meinen Guide anfordern →"}
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
