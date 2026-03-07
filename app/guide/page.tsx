import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import LeadForm from "../_components/LeadForm";
import Footer from "@/app/_components/Footer";
import Breadcrumb from "../_components/Breadcrumb";

export const metadata: Metadata = {
  title: "Guide: Dein Start als Anifit-Tierernährungsberater",
  description: "Alles was du wissen musst um als Anifit-Fachberater zu starten: Verdienst, Voraussetzungen, Ablauf und Tipps vom erfahrenen Mentor.",
  alternates: { canonical: "https://partner.anifutter-shop.de/guide" },
  openGraph: {
    title: "Guide: Dein Start als Anifit-Tierernährungsberater",
    description: "Verdienst, Voraussetzungen, Ablauf und Tipps vom erfahrenen Mentor. Kostenlos per Email.",
    locale: "de_DE",
  },
};

export default function GuidePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://partner.anifutter-shop.de" },
      { "@type": "ListItem", position: 2, name: "Guide", item: "https://partner.anifutter-shop.de/guide" },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dein Start als Anifit-Tierernährungsberater",
    description: "Alles was du wissen musst um als Anifit-Fachberater zu starten: Verdienst, Voraussetzungen, Ablauf und Tipps vom erfahrenen Mentor.",
    author: { "@type": "Person", name: "Enrico Bachmann", url: "https://partner.anifutter-shop.de" },
    publisher: { "@type": "Person", name: "Enrico Bachmann" },
    datePublished: "2025-12-01",
    dateModified: "2026-03-07",
    mainEntityOfPage: "https://partner.anifutter-shop.de/guide",
    image: "https://partner.anifutter-shop.de/images/sortiment.jpg",
    wordCount: 1200,
    timeRequired: "PT6M",
  };

  const tocItems = [
    { id: "was-ist-anifit", label: "Was ist Anifit?" },
    { id: "geschaeftsmodell", label: "Geschäftsmodell" },
    { id: "verdienst", label: "Verdienst" },
    { id: "voraussetzungen", label: "Voraussetzungen" },
    { id: "mentor", label: "Dein Mentor" },
    { id: "bedenken", label: "Häufige Bedenken" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-50 to-white py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Guide" }]} />
          <p className="text-sm font-semibold text-brand-700 bg-brand-100 inline-block px-4 py-1.5 rounded-full mb-4">Dein Gratis-Guide</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Dein Start als Anifit-Tierernährungsberater
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Von Enrico Bachmann. Anifit-Fachberater seit 2018, 1.000+ Kunden
          </p>
          <p className="mt-3 text-sm text-gray-500">⏱ Lesezeit: ca. 6 Minuten</p>
        </div>
      </div>

      {/* Table of Contents */}
      <nav aria-label="Inhaltsverzeichnis" className="max-w-2xl mx-auto px-6 pt-8 pb-4">
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">Inhalt</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {tocItems.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-gray-600 hover:text-brand-600 transition-colors inline-flex items-baseline gap-2"
                >
                  <span className="text-brand-600 font-semibold">{i + 1}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-12 space-y-16">

        {/* 1. Was ist Anifit */}
        <section id="was-ist-anifit" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Was ist Anifit?</h2>
          <div className="rounded-2xl overflow-hidden mb-6">
            <Image src="/images/sortiment.jpg" alt="Anifit Produktsortiment" width={700} height={400} className="w-full h-auto" />
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Anifit (Marke der Provital GmbH) ist Premium-Tiernahrung aus Schweden mit 90–99 % Fleischanteil.
            Kein Zucker, kein Gluten, keine künstlichen Zusatzstoffe. Das Unternehmen existiert seit über 20 Jahren
            und vertreibt ausschließlich über persönliche Fachberater. Nicht im Supermarkt.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Das bedeutet für dich: Es gibt keinen Preiskampf mit Amazon oder Fressnapf. Deine Kunden kaufen
            bei dir, weil sie die Qualität schätzen und deine Beratung wollen.
          </p>
        </section>

        {/* 2. Geschäftsmodell */}
        <section id="geschaeftsmodell" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Wie funktioniert das Geschäftsmodell?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Du bist selbstständiger Handelsvertreter. Deine Aufgabe: Hundebesitzer beraten und ihnen Anifit empfehlen.
            Den Rest übernimmt Provital. Lager, Versand, Retouren, Zahlungsabwicklung.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 space-y-3">
            {[
              "Du empfiehlst Anifit (online, im Hundepark, bei Freunden, über Social Media)",
              "Der Kunde bestellt über deinen persönlichen Shop-Link",
              "Provital liefert direkt zum Kunden",
              "Du bekommst 15–30 % Provision. Auf jede Bestellung, ein Leben lang",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-brand-600 font-bold text-lg">{i + 1}.</span>
                <p className="text-gray-700">{t}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Verdienst */}
        <section id="verdienst" className="scroll-mt-24">
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
              <div key={i} className="flex items-center justify-between bg-brand-50 rounded-lg px-5 py-4 border border-brand-100">
                <div>
                  <p className="font-semibold text-gray-900">{e.kunden} · {e.stufe}</p>
                  <p className="text-sm text-gray-500">{e.desc}</p>
                </div>
                <p className="text-xl font-extrabold text-brand-600">{e.betrag}</p>
              </div>
            ))}
          </div>
          <div className="bg-brand-50 border-l-4 border-brand-500 p-5 rounded-r-lg mt-6">
            <p className="text-gray-700">
              <strong>Das Besondere:</strong> Durch den lebenslangen Kundenschutz bleiben dir einmal gewonnene Kunden
              dauerhaft zugeordnet. Ein Kunde, der monatlich für 80 € bestellt, bringt dir bei 23 % Provision
              über <strong>220 € pro Jahr</strong>. Automatisch, ohne weiteres Zutun.
            </p>
          </div>
        </section>

        {/* Schnupperpaket Bild */}
        <section>
          <div className="rounded-2xl overflow-hidden">
            <Image src="/images/schnupperpaket.jpg" alt="Anifit Schnupperpaket" width={700} height={400} className="w-full h-auto" />
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">
            Das Anifit Schnupperpaket. Der ideale Einstieg für Neukunden (9,90 €)
          </p>
        </section>

        {/* 4. Voraussetzungen */}
        <section id="voraussetzungen" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Was brauchst du für den Start?</h2>
          <div className="space-y-4">
            {[
              { label: "Mindestalter", value: "18 Jahre" },
              { label: "Gewerbeschein", value: "Anifit hilft dir bei der Beantragung. Dauert 15 Min." },
              { label: "Vorkenntnisse", value: "Nicht nötig. Kostenlose Schulungen und Zertifizierung inklusive." },
              { label: "Startkosten", value: "Einstiegspaket ab ca. 78 € (Pflicht, inkl. Warenproben + 80–100 € Werbematerial gratis nach Startschulung)." },
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
        <section id="mentor" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Dein Mentor: Enrico Bachmann</h2>
          <div className="bg-gray-50 rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-start">
            <Image src="/images/enrico-bachmann.jpg" alt="Enrico Bachmann" width={120} height={120} className="rounded-full w-24 h-24 object-cover border-4 border-white shadow-lg flex-shrink-0" />
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ich bin seit 2018 Anifit-Fachberater und habe mir ein Business mit über 1.000 aktiven Kunden aufgebaut.
                Mein eigener Hund frisst Anifit. Ich empfehle nur, was ich selbst nutze.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-brand-600">✓</span> Persönliche Einarbeitung nach deiner Registrierung</li>
                <li className="flex gap-2"><span className="text-brand-600">✓</span> Bewährte Vorlagen für Kundengespräche und E-Mails</li>
                <li className="flex gap-2"><span className="text-brand-600">✓</span> Praktische Tipps für deine ersten 10 Kunden</li>
                <li className="flex gap-2"><span className="text-brand-600">✓</span> Laufender Austausch und Support</li>
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
        <section id="bedenken" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Ehrliche Antworten auf häufige Bedenken</h2>
          <div className="space-y-6">
            {[
              { q: "Ist das nicht so ein MLM / Schneeballsystem?", a: "Nein. Du verdienst an echten Produktverkäufen deiner Kunden. Es gibt keine Pflicht, andere Berater zu rekrutieren. 100 % deiner Provision kommt aus Produktumsatz." },
              { q: "Ich kenne mich nicht mit Tierernährung aus.", a: "Musst du auch nicht. Anifit bietet kostenlose Online-Schulungen, Webinare und einen vollständigen Zertifizierungskurs. Du lernst alles, was du brauchst." },
              { q: "Ich habe keine Zeit für einen Nebenjob.", a: "Die meisten starten mit 2–3 Stunden pro Woche. Du empfiehlst bei Gesprächen, die du ohnehin führst. Es gibt keine Mindestanforderungen." },
              { q: "Ich bin kein Verkäufer.", a: "Musst du nicht sein. Du berätst Hundebesitzer, die aktiv nach besserem Futter suchen. Das Produkt verkauft sich durch Qualität. Du hilfst nur bei der Entscheidung." },
            ].map((item, i) => (
              <div key={i}>
                <p className="font-semibold text-gray-900 mb-1">&quot;{item.q}&quot;</p>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Inline LeadForm for visitors who found this page via search */}
        <section className="bg-brand-50 rounded-2xl p-6 sm:p-8 border border-brand-100">
          <div className="text-center mb-6">
            <p className="text-xs font-bold tracking-widest uppercase text-brand-700 bg-brand-100 px-3 py-1 rounded-full inline-block mb-3">Kompakt per Email</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Alle 5 Guide-Teile per Email erhalten</h2>
            <p className="text-sm text-gray-600 max-w-md mx-auto">
              Du hast hier die Kurzversion gelesen. Der vollständige Guide kommt in 5 kompakten Emails mit konkreten Rechenbeispielen, Vorlagen und deinem persönlichen Registrierungslink.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <LeadForm source="guide" />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bereit für den nächsten Schritt?</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Die Registrierung dauert keine 5 Minuten. Du bekommst sofort Zugang zu deinem Beraterbereich
            und ich melde mich persönlich bei dir.
          </p>
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 inline-block">
            <p className="font-bold text-gray-900 mb-3">Noch Fragen? Schreib mir direkt.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/4915204000990?text=Hallo%20Enrico%2C%20ich%20habe%20den%20Guide%20gelesen%20und%20habe%20noch%20Fragen."
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white text-sm transition-colors"
                style={{ background: "var(--color-whatsapp)" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <a href="tel:+4932212619379" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-gray-700 text-sm bg-gray-100 hover:bg-gray-200 transition-colors">
                📞 +49 322 126 19 379
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-2">Enrico antwortet persönlich · Mo–Fr</p>
          </div>
          <div>
            <a
              href="https://www.anifutter-shop.de/content/partners/201289a/anifit_berater_werden/?utm_source=guide&utm_medium=web&utm_campaign=teampartner"
              className="inline-block py-4 px-10 rounded-xl font-bold text-white text-lg transition-all"
              style={{ background: "var(--brand)", boxShadow: "0 4px 14px var(--brand-shadow)" }}
            >
              Jetzt als Anifit-Berater registrieren →
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Willkommensbonus: Zusätzliches Futterpaket (80+ € Wert) gratis nach deiner Startschulung.
          </p>
        </section>
      </div>

      {/* Internal Links */}
      <section className="max-w-2xl mx-auto px-6 pb-12">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-4">Weiterlesen</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/einkommen-berechnen" className="block p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-brand-50 hover:border-brand-100 transition-colors">
              <p className="font-bold text-sm text-gray-700 mb-1">Verdienst-Rechner</p>
              <p className="text-xs text-gray-500">Berechne dein Einkommen mit dem interaktiven Provisionsrechner.</p>
            </Link>
            <Link href="/erfahrungen" className="block p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-brand-50 hover:border-brand-100 transition-colors">
              <p className="font-bold text-sm text-gray-700 mb-1">Berater-Erfahrungen</p>
              <p className="text-xs text-gray-500">Echte Berichte von Fachberatern aus Enricos Team.</p>
            </Link>
            <Link href="/kosten" className="block p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-brand-50 hover:border-brand-100 transition-colors">
              <p className="font-bold text-sm text-gray-700 mb-1">Kosten & Einstieg</p>
              <p className="text-xs text-gray-500">Ehrliche Kostenaufstellung und ROI-Rechnung.</p>
            </Link>
            <Link href="/faq" className="block p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-brand-50 hover:border-brand-100 transition-colors">
              <p className="font-bold text-sm text-gray-700 mb-1">30 häufige Fragen</p>
              <p className="text-xs text-gray-500">Alle Antworten zu Verdienst, Kosten, Anmeldung und mehr.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
