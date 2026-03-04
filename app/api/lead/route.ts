import { NextRequest, NextResponse } from "next/server";
import { createContact, sendEmail } from "@/lib/emailit";
import { welcomeEmail } from "@/lib/emails";

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

  const { name, email } = body as { name?: string; email?: string };

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Bitte gib deinen Namen ein." }, { status: 400 });
  }
  if (!email || typeof email !== "string" || !isValidEmail(email.trim())) {
    return NextResponse.json({ error: "Bitte gib eine gültige E-Mail-Adresse ein." }, { status: 400 });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim().toLowerCase();

  try {
    // Create contact in emailit (step:0 = welcome email sent)
    await createContact(cleanEmail, cleanName);
  } catch (err) {
    console.error("createContact error:", err);
    // Continue even if contact creation fails (might be duplicate)
  }

  // Send welcome email (step 1)
  const { subject, html } = welcomeEmail(cleanName);
  const sent = await sendEmail(cleanEmail, subject, html);

  if (!sent) {
    return NextResponse.json(
      { error: "E-Mail konnte nicht gesendet werden. Bitte versuche es später." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
