/** Detect email provider from address for inbox-specific instructions on /danke */
export function getEmailProvider(email: string): string | null {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return null;

  if (domain === "gmail.com" || domain === "googlemail.com") return "gmail";
  if (domain === "outlook.com" || domain === "outlook.de" || domain === "hotmail.com" || domain === "hotmail.de" || domain === "live.com" || domain === "live.de" || domain === "msn.com") return "outlook";
  if (domain === "yahoo.com" || domain === "yahoo.de") return "yahoo";
  if (domain === "gmx.de" || domain === "gmx.net" || domain === "gmx.at" || domain === "gmx.ch") return "gmx";
  if (domain === "web.de") return "webde";
  if (domain === "t-online.de") return "tonline";
  if (domain === "icloud.com" || domain === "me.com" || domain === "mac.com") return "icloud";
  if (domain === "freenet.de") return "freenet";
  if (domain === "posteo.de") return "posteo";
  if (domain === "mailbox.org") return "mailbox";

  return null;
}

/** Provider-specific inbox instructions for /danke page */
export const PROVIDER_TIPS: Record<string, { name: string; icon: string; tip: string; link?: string }> = {
  gmail: {
    name: "Gmail",
    icon: "\uD83D\uDCE7",
    tip: "Schau im Tab \"Werbung\" (Promotions) nach. Zieh die Mail in den Posteingang, damit die naechsten Mails direkt ankommen.",
    link: "https://mail.google.com",
  },
  outlook: {
    name: "Outlook",
    icon: "\uD83D\uDCEC",
    tip: "Check den Ordner \"Junk-E-Mail\". Klick auf \"Kein Junk\", damit die Folgemails ankommen.",
    link: "https://outlook.live.com",
  },
  yahoo: {
    name: "Yahoo",
    icon: "\uD83D\uDCEE",
    tip: "Schau im Spam-Ordner. Markiere die Mail als \"Kein Spam\".",
    link: "https://mail.yahoo.com",
  },
  gmx: {
    name: "GMX",
    icon: "\uD83D\uDCE8",
    tip: "Check den Spam-Ordner. Fuege partner@anifutter-shop.de zum Adressbuch hinzu.",
    link: "https://www.gmx.net",
  },
  webde: {
    name: "WEB.DE",
    icon: "\uD83D\uDCE8",
    tip: "Schau im Ordner \"Unbekannt\" oder \"Spam\". Adresse ins Adressbuch aufnehmen hilft.",
    link: "https://www.web.de",
  },
  tonline: {
    name: "T-Online",
    icon: "\uD83D\uDCE8",
    tip: "Check den Spam-Ordner. Verschieb die Mail in den Posteingang.",
    link: "https://email.t-online.de",
  },
  icloud: {
    name: "iCloud",
    icon: "\uD83C\uDF4E",
    tip: "Schau im Ordner \"Werbung\" oder \"Spam\" in der Mail-App.",
  },
  freenet: {
    name: "Freenet",
    icon: "\uD83D\uDCE8",
    tip: "Check den Spam-Ordner und fuege die Adresse zum Adressbuch hinzu.",
    link: "https://email.freenet.de",
  },
  posteo: {
    name: "Posteo",
    icon: "\uD83D\uDCE8",
    tip: "Schau im Spam-Ordner nach und markiere als vertrauenswuerdig.",
  },
  mailbox: {
    name: "Mailbox.org",
    icon: "\uD83D\uDCE8",
    tip: "Check den Spam-Ordner. Kontakt ins Adressbuch aufnehmen.",
  },
};
