import FAQAccordion from "../_components/FAQAccordion";
import LeadForm from "../_components/LeadForm";
import type { Metadata } from "next";
import Footer from "@/app/_components/Footer";
import Breadcrumb from "../_components/Breadcrumb";
import StarterPaketCTA from "@/app/_components/StarterPaketCTA";

export const metadata: Metadata = {
  title: "Häufige Fragen zum Einstieg als Anifit-Berater",
  description:
    "Alle Antworten auf die wichtigsten Fragen: Kosten, Verdienst, Anmeldung, Zeitaufwand und mehr. Ehrlich und direkt von einem aktiven Anifit-Fachberater.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ: Anifit-Fachberater werden",
    description:
      "Kosten, Verdienst, Anmeldung, Zeitaufwand — alle Antworten auf einen Blick.",
    locale: "de_DE",
  },
};

const categories = [
  {
    title: "Kosten & Finanzen",
    icon: "💰",
    faqs: [
      {
        q: "Muss ich etwas vorab investieren?",
        a: "Die Registrierung ist kostenlos. Das Einstiegspaket (ab 78 €) enthält Warenproben zum Selbsttesten — du musst es nicht sofort bestellen. Es gibt keine monatlichen Gebühren, keine Mindestabnahme und kein finanzielles Risiko.",
      },
      {
        q: "Gibt es monatliche Gebühren oder laufende Kosten?",
        a: "Nein. Keine monatlichen Gebühren, keine Software-Kosten, keine Pflichtbestellungen. Dein einziger Einsatz ist das optionale Einstiegspaket. Provital übernimmt Lager, Versand und Retouren.",
      },
      {
        q: "Muss ich Ware auf Lager halten oder vorfinanzieren?",
        a: "Nein. Du empfiehlst, der Kunde bestellt direkt bei Provital, die liefern. Du brauchst weder Lager noch Vorfinanzierung.",
      },
      {
        q: "Was ist im Einstiegspaket enthalten?",
        a: "Verschiedene Futtersorten zum Selbsttesten (Hund oder Katze), Informationsmaterial und Zugang zum Beraterbereich. So kannst du aus eigener Erfahrung beraten.",
      },
      {
        q: "Wann habe ich die Startkosten wieder rein?",
        a: "Bei einem durchschnittlichen Erstbestell-Wert von 107 € und 23 % Provision verdienst du 24,61 € pro Neukunde. Nach 3–4 Kunden hast du das Einstiegspaket refinanziert. Viele schaffen das im ersten Monat.",
      },
      {
        q: "Sind die Provisionen wirklich lebenslang?",
        a: "Ja. Jeder Kunde ist dauerhaft dir zugeordnet (lebenslanger Kundenschutz). Egal ob er in 2 Wochen oder in 5 Jahren nachbestellt — du verdienst mit. Das ist kein Marketing-Versprechen, sondern Vertragsbestandteil.",
      },
    ],
  },
  {
    title: "Verdienst & Provision",
    icon: "📈",
    faqs: [
      {
        q: "Was verdient man realistisch im ersten Jahr?",
        a: "Das hängt von deinem Einsatz ab. Die meisten Berater mit 2–5 Stunden/Woche kommen nach 6–12 Monaten auf 300–800 € monatlich. Einige Vollzeit-Berater verdienen 2.000 €+ im Monat. Die Provision wächst mit jedem Kunden, der regelmäßig nachbestellt.",
      },
      {
        q: "Wie funktionieren die Provisionsstufen?",
        a: "Du startest mit 15 % Provision. Ab bestimmten Kundenzahlen steigt sie auf 20 %, 23 % und bis zu 30 %. Die Stufen gelten lebenslang für alle Bestellungen deiner Kunden. Details im kostenlosen Guide.",
      },
      {
        q: "Was bedeutet 'lebenslanger Kundenschutz'?",
        a: "Sobald ein Kunde über deinen Link bestellt, ist er dauerhaft dir zugeordnet. Jede Nachbestellung bringt dir Provision — auch Monate oder Jahre später. Du baust echtes passives Einkommen auf.",
      },
      {
        q: "Kann man davon leben?",
        a: "Möglich, aber die meisten starten es als Nebenverdienst. Berater mit 100+ aktiven Kunden kommen auf 1.500–3.000 € monatlich. Das braucht typischerweise 1–2 Jahre konsequenter Arbeit. Ehrliche Erwartung: Die ersten 6 Monate sind Aufbauarbeit.",
      },
    ],
  },
  {
    title: "Anmeldung & Start",
    icon: "🚀",
    faqs: [
      {
        q: "Wie läuft die Anmeldung ab?",
        a: "Registrierungsformular ausfüllen (5 Minuten), Einstiegspaket bestellen, Startschulung absolvieren. Danach meldet sich dein Mentor persönlich für die Einarbeitung.",
      },
      {
        q: "Wie lange dauert die Registrierung?",
        a: "Das Online-Formular dauert keine 5 Minuten. Nach Absenden bekommst du sofort Zugang zum Beraterbereich. Die Startschulung kannst du in deinem Tempo machen.",
      },
      {
        q: "Brauche ich ein Gewerbe anmelden?",
        a: "Ab einem gewissen Verdienst ja — das ist bei jeder selbstständigen Tätigkeit so. Zu Beginn reicht die Anmeldung als Kleinunternehmer (Kosten: 20–30 €). Wir helfen dir dabei.",
      },
      {
        q: "Muss ich das Einstiegspaket sofort bestellen?",
        a: "Nein. Du kannst dich erst registrieren und das Paket später bestellen. Wir empfehlen aber, die Produkte selbst zu testen — so berätst du authentisch.",
      },
      {
        q: "Gibt es eine Altersbeschränkung?",
        a: "Du musst mindestens 18 Jahre alt sein. Nach oben gibt es keine Grenze. Viele erfolgreiche Berater sind 40+.",
      },
      {
        q: "Kann ich mich wieder abmelden?",
        a: "Ja, jederzeit. Keine Mindestlaufzeit, keine Kündigungsfrist. Wenn es nicht passt, hörst du einfach auf. Deine bestehende Kundenbasis bleibt aber erhalten falls du später weitermachen willst.",
      },
      {
        q: "Was passiert, wenn es nicht klappt?",
        a: "Nichts. Du hast keine laufenden Kosten, keine Mindestabnahme und keine Vertragsbindung. Wenn du merkst, dass es nicht zu dir passt, hörst du einfach auf. Dein Einstiegspaket hast du dann als hochwertiges Hundefutter genutzt. Kein Risiko, kein Kleingedrucktes.",
      },
    ],
  },
  {
    title: "Zeitaufwand & Alltag",
    icon: "⏰",
    faqs: [
      {
        q: "Wie viel Zeit muss ich investieren?",
        a: "Die meisten starten mit 2–5 Stunden pro Woche neben dem Hauptjob. Du empfiehlst bei Gesprächen, die du ohnehin führst — im Hundepark, im Verein, in sozialen Netzwerken. Keine Mindestanforderung an Arbeitszeit.",
      },
      {
        q: "Kann ich das neben meinem Hauptjob machen?",
        a: "Ja. Die große Mehrheit der Berater arbeitet nebenberuflich. Du bestimmst selbst, wann und wie viel du machst. Die flexible Zeiteinteilung ist einer der Hauptgründe, warum das Modell funktioniert.",
      },
      {
        q: "Muss ich verkaufen können?",
        a: "Nein, nicht im klassischen Sinn. Du empfiehlst ein Produkt, von dem du selbst überzeugt bist. Das ist wie einem Freund ein gutes Restaurant empfehlen — nur dass du dafür bezahlt wirst. Die Schulungen helfen dir, Gespräche natürlich zu führen.",
      },
      {
        q: "Wie lange dauert es, bis man die ersten Kunden hat?",
        a: "Die meisten Berater gewinnen ihre ersten 1–3 Kunden im Bekanntenkreis innerhalb der ersten 2–4 Wochen. Wer aktiv vorgeht (Social Media, Hundepark, Verein), schafft 5+ Kunden im ersten Monat.",
      },
      {
        q: "Was passiert, wenn ein Kunde nicht zufrieden ist?",
        a: "Provital hat eine unkomplizierte Rückgabe-Regelung. In der Praxis sind Rücksendungen selten, da die Produktqualität stimmt. Als Berater bist du Ansprechpartner, aber Provital wickelt Retouren ab.",
      },
    ],
  },
  {
    title: "Produkt & Geschäftsmodell",
    icon: "🐕",
    faqs: [
      {
        q: "Ist das ein MLM- oder Schneeballsystem?",
        a: "Nein. Du verdienst ausschließlich an deinen eigenen Kunden und deren Bestellungen. Es gibt keine Verpflichtung, andere Berater zu rekrutieren. 100 % der Provision kommt aus echten Produktverkäufen.",
      },
      {
        q: "Brauche ich Vorkenntnisse in Tierernährung?",
        a: "Nicht zwingend. Du bekommst kostenlose Schulungen direkt von Anifit und kannst die offizielle Zertifizierung zum Tierernährungsberater ablegen. Das macht dich glaubwürdiger und Gespräche mit Hundebesitzern deutlich einfacher.",
      },
      {
        q: "Warum gibt es Anifit nicht im Laden?",
        a: "Das ist Absicht. Durch den Direktvertrieb über Berater gibt es keinen Preiskampf mit Amazon oder Fressnapf. Dein Kunde kann nicht woanders günstiger kaufen. Das schützt deine Marge und deinen Kundenstamm.",
      },
      {
        q: "Was passiert, wenn es nicht klappt? Kann ich aufhören?",
        a: "Ja, jederzeit. Kein Vertrag mit Mindestlaufzeit, keine Pflichten. Dein finanzielles Risiko beschränkt sich auf das optionale Einstiegspaket (ab 78 €). Viele pausieren einfach und machen später weiter.",
      },
    ],
  },
  {
    title: "Für Tierärzte, THP & Züchter",
    icon: "🩺",
    faqs: [
      {
        q: "Kostet die Registrierung als Partner etwas?",
        a: "Nein. Die Registrierung ist kostenlos. Als Fachperson bekommst du sofort 30 % Rabatt auf alle Produkte für den Eigenbedarf.",
      },
      {
        q: "Wie funktioniert der 30 % Rabatt?",
        a: "Ab Registrierung bestellst du mit deinem Berater-Account alle Anifit-Produkte dauerhaft 30 % günstiger. Das gilt für Eigenbedarf und Proben für deine Praxis/Zucht.",
      },
      {
        q: "Muss ich aktiv verkaufen oder Kunden werben?",
        a: "Nein. Du empfiehlst Anifit deinen Patienten oder Welpenkäufern. Wer über deinen Link bestellt, wird dir zugeordnet. Provision läuft automatisch — du musst nicht nachverkaufen.",
      },
      {
        q: "Wie läuft der Versand? Muss ich Futter lagern?",
        a: "Nein. Provital übernimmt Lager, Verpackung und Versand. Dein Patient bestellt online, Provital liefert. Du brauchst keinen Platz in der Praxis.",
      },
    ],
  },
];

// Flatten all FAQs for schema
const allFaqs = categories.flatMap((c) => c.faqs);

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Start",
        item: "https://partner.anifutter-shop.de",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Häufige Fragen",
        item: "https://partner.anifutter-shop.de/faq",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-brand-50 to-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "FAQ" }]} />
          <p className="text-sm font-semibold text-brand-700 bg-brand-100 inline-block px-4 py-1.5 rounded-full mb-4">
            Alle Antworten auf einen Blick
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Häufige Fragen zum Einstieg als Anifit-Berater
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {allFaqs.length} ehrliche Antworten von einem aktiven Fachberater.
            Kein Marketing-Sprech, keine versteckten Haken.
          </p>
        </div>
      </div>

      {/* Quick Jump Nav */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-3 flex gap-3 overflow-x-auto no-scrollbar">
          {categories.map((cat, i) => (
            <a
              key={i}
              href={`#cat-${i}`}
              className="flex-shrink-0 text-sm text-gray-600 hover:text-brand-700 hover:bg-brand-50 px-3 py-1.5 rounded-full border border-gray-200 hover:border-brand-200 transition-colors whitespace-nowrap"
            >
              {cat.icon} {cat.title}
            </a>
          ))}
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-16">
        {categories.map((cat, i) => (
          <section key={i} id={`cat-${i}`} className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="text-2xl font-bold text-gray-900">{cat.title}</h2>
            </div>
            <FAQAccordion
              items={cat.faqs}
            />
          </section>
        ))}

        {/* CTA with inline LeadForm */}
        <section className="bg-gradient-to-br from-brand-50 to-white rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Noch mehr Fragen? Der Guide hat die Antworten.
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            5 kompakte Emails mit Provisionsmodell, echten Zahlen und einem
            Fahrplan für deine ersten Kunden. Kostenlos.
          </p>
          <LeadForm idPrefix="faq-" source="faq" />
        </section>

        {/* Internal links for SEO */}
        <section className="border-t border-gray-200 pt-8">
          <h3 className="font-bold text-gray-900 mb-4">
            Weitere Infos zum Einstieg
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/kosten", label: "Kosten & Einstieg im Detail" },
              { href: "/einkommen-berechnen", label: "Verdienst-Rechner" },
              { href: "/anmeldung", label: "Anmeldung Schritt für Schritt" },
              { href: "/erfahrungen", label: "Berater-Erfahrungsberichte" },
              {
                href: "/nebenverdienst-mit-hunden",
                label: "Nebenverdienst mit Hunden",
              },
              { href: "/tierberufe", label: "Für Tierärzte & Züchter" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-brand-700 py-2 px-3 rounded-lg hover:bg-brand-50 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-brand-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Starter-Paket CTA */}
      <div className="max-w-2xl mx-auto px-4 my-12">
        <StarterPaketCTA />
      </div>

      <Footer />
    </div>
  );
}
