import { NextRequest, NextResponse } from "next/server";
import { createContact, sendEmail } from "@/lib/emailit";
import { welcomeEmail } from "@/lib/emails";
import { tierberufeConfirmEmail } from "@/lib/tierberufe-emails";
import { isRateLimited, getClientIp } from "@/lib/rate-limit";

const TRACKING_URL = "https://track.anifutter-shop.de/lead";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  // Rate limit: max 5 submissions per IP per 15 minutes
  const clientIp = getClientIp(req.headers);
  if (isRateLimited(clientIp, 5, 15 * 60 * 1000)) {
    console.warn(`[RATE_LIMIT] Blocked lead submission from ${clientIp}`);
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte versuche es in ein paar Minuten erneut." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const { name, email, source, beruf, message, phone, wantsCall, quiz, utm, _hp } = body as {
    name?: string;
    email?: string;
    source?: string;
    beruf?: string;
    message?: string;
    phone?: string;
    wantsCall?: boolean;
    quiz?: string[];
    utm?: Record<string, string>;
    _hp?: string;
  };

  // Honeypot: if filled, it's a bot — return success silently
  if (_hp) {
    console.warn(`[HONEYPOT] Bot caught from ${clientIp}`);
    return NextResponse.json({ success: true });
  }

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Bitte gib deinen Namen ein." }, { status: 400 });
  }
  if (!email || typeof email !== "string" || !isValidEmail(email.trim())) {
    return NextResponse.json({ error: "Bitte gib eine gültige E-Mail-Adresse ein." }, { status: 400 });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim().toLowerCase();
  const isTierberufe = source === "tierberufe";

  // Fire-and-forget: persist lead to Hetzner DB for reporting
  fetch(TRACKING_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: cleanName,
      email: cleanEmail,
      source: source || null,
      phone: phone || null,
      wantsCall: !!wantsCall,
      quiz: quiz || null,
      utm_source: utm?.utm_source || null,
      utm_medium: utm?.utm_medium || null,
      utm_campaign: utm?.utm_campaign || null,
      gclid: utm?.gclid || null,
      fbclid: utm?.fbclid || null,
    }),
  }).catch((err) => console.error("[LEAD_DB] Hetzner persist failed:", err.message));

  try {
    await createContact(cleanEmail, cleanName);
  } catch (err) {
    console.error("createContact error:", err);
  }

  // Send appropriate email based on source
  const emailData = isTierberufe
    ? tierberufeConfirmEmail(cleanName)
    : welcomeEmail(cleanName);

  const sent = await sendEmail(cleanEmail, emailData.subject, emailData.html);

  // Build UTM attribution string for notifications
  const utmParts: string[] = [];
  if (utm && typeof utm === "object") {
    for (const [k, v] of Object.entries(utm)) {
      if (v) utmParts.push(`${k}=${v}`);
    }
  }
  const utmLine = utmParts.length > 0 ? utmParts.join(", ") : "direkt / organisch";

  // Also notify Enrico about tierberufe leads
  if (isTierberufe) {
    const notifyHtml = `
      <h2>Neue Tierberufe-Anfrage</h2>
      <p><strong>Name:</strong> ${cleanName}</p>
      <p><strong>Email:</strong> ${cleanEmail}</p>
      <p><strong>Berufsgruppe:</strong> ${beruf || "nicht angegeben"}</p>
      <p><strong>Nachricht:</strong> ${message || "keine"}</p>
      <p><strong>Quelle:</strong> ${utmLine}</p>
    `;
    await sendEmail("partner@anifutter-shop.de", `Neue Tierberufe-Anfrage: ${cleanName} (${beruf || "?"})`, notifyHtml);
  }

  // Log phone opt-in leads
  if (wantsCall && phone) {
    const phoneHtml = `
      <h2>Lead möchte Rückruf</h2>
      <p><strong>Name:</strong> ${cleanName}</p>
      <p><strong>Email:</strong> ${cleanEmail}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Quiz:</strong> ${quiz?.join(", ") || "?"}</p>
      <p><strong>Quelle:</strong> ${utmLine}</p>
    `;
    await sendEmail("partner@anifutter-shop.de", `Rückruf gewünscht: ${cleanName} (${phone})`, phoneHtml);
  }

  // Notify Enrico about every new lead (not just tierberufe/callback)
  if (!isTierberufe) {
    const quizSummary = quiz?.length ? quiz.join(" → ") : "kein Quiz";
    const callbackInfo = wantsCall && phone
      ? `<p style="background:#fef3c7;padding:12px;border-radius:8px;border-left:4px solid #f59e0b"><strong>📞 Rückruf gewünscht:</strong> <a href="tel:${phone.replace(/\s/g, "")}">${phone}</a></p>`
      : "";

    // Decode quiz answers for human-readable context
    const quizLabels: Record<string, string> = {
      hund: "🐕 Hund", katze: "🐈 Katze", beides: "🐾 Beides", keins: "💭 Kein Tier",
      nebenverdienst: "💰 Nebenverdienst", sinnvoll: "🤝 Sinnvolle Tätigkeit",
      berufswechsel: "🔄 Berufswechsel", tierprofi: "🐾 Tierprofi",
      wenig: "⏱️ 2–5h/Woche", mittel: "⏰ 5–10h/Woche", viel: "🕐 10h+/Woche", unsicher: "🤷 Noch unsicher",
    };
    const quizReadable = quiz?.length
      ? quiz.map((a) => quizLabels[a] || a).join(" · ")
      : "kein Quiz";

    // Source label for subject line
    const sourceLabel = source === "quiz" ? "Quiz" : source === "bottom" ? "Formular" : source === "exit-intent" ? "Exit-Intent" : source || "direkt";

    // WhatsApp deep link for instant reply
    const waText = encodeURIComponent(`Hallo ${cleanName.split(" ")[0]}, danke für dein Interesse am Anifit-Guide! Ich bin Enrico — hast du schon Fragen?`);
    const waLink = phone
      ? `https://wa.me/${phone.replace(/\D/g, "").replace(/^0/, "49")}?text=${waText}`
      : `mailto:${cleanEmail}?subject=${encodeURIComponent("Dein Anifit-Guide")}`;

    const notifyHtml = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;max-width:480px">
        <h2 style="margin:0 0 16px">Neuer Lead: ${cleanName}</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:6px 12px;color:#6b7280">Quelle</td><td style="padding:6px 12px;font-weight:600">${sourceLabel} · ${utmLine}</td></tr>
          <tr style="background:#f9fafb"><td style="padding:6px 12px;color:#6b7280">Email</td><td style="padding:6px 12px"><a href="mailto:${cleanEmail}">${cleanEmail}</a></td></tr>
          <tr><td style="padding:6px 12px;color:#6b7280">Quiz</td><td style="padding:6px 12px">${quizReadable}</td></tr>
        </table>
        ${callbackInfo}
        <div style="margin:20px 0">
          <a href="${waLink}" style="display:inline-block;background:#25D366;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px">
            ${phone ? "📱 Direkt per WhatsApp antworten" : "✉️ Direkt antworten"}
          </a>
        </div>
        <p style="font-size:12px;color:#9ca3af;margin-top:16px">Lead eingegangen am ${new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin", dateStyle: "medium", timeStyle: "short" })}</p>
      </div>
    `;
    // Fire-and-forget — don't block the response
    sendEmail("partner@anifutter-shop.de", `[${sourceLabel}] Neuer Lead: ${cleanName}`, notifyHtml).catch((err) =>
      console.error("Lead notification error:", err)
    );
    console.log(`[LEAD] ${cleanName} <${cleanEmail}> | source: ${sourceLabel} | quiz: ${quiz?.join(",") || "-"} | utm: ${utmLine}`);
  }

  if (!sent) {
    return NextResponse.json(
      { error: "E-Mail konnte nicht gesendet werden." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
