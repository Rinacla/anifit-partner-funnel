import Image from "next/image";
import QuizFunnel from "./_components/QuizFunnel";
import ProvisionsRechner from "./_components/ProvisionsRechner";
import FAQAccordion from "./_components/FAQAccordion";
import StartbonusTimer from "./_components/StartbonusTimer";
import LeadForm from "./_components/LeadForm";
import Testimonials from "./_components/Testimonials";
import AnimatedStats from "./_components/AnimatedStats";
import ContactSection from "./_components/ContactSection";
import VideoSection from "./_components/VideoSection";
import BenefitIcons from "./_components/BenefitIcons";
import FirstMonthTimeline from "./_components/FirstMonthTimeline";
import ClientOverlays from "./_components/ClientOverlays";
import StartbonusMini from "./_components/StartbonusMini";
import QuizEarningsReminder from "./_components/QuizEarningsReminder";
import AnnouncementBar from "./_components/AnnouncementBar";
import ReturningVisitorBanner from "./_components/ReturningVisitorBanner";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Zertifizierter Ernährungsberater für Hunde werden | Enrico Bachmann",
  description: "Anifit-Fachberater werden: 15-30% lebenslange Provision auf Premium-Hundefutter. Testsieger 2026 (52 Marken). Einstieg ab 78 €, persönliche Einarbeitung.",
  robots: "index, follow",
  alternates: { canonical: "https://partner.anifutter-shop.de" },
  openGraph: { title: "Zertifizierter Ernährungsberater für Hunde werden | Enrico Bachmann", description: "Anifit-Fachberater werden: 15-30% lebenslange Provision auf Premium-Hundefutter.", locale: "de_DE" },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "EducationalOrganization",
    name: "Anifit-Fachberater Ausbildung — Enrico Bachmann",
    url: "https://partner.anifutter-shop.de",
    description: "Werde Anifit-Fachberater: Kostenlose Ausbildung zum zertifizierten Ernährungsberater für Hunde und Katzen mit 15–30 % lebenslanger Provision.",
    founder: { "@type": "Person", name: "Enrico Bachmann" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "3",
      reviewCount: "3",
    },
    review: [
      { "@type": "Review", author: { "@type": "Person", name: "Sarah M." }, reviewBody: "Nach 8 Monaten habe ich 35 feste Kunden und verdiene nebenbei über 600 € im Monat. Die Schulungen waren top und Enrico hat mir am Anfang bei jedem Kundengespräch geholfen.", reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 }, datePublished: "2025-06-15" },
      { "@type": "Review", author: { "@type": "Person", name: "Thomas K." }, reviewBody: "Ich war erst skeptisch, ob das wirklich funktioniert. Heute, 14 Monate später, betreue ich über 60 Kunden. Das Beste: Die bestellen jeden Monat nach, ohne dass ich etwas tun muss.", reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 }, datePublished: "2025-08-20" },
      { "@type": "Review", author: { "@type": "Person", name: "Lisa R." }, reviewBody: "Als Hundetrainerin passt Anifit perfekt zu meiner Arbeit. Ich empfehle es meinen Kunden und verdiene zusätzlich. Nach 5 Monaten sind es schon 20 Stammkunden.", reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 }, datePublished: "2025-09-10" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Was kostet der Einstieg?", acceptedAnswer: { "@type": "Answer", text: "Das Einstiegspaket kostet ab 78 € und enthält Warenproben zum Selbsttesten. Nach der Startschulung bekommst du Werbematerial im Wert von 80–100 € gratis dazu." } },
      { "@type": "Question", name: "Brauche ich Vorkenntnisse?", acceptedAnswer: { "@type": "Answer", text: "Nein. Du bekommst kostenlose Schulungen und einen persönlichen Mentor, der dich einarbeitet." } },
      { "@type": "Question", name: "Was bedeutet lebenslanger Kundenschutz?", acceptedAnswer: { "@type": "Answer", text: "Jeder Kunde, den du gewinnst, bleibt dauerhaft dir zugeordnet. Auch bei Nachbestellungen Jahre später verdienst du mit." } },
      { "@type": "Question", name: "Ist das MLM?", acceptedAnswer: { "@type": "Answer", text: "Nein. 100% der Provision kommt aus echten Produktverkäufen. Du verdienst an deinen Kunden, nicht am Recruiting." } },
      { "@type": "Question", name: "Wie viel Zeit brauche ich?", acceptedAnswer: { "@type": "Answer", text: "Die meisten starten mit 2-5 Stunden pro Woche neben dem Hauptjob." } },
      { "@type": "Question", name: "Wie läuft die Anmeldung ab?", acceptedAnswer: { "@type": "Answer", text: "Registrierungsformular ausfüllen, Einstiegspaket bestellen, Startschulung absolvieren. Das dauert keine 5 Minuten. Danach meldet sich dein Mentor persönlich bei dir." } },
      { "@type": "Question", name: "Brauche ich ein Gewerbe anmelden?", acceptedAnswer: { "@type": "Answer", text: "Nicht sofort. Du kannst dich erst registrieren und alles kennenlernen. Sobald du regelmäßig Provision verdienst, meldest du ein Kleingewerbe an. Das dauert 15 Minuten beim Ordnungsamt und kostet je nach Stadt 20–60 €." } },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Anifit-Fachberater werden — So funktioniert's",
    description: "In 3 Schritten zum Anifit-Fachberater: Guide lesen, registrieren und erste Kunden gewinnen. Kein Lager, kein Versand, kein Risiko.",
    totalTime: "PT30M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "EUR", value: "78" },
    step: [
      { "@type": "HowToStep", position: 1, name: "Guide lesen", text: "Fordere den kostenlosen 5-Email-Guide an mit allen Infos zu Provision, Produkten und Ablauf.", url: "https://partner.anifutter-shop.de/#quiz" },
      { "@type": "HowToStep", position: 2, name: "Registrieren und Einstiegspaket bestellen", text: "Melde dich als Anifit-Fachberater an und bestelle dein Einstiegspaket ab 78 €, inklusive Warenproben zum Selbsttesten." },
      { "@type": "HowToStep", position: 3, name: "Erste Kunden gewinnen", text: "Mit persönlicher Einarbeitung durch deinen Mentor Enrico, fertigen Vorlagen und einem Fahrplan für deine ersten 5 Kunden startest du sofort." },
    ],
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Enrico Bachmann",
    jobTitle: "Zertifizierter Ernährungsberater für Hunde und Katzen",
    description: "Anifit-Fachberater seit 2018 mit über 1.000 aktiven Kunden und 34 Teampartnern.",
    url: "https://partner.anifutter-shop.de",
    image: "https://partner.anifutter-shop.de/images/enrico-bachmann.jpg",
    sameAs: [
      "https://www.anifutter-shop.de",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Provital GmbH",
      brand: "Anifit",
      url: "https://www.anifit.com",
    },
    knowsAbout: ["Tierernährung", "Hundefutter", "Katzenfutter", "Anifit"],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 51.1657, longitude: 10.4515 },
      geoRadius: "500000",
    },
  };

  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Anifit Geschäftsmodell – Business-Präsentation",
    description: "Offizielle Provital/Anifit Geschäftspräsentation: Erfahre in 30 Minuten alles über das Provisionsmodell, Produkte und den Einstieg als Anifit-Fachberater.",
    thumbnailUrl: "https://img.youtube.com/vi/jx_Bl4dWkQk/maxresdefault.jpg",
    uploadDate: "2024-01-15",
    duration: "PT30M12S",
    contentUrl: "https://www.youtube.com/watch?v=jx_Bl4dWkQk",
    embedUrl: "https://www.youtube-nocookie.com/embed/jx_Bl4dWkQk",
    publisher: {
      "@type": "Organization",
      name: "Provital GmbH",
    },
    inLanguage: "de",
  };

  return (
    <main id="main" className="min-h-screen bg-white text-gray-900">
      <AnnouncementBar />
      <ReturningVisitorBanner />
      <a href="#quiz" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-brand-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-sm focus:font-semibold">
        Zum Quiz springen
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }} />

      {/* Hero with Quiz */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-50/30" />
        <div className="relative mx-auto max-w-5xl px-6 pt-12 pb-16">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 text-center lg:text-left">
              <p className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-brand-700 bg-brand-100 px-4 py-1.5 rounded-full">Kostenloser Guide</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                Du liebst Hunde und willst dabei{" "}
                <span className="text-brand-600">etwas Sinnvolles verdienen?</span>
              </h1>
              <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-xl">
                Als Anifit-Fachberater hilfst du Hundebesitzern bei der Futterumstellung
                auf 90 % Fleischanteil. Dafür bekommst du 15 bis 30 % Provision. Lebenslang, auf jede Nachbestellung.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Image src="/images/enrico-bachmann.jpg" alt="Enrico Bachmann" width={56} height={56} className="rounded-full w-14 h-14 object-cover border-2 border-white shadow" />
                <div className="text-left">
                  <p className="font-semibold text-sm text-gray-900">Enrico Bachmann</p>
                  <p className="text-xs text-gray-500">Anifit-Berater seit 2018 · 1.000+ Kunden</p>
                </div>
              </div>
              <BenefitIcons />
            </div>
            <div className="w-full lg:w-[420px] flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 relative" id="quiz">
                <div className="absolute -top-3 -right-3 bg-danger-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg transform rotate-6 z-10 animate-bounce-3x">
                  HEUTE: 0€ STARTKOSTEN
                </div>
                <QuizFunnel />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testsieger Trust Strip */}
      <section className="bg-gradient-to-r from-warm-50 via-warm-50/80 to-warm-50 border-y border-warm-100/60 py-4">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl" aria-hidden="true">🏆</span>
              <p className="text-sm font-bold text-warm-900">
                Testsieger 2026
              </p>
            </div>
            <p className="text-xs sm:text-sm text-warm-800/80 text-center">
              <a href="https://www.hundeo.com/hundefutter" target="_blank" rel="noopener noreferrer" className="underline decoration-warm-200 hover:decoration-warm-500 transition-colors">
                hundeo.com
              </a>{" "}
              — 52 Marken im Vergleich, tierärztlich geprüft · 93 % Fleisch, schwedische Produktion
            </p>
          </div>
        </div>
      </section>

      {/* Lifestyle Hero Quote */}
      <section className="relative bg-gray-900 overflow-hidden">
        <Image src="/images/magazin-hero.jpg" alt="Enrico Bachmann mit Hund und Anifit Produkten" width={800} height={450} className="absolute inset-0 w-full h-full object-cover opacity-40" sizes="100vw" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/40" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 sm:py-20">
          <blockquote className="max-w-lg">
            <p className="text-xl sm:text-2xl font-bold text-white leading-snug">
              &bdquo;Was als Nebenverdienst mit 5 Kunden begann, ist heute mein Haupteinkommen mit&nbsp;über&nbsp;1.000&nbsp;Stammkunden.&ldquo;
            </p>
            <footer className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 text-sm font-bold">EB</div>
              <div>
                <p className="text-sm font-semibold text-white">Enrico Bachmann</p>
                <p className="text-xs text-gray-300">Anifit-Berater seit 2018</p>
              </div>
            </footer>
          </blockquote>
          <a
            href="#quiz"
            className="mt-8 inline-flex items-center gap-2 bg-brand-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-brand-700 transition-colors text-sm shadow-lg shadow-brand-600/20"
          >
            Deine Geschichte starten
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </a>
        </div>
      </section>

      {/* Was du im Guide erfährst */}
      <section className="py-20 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Was du im Guide erfährst</h2>
          <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">
            5 kompakte Emails mit allem, was du für deine Entscheidung brauchst. Kein Verkaufsdruck.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { num: "1", title: "Das Provisionsmodell im Detail", text: "Wie viel du pro Bestellung verdienst, welche Stufen es gibt und ab wann sich der Einstieg rechnet." },
              { num: "2", title: "Die Produkte und warum Kunden bleiben", text: "Was Anifit von normalem Hundefutter unterscheidet und warum 67 % der Kunden nachbestellen." },
              { num: "3", title: "Deine ersten 5 Kunden", text: "Konkreter Fahrplan: wo du Kunden findest, was du sagst und welche Fehler du vermeiden solltest." },
              { num: "4", title: "Kosten, Risiken und ehrliche Zahlen", text: "Was der Einstieg kostet, was nicht funktioniert und welche Erwartungen realistisch sind." },
              { num: "5", title: "Enricos persönliche Einladung", text: "Registrierungslink, Startschulung und wie dein Mentor dich in den ersten Wochen begleitet." },
            ].map((item, i) => (
              <div key={i} className={`flex gap-4 ${i === 4 ? "sm:col-span-2 sm:max-w-md sm:mx-auto" : ""}`}>
                <div className="flex-shrink-0 w-10 h-10 bg-brand-100 text-brand-700 font-bold rounded-full flex items-center justify-center text-sm">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="#quiz" className="btn-brand py-3 px-8 shadow-lg">
              Guide jetzt anfordern
            </a>
            <p className="text-xs text-gray-500 mt-3">Kostenlos. Kein Abo. Jederzeit abbestellbar.</p>
          </div>
        </div>
      </section>

      {/* So funktioniert es */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-center mb-4">So funktioniert&apos;s</h2>
          <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">Kein Lager, kein Versand, kein Risiko. Provital übernimmt alles. Du empfiehlst.</p>
          <div className="grid sm:grid-cols-3 gap-10">
            {[
              { icon: "📩", title: "Guide lesen", text: "Alle Infos zu Provision, Produkten und Ablauf. Kompakt per E-Mail." },
              { icon: "✅", title: "Registrieren + Einstiegspaket", text: "Melde dich an und bestelle dein Einstiegspaket (ab 78 €, inkl. Warenproben)." },
              { icon: "🚀", title: "Erste Kunden gewinnen", text: "Mit Enricos Unterstützung und Vorlagen startest du sofort." },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dein erster Monat */}
      <section className="py-20 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Dein erster Monat als Berater</h2>
          <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">
            Du brauchst keinen Plan. Wir haben schon einen. So sehen die ersten 4 Wochen aus:
          </p>
          <FirstMonthTimeline />
          <div className="mt-10 text-center">
            <a href="#quiz" className="btn-brand py-3 px-8 shadow-lg">
              Jetzt den ersten Schritt machen
            </a>
          </div>
        </div>
      </section>

      {/* Das Produkt */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Ein Produkt, bei dem Kunden von selbst nachbestellen</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            67 % der Hundekunden bestellen erneut. Viele jahrelang, jeden Monat. Das macht deine Provision planbar.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 items-start mb-12">
            <div className="rounded-2xl overflow-hidden">
              <Image src="/images/sortiment.jpg" alt="Anifit Produktsortiment" width={500} height={350} className="w-full h-auto rounded-2xl" sizes="(max-width: 640px) 100vw, 450px" loading="lazy" />
            </div>
            <div className="space-y-5">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">90 bis 99 % Fleisch, schwedische Produktion</h3>
                <p className="text-gray-600 text-sm">Kein Zucker, kein Getreide, keine künstlichen Zusätze. Jede Zutat ist deklariert. Hundebesitzer merken den Unterschied beim ersten Napf: besseres Fell, mehr Energie, fester Kot.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Gibt es nur über Berater</h3>
                <p className="text-gray-600 text-sm">Kein Amazon, kein Fressnapf. Dein Kunde kann nicht woanders günstiger kaufen. Das schützt deine Marge und deinen Kundenstamm.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Ein Kunde bringt 660 € in 3 Jahren</h3>
                <p className="text-gray-600 text-sm">Durchschnittlicher Bestellwert: 107 €. Bei 23 % Provision und regelmäßiger Nachbestellung summiert sich das. Ohne dass du nochmal etwas tun musst.</p>
              </div>
            </div>
          </div>

          {/* Sortiment-Highlights */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <Image src="/images/schnupperpaket.jpg" alt="Schnupperpaket" width={200} height={150} className="w-full h-32 object-cover rounded-lg mb-3" sizes="(max-width: 640px) 100vw, 250px" loading="lazy" />
              <h4 className="font-bold text-sm text-gray-900">Schnupperpaket</h4>
              <p className="text-xs text-gray-500 mt-1">9,90 € für Neukunden. Niedrige Hürde, hohe Umwandlung in Stammkunden.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <Image src="/images/gockels-duett.jpg" alt="Gockels Duett" width={200} height={150} className="w-full h-32 object-cover rounded-lg mb-3" sizes="(max-width: 640px) 100vw, 250px" loading="lazy" />
              <h4 className="font-bold text-sm text-gray-900">Gockels Duett</h4>
              <p className="text-xs text-gray-500 mt-1">Bestseller mit 93 % Fleisch. Huhn und Pute, die Sorte die fast jeder Hund frisst.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <Image src="/images/sortiment.jpg" alt="Volles Sortiment" width={200} height={150} className="w-full h-32 object-cover rounded-lg mb-3" sizes="(max-width: 640px) 100vw, 250px" loading="lazy" />
              <h4 className="font-bold text-sm text-gray-900">Über 120 Produkte</h4>
              <p className="text-xs text-gray-500 mt-1">Nassfutter, Trockenfutter, Snacks und Ergänzungen. Für Hunde und Katzen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hundeo Testsieger */}
      <section className="py-12 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex-shrink-0 text-center">
              <a href="https://www.hundeo.com/hundefutter" target="_blank" rel="noopener noreferrer" className="inline-block font-extrabold text-2xl tracking-tight text-gray-700 hover:text-brand-700 transition-colors">
                hundeo
              </a>
              <p className="text-xs text-gray-500">52 Marken getestet</p>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                <strong>Testsieger im Hundefutter-Test 2026</strong> auf hundeo.com, Deutschlands größtem Hunde-Portal. 52 Marken im Vergleich, tierärztlich geprüft von Mag.med.vet. Emin Jasarevic.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                &ldquo;93 % Fleischanteil in Lebensmittelqualität, vorbildliche Deklaration, schwedische Produktion.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Startbonus FOMO */}
      <section className="bg-warm-50 py-12 border-y border-warm-100">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Startbonus: 3 Monate lang 30 % Provision</h2>
          <p className="text-gray-700 max-w-lg mx-auto">
            Gewinnst du <strong>3 Kunden in deinen ersten 30 Tagen</strong>, steigt deine Provision
            für 3 Monate auf 30 %. Das ist fast das Doppelte der normalen Einstiegsprovision.
          </p>
          <StartbonusTimer />
        </div>
      </section>

      {/* Verdienst Rechner */}
      <section className="bg-brand-50 py-20">
        <div className="mx-auto max-w-md px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Wie viel bleibt bei dir hängen?</h2>
          <p className="text-center text-gray-600 mb-8 text-sm">Schieb den Regler auf deine Wunsch-Kundenzahl:</p>
          <ProvisionsRechner />
        </div>
      </section>

      {/* Nebenverdienst-Vergleich */}
      <section className="py-20 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Warum nicht einfach Nachhilfe geben?</h2>
          <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">
            Viele Nebenjobs tauschen deine Zeit gegen Geld. Anifit baut dir ein Einkommen auf, das bleibt.
          </p>
          <div className="space-y-4">
            {[
              { job: "Lieferdienst (Lieferando, Wolt)", hours: "15-20 h/Woche", income: "450-800 €/Monat", passive: false, note: "Aufhören = kein Geld" },
              { job: "Nachhilfe / Freelancing", hours: "8-15 h/Woche", income: "400-1.200 €/Monat", passive: false, note: "Aufhören = kein Geld" },
              { job: "Dropshipping / Etsy", hours: "10-20 h/Woche", income: "0-500 €/Monat", passive: false, note: "Hohe Startkosten, viel Konkurrenz" },
              { job: "Anifit-Fachberater", hours: "2-5 h/Woche", income: "300-2.000+ €/Monat", passive: true, note: "Kunden bestellen von selbst weiter" },
            ].map((item, i) => (
              <div key={i} className={`relative rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 ${item.passive ? "bg-brand-50 border-2 border-brand-200 ring-1 ring-brand-100" : "bg-gray-50 border border-gray-200"}`}>
                {item.passive && (
                  <span className="absolute -top-3 left-5 bg-brand-600 text-white text-[10px] font-bold tracking-wide uppercase px-3 py-0.5 rounded-full shadow-sm">
                    Empfehlung
                  </span>
                )}
                <div className="sm:w-1/4">
                  <p className={`font-bold text-sm ${item.passive ? "text-brand-800" : "text-gray-700"}`}>{item.job}</p>
                </div>
                <div className="sm:w-1/5">
                  <p className="text-xs text-gray-500 sm:hidden">Zeitaufwand</p>
                  <p className="text-sm text-gray-600">{item.hours}</p>
                </div>
                <div className="sm:w-1/5">
                  <p className="text-xs text-gray-500 sm:hidden">Verdienst</p>
                  <p className={`text-sm font-semibold ${item.passive ? "text-brand-700" : "text-gray-700"}`}>{item.income}</p>
                </div>
                <div className="sm:w-1/3">
                  {item.passive ? (
                    <div className="space-y-1">
                      <span className="inline-block text-xs px-2 py-1 rounded-full bg-brand-100 text-brand-800 font-semibold">
                        ✓ Passives Einkommen
                      </span>
                      <p className="text-[11px] text-brand-700">{item.note}</p>
                    </div>
                  ) : (
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-500">
                      {item.note}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 text-center mt-6">
            Basierend auf typischen Nebenverdiensten in Deutschland. Anifit-Werte aus der tatsächlichen Berater-Statistik.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-12 text-center">
        <div className="mx-auto max-w-xl px-6">
          <p className="text-lg text-gray-700 mb-5">Klingt nach dem richtigen Nebenverdienst?</p>
          <a href="#quiz" className="btn-brand py-3.5 px-10 shadow-lg">
            Kostenlosen Guide holen
          </a>
        </div>
      </section>

      {/* Mentor */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Wer dich einarbeitet</h2>
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-center">
            <Image src="/images/enrico-bachmann.jpg" alt="Enrico Bachmann" width={160} height={160} className="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover border-4 border-white shadow-lg flex-shrink-0" sizes="160px" loading="lazy" />
            <div>
              <p className="text-gray-700 leading-relaxed">
                Ich bin seit 2018 Anifit-Fachberater. Über 1.000 aktive Kunden, 34 Teampartner.
                Mein Hund frisst Anifit, ich empfehle nur was ich selbst nutze.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Als dein Mentor bekommst du von mir: persönliche Einarbeitung, fertige Vorlagen für die Kundenansprache,
                einen Fahrplan für deine ersten 5 Kunden und laufenden Austausch per Chat oder Telefon.
              </p>
              <p className="mt-4 font-bold text-gray-900">Enrico Bachmann</p>
              <p className="text-sm text-gray-500">Zertifizierter Ernährungsberater für Hunde und Katzen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video: Business-Präsentation */}
      <VideoSection />

      {/* Zahlen (animated counters) */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedStats />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Das sagen unsere Berater</h2>
          <p className="text-center text-gray-500 mb-10 max-w-lg mx-auto">Echte Ergebnisse von Anifit-Fachberatern aus Enricos Team.</p>
          <Testimonials />
          <div className="text-center mt-8">
            <a
              href="/erfahrungen"
              className="inline-flex items-center gap-1.5 text-brand-700 font-semibold text-sm hover:text-brand-800 transition-colors"
            >
              Alle Erfahrungsberichte lesen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Persönliche Beratung (tracked) */}
      <ContactSection />

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-bold text-center mb-2">Häufige Fragen</h2>
          <p className="text-center text-gray-500 mb-10">Die wichtigsten Fragen zum Einstieg als Anifit-Berater.</p>
          <FAQAccordion />
          <div className="text-center mt-8">
            <a href="/faq" className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:text-brand-800 transition-colors">
              Alle 30 Fragen und Antworten lesen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Für wen ist das? */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Ist das was für dich?</h2>
          <p className="text-center text-gray-500 mb-10 max-w-lg mx-auto">
            Du brauchst keine Ausbildung und kein Startkapital. Aber ein paar Dinge sollten auf dich zutreffen:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 max-w-2xl mx-auto">
            {[
              { text: "Du hast einen Hund oder eine Katze" },
              { text: "Dir liegt artgerechte Ernährung am Herzen" },
              { text: "Du redest gern mit anderen Tierbesitzern" },
              { text: "Du suchst einen flexiblen Nebenverdienst" },
              { text: "Du willst etwas empfehlen, hinter dem du stehst" },
              { text: "Du bist bereit, 2-5 Stunden pro Woche zu investieren" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-brand-600 animate-draw-check" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-2xl mx-auto grid sm:grid-cols-2 gap-x-8 gap-y-5 opacity-60">
            {[
              { text: "Du willst schnell reich werden" },
              { text: "Du hast kein Interesse an Tieren" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-danger-400 font-bold text-lg mt-0.5">✗</span>
                <p className="text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee / Versprechen */}
      <section className="py-12">
        <div className="mx-auto max-w-2xl px-6">
          <div className="rounded-2xl border-2 border-brand-100 bg-brand-50/50 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 text-center mb-6">Mein Versprechen an dich</h2>
            <div className="grid sm:grid-cols-3 gap-5 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                </div>
                <p className="text-sm font-semibold text-gray-700">100 % kostenlos</p>
                <p className="text-xs text-gray-500">Kein Abo, keine Kreditkarte, keine versteckten Kosten</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </div>
                <p className="text-sm font-semibold text-gray-700">5 Emails, dann Schluss</p>
                <p className="text-xs text-gray-500">Kein endloser Newsletter, jederzeit abmeldbar</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                </div>
                <p className="text-sm font-semibold text-gray-700">Persönlich von Enrico</p>
                <p className="text-xs text-gray-500">Kein Chatbot, kein Callcenter. Ich antworte selbst.</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center mt-5">
              Passt es nicht? Dann löschst du die Emails und gut ist. Kein Nachhaken, kein Kleingedrucktes.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Inline Lead Form */}
      <section className="bg-brand-600 py-20">
        <div className="mx-auto max-w-md px-6">
          <h2 className="text-2xl font-bold text-white text-center mb-3">Klingt nach dir?</h2>
          <p className="text-brand-100 text-center mb-2">Hol dir den kostenlosen Guide mit allen Details per Mail:</p>
          <QuizEarningsReminder />
          <StartbonusMini />
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
            <LeadForm idPrefix="bottom-" source="bottom" />
          </div>
          {/* Post-submit preview — reduces form anxiety for non-quiz visitors */}
          <div className="mt-4 flex items-center justify-center gap-6 text-brand-200 text-xs">
            <span className="flex items-center gap-1.5"><span aria-hidden="true">📧</span> Email in 2 Min</span>
            <span className="flex items-center gap-1.5"><span aria-hidden="true">📱</span> Enrico meldet sich</span>
            <span className="flex items-center gap-1.5"><span aria-hidden="true">✅</span> Du entscheidest</span>
          </div>
        </div>
      </section>

      <Footer guideHref="#quiz" />
      <ClientOverlays />
    </main>
  );
}
