import { NextResponse } from "next/server";

const API_BASE = "https://api.emailit.com/v2";

function headers() {
  const key = process.env.EMAILIT_API_KEY;
  if (!key) throw new Error("EMAILIT_API_KEY not set");
  return { Authorization: `Bearer ${key}`, "Content-Type": "application/json" };
}

export async function POST(req: Request) {
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { email, name } = await req.json();
  if (!email) return NextResponse.json({ error: "email required" }, { status: 400 });

  const signupDate = new Date().toISOString().slice(0, 10);
  const res = await fetch(`${API_BASE}/contacts`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      email,
      first_name: name || "Partner",
      last_name: `ob:0|${signupDate}`,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json({ error: text }, { status: res.status });
  }

  return NextResponse.json({ ok: true, email, signupDate });
}
