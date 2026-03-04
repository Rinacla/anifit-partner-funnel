import { NextRequest, NextResponse } from "next/server";
import { welcomeEmail } from "@/lib/emails";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Ungültige Anfrage." },
      { status: 400 }
    );
  }

  const { name, email } = body as { name?: string; email?: string };

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json(
      { error: "Bitte gib deinen Namen ein." },
      { status: 400 }
    );
  }

  if (!email || typeof email !== "string" || !isValidEmail(email.trim())) {
    return NextResponse.json(
      { error: "Bitte gib eine gültige E-Mail-Adresse ein." },
      { status: 400 }
    );
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim().toLowerCase();

  const apiKey = process.env.EMAILIT_API_KEY;
  if (!apiKey) {
    console.error("EMAILIT_API_KEY is not set");
    return NextResponse.json(
      { error: "Konfigurationsfehler. Bitte versuche es später." },
      { status: 500 }
    );
  }

  const { subject, html } = welcomeEmail(cleanName);

  try {
    const res = await fetch("https://api.emailit.com/v2/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Enrico von Anifit <partner@anifutter-shop.de>",
        to: cleanEmail,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("emailit error:", res.status, text);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden. Bitte versuche es später." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("emailit fetch error:", err);
    return NextResponse.json(
      { error: "Netzwerkfehler. Bitte versuche es später." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
