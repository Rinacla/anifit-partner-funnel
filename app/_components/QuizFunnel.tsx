"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useUtmParams } from "@/lib/useUtmParams";
import { suggestEmailCorrection } from "@/lib/email-typo";
import { getEmailProvider } from "@/lib/email-provider";
import { useStartbonusDeadline } from "@/lib/useStartbonusDeadline";

const STORAGE_KEY = "anifit_quiz_progress";

const STEPS = [
  {
    question: "Hast du einen Hund oder eine Katze?",
    options: [
      { label: "🐕 Ja, einen Hund", value: "hund", popular: true },
      { label: "🐈 Ja, eine Katze", value: "katze" },
      { label: "🐾 Beides", value: "beides" },
      { label: "💭 Nein, aber ich liebe Tiere", value: "keins" },
    ],
  },
  {
    question: "Was beschreibt dich am besten?",
    options: [
      { label: "💰 Ich suche einen flexiblen Nebenverdienst", value: "nebenverdienst", popular: true },
      { label: "🤝 Ich suche eine sinnvolle Tätigkeit", value: "sinnvoll" },
      { label: "🔄 Ich möchte mich beruflich verändern", value: "berufswechsel" },
      { label: "🐾 Ich arbeite bereits mit Tieren", value: "tierprofi" },
    ],
  },
  {
    question: "Wie viel Zeit könntest du pro Woche investieren?",
    options: [
      { label: "⏱️ 2–5 Stunden", value: "wenig", popular: true },
      { label: "⏰ 5–10 Stunden", value: "mittel" },
      { label: "🕐 10+ Stunden", value: "viel" },
      { label: "🤷 Weiß ich noch nicht", value: "unsicher" },
    ],
  },
];

function getResult(answers: string[]) {
  const pet = answers[0];
  const motivation = answers[1];
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

  // Motivation-specific reinforcement
  const motivationText = motivation === "nebenverdienst"
    ? "Anifit passt perfekt als flexibler Nebenverdienst — Kunden bestellen von selbst nach, du verdienst auch wenn du gerade nicht arbeitest."
    : motivation === "sinnvoll"
    ? "Als Berater hilfst du Tierbesitzern, besser zu füttern. Sinnvoller Nebenverdienst statt stumpfem Geldverdienen."
    : motivation === "berufswechsel"
    ? "Viele Berater starten nebenbei und steigen dann voll ein. Der Übergang ist fließend, weil dein Einkommen mit jedem Kunden wächst."
    : "Dein Fachwissen als Tierprofi macht den Start besonders leicht — deine Kunden vertrauen dir von Anfang an.";

  const headline = time === "viel"
    ? "Du hast das Potenzial für ein Vollzeit-Einkommen!"
    : time === "mittel"
    ? "Perfekt für einen soliden Nebenverdienst!"
    : "Auch mit wenig Zeit kannst du starten!";

  const emoji = time === "viel" ? "🚀" : time === "mittel" ? "💪" : "✨";

  // Matched micro-testimonial based on quiz profile
  const testimonial = time === "viel" || time === "mittel"
    ? {
        name: "Thomas K.",
        location: "NRW",
        quote: "14 Monate später betreue ich über 60 Kunden. Die bestellen jeden Monat nach, ohne dass ich etwas tun muss.",
        detail: "60+ Kunden · passives Einkommen",
      }
    : motivation === "tierprofi"
    ? {
        name: "Lisa R.",
        location: "Niedersachsen",
        quote: "Als Hundetrainerin passt Anifit perfekt zu meiner Arbeit. Nach 5 Monaten sind es schon 20 Stammkunden.",
        detail: "20 Kunden nach 5 Monaten",
      }
    : {
        name: "Sarah M.",
        location: "Bayern",
        quote: "Nach 8 Monaten habe ich 35 feste Kunden und verdiene nebenbei über 600 € im Monat.",
        detail: "35 Kunden · ~600 €/Monat",
      };

  return { emoji, headline, petText, motivationText, earnings, testimonial };
}

function loadSavedProgress(): { step: number; answers: string[]; showResult: boolean } | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (data && Array.isArray(data.answers) && typeof data.step === "number") {
      return { step: data.step, answers: data.answers, showResult: !!data.showResult };
    }
  } catch { /* ignore corrupt data */ }
  return null;
}

function saveProgress(step: number, answers: string[], showResult: boolean) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ step, answers, showResult }));
  } catch { /* storage full or unavailable */ }
}

function clearProgress() {
  if (typeof window === "undefined") return;
  try { sessionStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
}

export default function QuizFunnel() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [phone, setPhone] = useState("");
  const [wantsCall, setWantsCall] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [restored, setRestored] = useState(false);
  const [emailSuggestion, setEmailSuggestion] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const [touched, setTouched] = useState<{ name?: boolean; email?: boolean }>({});
  const formRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const utm = useUtmParams();
  const bonusDeadline = useStartbonusDeadline();
  const [bonusDays, setBonusDays] = useState<number | null>(null);

  const nameValid = name.trim().length >= 2;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  const nameInvalid = touched.name && !nameValid;
  const emailInvalid = touched.email && !emailValid && email.trim().length > 0;

  // Restore quiz progress from sessionStorage on mount
  useEffect(() => {
    const saved = loadSavedProgress();
    if (saved && saved.answers.length > 0) {
      setStep(saved.step);
      setAnswers(saved.answers);
      setShowResult(saved.showResult);
      setRestored(true);
    }
  }, []);

  // Prefetch /danke when form appears for instant post-submit navigation
  useEffect(() => {
    if (showResult) {
      router.prefetch("/danke");
    }
  }, [showResult, router]);

  // Startbonus countdown for urgency in quiz result
  useEffect(() => {
    if (!bonusDeadline) return;
    const diff = bonusDeadline.getTime() - Date.now();
    setBonusDays(Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))));
  }, [bonusDeadline]);

  // Persist quiz progress on every change
  const persistProgress = useCallback((s: number, a: string[], sr: boolean) => {
    saveProgress(s, a, sr);
  }, []);

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
      const newAnswers = answers.slice(0, -1);
      setShowResult(false);
      setAnswers(newAnswers);
      setStep(STEPS.length - 1);
      persistProgress(STEPS.length - 1, newAnswers, false);
    } else if (step > 0) {
      const newAnswers = answers.slice(0, -1);
      setAnswers(newAnswers);
      setStep(step - 1);
      persistProgress(step - 1, newAnswers, false);
    }
    setRestored(false);
  };

  const handleAnswer = (value: string) => {
    setRestored(false);
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    trackPixel("QuizAnswer", { step: step + 1, question: STEPS[step].question, answer: value });
    if (step < STEPS.length - 1) {
      setStep(step + 1);
      persistProgress(step + 1, newAnswers, false);
    } else {
      // Show analyzing animation before revealing result
      setAnalyzing(true);
      trackPixel("QuizComplete", { answers: newAnswers.join(",") });
      setTimeout(() => {
        setAnalyzing(false);
        setShowResult(true);
        persistProgress(step + 1, newAnswers, true);
        setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 300);
      }, 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || !name.trim() || !email.trim()) return;
    // Honeypot check — real users never fill this
    if (honeypot) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), phone: phone.trim() || undefined, wantsCall, quiz: answers, utm, source: "quiz", _hp: honeypot }),
      });
      if (!res.ok) throw new Error("server");
      // Lead pixel fires on /danke page (single source of truth)
      clearProgress();
      setSuccess(true);
      // Brief success feedback before client-side navigation (no full page reload)
      const provider = getEmailProvider(email.trim());
      setTimeout(() => {
        setDone(true);
        const params = new URLSearchParams({ name: name.trim().split(" ")[0] });
        if (provider) params.set("p", provider);
        router.push(`/danke?${params.toString()}`);
      }, 600);
    } catch {
      setLoading(false);
      setError("Das hat leider nicht geklappt. Bitte versuch es nochmal.");
    }
  };

  if (done) return null;

  const progress = analyzing ? 90 : showResult ? 100 : Math.round(((step) / STEPS.length) * 100);

  return (
    <div className="w-full">
      {/* Progress bar */}
      <div className="h-1.5 bg-gray-100 rounded-full mb-8 overflow-hidden" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Quiz-Fortschritt">
        <div
          className="h-full bg-brand-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {analyzing ? (
        <div className="animate-fade-in text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
            <svg className="animate-spin w-10 h-10 text-brand-600" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </div>
          <p className="text-lg font-bold text-gray-900 mb-1">Dein Ergebnis wird berechnet…</p>
          <p className="text-sm text-gray-500">Basierend auf deinen Antworten und aktuellen Berater-Daten</p>
        </div>
      ) : !showResult ? (
        <div className="animate-fade-in" key={step}>
          {restored && step > 0 && (
            <div className="flex items-center justify-between bg-brand-50 border border-brand-100 rounded-lg px-3 py-2 mb-4 text-xs text-brand-700">
              <span>Willkommen zurück! Dein Quiz-Fortschritt wurde gespeichert.</span>
              <button
                onClick={() => { setStep(0); setAnswers([]); setShowResult(false); setRestored(false); clearProgress(); }}
                className="ml-2 underline hover:text-brand-800 whitespace-nowrap"
              >
                Neu starten
              </button>
            </div>
          )}
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-medium text-brand-600">
              Frage {step + 1} von {STEPS.length}
              {step === 0 && <span className="text-gray-400 font-normal ml-2">· ⏱ ~30 Sek.</span>}
            </p>
            {step > 0 && (
              <button
                onClick={handleBack}
                className="text-xs text-gray-500 hover:text-gray-600 transition-colors flex items-center gap-1"
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
                className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 text-gray-700 font-medium group ${opt.popular ? "border-brand-200 bg-brand-50/30 hover:border-brand-400 hover:bg-brand-50" : "border-gray-200 hover:border-brand-400 hover:bg-brand-50"}`}
              >
                <span className="flex items-center justify-between gap-2">
                  <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">
                    {opt.label}
                  </span>
                  {opt.popular && (
                    <span className="flex-shrink-0 text-[10px] font-semibold text-brand-700 bg-brand-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                      Beliebteste Wahl
                    </span>
                  )}
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
            className="text-xs text-gray-500 hover:text-gray-600 transition-colors flex items-center gap-1 mb-4"
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
                <div className="bg-brand-50 rounded-xl p-4 mb-5 border border-brand-100">
                  <p className="text-xs font-semibold text-brand-700 uppercase tracking-wide mb-3">Deine Prognose</p>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white rounded-lg p-3 text-center">
                      <p className="text-lg font-extrabold text-brand-600">{result.earnings.min}–{result.earnings.max} €</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">pro Monat möglich</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <p className="text-lg font-extrabold text-brand-600">{result.earnings.customers}</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">Kunden in {result.earnings.months} Mon.</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{result.petText}</p>
                  <p className="text-xs text-gray-600 leading-relaxed mt-2">{result.motivationText}</p>
                </div>

                {/* Matched micro-testimonial — social proof at conversion moment */}
                <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 text-xs font-bold flex-shrink-0 mt-0.5">
                      {result.testimonial.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-700 leading-relaxed italic">
                        &bdquo;{result.testimonial.quote}&ldquo;
                      </p>
                      <p className="text-[10px] text-gray-500 mt-1.5 font-medium">
                        {result.testimonial.name}, {result.testimonial.location} · {result.testimonial.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* What happens next — reduces post-submit anxiety */}
          <div className="bg-gray-50 rounded-xl p-4 mt-5">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Was passiert als Nächstes?</p>
            <div className="space-y-2.5">
              {[
                { icon: "📧", text: "Erste Email kommt in 2 Minuten" },
                { icon: "📱", text: "Enrico meldet sich persönlich bei dir" },
                { icon: "✅", text: "Du entscheidest danach in Ruhe" },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-base flex-shrink-0" aria-hidden="true">{step.icon}</span>
                  <p className="text-sm text-gray-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Startbonus urgency reminder */}
          {bonusDays !== null && bonusDays > 0 && (
            <div className="flex items-center justify-center mt-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-warm-700 bg-warm-50 border border-warm-200 rounded-full px-3 py-1.5">
                <span className="text-warm-500" aria-hidden="true">⏳</span>
                Noch <strong className="text-warm-800">{bonusDays} {bonusDays === 1 ? "Tag" : "Tage"}</strong> für 30% Startbonus
              </span>
            </div>
          )}

          {/* Form */}
          <div className="border-t border-gray-200 pt-6 mt-5">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-700 bg-brand-100 px-3 py-1 rounded-full uppercase tracking-wide">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Letzter Schritt
              </span>
            </div>
            <p className="text-sm font-semibold text-gray-900 mb-3 text-center">
              Hol dir deinen persönlichen Guide. Kostenlos:
            </p>
            {/* Trust indicators before form — reduce friction at conversion moment */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-4">
              <span className="text-[11px] text-gray-500 flex items-center gap-1">
                <svg className="w-3 h-3 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                Kostenlos &amp; unverbindlich
              </span>
              <span className="text-[11px] text-gray-500 flex items-center gap-1">
                <svg className="w-3 h-3 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                5 Emails, kein Spam
              </span>
              <span className="text-[11px] text-gray-500 flex items-center gap-1">
                <svg className="w-3 h-3 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                Jederzeit abmeldbar
              </span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="quiz-name" className="block text-xs font-medium text-gray-600 mb-1">Dein Vorname</label>
                <div className="relative">
                  <input
                    id="quiz-name"
                    type="text"
                    placeholder="z. B. Sarah"
                    autoComplete="given-name"
                    enterKeyHint="next"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                    required
                    className={`input text-sm ${nameValid ? "input-valid" : ""} ${nameInvalid ? "input-invalid" : ""}`}
                  />
                  {nameValid && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-600 pointer-events-none animate-fade-in" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </span>
                  )}
                </div>
                {nameInvalid && (
                  <p className="text-xs text-red-500 mt-1 animate-fade-in">Bitte gib deinen Namen ein.</p>
                )}
              </div>
              <div>
                <label htmlFor="quiz-email" className="block text-xs font-medium text-gray-600 mb-1">Deine E-Mail-Adresse</label>
                <div className="relative">
                  <input
                    id="quiz-email"
                    type="email"
                    placeholder="sarah@beispiel.de"
                    autoComplete="email"
                    enterKeyHint="done"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailSuggestion(null); }}
                    onBlur={() => { setTouched((t) => ({ ...t, email: true })); setEmailSuggestion(suggestEmailCorrection(email)); }}
                    required
                    className={`input text-sm ${emailValid ? "input-valid" : ""} ${emailInvalid ? "input-invalid" : ""}`}
                  />
                  {emailValid && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-600 pointer-events-none animate-fade-in" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </span>
                  )}
                </div>
                {emailSuggestion && (
                  <button
                    type="button"
                    onClick={() => { setEmail(emailSuggestion); setEmailSuggestion(null); }}
                    className="text-xs text-brand-700 mt-1 hover:underline"
                  >
                    Meintest du <strong>{emailSuggestion}</strong>?
                  </button>
                )}
                {emailInvalid && !emailSuggestion && (
                  <p className="text-xs text-red-500 mt-1 animate-fade-in">Bitte gib eine gültige E-Mail-Adresse ein.</p>
                )}
              </div>
              {/* Honeypot — hidden from real users, catches bots */}
              <div className="absolute opacity-0 -z-10 h-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
                <label htmlFor="quiz-website">Website</label>
                <input id="quiz-website" type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
              </div>
              <label htmlFor="quiz-callback" className="flex items-start gap-2 text-xs text-gray-600 cursor-pointer">
                <input
                  id="quiz-callback"
                  type="checkbox"
                  checked={wantsCall}
                  onChange={(e) => setWantsCall(e.target.checked)}
                  className="mt-0.5 rounded"
                />
                <span>Ja, ich möchte einen kurzen Rückruf (optional)</span>
              </label>
              {wantsCall && (
                <div>
                  <label htmlFor="quiz-phone" className="block text-xs font-medium text-gray-600 mb-1">Deine Telefonnummer</label>
                  <input
                    id="quiz-phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="z. B. 0170 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="input text-sm"
                  />
                </div>
              )}
              <label htmlFor="quiz-consent" className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer">
                <input
                  id="quiz-consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 rounded"
                  required
                />
                <span>
                  Ich stimme zu, dass meine Daten für den Versand des Guides und der
                  E-Mail-Serie verarbeitet werden.{" "}
                  <a href="/datenschutz" className="underline">Datenschutz</a>
                </span>
              </label>
              {error && (
                <p className="text-sm text-danger-600 bg-danger-50 rounded-lg px-4 py-2 text-center">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading || success || !consent}
                className={`w-full py-4 rounded-xl font-bold text-white text-base transition-all disabled:opacity-50 ${success ? "!opacity-100 !bg-green-500" : ""}`}
                style={{ background: success ? "#22c55e" : "var(--brand)", boxShadow: success ? "0 4px 14px rgba(34,197,94,0.3)" : "0 4px 14px var(--brand-shadow)" }}
              >
                {success ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5 animate-bounce-once" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Guide ist unterwegs!
                  </span>
                ) : loading ? "Wird gesendet…" : name.trim() ? `${name.trim().split(" ")[0]}, hol dir deinen Guide →` : "Meinen Guide anfordern →"}
              </button>
            </form>
            <p className="text-center text-xs text-gray-500 mt-3">
              Kein Spam. Jederzeit abmeldbar.
            </p>

            {/* WhatsApp alternative CTA */}
            <div className="mt-6 pt-5 border-t border-gray-200 text-center">
              <p className="text-xs text-gray-500 mb-3">Lieber direkt schreiben?</p>
              <a
                href={`https://wa.me/4915204000990?text=${encodeURIComponent(
                  `Hallo Enrico, ich habe gerade das Quiz auf partner.anifutter-shop.de gemacht und interessiere mich für den Einstieg als Anifit-Berater.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackPixel("QuizWhatsAppClick", { source: "quiz_result" })}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ background: "var(--color-whatsapp)", boxShadow: "0 2px 8px rgba(37,211,102,0.25)" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Per WhatsApp starten
              </a>
              <p className="text-[10px] text-gray-500 mt-2">Antwort innerhalb von 24h</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
