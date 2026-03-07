/**
 * Common email domain typo corrections.
 * Returns a suggestion string or null if no typo detected.
 */

const DOMAIN_CORRECTIONS: Record<string, string> = {
  // Gmail
  "gmail.con": "gmail.com",
  "gmail.de": "gmail.com",
  "gmail.cmo": "gmail.com",
  "gmial.com": "gmail.com",
  "gmaill.com": "gmail.com",
  "gamil.com": "gmail.com",
  "gnail.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmal.com": "gmail.com",
  "gmil.com": "gmail.com",
  "gmaol.com": "gmail.com",
  // GMX
  "gmx.con": "gmx.de",
  "gmx.ce": "gmx.de",
  "gmx.der": "gmx.de",
  "gnx.de": "gmx.de",
  // Web.de
  "web.con": "web.de",
  "wbe.de": "web.de",
  "web.der": "web.de",
  "eeb.de": "web.de",
  // T-Online
  "t-onlne.de": "t-online.de",
  "t-online.con": "t-online.de",
  "tonline.de": "t-online.de",
  // Yahoo
  "yahoo.con": "yahoo.com",
  "yaho.com": "yahoo.com",
  "yahooo.com": "yahoo.com",
  "yahoo.de": "yahoo.com",
  // Outlook / Hotmail
  "outlook.con": "outlook.com",
  "outllook.com": "outlook.com",
  "outlok.com": "outlook.com",
  "hotmail.con": "hotmail.com",
  "hotmal.com": "hotmail.com",
  "hotmai.com": "hotmail.com",
  // iCloud
  "icloud.con": "icloud.com",
  "icoud.com": "icloud.com",
  // Posteo
  "posteo.con": "posteo.de",
  "posteo.der": "posteo.de",
};

export function suggestEmailCorrection(email: string): string | null {
  const trimmed = email.trim().toLowerCase();
  const atIndex = trimmed.lastIndexOf("@");
  if (atIndex < 1) return null;

  const localPart = trimmed.slice(0, atIndex);
  const domain = trimmed.slice(atIndex + 1);

  const corrected = DOMAIN_CORRECTIONS[domain];
  if (corrected && corrected !== domain) {
    return `${localPart}@${corrected}`;
  }

  return null;
}
