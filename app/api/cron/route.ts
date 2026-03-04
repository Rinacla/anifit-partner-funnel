import { NextResponse } from "next/server";

export async function GET() {
  // Placeholder for email sequence cron job.
  // TODO: Implement lead retrieval from storage and send scheduled sequence emails.
  return NextResponse.json({ ok: true, message: "Cron executed." });
}
