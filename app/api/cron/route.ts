import { NextResponse } from "next/server";
import { listContacts, parseState, updateContactStep, sendEmail } from "@/lib/emailit";
import { earningsEmail, mentorEmail, faqEmail, ctaEmail } from "@/lib/emails";

const SEQUENCE = [
  { day: 2, step: 1, getEmail: earningsEmail },
  { day: 4, step: 2, getEmail: mentorEmail },
  { day: 7, step: 3, getEmail: faqEmail },
  { day: 10, step: 4, getEmail: ctaEmail },
];

function daysBetween(dateStr: string, now: Date): number {
  const d = new Date(dateStr + "T00:00:00Z");
  return Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
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
    const { step, signupDate } = parseState(contact);
    if (step >= 4) continue; // Sequence complete

    const daysSinceSignup = daysBetween(signupDate, now);
    const nextEmail = SEQUENCE.find((s) => s.step === step + 1 && daysSinceSignup >= s.day);
    if (!nextEmail) continue;

    const name = contact.first_name || "Interessent";
    const { subject, html } = nextEmail.getEmail(name);
    const sent = await sendEmail(contact.email, subject, html);

    if (sent) {
      try {
        await updateContactStep(contact, nextEmail.step);
      } catch (err) {
        console.error(`State update failed for ${contact.email}:`, err);
      }
      emailsSent++;
    }

    await new Promise((r) => setTimeout(r, 600)); // Rate limit
  }

  return NextResponse.json({ ok: true, processed: contacts.length, emailsSent, ts: now.toISOString() });
}
