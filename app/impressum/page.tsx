import Footer from "@/app/_components/Footer";

export const metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-2xl mx-auto prose prose-gray">
        <h1>Impressum</h1>

        <p><strong>Angaben gemäß § 5 TMG / EU-Richtlinie 2000/31/EG:</strong></p>

        <p>
          RINACLA LTD<br />
          Georgiou Karaiskaki, 11-13<br />
          CARISA SALONICA, Flat/Office 102<br />
          Pervolia, 7560, Larnaca<br />
          Cyprus
        </p>

        <p>
          <strong>Company Registration:</strong><br />
          Registration Number: ΗΕ 469019
        </p>

        <p>
          <strong>Vertretungsberechtigt:</strong><br />
          Managing Director: Enrico Bachmann
        </p>

        <p>
          <strong>Kontakt:</strong><br />
          E-Mail: partner@anifutter-shop.de
        </p>

        <p>
          <strong>Anifit-Fachberater:</strong><br />
          Handelsvertreter gem. § 84 HGB<br />
          Provital GmbH. Fachberater-Nr. 201289
        </p>

        <p>
          <strong>Verantwortlich für den Inhalt:</strong><br />
          Enrico Bachmann, Anschrift wie oben
        </p>

        <p>
          <strong>Haftungshinweis:</strong><br />
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich.
        </p>

        <p className="mt-8">
          <a href="/" className="text-brand-600 hover:underline">← Zurück zur Startseite</a>
        </p>
      </div>
      <Footer />
    </div>
  );
}
