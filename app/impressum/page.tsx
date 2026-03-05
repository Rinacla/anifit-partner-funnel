export const metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-2xl mx-auto prose prose-gray">
        <h1>Impressum</h1>
        <p>
          Angaben gemäß § 5 TMG / § 18 Abs. 2 MStV
        </p>
        <p>
          <strong>Enrico Bachmann</strong><br />
          RINACLA LTD<br />
          Anifit-Fachberater (Provital GmbH)<br />
          Fachberater-Nr.: 201289
        </p>
        <p>
          <strong>Kontakt:</strong><br />
          E-Mail: partner@anifutter-shop.de<br />
          Web: <a href="https://www.anifutter-shop.de">www.anifutter-shop.de</a>
        </p>
        <p>
          <strong>Verantwortlich für den Inhalt:</strong><br />
          Enrico Bachmann
        </p>
        <p>
          Die Produkte der Marke Anifit werden von der Provital GmbH hergestellt und vertrieben.
          Als selbstständiger Fachberater empfehle ich diese Produkte und erhalte eine Provision
          auf vermittelte Bestellungen.
        </p>
        <p className="text-sm text-gray-400 mt-8">
          <a href="https://www.anifutter-shop.de/content/partners/201289a/impressum/" className="text-gray-400 hover:text-gray-600">
            Vollständiges Impressum auf anifutter-shop.de →
          </a>
        </p>
      </div>
    </div>
  );
}
