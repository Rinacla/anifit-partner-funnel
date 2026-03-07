import Link from "next/link";
import type { Metadata } from "next";
import LeadForm from "../_components/LeadForm";
import Footer from "@/app/_components/Footer";

export const metadata: Metadata = {
  title: "Erfahrungen als Anifit-Berater | Echte Berichte aus dem Team",
  description:
    "Echte Erfahrungsberichte von Anifit-Fachberatern: Was verdient man wirklich? Wie läuft der Alltag? Lohnt sich der Einstieg? Berater aus Enricos Team berichten.",
  alternates: { canonical: "https://partner.anifutter-shop.de/erfahrungen" },
  openGraph: {
    title: "Erfahrungen als Anifit-Berater | Echte Berichte",
    description:
      "Echte Erfahrungsberichte von Anifit-Fachberatern aus Enricos Team. Was verdient man wirklich?",
    locale: "de_DE",
  },
};

const experiences = [
  {
    name: "Sarah M.",
    location: "Bayern",
    months: 8,
    customers: 35,
    income: "600+",
    quote:
      "Nach 8 Monaten habe ich 35 feste Kunden und verdiene nebenbei über 600 € im Monat. Die Schulungen waren top und Enrico hat mir am Anfang bei jedem Kundengespräch geholfen.",
    background: "Teilzeit im Büro, 2 Hunde",
    highlight: "Die monatlichen Nachbestellungen kommen automatisch. Ich muss nichts tun.",
    firstMonths:
      "Der Anfang war holprig. Meine ersten 3 Kunden kamen aus dem Bekanntenkreis. Ab Kunde 10 lief es fast von allein, weil Empfehlungen kamen.",
  },
  {
    name: "Thomas K.",
    location: "NRW",
    months: 14,
    customers: 60,
    income: "1.200+",
    quote:
      "Ich war erst skeptisch, ob das wirklich funktioniert. Heute, 14 Monate später, betreue ich über 60 Kunden. Das Beste: Die bestellen jeden Monat nach, ohne dass ich etwas tun muss.",
    background: "Selbstständiger Hundetrainer",
    highlight: "Die Kombination aus Training und Futterberatung war der Gamechanger.",
    firstMonths:
      "Ich habe Anifit in meine Trainings integriert. Jeder Kunde bekommt eine Futterberatung. Die meisten bestellen direkt das Schnupperpaket.",
  },
  {
    name: "Lisa R.",
    location: "Niedersachsen",
    months: 5,
    customers: 20,
    income: "350",
    quote:
      "Als Hundetrainerin passt Anifit perfekt zu meiner Arbeit. Ich empfehle es meinen Kunden und verdiene zusätzlich. Nach 5 Monaten sind es schon 20 Stammkunden.",
    background: "Hundetrainerin, eigene Hundeschule",
    highlight: "Meine Kunden fragen mich sowieso nach Futter. Jetzt habe ich eine ehrliche Empfehlung.",
    firstMonths:
      "Ich habe mit Probeessen bei meinen Gruppenstunden angefangen. Die Hunde lieben es, die Besitzer sehen den Unterschied.",
  },
  {
    name: "Markus W.",
    location: "Baden-Württemberg",
    months: 11,
    customers: 28,
    income: "500",
    quote:
      "Ich mache das komplett nebenbei, abends und am Wochenende. 28 Kunden, die jeden Monat nachbestellen. Das sind 500 € die jeden Monat kommen, ohne dass ich etwas dafür tun muss.",
    background: "Vollzeit-Angestellter, 1 Hund",
    highlight: "Ich investiere vielleicht 3 Stunden pro Woche. Der Rest läuft automatisch.",
    firstMonths:
      "Habe im Hundepark angefangen, über Futter zu reden. Klingt simpel, funktioniert aber. Hundebesitzer reden gern über ihre Hunde.",
  },
];

const timelineFaqs = [
  {
    q: "Wie lange dauert es, bis man die ersten Kunden hat?",
    a: "Die meisten Berater gewinnen ihre ersten 3-5 Kunden im ersten Monat. Die kommen oft aus dem eigenen Umfeld: Familie, Freunde, Hundepark-Bekanntschaften.",
  },
  {
    q: "Was verdient man realistisch im ersten Jahr?",
    a: "Das hängt vom Einsatz ab. Mit 2-5 Stunden pro Woche sind 15-30 aktive Kunden im ersten Jahr realistisch. Das entspricht 300-700 € monatlich, Tendenz steigend.",
  },
  {
    q: "Muss man verkaufen können?",
    a: "Nein. Du empfiehlst, nicht du verkaufst. Hundebesitzer merken selbst, wenn sich Fell, Energie und Verdauung ihres Hundes verbessern. Die meisten bestellen nach dem Schnupperpaket von allein weiter.",
  },
  {
    q: "Was passiert, wenn ein Kunde nicht zufrieden ist?",
    a: "Provital hat eine Zufriedenheitsgarantie. Wenn ein Hund das Futter nicht annimmt, gibt es Alternativen. In der Praxis passiert das selten, weil 93 % Fleischanteil fast jeden Hund überzeugt.",
  },
  {
    q: "Brauche ich eine Gewerbeanmeldung?",
    a: "Erst wenn du regelmäßig Einnahmen erzielst. Am Anfang kannst du es als Nebentätigkeit starten. Enrico erklärt dir genau, wann und wie du das anmeldest.",
  },
  {
    q: "Kann man davon leben?",
    a: "Einzelne Berater in Enricos Team verdienen über 2.000 € monatlich. Das braucht aber Zeit und Einsatz. Für die meisten ist es ein solider Nebenverdienst, kein Vollzeit-Ersatz.",
  },
];

export default function ErfahrungenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Erfahrungen als Anifit-Berater",
    url: "https://partner.anifutter-shop.de/erfahrungen",
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: timelineFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    review: experiences.map((e) => ({
      "@type": "Review",
      author: { "@type": "Person", name: e.name },
      reviewBody: e.quote,
      reviewRating: { "@type": "Rating", ratingValue: 5 },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: "https://partner.anifutter-shop.de",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Berater-Erfahrungen",
        item: "https://partner.anifutter-shop.de/erfahrungen",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50/30">
        <div className="mx-auto max-w-4xl px-6 pt-12 pb-10">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-brand-700 transition-colors">
              Startseite
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-700">Erfahrungen</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Echte Erfahrungen von{" "}
            <span className="text-brand-600">Anifit-Beratern</span>
          </h1>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl">
            Keine Werbeversprechen. Hier berichten Berater aus Enricos Team, wie
            ihr Einstieg lief, was gut funktioniert hat und was sie anders machen
            würden.
          </p>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <article
              key={i}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {exp.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{exp.name}</h2>
                  <p className="text-sm text-gray-500">
                    {exp.location} · {exp.background}
                  </p>
                </div>
                <div className="sm:ml-auto flex gap-4 text-center">
                  <div>
                    <p className="text-2xl font-extrabold text-brand-700">
                      {exp.customers}
                    </p>
                    <p className="text-[11px] text-gray-500 uppercase tracking-wide">
                      Kunden
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-brand-700">
                      {exp.income} €
                    </p>
                    <p className="text-[11px] text-gray-500 uppercase tracking-wide">
                      /Monat
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-gray-500">
                      {exp.months}
                    </p>
                    <p className="text-[11px] text-gray-500 uppercase tracking-wide">
                      Monate
                    </p>
                  </div>
                </div>
              </div>

              <blockquote className="text-gray-700 leading-relaxed border-l-4 border-brand-200 pl-4 mb-5 italic">
                &ldquo;{exp.quote}&rdquo;
              </blockquote>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-brand-50/60 rounded-lg p-4">
                  <p className="text-xs font-bold text-brand-800 uppercase tracking-wide mb-1">
                    Die ersten Monate
                  </p>
                  <p className="text-sm text-gray-700">{exp.firstMonths}</p>
                </div>
                <div className="bg-warm-50/60 rounded-lg p-4">
                  <p className="text-xs font-bold text-warm-800 uppercase tracking-wide mb-1">
                    Grösster Vorteil
                  </p>
                  <p className="text-sm text-gray-700">{exp.highlight}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats Summary */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            In Zahlen: Was Berater nach 12 Monaten erreichen
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-extrabold text-brand-700">67 %</p>
              <p className="text-sm text-gray-600 mt-1">Wiederkaufrate</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-brand-700">107 €</p>
              <p className="text-sm text-gray-600 mt-1">Ø Bestellwert</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-brand-700">25+</p>
              <p className="text-sm text-gray-600 mt-1">Kunden nach 12 Mon.</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-brand-700">600 €</p>
              <p className="text-sm text-gray-600 mt-1">Ø Monatsverdienst</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">
            Durchschnittswerte aus Enricos Berater-Team. Individuelle Ergebnisse
            variieren je nach Einsatz.
          </p>
        </div>
      </section>

      {/* Timeline: Typical First Year */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-2xl font-bold mb-8">
          Typischer Verlauf: Dein erstes Jahr
        </h2>
        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-brand-100" />
          {[
            {
              month: "Monat 1-2",
              title: "Start und erste Kunden",
              text: "Schulung absolvieren, Schnupperpakete im Umfeld verteilen. 3-5 Kunden sind realistisch.",
            },
            {
              month: "Monat 3-4",
              title: "Routine entwickeln",
              text: "Erste Nachbestellungen kommen rein. Du merkst: der Aufwand pro Kunde sinkt. Empfehlungen starten.",
            },
            {
              month: "Monat 5-8",
              title: "Wachstum durch Empfehlungen",
              text: "Zufriedene Kunden empfehlen dich weiter. 15-25 aktive Kunden, spürbares passives Einkommen.",
            },
            {
              month: "Monat 9-12",
              title: "Stabilität",
              text: "25-40 Stammkunden, monatliches Einkommen von 400-800 €. Die meiste Arbeit haben deine Bestandskunden bereits erledigt: nachbestellen.",
            },
          ].map((step, i) => (
            <div key={i} className="relative pl-12 sm:pl-16 pb-8 last:pb-0">
              <div className="absolute left-2 sm:left-4 w-4 h-4 rounded-full bg-brand-600 border-4 border-white shadow-sm top-1" />
              <p className="text-xs font-bold text-brand-700 uppercase tracking-wide">
                {step.month}
              </p>
              <h3 className="text-lg font-bold mt-1">{step.title}</h3>
              <p className="text-gray-600 mt-1 text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Häufige Fragen zum Einstieg
          </h2>
          <div className="space-y-4">
            {timelineFaqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-gray-200 shadow-sm"
              >
                <summary className="px-5 py-4 cursor-pointer font-semibold text-gray-900 flex items-center justify-between hover:text-brand-700 transition-colors">
                  {faq.q}
                  <span className="ml-3 text-gray-500 group-open:rotate-45 transition-transform text-xl">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Inline Lead Form */}
      <section className="mx-auto max-w-xl px-6 py-14">
        <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
            Bereit für deine eigene Erfolgsgeschichte?
          </h2>
          <p className="text-gray-600 mb-6 text-center max-w-md mx-auto">
            Hol dir den kostenlosen Guide mit Provision, Produkten und deinem
            persönlichen Fahrplan.
          </p>
          <LeadForm idPrefix="erfahrungen-" source="erfahrungen" />
          <p className="text-xs text-gray-500 mt-4 text-center">
            Kein Spam. Kein Abo. Jederzeit abmeldbar.
          </p>
        </div>
      </section>

      {/* Footer Nav */}
      <Footer />
    </div>
  );
}
