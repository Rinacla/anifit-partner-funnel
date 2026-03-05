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

  const { name, email, source, beruf, message, phone, wantsCall, quiz } = body as {
    name?: string;
    email?: string;
    source?: string;
    beruf?: string;
    message?: string;
    phone?: string;
    wantsCall?: boolean;
    quiz?: string[];
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

  // Also notify Enrico about tierberufe leads
  if (isTierberufe) {
    const notifyHtml = `
      <h2>Neue Tierberufe-Anfrage</h2>
      <p><strong>Name:</strong> ${cleanName}</p>
      <p><strong>Email:</strong> ${cleanEmail}</p>
      <p><strong>Berufsgruppe:</strong> ${beruf || "nicht angegeben"}</p>
      <p><strong>Nachricht:</strong> ${message || "keine"}</p>
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
    `;
    await sendEmail("partner@anifutter-shop.de", `Rückruf gewünscht: ${cleanName} (${phone})`, phoneHtml);
  }

  if (!sent) {
    return NextResponse.json(
      { error: "E-Mail konnte nicht gesendet werden." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
