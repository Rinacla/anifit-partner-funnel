import { NextRequest, NextResponse } from "next/server";
import { createContact, sendEmail } from "@/lib/emailit";
import { welcomeEmail } from "@/lib/emails";
import { tierberufeConfirmEmail } from "@/lib/tierberufe-emails";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const { name, email, source, beruf, message, phone, wantsCall, quiz, utm } = body as {
    name?: string;
    email?: string;
    source?: string;
    beruf?: string;
    message?: string;
    phone?: string;
    wantsCall?: boolean;
    quiz?: string[];
    utm?: Record<string, string>;
  };

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Bitte gib deinen Namen ein." }, { status: 400 });
  }
  if (!email || typeof email !== "string" || !isValidEmail(email.trim())) {
    return NextResponse.json({ error: "Bitte gib eine gültige E-Mail-Adresse ein." }, { status: 400 });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim().toLowerCase();
  const isTierberufe = source === "tierberufe";

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
    const callbackInfo = wantsCall && phone ? `<p><strong>📞 Rückruf:</strong> ${phone}</p>` : "";
    const notifyHtml = `
      <h2>Neuer Lead: ${cleanName}</h2>
      <p><strong>Email:</strong> ${cleanEmail}</p>
      <p><strong>Quiz:</strong> ${quizSummary}</p>
      <p><strong>Quelle:</strong> ${source || "unbekannt"} · ${utmLine}</p>
      ${callbackInfo}
    `;
    // Fire-and-forget — don't block the response
    sendEmail("partner@anifutter-shop.de", `Neuer Lead: ${cleanName}`, notifyHtml).catch((err) =>
      console.error("Lead notification error:", err)
    );
    console.log(`[LEAD] ${cleanName} <${cleanEmail}> | quiz: ${quiz?.join(",") || "-"} | utm: ${utmLine}`);
  }

  if (!sent) {
    return NextResponse.json(
      { error: "E-Mail konnte nicht gesendet werden." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
