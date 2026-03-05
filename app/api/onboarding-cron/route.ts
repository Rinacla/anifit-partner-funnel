import { NextResponse } from "next/server";
import { listContacts, sendEmail } from "@/lib/emailit";
import {
  onboarding1Welcome,
  onboarding2Training,
  onboarding3FirstCustomers,
  onboarding4Tools,
  onboarding5Growth,
} from "@/lib/onboarding-emails";

const SEQUENCE = [
  { day: 0, step: 1, getEmail: onboarding1Welcome },
  { day: 3, step: 2, getEmail: onboarding2Training },
  { day: 7, step: 3, getEmail: onboarding3FirstCustomers },
  { day: 14, step: 4, getEmail: onboarding4Tools },
  { day: 21, step: 5, getEmail: onboarding5Growth },
];

function parseOnboardingState(contact: { last_name: string | null }): {
  isOnboarding: boolean;
  step: number;
  signupDate: string;
} {
  const raw = contact.last_name || "";
  const match = raw.match(/^ob:(\d+)\|(\d{4}-\d{2}-\d{2})$/);
  if (!match) return { isOnboarding: false, step: 0, signupDate: "" };
  return { isOnboarding: true, step: parseInt(match[1], 10), signupDate: match[2] };
}

function daysBetween(dateStr: string, now: Date): number {
  const d = new Date(dateStr + "T00:00:00Z");
  return Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
}

async function updateOnboardingStep(
  contact: { id: string; email: string; first_name: string | null },
  newStep: number,
  signupDate: string,
): Promise<void> {
  const API_BASE = "https://api.emailit.com/v2";
  const key = process.env.EMAILIT_API_KEY;
  if (!key) throw new Error("EMAILIT_API_KEY not set");
  const headers = { Authorization: `Bearer ${key}`, "Content-Type": "application/json" };

  // Delete and recreate with new state
  await fetch(`${API_BASE}/contacts/${contact.id}`, { method: "DELETE", headers });
  await new Promise((r) => setTimeout(r, 300));
  await fetch(`${API_BASE}/contacts`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      email: contact.email,
      first_name: contact.first_name || "Partner",
      last_name: `ob:${newStep}|${signupDate}`,
    }),
  });
}

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();
  const contacts = await listContacts();
  let emailsSent = 0;

  for (const contact of contacts) {
    if (contact.unsubscribed) continue;
    const { isOnboarding, step, signupDate } = parseOnboardingState(contact);
    if (!isOnboarding) continue;
    if (step >= 5) continue; // Sequence complete

    const daysSinceSignup = daysBetween(signupDate, now);
    const nextEmail = SEQUENCE.find((s) => s.step === step + 1 && daysSinceSignup >= s.day);
    if (!nextEmail) continue;

    const name = contact.first_name || "Partner";
    const { subject, html } = nextEmail.getEmail(name);
    const sent = await sendEmail(contact.email, subject, html);

    if (sent) {
      try {
        await updateOnboardingStep(contact, nextEmail.step, signupDate);
      } catch (err) {
        console.error(`Onboarding state update failed for ${contact.email}:`, err);
      }
      emailsSent++;
    }

    await new Promise((r) => setTimeout(r, 600));
  }

  return NextResponse.json({
    ok: true,
    type: "onboarding",
    processed: contacts.filter((c) => parseOnboardingState(c).isOnboarding).length,
    emailsSent,
    ts: now.toISOString(),
  });
}
