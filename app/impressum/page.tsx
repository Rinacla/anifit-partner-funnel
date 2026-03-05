export const metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-2xl mx-auto prose prose-gray">
        <h1>Impressum</h1>
        <p><strong>Angaben gemäß § 5 TMG:</strong></p>
        <p>
          Enrico Bachmann<br />
          Anifit-Fachberater (Handelsvertreter gem. § 84 HGB)<br />
          Provital GmbH — Fachberater-Nr. 201289
        </p>
        <p>
          <strong>Kontakt:</strong><br />
          E-Mail: partner@anifutter-shop.de
        </p>
        <p>
          <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
          Enrico Bachmann
        </p>
        <p>
          <strong>Haftungshinweis:</strong><br />
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich.
        </p>
        <p className="mt-8">
          <a href="/" className="text-green-600 hover:underline">← Zurück zur Startseite</a>
        </p>
      </div>
    </div>
  );
}
