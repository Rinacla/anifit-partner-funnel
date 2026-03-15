"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useUtmParams } from "@/lib/useUtmParams";
import { suggestEmailCorrection } from "@/lib/email-typo";
import { getEmailProvider } from "@/lib/email-provider";
import { useStartbonusDeadline } from "@/lib/useStartbonusDeadline";
import Image from "next/image";

const STORAGE_KEY = "anifit_quiz_progress";

// Block 1: Qualifying questions (based on Dennis Rosenboom's proven funnel)
const STEPS = [
  {
    question: "Hast du einen Hund oder eine Katze?",
    options: [
      { label: "🐕 Hund(e)", value: "hund", popular: true },
      { label: "🐈 Katze(n)", value: "katze" },
      { label: "🐾 Hund(e) & Katze(n)", value: "beides" },
      { label: "Nein, aktuell nicht", value: "keins" },
    ],
  },
  {
    question: "Wie ist deine aktuelle berufliche Situation?",
    options: [
      { label: "💼 Angestellt(r)", value: "angestellt", popular: true },
      { label: "👔 Beamte(r)", value: "beamte" },
      { label: "🏠 Selbständig(r)", value: "selbststaendig" },
      { label: "👶 Mutterschutz / Elternzeit", value: "elternzeit" },
      { label: "🎓 Student / Schüler", value: "student" },
      { label: "🏡 Hausfrau/-mann", value: "hausfrau" },
      { label: "👴 Rentner/in", value: "rentner" },
      { label: "🔍 Arbeitssuchend", value: "arbeitssuchend" },
      { label: "📋 Sonstiges", value: "sonstiges" },
    ],
  },
  {
    question: "Die Tätigkeit als Anifit-Berater ist selbstständig.",
    subtitle: "Du bist dein eigener Chef, bestimmst deine Zeiten und deinen Arbeitsort. Es handelt sich um KEIN Anstellungsverhältnis.",
    options: [
      { label: "✅ Ja, ich habe verstanden, dass es sich um eine selbstständige Tätigkeit handelt", value: "ja_verstanden" },
      { label: "❌ Nein, ich suche ein Anstellungsverhältnis", value: "suche_anstellung" },
    ],
  },
  {
    question: "Hast du schon einmal im Direktvertrieb gearbeitet?",
    subtitle: "z. B. Thermomix, ProWin, Tupperware, LR Health & Beauty, …",
    options: [
      { label: "Ja, ich habe Erfahrung", value: "ja_erfahrung" },
      { label: "Nein, aber ich bin offen dafür", value: "nein_offen", popular: true },
      { label: "Nein, und ich bin unsicher", value: "nein_unsicher" },
    ],
  },
];

function loadSavedProgress(): { step: number; answers: string[]; showIntermediate: boolean; showForm: boolean; disqualified: boolean } | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (data && Array.isArray(data.answers) && typeof data.step === "number") {
      return { step: data.step, answers: data.answers, showIntermediate: !!data.showIntermediate, showForm: !!data.showForm, disqualified: !!data.disqualified };
    }
  } catch { /* ignore corrupt data */ }
  return null;
}

function saveProgress(step: number, answers: string[], showIntermediate: boolean, showForm: boolean, disqualified: boolean) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ step, answers, showIntermediate, showForm, disqualified }));
  } catch { /* storage full or unavailable */ }
}

function clearProgress() {
  if (typeof window === "undefined") return;
  try { sessionStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
}

export default function QuizFunnel() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showIntermediate, setShowIntermediate] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [disqualified, setDisqualified] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  // Form fields — Block 2
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [plz, setPlz] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [callbackSlot, setCallbackSlot] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [restored, setRestored] = useState(false);
  const [emailSuggestion, setEmailSuggestion] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const [touched, setTouched] = useState<{ firstName?: boolean; lastName?: boolean; email?: boolean; plz?: boolean; phone?: boolean }>({});

  // Generate next 5 weekdays with 3 time slots each (German timezone)
  const callbackSlots = (() => {
    const slots: { label: string; value: string; day: string }[] = [];
    const now = new Date();
    // Start from tomorrow
    const start = new Date(now);
    start.setDate(start.getDate() + 1);
    let daysAdded = 0;
    const dayNames = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
    const times = [
      { label: "Vormittag (10:00)", hour: "10:00" },
      { label: "Mittag (14:00)", hour: "14:00" },
      { label: "Abend (18:00)", hour: "18:00" },
    ];
    while (daysAdded < 5) {
      const d = new Date(start);
      d.setDate(start.getDate() + daysAdded + Math.floor(daysAdded / 5) * 2);
      // Skip weekends
      const dow = d.getDay();
      if (dow === 0 || dow === 6) { start.setDate(start.getDate() + 1); continue; }
      const dateStr = `${d.getDate().toString().padStart(2, "0")}.${(d.getMonth() + 1).toString().padStart(2, "0")}`;
      const dayLabel = `${dayNames[dow]}, ${dateStr}`;
      for (const t of times) {
        slots.push({
          label: `${dayLabel} · ${t.label}`,
          value: `${dateStr} ${t.hour}`,
          day: dayLabel,
        });
      }
      daysAdded++;
    }
    return slots;
  })();

  const formRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const utm = useUtmParams();
  const bonusDeadline = useStartbonusDeadline();
  const [bonusDays, setBonusDays] = useState<number | null>(null);

  const firstNameValid = firstName.trim().length >= 2;
  const lastNameValid = lastName.trim().length >= 2;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  const plzValid = /^\d{4,5}$/.test(plz.trim());
  const phoneValid = phone.trim().replace(/\D/g, "").length >= 6;

  // Restore progress
  useEffect(() => {
    const saved = loadSavedProgress();
    if (saved && saved.answers.length > 0) {
      setStep(saved.step);
      setAnswers(saved.answers);
      setShowIntermediate(saved.showIntermediate);
      setShowForm(saved.showForm);
      setDisqualified(saved.disqualified);
      setRestored(true);
    }
  }, []);

  useEffect(() => {
    if (showForm) router.prefetch("/danke");
  }, [showForm, router]);

  useEffect(() => {
    if (!bonusDeadline) return;
    const diff = bonusDeadline.getTime() - Date.now();
    setBonusDays(Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))));
  }, [bonusDeadline]);

  const trackPixel = (event: string, params?: Record<string, unknown>, standard = false) => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      const method = standard ? "track" : "trackCustom";
      if (params) (window as any).fbq(method, event, params);
      else (window as any).fbq(method, event);
    }
  };

  const handleBack = () => {
    setRestored(false);
    if (showForm) {
      setShowForm(false);
      setShowIntermediate(true);
      saveProgress(step, answers, true, false, disqualified);
    } else if (showIntermediate) {
      setShowIntermediate(false);
      const newAnswers = answers.slice(0, -1);
      setAnswers(newAnswers);
      setStep(STEPS.length - 1);
      saveProgress(STEPS.length - 1, newAnswers, false, false, false);
    } else if (step > 0) {
      // If coming back from disqualified, reset it
      if (disqualified) setDisqualified(false);
      const newAnswers = answers.slice(0, -1);
      setAnswers(newAnswers);
      setStep(step - 1);
      saveProgress(step - 1, newAnswers, false, false, false);
    }
  };

  const handleAnswer = (value: string) => {
    setRestored(false);
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    trackPixel("QuizAnswer", { step: step + 1, question: STEPS[step].question, answer: value });

    // Filter: "suche_anstellung" → disqualify
    if (value === "suche_anstellung") {
      setDisqualified(true);
      trackPixel("QuizDisqualified", { reason: "suche_anstellung" });
      saveProgress(step + 1, newAnswers, false, false, true);
      return;
    }

    if (step < STEPS.length - 1) {
      setStep(step + 1);
      saveProgress(step + 1, newAnswers, false, false, false);
    } else {
      // All qualifying questions done → show analyzing animation → intermediate
      setAnalyzing(true);
      trackPixel("QuizComplete", { answers: newAnswers.join(",") });
      setTimeout(() => {
        setAnalyzing(false);
        setShowIntermediate(true);
        saveProgress(step + 1, newAnswers, true, false, false);
      }, 2000);
    }
  };

  const handleContinueToForm = () => {
    setShowIntermediate(false);
    setShowForm(true);
    saveProgress(step, answers, false, true, false);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || !firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) return;
    if (honeypot) return;
    setLoading(true);
    setError("");
    try {
      const fullName = `${firstName.trim()} ${lastName.trim()}`;
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email: email.trim(),
          phone: phone.trim() || undefined,
          wantsCall: true,
          callbackSlot: callbackSlot || undefined,
          plz: plz.trim() || undefined,
          quiz: answers,
          utm,
          source: "quiz",
          _hp: honeypot,
        }),
      });
      if (!res.ok) throw new Error("server");
      clearProgress();
      try { localStorage.setItem("anifit_converted", "1"); } catch { /* ignore */ }
      setSuccess(true);
      const provider = getEmailProvider(email.trim());
      setTimeout(() => {
        setDone(true);
        const params = new URLSearchParams({ name: firstName.trim() });
        if (provider) params.set("p", provider);
        router.push(`/danke?${params.toString()}`);
      }, 600);
    } catch {
      setLoading(false);
      setError("Das hat leider nicht geklappt. Bitte versuch es nochmal.");
    }
  };

  if (done) return null;

  const totalSteps = STEPS.length + 4; // 4 qualifying + 4 contact fields
  const currentProgress = disqualified ? step + 1 : showForm ? STEPS.length + 2 : showIntermediate ? STEPS.length + 1 : analyzing ? STEPS.length : step;
  const progress = Math.round((currentProgress / totalSteps) * 100);

  // Disqualified screen
  if (disqualified) {
    return (
      <div className="w-full animate-fade-in">
        <div className="h-1.5 bg-gray-100 rounded-full mb-8 overflow-hidden">
          <div className="h-full bg-gray-400 rounded-full" style={{ width: `${progress}%` }} />
        </div>
        <div className="text-center py-8">
          <Image src="/images/anifit-logo.png" alt="Anifit" width={40} height={40} className="w-10 h-10 mx-auto mb-3 object-contain" />
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Danke für deine Ehrlichkeit!
          </h3>
          <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
            Die Tätigkeit als Anifit-Berater ist eine selbstständige Tätigkeit, kein Anstellungsverhältnis.
            Wenn du nach einem festen Job suchst, ist das leider nicht der richtige Weg für dich.
          </p>
          <p className="text-sm text-gray-600 mb-6">
            Aber vielleicht möchtest du unser Premium-Hundefutter trotzdem kennenlernen?
          </p>
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <a
              href="https://www.anifutter-shop.de"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all"
              style={{ background: "var(--brand)" }}
            >
              Zum Anifit-Shop →
            </a>
            <button
              onClick={() => { setDisqualified(false); handleBack(); }}
              className="text-xs text-gray-500 hover:text-gray-600 underline"
            >
              Zurück zur vorherigen Frage
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Progress bar */}
      <div className="h-1.5 bg-gray-100 rounded-full mb-8 overflow-hidden" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Fortschritt">
        <div
          className="h-full bg-brand-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Analyzing animation */}
      {analyzing ? (
        <div className="animate-fade-in text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
            <svg className="animate-spin w-10 h-10 text-brand-600" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </div>
          <p className="text-lg font-bold text-gray-900 mb-1">Deine Antworten werden ausgewertet…</p>
          <p className="text-sm text-gray-500">Einen Moment bitte</p>
        </div>

      /* Intermediate: "Du wurdest ausgewählt" */
      ) : showIntermediate ? (
        <div className="animate-fade-in text-center py-6">
          <Image src="/images/anifit-logo.png" alt="Anifit" width={48} height={48} className="w-12 h-12 mx-auto mb-3 object-contain" />
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Super! Wir möchten dich gerne persönlich kennenlernen.
          </h3>
          <p className="text-sm text-gray-600 mb-2 max-w-md mx-auto leading-relaxed">
            Deine Antworten zeigen, dass du gut zu uns passen könntest.
            Bitte beantworte noch ein paar kurze Fragen, damit wir Kontakt aufnehmen können.
          </p>

          {/* Earnings preview based on quiz answers */}
          {answers[1] && (
            <div className="bg-brand-50 rounded-xl p-4 my-5 border border-brand-100 max-w-sm mx-auto text-left">
              <p className="text-xs font-semibold text-brand-700 uppercase tracking-wide mb-2">Dein Potenzial</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3 text-center">
                  <p className="text-lg font-extrabold text-brand-600">
                    {answers[3] === "ja_erfahrung" ? "800–2.000" : "300–1.000"} €
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">pro Monat möglich</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <p className="text-lg font-extrabold text-brand-600">15–30%</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">lebenslange Provision</p>
                </div>
              </div>
            </div>
          )}

          {bonusDays !== null && bonusDays > 0 && (
            <div className="flex items-center justify-center my-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-warm-700 bg-warm-50 border border-warm-200 rounded-full px-3 py-1.5">
                <span className="text-warm-500" aria-hidden="true">⏳</span>
                Noch <strong className="text-warm-800">{bonusDays} {bonusDays === 1 ? "Tag" : "Tage"}</strong> für den Startbonus
              </span>
            </div>
          )}

          <p className="text-xs text-gray-500 mb-5">Noch 4 kurze Fragen</p>
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <button
              onClick={handleContinueToForm}
              className="w-full py-4 rounded-xl font-bold text-white text-base transition-all"
              style={{ background: "var(--brand)", boxShadow: "0 4px 14px var(--brand-shadow)" }}
            >
              Weiter →
            </button>
            <button onClick={handleBack} className="text-xs text-gray-500 hover:text-gray-600 flex items-center justify-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
              Zurück
            </button>
          </div>
        </div>

      /* Block 2: Contact form */
      ) : showForm ? (
        <div ref={formRef} className="animate-fade-in">
          <button onClick={handleBack} className="text-xs text-gray-500 hover:text-gray-600 transition-colors flex items-center gap-1 mb-4">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            Zurück
          </button>

          <p className="text-sm font-semibold text-gray-900 mb-1 text-center">
            Deine Kontaktdaten
          </p>
          <p className="text-xs text-gray-500 mb-5 text-center">
            Wir melden uns persönlich bei dir.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Vor- und Nachname */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="quiz-firstname" className="block text-xs font-medium text-gray-600 mb-1">Vorname *</label>
                <input
                  id="quiz-firstname"
                  type="text"
                  placeholder="z. B. Sarah"
                  autoComplete="given-name"
                  enterKeyHint="next"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, firstName: true }))}
                  required
                  className={`input text-sm ${firstNameValid ? "input-valid" : ""} ${touched.firstName && !firstNameValid ? "input-invalid" : ""}`}
                />
              </div>
              <div>
                <label htmlFor="quiz-lastname" className="block text-xs font-medium text-gray-600 mb-1">Nachname *</label>
                <input
                  id="quiz-lastname"
                  type="text"
                  placeholder="z. B. Müller"
                  autoComplete="family-name"
                  enterKeyHint="next"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, lastName: true }))}
                  required
                  className={`input text-sm ${lastNameValid ? "input-valid" : ""} ${touched.lastName && !lastNameValid ? "input-invalid" : ""}`}
                />
              </div>
            </div>

            {/* PLZ */}
            <div>
              <label htmlFor="quiz-plz" className="block text-xs font-medium text-gray-600 mb-1">Postleitzahl</label>
              <input
                id="quiz-plz"
                type="text"
                inputMode="numeric"
                placeholder="z. B. 80331"
                autoComplete="postal-code"
                enterKeyHint="next"
                maxLength={5}
                value={plz}
                onChange={(e) => setPlz(e.target.value.replace(/\D/g, ""))}
                onBlur={() => setTouched((t) => ({ ...t, plz: true }))}
                className={`input text-sm ${plzValid ? "input-valid" : ""} ${touched.plz && plz.length > 0 && !plzValid ? "input-invalid" : ""}`}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="quiz-email" className="block text-xs font-medium text-gray-600 mb-1">E-Mail-Adresse *</label>
              <div className="relative">
                <input
                  id="quiz-email"
                  type="email"
                  placeholder="sarah@beispiel.de"
                  autoComplete="email"
                  enterKeyHint="next"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setEmailSuggestion(null); }}
                  onBlur={() => { setTouched((t) => ({ ...t, email: true })); setEmailSuggestion(suggestEmailCorrection(email)); }}
                  required
                  className={`input text-sm ${emailValid ? "input-valid" : ""} ${touched.email && !emailValid && email.trim().length > 0 ? "input-invalid" : ""}`}
                />
                {emailValid && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-600 pointer-events-none animate-fade-in" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </span>
                )}
              </div>
              {emailSuggestion && (
                <button type="button" onClick={() => { setEmail(emailSuggestion); setEmailSuggestion(null); }} className="text-xs text-brand-700 mt-1 hover:underline">
                  Meintest du <strong>{emailSuggestion}</strong>?
                </button>
              )}
            </div>

            {/* Telefon (Pflicht) */}
            <div>
              <label htmlFor="quiz-phone" className="block text-xs font-medium text-gray-600 mb-1">Handy-Nummer *</label>
              <input
                id="quiz-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                enterKeyHint="done"
                placeholder="z. B. 0170 1234567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                required
                className={`input text-sm ${phoneValid ? "input-valid" : ""} ${touched.phone && !phoneValid && phone.trim().length > 0 ? "input-invalid" : ""}`}
              />
            </div>

            {/* Wunschtermin für Rückruf */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-2">Wann sollen wir dich anrufen? <span className="text-gray-400 font-normal">(deutsche Zeit)</span></label>
              <div className="grid grid-cols-1 gap-1.5 max-h-48 overflow-y-auto pr-1">
                {(() => {
                  // Group by day
                  const days = new Map<string, typeof callbackSlots>();
                  for (const s of callbackSlots) {
                    if (!days.has(s.day)) days.set(s.day, []);
                    days.get(s.day)!.push(s);
                  }
                  return Array.from(days.entries()).map(([day, daySlots]) => (
                    <div key={day}>
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mt-2 mb-1">{day}</p>
                      <div className="grid grid-cols-3 gap-1.5">
                        {daySlots.map((s) => (
                          <button
                            key={s.value}
                            type="button"
                            onClick={() => setCallbackSlot(s.value)}
                            className={`text-xs py-2 px-2 rounded-lg border transition-all text-center ${
                              callbackSlot === s.value
                                ? "border-brand-500 bg-brand-50 text-brand-700 font-semibold"
                                : "border-gray-200 text-gray-600 hover:border-brand-300"
                            }`}
                          >
                            {s.label.split("· ")[1]}
                          </button>
                        ))}
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>

            {/* Honeypot */}
            <div className="absolute opacity-0 -z-10 h-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
              <label htmlFor="quiz-website">Website</label>
              <input id="quiz-website" type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
            </div>

            {/* Consent */}
            <label htmlFor="quiz-consent" className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer">
              <input id="quiz-consent" type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 rounded" required />
              <span>
                Ich stimme zu, dass meine Daten für die Kontaktaufnahme verarbeitet werden.{" "}
                <a href="/datenschutz" className="underline">Datenschutz</a>
              </span>
            </label>

            {/* Error */}
            <div aria-live="assertive" aria-atomic="true">
              {error && <p role="alert" className="text-sm text-danger-600 bg-danger-50 rounded-lg px-4 py-2 text-center">{error}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || success || !consent}
              className={`w-full py-4 rounded-xl font-bold text-white text-base transition-all disabled:opacity-50 ${success ? "!opacity-100 !bg-green-500" : ""}`}
              style={{ background: success ? "#22c55e" : "var(--brand)", boxShadow: success ? "0 4px 14px rgba(34,197,94,0.3)" : "0 4px 14px var(--brand-shadow)" }}
            >
              {success ? (
                <span className="inline-flex items-center gap-2" role="status">
                  <svg className="w-5 h-5 animate-bounce-once" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Bewerbung abgeschickt!
                </span>
              ) : loading ? <span aria-live="polite">Wird gesendet…</span> : "Jetzt bewerben →"}
            </button>
          </form>

          {/* What happens next */}
          <div className="bg-gray-50 rounded-xl p-4 mt-5">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Was passiert als Nächstes?</p>
            <div className="space-y-2.5">
              {[
                { icon: "📧", text: "Du bekommst weitere Infos per E-Mail" },
                { icon: "📱", text: "Enrico meldet sich persönlich bei dir" },
                { icon: "✅", text: "Wir klären alles Weitere im Gespräch" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-base flex-shrink-0" aria-hidden="true">{s.icon}</span>
                  <p className="text-sm text-gray-600">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp alternative */}
          <div className="mt-6 pt-5 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500 mb-3">Lieber direkt schreiben?</p>
            <a
              href={`https://wa.me/4915204000990?text=${encodeURIComponent("Hallo Enrico, ich interessiere mich für die Anifit-Beratertätigkeit und würde gerne mehr erfahren.")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackPixel("QuizWhatsAppClick", { source: "quiz_form" })}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
              style={{ background: "var(--color-whatsapp)", boxShadow: "0 2px 8px rgba(37,211,102,0.25)" }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Per WhatsApp starten
            </a>
          </div>
        </div>

      /* Block 1: Quiz questions */
      ) : (
        <div className="animate-fade-in" key={step}>
          {restored && step > 0 && (
            <div className="flex items-center justify-between bg-brand-50 border border-brand-100 rounded-lg px-3 py-2 mb-4 text-xs text-brand-700">
              <span>Willkommen zurück! Dein Fortschritt wurde gespeichert.</span>
              <button onClick={() => { setStep(0); setAnswers([]); setRestored(false); clearProgress(); }} className="ml-2 underline hover:text-brand-800 whitespace-nowrap">Neu starten</button>
            </div>
          )}
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-medium text-brand-600">
              Frage {step + 1} von {STEPS.length}
              {step === 0 && <span className="text-gray-400 font-normal ml-2">· ⏱ ~1 Min.</span>}
            </p>
            {step > 0 && (
              <button onClick={handleBack} className="text-xs text-gray-500 hover:text-gray-600 transition-colors flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                Zurück
              </button>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {STEPS[step].question}
          </h3>
          {STEPS[step].subtitle && (
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">{STEPS[step].subtitle}</p>
          )}
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
      )}
    </div>
  );
}
