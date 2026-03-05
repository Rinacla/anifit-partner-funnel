export const metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: false },
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-2xl mx-auto prose prose-gray">
        <h1>Datenschutzerklärung</h1>

        <h2>1. Verantwortlicher</h2>
        <p>
          Enrico Bachmann / RINACLA LTD<br />
          E-Mail: partner@anifutter-shop.de
        </p>

        <h2>2. Erhebung und Verarbeitung von Daten</h2>
        <p>
          Wenn du dich über das Formular auf dieser Seite einträgst, speichern wir deinen
          Namen und deine E-Mail-Adresse. Diese Daten verwenden wir ausschließlich, um dir
          die angeforderten Informationen per E-Mail zuzusenden.
        </p>

        <h2>3. E-Mail-Versand</h2>
        <p>
          Wir nutzen den Dienst <strong>emailit</strong> (emailit.com) zum Versand der E-Mails.
          Deine Daten werden auf Servern in der EU verarbeitet. Du kannst dich jederzeit
          von unseren E-Mails abmelden.
        </p>

        <h2>4. Meta Pixel</h2>
        <p>
          Auf dieser Seite setzen wir das Meta (Facebook) Pixel ein. Dieses erfasst anonymisierte
          Nutzungsdaten zur Optimierung unserer Werbeanzeigen. Du kannst dem Tracking widersprechen
          unter: <a href="https://www.facebook.com/settings?tab=ads">Facebook Ads-Einstellungen</a>.
        </p>

        <h2>5. Deine Rechte</h2>
        <p>
          Du hast das Recht auf Auskunft, Berichtigung, Löschung und Widerspruch.
          Kontaktiere uns unter partner@anifutter-shop.de.
        </p>

        <p className="text-sm text-gray-400 mt-8">
          <a href="https://www.anifutter-shop.de/content/partners/201289a/datenschutz/" className="text-gray-400 hover:text-gray-600">
            Vollständige Datenschutzerklärung auf anifutter-shop.de →
          </a>
        </p>
      </div>
    </div>
  );
}
