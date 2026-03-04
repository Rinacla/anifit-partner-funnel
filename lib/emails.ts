const baseStyle = `
  font-family: Arial, Helvetica, sans-serif;
  background: #f5f5f5;
  margin: 0;
  padding: 0;
`;

const containerStyle = `
  max-width: 600px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const headerStyle = `
  background: #4CAF50;
  padding: 32px 40px;
  text-align: center;
`;

const bodyStyle = `
  padding: 40px;
  color: #1a1a1a;
  line-height: 1.7;
`;

const footerStyle = `
  background: #f9f9f9;
  border-top: 1px solid #e8e8e8;
  padding: 24px 40px;
  text-align: center;
  color: #888;
  font-size: 13px;
`;

const h1Style = `
  color: #ffffff;
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const h2Style = `
  color: #1a1a1a;
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 16px 0;
`;

const pStyle = `
  margin: 0 0 16px 0;
  font-size: 16px;
  color: #333;
`;

const ctaStyle = `
  display: inline-block;
  background: #4CAF50;
  color: #ffffff;
  padding: 14px 32px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  margin: 8px 0 24px 0;
`;

const dividerStyle = `
  border: none;
  border-top: 1px solid #e8e8e8;
  margin: 24px 0;
`;

const highlightBoxStyle = `
  background: #E8F5E9;
  border-left: 4px solid #4CAF50;
  padding: 16px 20px;
  border-radius: 0 6px 6px 0;
  margin: 20px 0;
`;

function wrapHtml(content: string, preheader: string): string {
  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Anifit Partner</title>
</head>
<body style="${baseStyle}">
  <span style="display:none;max-height:0;overflow:hidden;">${preheader}</span>
  <div style="${containerStyle}">
    ${content}
  </div>
  <p style="text-align:center;color:#aaa;font-size:12px;margin:16px 0;">
    Enrico Bachmann · Anifit-Fachberater seit 2018 · partner@anifutter-shop.de
  </p>
</body>
</html>`;
}

export function welcomeEmail(name: string): { subject: string; html: string } {
  const subject = "Willkommen! Dein Gratis-Guide ist da 🐾";
  const html = wrapHtml(
    `
    <div style="${headerStyle}">
      <h1 style="${h1Style}">Willkommen bei Anifit, ${name}!</h1>
    </div>
    <div style="${bodyStyle}">
      <h2 style="${h2Style}">Schön, dass du dabei bist.</h2>
      <p style="${pStyle}">
        Ich bin Enrico – seit 2018 Anifit-Fachberater und mittlerweile habe ich über 1.000 aktive
        Kunden aufgebaut. Was mich jeden Tag antreibt? Das Wissen, dass Hunde mit Anifit wirklich
        besser ernährt werden – und dass ich dabei ein stabiles Einkommen aufbaue.
      </p>
      <p style="${pStyle}">
        In den nächsten Tagen zeige ich dir alles, was du wissen musst:
        Was du verdienen kannst, wie der Start aussieht und ob das für dich passt.
      </p>
      <div style="${highlightBoxStyle}">
        <strong>Dein Gratis-Guide:</strong> „So starte ich als Anifit-Berater – Die ersten 30 Tage"
      </div>
      <p style="text-align:center;">
        <a href="https://provital.com/registrierung?code=EB-Hundeo" style="${ctaStyle}">
          Guide herunterladen →
        </a>
      </p>
      <hr style="${dividerStyle}" />
      <p style="${pStyle}">
        Bis in zwei Tagen – dann zeige ich dir, was andere Berater wirklich verdienen.
      </p>
      <p style="${pStyle}">
        Herzliche Grüße,<br />
        <strong>Enrico</strong><br />
        Anifit-Fachberater &amp; dein Mentor
      </p>
    </div>
    <div style="${footerStyle}">
      Du erhältst diese E-Mail, weil du dich für mehr Infos zu Anifit angemeldet hast.
      <br />
      <a href="#" style="color:#4CAF50;">Abmelden</a>
    </div>
  `,
    `Willkommen ${name}! Dein Guide und die ersten Schritte warten auf dich.`
  );
  return { subject, html };
}

export function earningsEmail(name: string): { subject: string; html: string } {
  const subject = "Was verdient ein Anifit-Berater wirklich?";
  const html = wrapHtml(
    `
    <div style="${headerStyle}">
      <h1 style="${h1Style}">Die ehrlichen Zahlen.</h1>
    </div>
    <div style="${bodyStyle}">
      <p style="${pStyle}">Hi ${name},</p>
      <p style="${pStyle}">
        Ich hasse unrealistische Versprechen. Deshalb zeige ich dir konkrete Beispielrechnungen –
        keine Phantasiezahlen, sondern was bei normalem Einsatz möglich ist.
      </p>
      <h2 style="${h2Style}">Anifit-Provision: 15–30% auf jede Bestellung</h2>
      <table style="width:100%;border-collapse:collapse;margin:20px 0;">
        <thead>
          <tr style="background:#E8F5E9;">
            <th style="padding:12px 16px;text-align:left;font-size:14px;color:#388E3C;border-bottom:2px solid #4CAF50;">Kundenstamm</th>
            <th style="padding:12px 16px;text-align:left;font-size:14px;color:#388E3C;border-bottom:2px solid #4CAF50;">Monatsumsatz</th>
            <th style="padding:12px 16px;text-align:left;font-size:14px;color:#388E3C;border-bottom:2px solid #4CAF50;">Deine Provision</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #f0f0f0;">
            <td style="padding:12px 16px;font-size:15px;">5 Kunden</td>
            <td style="padding:12px 16px;font-size:15px;">500 €</td>
            <td style="padding:12px 16px;font-size:15px;font-weight:700;color:#388E3C;">75 €</td>
          </tr>
          <tr style="background:#fafafa;border-bottom:1px solid #f0f0f0;">
            <td style="padding:12px 16px;font-size:15px;">20 Kunden</td>
            <td style="padding:12px 16px;font-size:15px;">1.600 €</td>
            <td style="padding:12px 16px;font-size:15px;font-weight:700;color:#388E3C;">320 €</td>
          </tr>
          <tr>
            <td style="padding:12px 16px;font-size:15px;">50 Kunden</td>
            <td style="padding:12px 16px;font-size:15px;">4.000 €</td>
            <td style="padding:12px 16px;font-size:15px;font-weight:700;color:#388E3C;">1.000 €</td>
          </tr>
        </tbody>
      </table>
      <div style="${highlightBoxStyle}">
        <strong>Das Besondere:</strong> Kundenschutz. Jede Nachbestellung deiner Kunden –
        auch in 3 Jahren – bringt dir Provision. Du baust echtes passives Einkommen auf.
      </div>
      <p style="${pStyle}">
        Ich selbst bin 2018 mit 5 Kunden gestartet. Heute reicht mein Kundenstamm für ein
        stabiles Nebeneinkommen. Das Schöne: Hunde fressen regelmäßig. Die Bestellungen kommen von selbst.
      </p>
      <p style="text-align:center;">
        <a href="https://provital.com/registrierung?code=EB-Hundeo" style="${ctaStyle}">
          Jetzt kostenlos registrieren →
        </a>
      </p>
      <p style="${pStyle}">
        Bis übermorgen – dann erkläre ich dir, was dir mein Team bietet.
      </p>
      <p style="${pStyle}">Enrico</p>
    </div>
    <div style="${footerStyle}">
      Du erhältst diese E-Mail, weil du dich für mehr Infos zu Anifit angemeldet hast.
      <br />
      <a href="#" style="color:#4CAF50;">Abmelden</a>
    </div>
  `,
    "Die ehrlichen Zahlen: Was verdient ein Anifit-Berater wirklich? Mit konkreten Beispielrechnungen."
  );
  return { subject, html };
}

export function mentorEmail(name: string): { subject: string; html: string } {
  const subject = "Dein Mentor-Vorteil – warum du nicht alleine startest";
  const html = wrapHtml(
    `
    <div style="${headerStyle}">
      <h1 style="${h1Style}">Du startest nicht bei Null.</h1>
    </div>
    <div style="${bodyStyle}">
      <p style="${pStyle}">Hi ${name},</p>
      <p style="${pStyle}">
        Viele scheitern beim Start eines Nebenbusiness, weil sie alleine loslegen müssen.
        Das ist bei Anifit anders – zumindest wenn du über mich einsteigst.
      </p>
      <h2 style="${h2Style}">Was du von mir bekommst:</h2>
      <ul style="margin:0 0 20px 0;padding-left:20px;font-size:16px;color:#333;line-height:2;">
        <li><strong>Persönliches Onboarding</strong> in den ersten 4 Wochen</li>
        <li><strong>Bewährte Gesprächsleitfäden</strong> für Erstgespräche</li>
        <li><strong>Vorlagen</strong> für Social Media und WhatsApp</li>
        <li><strong>Direkte Antworten</strong> auf deine Fragen (kein Forum, kein Ticket)</li>
        <li><strong>Zugang zur Team-Gruppe</strong> mit 40+ aktiven Beratern</li>
      </ul>
      <div style="${highlightBoxStyle}">
        Anifit selbst bietet kostenlose Schulungen und die offizielle Zertifizierung zum
        <strong>Tierernährungsberater</strong>. Das steigert deine Glaubwürdigkeit und macht
        Gespräche mit Hundebesitzern viel einfacher.
      </div>
      <p style="${pStyle}">
        Provital (der Hersteller) übernimmt Lagerung, Versand und Retouren.
        Du musst nichts vorfinanzieren. Dein Job: Beziehungen aufbauen und empfehlen.
      </p>
      <p style="text-align:center;">
        <a href="https://provital.com/registrierung?code=EB-Hundeo" style="${ctaStyle}">
          Jetzt meinem Team beitreten →
        </a>
      </p>
      <p style="${pStyle}">
        In drei Tagen sende ich dir die häufigsten Fragen – und ehrliche Antworten darauf.
      </p>
      <p style="${pStyle}">Enrico</p>
    </div>
    <div style="${footerStyle}">
      Du erhältst diese E-Mail, weil du dich für mehr Infos zu Anifit angemeldet hast.
      <br />
      <a href="#" style="color:#4CAF50;">Abmelden</a>
    </div>
  `,
    "Warum du als Anifit-Berater nicht allein startest – und was mein Team dir bietet."
  );
  return { subject, html };
}

export function faqEmail(name: string): { subject: string; html: string } {
  const subject = "Die 5 Fragen, die mir alle stellen (ehrlich beantwortet)";
  const html = wrapHtml(
    `
    <div style="${headerStyle}">
      <h1 style="${h1Style}">Deine Fragen – meine ehrlichen Antworten.</h1>
    </div>
    <div style="${bodyStyle}">
      <p style="${pStyle}">Hi ${name},</p>
      <p style="${pStyle}">
        Nach 6 Jahren als Anifit-Berater kenne ich die Einwände. Hier sind die fünf,
        die ich am häufigsten höre:
      </p>

      <div style="margin:24px 0;">
        <p style="font-weight:700;font-size:16px;color:#1a1a1a;margin:0 0 8px 0;">
          „Ich habe keine Zeit für sowas."
        </p>
        <p style="${pStyle}">
          Die meisten Berater starten mit 2–3 Stunden pro Woche. Du empfiehlst bei Gesprächen,
          die du sowieso führst. Kein Büro, keine Ladenöffnungszeiten.
        </p>
      </div>

      <div style="margin:24px 0;">
        <p style="font-weight:700;font-size:16px;color:#1a1a1a;margin:0 0 8px 0;">
          „Ich muss doch etwas verkaufen?"
        </p>
        <p style="${pStyle}">
          Nein. Du empfiehlst ein Produkt, das du selbst überzeugt – genau wie du ein gutes
          Restaurant weiterempfiehlst. Kein Kaltakquise, kein Druck.
        </p>
      </div>

      <div style="margin:24px 0;">
        <p style="font-weight:700;font-size:16px;color:#1a1a1a;margin:0 0 8px 0;">
          „Muss ich etwas vorfinanzieren?"
        </p>
        <p style="${pStyle}">
          Nein. Die Registrierung ist kostenlos. Provital übernimmt alles Logistische.
          Du trägst null finanzielles Risiko.
        </p>
      </div>

      <div style="margin:24px 0;">
        <p style="font-weight:700;font-size:16px;color:#1a1a1a;margin:0 0 8px 0;">
          „Kenne ich genug Leute?"
        </p>
        <p style="${pStyle}">
          Du musst kein Netzwerk haben. Viele Berater gewinnen Kunden über Social Media,
          lokale Hundevereine oder Empfehlungen. Ich zeige dir, wie das funktioniert.
        </p>
      </div>

      <div style="margin:24px 0;">
        <p style="font-weight:700;font-size:16px;color:#1a1a1a;margin:0 0 8px 0;">
          „Ist das ein MLM-System?"
        </p>
        <p style="${pStyle}">
          Nein. Du verdienst ausschließlich an deinen eigenen Kunden. Es gibt keine
          Voraussetzung, andere Berater zu rekrutieren. Provision = echte Produktverkäufe.
        </p>
      </div>

      <p style="text-align:center;">
        <a href="https://provital.com/registrierung?code=EB-Hundeo" style="${ctaStyle}">
          Noch eine Frage? Schreib mir direkt →
        </a>
      </p>
      <p style="${pStyle}">Enrico</p>
    </div>
    <div style="${footerStyle}">
      Du erhältst diese E-Mail, weil du dich für mehr Infos zu Anifit angemeldet hast.
      <br />
      <a href="#" style="color:#4CAF50;">Abmelden</a>
    </div>
  `,
    "5 häufige Fragen zu Anifit – ehrlich und ohne Marketingfloskeln beantwortet."
  );
  return { subject, html };
}

export function ctaEmail(name: string): { subject: string; html: string } {
  const subject = "Letzter Schritt: Dein Anifit-Profil in 5 Minuten";
  const html = wrapHtml(
    `
    <div style="${headerStyle}">
      <h1 style="${h1Style}">Bereit für den Start?</h1>
    </div>
    <div style="${bodyStyle}">
      <p style="${pStyle}">Hi ${name},</p>
      <p style="${pStyle}">
        Die letzten zwei Wochen haben wir uns viel angeschaut: die Zahlen, das Konzept,
        mein Angebot als Mentor. Jetzt ist die Frage: Machst du den Schritt?
      </p>
      <p style="${pStyle}">
        Die Registrierung dauert keine 5 Minuten. Du trägst kein Risiko – sie ist kostenlos.
        Und wenn du merkst, es passt nicht: Kein Problem.
      </p>
      <div style="${highlightBoxStyle}">
        <strong>Dein Bonus für sofortige Registrierung:</strong><br />
        Mein persönliches 60-Minuten-Onboarding-Gespräch – wir planen gemeinsam deinen ersten Monat.
      </div>
      <p style="text-align:center;margin:32px 0;">
        <a href="https://provital.com/registrierung?code=EB-Hundeo" style="${ctaStyle}">
          Jetzt kostenlos als Anifit-Berater registrieren →
        </a>
      </p>
      <p style="${pStyle}">
        Nach der Registrierung melde dich kurz bei mir per E-Mail oder WhatsApp –
        damit wir deinen Start gemeinsam planen können.
      </p>
      <p style="${pStyle}">
        Ich freue mich, dich im Team zu begrüßen.<br />
        <strong>Enrico</strong>
      </p>
    </div>
    <div style="${footerStyle}">
      Du erhältst diese E-Mail, weil du dich für mehr Infos zu Anifit angemeldet hast.
      <br />
      <a href="#" style="color:#4CAF50;">Abmelden</a>
    </div>
  `,
    "Dein letzter Schritt: In 5 Minuten kostenlos als Anifit-Berater registrieren."
  );
  return { subject, html };
}
