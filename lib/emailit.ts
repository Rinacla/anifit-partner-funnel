const API_BASE = "https://api.emailit.com/v2";

function headers() {
  const key = process.env.EMAILIT_API_KEY;
  if (!key) throw new Error("EMAILIT_API_KEY not set");
  return {
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  };
}

export interface Contact {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  unsubscribed: boolean;
}

export function parseState(contact: Contact): { step: number; signupDate: string } {
  const raw = contact.last_name || "";
  const match = raw.match(/^step:(\d+)\|(\d{4}-\d{2}-\d{2})$/);
  if (!match) return { step: 0, signupDate: new Date().toISOString().slice(0, 10) };
  return { step: parseInt(match[1], 10), signupDate: match[2] };
}

export async function createContact(email: string, name: string, step = 0, signupDate?: string): Promise<Contact> {
  const date = signupDate || new Date().toISOString().slice(0, 10);
  const res = await fetch(`${API_BASE}/contacts`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      email,
      first_name: name,
      last_name: `step:${step}|${date}`,
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`createContact failed: ${res.status} ${text}`);
  }
  return res.json();
}

export async function listContacts(): Promise<Contact[]> {
  const all: Contact[] = [];
  let url: string | null = `${API_BASE}/contacts?limit=100`;
  while (url) {
    const res: Response = await fetch(url, { headers: headers() });
    if (!res.ok) break;
    const data = await res.json();
    all.push(...(data.data || []));
    url = data.next_page_url || null;
  }
  return all;
}

export async function deleteContact(contactId: string): Promise<void> {
  await fetch(`${API_BASE}/contacts/${contactId}`, {
    method: "DELETE",
    headers: headers(),
  });
}

export async function updateContactStep(contact: Contact, newStep: number): Promise<void> {
  const { signupDate } = parseState(contact);
  const name = contact.first_name || "Interessent";
  await deleteContact(contact.id);
  await new Promise((r) => setTimeout(r, 300));
  await createContact(contact.email, name, newStep, signupDate);
}

export async function sendEmail(to: string, subject: string, html: string): Promise<boolean> {
  const res = await fetch(`${API_BASE}/emails`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      from: "Enrico von Anifit <partner@anifutter-shop.de>",
      to,
      subject,
      html,
    }),
  });
  return res.ok;
}
