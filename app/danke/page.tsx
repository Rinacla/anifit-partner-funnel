"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Footer from "@/app/_components/Footer";
import { PROVIDER_TIPS } from "@/lib/email-provider";

const SHARE_URL = "https://partner.anifutter-shop.de";
const SHARE_TEXT = "Ich hab mir gerade einen Guide geholt, wie man als Anifit-Fachberater nebenbei Geld verdienen kann. Schau mal rein:";
const WHATSAPP_CONTACT = "https://wa.me/4915204000990?text=Hallo%20Enrico%2C%20ich%20habe%20gerade%20den%20Guide%20angefordert%20und%20h%C3%A4tte%20eine%20Frage.";
const VIDEO_ID = "jx_Bl4dWkQk";

export default function DankePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-brand-50 to-white" />}>
      <DankeContent />
    </Suspense>
  );
}

function DankeContent() {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name") || "";
  const providerKey = searchParams.get("p") || "";
  const providerTip = PROVIDER_TIPS[providerKey] || null;
  const [copied, setCopied] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Meta Pixel Lead event
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }
    // Google Ads Conversion: TP Lead
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-17578752566/epMGCP28h4UcELb0mb5B",
        value: 1.0,
        currency: "EUR",
      });
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback for older browsers
      const input = document.createElement("input");
      input.value = SHARE_URL;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + " " + SHARE_URL)}`;
  const emailUrl = `mailto:?subject=${encodeURIComponent("Nebenverdienst mit Hundefutter")}&body=${encodeURIComponent(SHARE_TEXT + "\n\n" + SHARE_URL)}`;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-brand-50 to-white flex items-center justify-center px-6 py-20">
        <div className="max-w-lg">
          <div className="text-center mb-10">
            <div className="text-6xl mb-6">✅</div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
              {userName ? `Geschafft, ${userName}! Dein Guide ist unterwegs!` : "Geschafft. Dein Guide ist unterwegs!"}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Schau in dein Postfach (auch Spam checken). Die erste Mail kommt
              innerhalb weniger Minuten.
            </p>
          </div>

          {/* Provider-specific inbox instructions */}
          {providerTip && (
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-8 flex items-start gap-4">
              <span className="text-2xl flex-shrink-0" aria-hidden="true">{providerTip.icon}</span>
              <div className="min-w-0">
                <p className="font-bold text-sm text-blue-900 mb-1">
                  Tipp für {providerTip.name}-Nutzer:
                </p>
                <p className="text-sm text-blue-800 leading-relaxed">
                  {providerTip.tip}
                </p>
                {providerTip.link && (
                  <a
                    href={providerTip.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm font-semibold text-blue-700 hover:text-blue-900 underline decoration-blue-300 hover:decoration-blue-500 transition-colors"
                  >
                    {providerTip.name} öffnen →
                  </a>
                )}
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
            <h2 className="font-bold text-lg mb-4 text-gray-900">
              Was dich in den nächsten Tagen erwartet:
            </h2>
            <div className="space-y-4">
              {[
                { day: "Heute", icon: "📩", text: "Dein Guide + Startbonus-Infos" },
                { day: "Morgen", icon: "💰", text: "Echte Verdienst-Zahlen und Rechenbeispiele" },
                { day: "Tag 3", icon: "📋", text: "So startest du (Schritt für Schritt + Willkommenspaket)" },
                { day: "Tag 5", icon: "🚀", text: "Deine ersten 5 Kunden + Mentor-Vorstellung" },
                { day: "Tag 7", icon: "🎯", text: "Dein persönlicher Registrierungslink" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 text-center">
                    <span className="text-xs font-semibold text-brand-700 bg-brand-100 px-2 py-1 rounded-full">
                      {item.day}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <p className="text-gray-700 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Step: Watch the video */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-8">
            <div className="text-center mb-4">
              <p className="text-xs font-bold tracking-widest uppercase text-brand-700 bg-brand-100 px-3 py-1 rounded-full inline-block mb-3">Empfohlener nächster Schritt</p>
              <h2 className="font-bold text-lg text-gray-900 mb-2">
                Schau dir das Geschäftsmodell an (30 Min.)
              </h2>
              <p className="text-sm text-gray-600">
                Während du auf deine erste Mail wartest: Diese Präsentation erklärt Provision, Produkte und Ablauf.
              </p>
            </div>
            {!showVideo ? (
              <button
                onClick={() => {
                  setShowVideo(true);
                  if ((window as any).fbq) (window as any).fbq("trackCustom", "DankeVideoPlay");
                }}
                className="relative w-full rounded-xl overflow-hidden group cursor-pointer block"
              >
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Anifit Business-Präsentation"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-brand-600 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-mono px-2 py-1 rounded">
                  30:12
                </div>
              </button>
            ) : (
              <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                  title="Anifit Business-Präsentation"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            )}
            <p className="text-xs text-gray-500 text-center mt-3">
              Offizielle Provital/Anifit Geschäftspräsentation
            </p>
          </div>

          {/* Referral / Share */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-2 text-center">Kennst du jemanden, der das auch interessiert?</h3>
            <p className="text-sm text-gray-500 text-center mb-5">
              Teile den Guide mit Freunden, die Hunde lieben und sich ein Nebeneinkommen wünschen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-white text-sm transition-colors"
                style={{ background: "var(--color-whatsapp)" }}
                onClick={() => {
                  if ((window as any).fbq) (window as any).fbq("trackCustom", "ShareWhatsApp");
                }}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Per WhatsApp teilen
              </a>
              <a
                href={emailUrl}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-gray-700 text-sm border-2 border-gray-200 hover:bg-gray-50 transition-colors"
                onClick={() => {
                  if ((window as any).fbq) (window as any).fbq("trackCustom", "ShareEmail");
                }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                Per E-Mail teilen
              </a>
            </div>
            <button
              onClick={handleCopy}
              className="w-full mt-3 py-2.5 px-4 rounded-xl text-sm font-medium text-gray-500 border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4 text-brand-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Link kopiert!
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" /></svg>
                  Link kopieren
                </>
              )}
            </button>
          </div>

          {/* Direct Contact CTAs */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8 text-center">
            <p className="text-2xl mb-2">💬</p>
            <h3 className="font-bold text-gray-900 mb-2">{userName ? `${userName}, noch Fragen? Schreib Enrico direkt.` : "Fragen? Schreib Enrico direkt."}</h3>
            <p className="text-sm text-gray-600 mb-4">
              Du erreichst mich per WhatsApp oder Telefon. Kostenlos und unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_CONTACT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-white text-sm transition-colors"
                style={{ background: "var(--color-whatsapp)" }}
                onClick={() => {
                  if ((window as any).fbq) (window as any).fbq("trackCustom", "WhatsAppContact");
                }}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Per WhatsApp schreiben
              </a>
              <a
                href="tel:+4932212619379"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-gray-700 text-sm border-2 border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                Anrufen
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-3">Mo–Fr, deutschsprachig · Antwort innerhalb von 24h</p>
          </div>

          <div className="bg-brand-50 rounded-xl p-6 border border-brand-100 mb-8">
            <p className="text-sm text-brand-800 leading-relaxed">
              <strong>Tipp:</strong> Speichere die Absenderadresse{" "}
              <span className="font-mono text-xs">partner@anifutter-shop.de</span>{" "}
              in deinen Kontakten, damit keine Mail im Spam landet.
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://www.anifutter-shop.de"
              className="inline-block py-3 px-8 rounded-xl font-semibold text-brand-700 border-2 border-brand-200 hover:bg-brand-50 transition-colors text-sm"
            >
              Zum Anifit-Shop →
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
