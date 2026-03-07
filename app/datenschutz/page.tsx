export const metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-2xl mx-auto prose prose-gray">
        <h1>Datenschutzerklärung</h1>

        <h2>1. Verantwortlicher</h2>
        <p>
          Enrico Bachmann<br />
          E-Mail: partner@anifutter-shop.de
        </p>

        <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
        <p>
          Wenn du dich für unseren Guide anmeldest, erheben wir folgende Daten:
        </p>
        <ul>
          <li>Vorname</li>
          <li>E-Mail-Adresse</li>
        </ul>
        <p>
          Diese Daten werden ausschließlich für den Versand des Guides und der
          nachfolgenden E-Mail-Serie verwendet. Rechtsgrundlage ist deine
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
        </p>

        <h2>3. E-Mail-Versand</h2>
        <p>
          Wir nutzen den Dienst <strong>emailit</strong> (emailit.com) für den
          Versand von E-Mails. Deine E-Mail-Adresse wird an emailit übermittelt.
          emailit verarbeitet Daten gemäß ihrer Datenschutzrichtlinie.
        </p>

        <h2>4. Meta Pixel (Facebook)</h2>
        <p>
          Diese Website nutzt das Meta Pixel (Facebook Pixel) der Meta Platforms
          Ireland Limited. Dabei werden pseudonymisierte Nutzungsdaten erhoben,
          um Werbeanzeigen zu optimieren. Du kannst der Nutzung widersprechen
          unter: <a href="https://www.facebook.com/settings/?tab=ads" className="text-brand-600">Facebook Ad-Einstellungen</a>.
        </p>

        <h2>5. Hosting</h2>
        <p>
          Diese Website wird bei Vercel Inc. gehostet. Beim Besuch werden
          technisch notwendige Daten (IP-Adresse, Zeitpunkt, Browser) in
          Server-Logs gespeichert.
        </p>

        <h2>6. Deine Rechte</h2>
        <p>Du hast das Recht auf:</p>
        <ul>
          <li>Auskunft über deine gespeicherten Daten</li>
          <li>Berichtigung unrichtiger Daten</li>
          <li>Löschung deiner Daten</li>
          <li>Widerruf deiner Einwilligung</li>
          <li>Beschwerde bei einer Aufsichtsbehörde</li>
        </ul>
        <p>
          Zur Ausübung deiner Rechte schreibe an: partner@anifutter-shop.de
        </p>

        <h2>7. Abmeldung</h2>
        <p>
          Du kannst dich jederzeit von unserer E-Mail-Liste abmelden, indem du
          auf den Abmelde-Link am Ende jeder E-Mail klickst oder uns direkt
          kontaktierst.
        </p>

        <p className="mt-8">
          <a href="/" className="text-brand-600 hover:underline">← Zurück zur Startseite</a>
        </p>
      </div>
    </div>
  );
}
