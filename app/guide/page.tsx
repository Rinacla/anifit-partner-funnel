import Image from "next/image";

export const metadata = {
  title: "Guide: Dein Start als Anifit-Tierernährungsberater",
  description: "Alles was du wissen musst um als Anifit-Fachberater zu starten: Verdienst, Voraussetzungen, Ablauf und Tipps vom erfahrenen Mentor.",
  alternates: { canonical: "/guide" },
};

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-50 to-white py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold text-green-700 bg-green-100 inline-block px-4 py-1.5 rounded-full mb-4">Dein Gratis-Guide</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Dein Start als Anifit-Tierernährungsberater
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Von Enrico Bachmann — Anifit-Fachberater seit 2018, 1.000+ Kunden
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12 space-y-16">

        {/* 1. Was ist Anifit */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Was ist Anifit?</h2>
          <div className="rounded-2xl overflow-hidden mb-6">
            <Image src="/images/sortiment.jpg" alt="Anifit Produktsortiment" width={700} height={400} className="w-full h-auto" />
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Anifit (Marke der Provital GmbH) ist Premium-Tiernahrung aus Schweden mit 90–99 % Fleischanteil.
            Kein Zucker, kein Gluten, keine künstlichen Zusatzstoffe. Das Unternehmen existiert seit über 20 Jahren
            und vertreibt ausschließlich über persönliche Fachberater — nicht im Supermarkt.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Das bedeutet für dich: Es gibt keinen Preiskampf mit Amazon oder Fressnapf. Deine Kunden kaufen
            bei dir, weil sie die Qualität schätzen und deine Beratung wollen.
          </p>
        </section>

        {/* 2. Geschäftsmodell */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Wie funktioniert das Geschäftsmodell?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Du bist selbstständiger Handelsvertreter. Deine Aufgabe: Hundebesitzer beraten und ihnen Anifit empfehlen.
            Den Rest übernimmt Provital — Lager, Versand, Retouren, Zahlungsabwicklung.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 space-y-3">
            {[
              "Du empfiehlst Anifit (online, im Hundepark, bei Freunden, über Social Media)",
              "Der Kunde bestellt über deinen persönlichen Shop-Link",
              "Provital liefert direkt zum Kunden",
              "Du bekommst 15–30 % Provision — auf jede Bestellung, ein Leben lang",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg">{i + 1}.</span>
                <p className="text-gray-700">{t}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Verdienst */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Was verdienst du konkret?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Deine Provision steigt mit der Anzahl deiner Kunden (Provisionsstufen).
            Echte Beispielrechnungen auf Basis durchschnittlicher Bestellsummen:
          </p>
          <div className="space-y-3">
            {[
              { kunden: "12 Kunden", stufe: "19 %", betrag: "~182 €/Monat", desc: "Nebenher, 2–3 Std./Woche" },
              { kunden: "25 Kunden", stufe: "23 %", betrag: "~460 €/Monat", desc: "Solider Nebenverdienst" },
              { kunden: "50 Kunden", stufe: "27 %", betrag: "~1.080 €/Monat", desc: "Teilzeit-Einkommen" },
              { kunden: "96 Kunden", stufe: "30 %", betrag: "~2.304 €/Monat", desc: "Vollzeit möglich" },
            ].map((e, i) => (
              <div key={i} className="flex items-center justify-between bg-green-50 rounded-lg px-5 py-4 border border-green-100">
                <div>
                  <p className="font-semibold text-gray-900">{e.kunden} · {e.stufe}</p>
                  <p className="text-sm text-gray-500">{e.desc}</p>
                </div>
                <p className="text-xl font-extrabold text-green-600">{e.betrag}</p>
              </div>
            ))}
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg mt-6">
            <p className="text-gray-700">
              <strong>Das Besondere:</strong> Durch den lebenslangen Kundenschutz bleiben dir einmal gewonnene Kunden
              dauerhaft zugeordnet. Ein Kunde, der monatlich für 80 € bestellt, bringt dir bei 23 % Provision
              über <strong>220 € pro Jahr</strong> — automatisch, ohne weiteres Zutun.
            </p>
          </div>
        </section>

        {/* Schnupperpaket Bild */}
        <section>
          <div className="rounded-2xl overflow-hidden">
            <Image src="/images/schnupperpaket.jpg" alt="Anifit Schnupperpaket" width={700} height={400} className="w-full h-auto" />
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">
            Das Anifit Schnupperpaket — der ideale Einstieg für Neukunden (9,90 €)
          </p>
        </section>

        {/* 4. Voraussetzungen */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Was brauchst du für den Start?</h2>
          <div className="space-y-4">
            {[
              { label: "Mindestalter", value: "18 Jahre" },
              { label: "Gewerbeschein", value: "Anifit hilft dir bei der Beantragung — dauert 15 Min." },
              { label: "Vorkenntnisse", value: "Nicht nötig. Kostenlose Schulungen und Zertifizierung inklusive." },
              { label: "Startkosten", value: "Die Registrierung ist kostenlos. Optionales Einstiegspaket ab ~80 €." },
              { label: "Zeitaufwand", value: "Die meisten starten mit 2–5 Stunden pro Woche." },
              { label: "Lagerhaltung", value: "Nicht nötig. Provital lagert, versendet und rechnet ab." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="font-semibold text-gray-900 w-36 flex-shrink-0">{item.label}</span>
                <span className="text-gray-600">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Mentor */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Dein Mentor: Enrico Bachmann</h2>
          <div className="bg-gray-50 rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-start">
            <Image src="/images/enrico-bachmann.jpg" alt="Enrico Bachmann" width={120} height={120} className="rounded-full w-24 h-24 object-cover border-4 border-white shadow-lg flex-shrink-0" />
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ich bin seit 2018 Anifit-Fachberater und habe mir ein Business mit über 1.000 aktiven Kunden aufgebaut.
                Mein eigener Hund frisst Anifit — ich empfehle nur, was ich selbst nutze.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-green-600">✓</span> Persönliche Einarbeitung nach deiner Registrierung</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Bewährte Vorlagen für Kundengespräche und E-Mails</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Praktische Tipps für deine ersten 10 Kunden</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Laufender Austausch und Support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lifestyle Image */}
        <section>
          <div className="rounded-2xl overflow-hidden">
            <Image src="/images/magazin-hero.jpg" alt="Enrico Bachmann mit Hund" width={700} height={400} className="w-full h-auto" />
          </div>
        </section>

        {/* 6. FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Ehrliche Antworten auf häufige Bedenken</h2>
          <div className="space-y-6">
            {[
              { q: "Ist das nicht so ein MLM / Schneeballsystem?", a: "Nein. Du verdienst an echten Produktverkäufen deiner Kunden. Es gibt keine Pflicht, andere Berater zu rekrutieren. 100 % deiner Provision kommt aus Produktumsatz." },
              { q: "Ich kenne mich nicht mit Tierernährung aus.", a: "Musst du auch nicht. Anifit bietet kostenlose Online-Schulungen, Webinare und einen vollständigen Zertifizierungskurs. Du lernst alles, was du brauchst." },
              { q: "Ich habe keine Zeit für einen Nebenjob.", a: "Die meisten starten mit 2–3 Stunden pro Woche. Du empfiehlst bei Gesprächen, die du ohnehin führst. Es gibt keine Mindestanforderungen." },
              { q: "Ich bin kein Verkäufer.", a: "Musst du nicht sein. Du berätst Hundebesitzer, die aktiv nach besserem Futter suchen. Das Produkt verkauft sich durch Qualität — du hilfst nur bei der Entscheidung." },
            ].map((item, i) => (
              <div key={i}>
                <p className="font-semibold text-gray-900 mb-1">&quot;{item.q}&quot;</p>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bereit für den nächsten Schritt?</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Die Registrierung dauert keine 5 Minuten. Du bekommst sofort Zugang zu deinem Beraterbereich
            und ich melde mich persönlich bei dir.
          </p>
          <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 inline-block">
            <p className="font-bold text-gray-900 mb-2">📞 Lieber erstmal telefonieren?</p>
            <p className="text-sm text-gray-600 mb-3">Unsere Beraterin Lisa beantwortet alle Fragen — kostenlos.</p>
            <a href="tel:+4932212619379" className="text-green-600 font-bold hover:underline">+49 322 126 19 379 anrufen</a>
          </div>
          <div>
            <a
              href="https://provital.com/registrierung?code=EB-Hundeo&utm_source=guide&utm_medium=web&utm_campaign=teampartner"
              className="inline-block py-4 px-10 rounded-xl font-bold text-white text-lg transition-all"
              style={{ background: "#4CAF50", boxShadow: "0 4px 14px rgba(76,175,80,0.4)" }}
            >
              Jetzt als Anifit-Berater registrieren →
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Willkommensbonus: Warenproben-Paket (80–100 € Wert) nach deiner Startschulung.
          </p>
        </section>
      </div>

      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-2xl mx-auto px-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Enrico Bachmann · Anifit-Fachberater</p>
          <p className="mt-1">
            <a href="/impressum" className="hover:text-gray-600">Impressum</a>
            {" · "}
            <a href="/datenschutz" className="hover:text-gray-600">Datenschutz</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
