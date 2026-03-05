import { NextResponse } from "next/server";
import { listContacts, parseState, updateContactStep, sendEmail } from "@/lib/emailit";
import { earningsEmail, registrationEmail, gewerbeEmail, firstCustomersEmail, ctaEmail, followUp1Email, followUp2Email } from "@/lib/emails";

// Front-loaded: Kerninfos in 7 Tagen, CTA Tag 7, Follow-ups Tag 10+12
const SEQUENCE = [
  // step 0 = welcome (sent immediately on signup)
  { day: 1,  step: 1, getEmail: earningsEmail },        // Tag 1: Verdienst
  { day: 3,  step: 2, getEmail: registrationEmail },     // Tag 3: Registrierung + Paket
  { day: 5,  step: 3, getEmail: gewerbeEmail },          // Tag 5: Gewerbeschein
  { day: 7,  step: 4, getEmail: firstCustomersEmail },   // Tag 7: Erste Kunden
  { day: 9,  step: 5, getEmail: ctaEmail },              // Tag 9: Registrierungs-CTA
  { day: 11, step: 6, getEmail: followUp1Email },        // Tag 11: Follow-up
  { day: 14, step: 7, getEmail: followUp2Email },        // Tag 14: Letzte Erinnerung
];

export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const contacts = await listContacts();
  let sent = 0;

  for (const contact of contacts) {
    const { step: currentStep, signupDate: startDate } = parseState(contact);
    if (currentStep < 0 || !startDate) continue;

    const daysSinceStart = Math.floor(
      (Date.now() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)
    );

    for (const seq of SEQUENCE) {
      if (currentStep === seq.step - 1 && daysSinceStart >= seq.day) {
        const name = contact.first_name || "du";
        const email = seq.getEmail(name);
        await sendEmail(contact.email, email.subject, email.html);
        await updateContactStep(contact, seq.step);
        sent++;
        break;
      }
    }
  }

  return NextResponse.json({ ok: true, processed: contacts.length, sent });
}
