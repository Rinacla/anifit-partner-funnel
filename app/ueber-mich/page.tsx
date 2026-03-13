import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "../_components/LeadForm";
import Footer from "@/app/_components/Footer";
import Breadcrumb from "../_components/Breadcrumb";
import StarterPaketCTA from "@/app/_components/StarterPaketCTA";

export const metadata: Metadata = {
  title: "Über Enrico Bachmann — Dein Anifit-Mentor",
  description:
    "Erfahre mehr über Enrico Bachmann: Anifit-Berater seit 2018, über 1.000 betreute Kunden und persönlicher Mentor für neue Fachberater. Seine Geschichte und sein Ansatz.",
  alternates: {
    canonical: "https://partner.anifutter-shop.de/ueber-mich",
  },
  openGraph: {
    title: "Über Enrico Bachmann — Dein Anifit-Mentor",
    description:
      "Anifit-Berater seit 2018, über 1.000 betreute Kunden. Enricos Geschichte und warum er neue Berater persönlich einarbeitet.",
    locale: "de_DE",
  },
};

const TIMELINE = [
  {
    year: "2018",
    title: "Start als Anifit-Berater",
    text: "Nebenberuflich gestartet, weil mein eigener Hund nach der Umstellung auf Anifit sichtbar gesünder wurde. Erste Kunden kamen aus dem Bekanntenkreis.",
  },
  {
    year: "2019",
    title: "100 Kunden, erste Teampartner",
    text: "Der Nebenverdienst wurde ernst. Erste Berater kamen ins Team, weil sie sahen, dass es funktioniert.",
  },
  {
    year: "2020",
    title: "Online-Beratung ausgebaut",
    text: "Während andere stillstanden, habe ich den Online-Vertrieb aufgebaut: Shop, Social Media, systematische Kundenberatung.",
  },
  {
    year: "2022",
    title: "500+ aktive Kunden",
    text: "Die Nachbestellungen liefen automatisch. Die Provision war planbar und wuchs jeden Monat.",
  },
  {
    year: "2025",
    title: "1.000+ Kunden, eigener Shop",
    text: "anifutter-shop.de als Anlaufstelle für Hundebesitzer. Regelmäßige Bestellungen, stabiles Einkommen, persönliche Beratung als Markenzeichen.",
  },
];

const VALUES = [
  {
    icon: "🤝",
    title: "Ehrliche Beratung",
    text: "Ich empfehle Anifit, weil ich davon überzeugt bin. Nicht weil ich es muss. Wenn ein anderes Futter besser passt, sage ich das.",
  },
  {
    icon: "📞",
    title: "Persönliche Einarbeitung",
    text: "Jeder neue Berater bekommt meine Handynummer. Nicht ein Call-Center, nicht einen Chatbot. Mich.",
  },
  {
    icon: "📊",
    title: "Zahlen statt Versprechen",
    text: "Ich zeige dir echte Zahlen aus meinem Business. Was funktioniert, was nicht, und was du realistisch erwarten kannst.",
  },
  {
    icon: "🎯",
    title: "Systeme statt Zufall",
    text: "Kundengewinnung ist kein Glücksspiel. Ich gebe dir die Vorlagen, Skripte und Strategien, die bei mir funktionieren.",
  },
];

const FAQS = [
  {
    q: "Wie erreichbar ist Enrico als Mentor?",
    a: "Per WhatsApp, Telefon und Email. In den ersten Wochen sprechen wir mindestens 1x pro Woche. Danach so oft du möchtest.",
  },
  {
    q: "Muss ich in Enricos Team sein, um Anifit zu verkaufen?",
    a: "Nein. Du kannst dich auch direkt bei Provital registrieren. Aber dann hast du keinen persönlichen Mentor, keine Vorlagen und keine Einarbeitung.",
  },
  {
    q: "Was unterscheidet Enrico von anderen Anifit-Beratern?",
    a: "Die meisten Berater machen Anifit rein offline. Ich habe einen systematischen Online-Vertrieb aufgebaut und teile diese Strategie mit meinem Team.",
  },
  {
    q: "Verdient Enrico etwas, wenn ich mich registriere?",
    a: "Ja, transparent: Als mein Teampartner bekomme ich eine kleine Teamprovision auf deine Umsätze. Das ändert nichts an deiner Provision — du bekommst den vollen Satz.",
  },
  {
    q: "Kann ich Enrico vorher kennenlernen?",
    a: "Klar. Schreib mir auf WhatsApp oder ruf an. Kein Verkaufsgespräch, nur ein ehrliches Gespräch.",
  },
  {
    q: "Was ist, wenn ich merke, dass Anifit nichts für mich ist?",
    a: "Dann hörst du auf. Kein Vertrag, keine Mindestlaufzeit, keine Verpflichtungen. Du bestellst einfach kein Nachschub-Paket mehr.",
  },
];

export default function UeberMichPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Enrico Bachmann",
    url: "https://partner.anifutter-shop.de/ueber-mich",
    image: "https://partner.anifutter-shop.de/images/enrico-bachmann.jpg",
    jobTitle: "Anifit-Fachberater & Mentor",
    description:
      "Anifit-Berater seit 2018 mit über 1.000 betreuten Kunden. Persönlicher Mentor für neue Fachberater im deutschsprachigen Raum.",
    worksFor: {
      "@type": "Organization",
      name: "Provital GmbH (Anifit)",
      url: "https://www.anifit.com",
    },
    knowsAbout: [
      "Hundefutter",
      "Tierernährung",
      "Affiliate-Marketing",
      "Online-Vertrieb",
    ],
    sameAs: [
      "https://www.anifutter-shop.de",
      "https://wa.me/4915204000990",
    ],
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
        name: "Über Enrico",
        item: "https://partner.anifutter-shop.de/ueber-mich",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-gray-700">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Über Enrico Bachmann" }]} />
        <div className="flex flex-col sm:flex-row items-center gap-8 mb-10">
          <Image
            src="/images/enrico-bachmann.jpg"
            alt="Enrico Bachmann — Anifit-Fachberater"
            width={180}
            height={180}
            className="rounded-full border-4 border-brand-100 shadow-md"
            priority
          />
          <div>
            <p className="text-sm font-medium text-brand-700 mb-1">
              Dein Mentor
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Enrico Bachmann
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Anifit-Fachberater seit 2018. Über 1.000 betreute Kunden. Ich
              zeige dir, wie du mit Premium-Hundefutter ein planbares Einkommen
              aufbaust — Schritt für Schritt, mit persönlicher Begleitung.
            </p>
          </div>
        </div>
      </section>

      {/* Meine Geschichte */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Wie alles angefangen hat
          </h2>
          <div className="prose prose-gray max-w-none text-gray-700 space-y-4">
            <p>
              2018 hatte mein Hund chronische Verdauungsprobleme. Kein Tierarzt
              konnte helfen, kein Supermarkt-Futter machte es besser. Über eine
              Empfehlung bin ich auf Anifit gestoßen — schwedische Produktion,
              90 % Fleisch, keine künstlichen Zusätze.
            </p>
            <p>
              Nach drei Wochen war der Unterschied sichtbar: besseres Fell, mehr
              Energie, fester Kot. Ich war so überzeugt, dass ich es
              Hundebesitzern in meinem Umfeld empfohlen habe. Die meisten
              bestellten. Und bestellten wieder. Und wieder.
            </p>
            <p>
              Was als ehrliche Empfehlung begann, wurde zu einem planbaren
              Einkommen. Heute betreue ich über 1.000 Kunden im
              deutschsprachigen Raum und helfe neuen Beratern beim Aufbau.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Mein Weg mit Anifit
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-brand-200" />
            <div className="space-y-8">
              {TIMELINE.map((item) => (
                <div key={item.year} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-9 h-9 bg-brand-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
                    {item.year.slice(2)}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {item.year}: {item.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Was mich ausmacht */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Was mich als Mentor ausmacht
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zahlen */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Meine Zahlen — transparent
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "1.000+", label: "Betreute Kunden" },
              { value: "Seit 2018", label: "Aktiv als Berater" },
              { value: "30 %", label: "Max. Provision" },
              { value: "0 €", label: "Startgebühr" },
            ].map((s) => (
              <div
                key={s.label}
                className="text-center bg-brand-50 rounded-xl py-5 px-3"
              >
                <p className="text-2xl font-bold text-brand-700">{s.value}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Häufige Fragen zu Enrico als Mentor
          </h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden group"
              >
                <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  {f.q}
                  <span className="text-gray-500 group-open:rotate-180 transition-transform ml-3">
                    ▾
                  </span>
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* LeadForm */}
      <section className="py-12">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Lerne mich kennen
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Hol dir den kostenlosen Guide und ich melde mich persönlich bei dir.
          </p>
          <LeadForm idPrefix="ueber-mich-" source="ueber-mich" />
        </div>
      </section>

      {/* Weiterlesen */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-6">
          <h3 className="font-bold text-gray-900 mb-4">Weiterlesen</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: "/erfahrungen",
                label: "Erfahrungsberichte aus dem Team",
              },
              { href: "/kosten", label: "Kosten und Einstieg" },
              {
                href: "/voraussetzungen",
                label: "Voraussetzungen als Berater",
              },
              { href: "/einkommen-berechnen", label: "Verdienst-Rechner" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block bg-white rounded-lg px-4 py-3 text-sm text-gray-700 hover:text-brand-700 hover:border-brand-200 border border-gray-200 transition-colors"
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* Starter-Paket CTA */}
      <div className="max-w-2xl mx-auto px-4 my-12">
        <StarterPaketCTA />
      </div>

      <Footer />
    </main>
  );
}
