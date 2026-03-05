const WRAPPER = (content: string) => `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<style>body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1a1a1a;background:#f9fafb}
.container{max-width:560px;margin:0 auto;padding:32px 24px}
.card{background:#fff;border-radius:12px;padding:32px 28px;border:1px solid #e5e7eb}
h1{font-size:22px;margin:0 0 16px;color:#1a1a1a}
p{font-size:16px;line-height:1.6;margin:0 0 16px;color:#4b5563}
.btn{display:inline-block;background:#4CAF50;color:#fff;text-decoration:none;padding:14px 28px;border-radius:10px;font-weight:700;font-size:16px;margin:8px 0}
.footer{text-align:center;padding:24px 0;font-size:13px;color:#9ca3af}
ul{padding-left:20px}li{margin-bottom:8px;color:#4b5563}
.highlight{background:#f0fdf4;border-left:4px solid #4CAF50;padding:16px 20px;border-radius:0 8px 8px 0;margin:16px 0}
.urgency{background:#fef3c7;border-left:4px solid #f59e0b;padding:16px 20px;border-radius:0 8px 8px 0;margin:16px 0}
.step{background:#f9fafb;border-radius:8px;padding:16px 20px;margin:12px 0}
</style></head><body><div class="container"><div class="card">${content}</div>
<div class="footer">\u{1f4de} Fragen? Ruf an: <a href="tel:+4932212619379" style="color:#4CAF50;font-weight:700">+49 322 126 19 379</a><br>Enrico Bachmann \u00b7 Anifit-Fachberater<br>
<a href="https://partner.anifutter-shop.de" style="color:#9ca3af">partner.anifutter-shop.de</a></div>
</div></body></html>`;

const REG_LINK = "https://www.anifutter-shop.de/content/partners/201289a/anifit_berater_werden/?utm_source=email&utm_medium=sequence&utm_campaign=teampartner";

// ── Email 1 / Tag 0: Willkommen + Vision + Startbonus-FOMO ──
export function welcomeEmail(name: string) {
  return {
    subject: "Dein Guide: So verdienst du mit Hundefutter 500\u20132.000 \u20ac/Monat",
    html: WRAPPER(`
      <h1>Hallo ${name},</h1>
      <p>sch\u00f6n, dass du hier bist. Ich bin Enrico, seit 2018 Anifit-Fachberater. Ich verdiene heute \u00fcber 10.000 \u20ac monatlich mit Premium-Hundefutter \u2014 und ich zeige dir, wie du das auch schaffst.</p>
      <div class="highlight">
        <strong>Was ist Anifit?</strong><br>
        Premium-Hundefutter aus Schweden, 90\u201399 % Fleisch. Testsieger bei hundeo.com (52 Marken getestet). Kein Supermarkt, kein Amazon \u2014 nur \u00fcber pers\u00f6nliche Fachberater wie dich.
      </div>
      <p><strong>Das Modell in 30 Sekunden:</strong></p>
      <ul>
        <li>Du empfiehlst Anifit an Hundebesitzer</li>
        <li>Kunden bestellen direkt bei Provital (Lager, Versand, Retouren \u2014 alles erledigt)</li>
        <li>Du bekommst <strong>15\u201330 % Provision</strong> auf jede Bestellung \u2014 ein Leben lang</li>
        <li>Lebenslanger Kundenschutz: Einmal dein Kunde, immer dein Kunde</li>
      </ul>
      <div class="urgency">
        <strong>\u{1f525} Startbonus f\u00fcr Schnellstarter:</strong> Gewinnst du 3 Kunden in deinen ersten 30 Tagen, bekommst du <strong>3 Monate lang 30 % Provision auf ALLE Kundenums\u00e4tze</strong> \u2014 egal in welcher Stufe du bist. Das ist fast das Doppelte der normalen Einstiegsprovision.
      </div>
      <p><strong>Dein n\u00e4chster Schritt:</strong> Lies den Guide \u2014 alles Wichtige auf einer Seite:</p>
      <p style="text-align:center;margin:16px 0"><a href="https://partner.anifutter-shop.de/guide?utm_source=email&utm_medium=sequence&utm_campaign=welcome" class="btn">Guide lesen \u2192</a></p>
      <p>Morgen zeige ich dir die konkreten Verdienst-Zahlen.</p>
      <p>Enrico</p>
    `),
  };
}

// ── Email 2 / Tag 1: Verdienst + gro\u00dfes Bild + Rechenbeispiele ──
export function earningsEmail(name: string) {
  return {
    subject: "Echte Zahlen: So viel verdienen Anifit-Berater",
    html: WRAPPER(`
      <h1>${name}, stell dir vor:</h1>
      <p>Du hast 25 Kunden, die monatlich Hundefutter bestellen. Bei einem Durchschnitt von 80 \u20ac pro Bestellung und 23 % Provision sind das <strong>460 \u20ac jeden Monat \u2014 automatisch.</strong></p>
      <p>Und das Beste: Du musst nichts weiter tun. Die Kunden bestellen nach, du kassierst.</p>
      <p><strong>Die Provisionsstufen:</strong></p>
      <ul>
        <li><strong>12 Kunden \u2192 19 % \u2192 ~182 \u20ac/Monat</strong> (2\u20133 Std./Woche)</li>
        <li><strong>25 Kunden \u2192 23 % \u2192 ~460 \u20ac/Monat</strong></li>
        <li><strong>50 Kunden \u2192 27 % \u2192 ~1.080 \u20ac/Monat</strong></li>
        <li><strong>96 Kunden \u2192 30 % \u2192 ~2.304 \u20ac/Monat</strong></li>
      </ul>
      <div class="highlight">
        <strong>Langfristig denken:</strong> Ein Kunde, der 3 Jahre lang monatlich f\u00fcr 80 \u20ac bestellt, bringt dir bei 23 % Provision \u00fcber <strong>660 \u20ac</strong> \u2014 von einem einzigen Kunden. Bei 50 Kunden w\u00e4ren das 33.000 \u20ac in 3 Jahren.
      </div>
      <div class="urgency">
        <strong>Erinnerung \u{1f525} Startbonus:</strong> 3 Kunden in 30 Tagen = 30 % auf ALLE Ums\u00e4tze f\u00fcr 3 Monate. Wer fr\u00fch startet, verdient sofort mehr.
      </div>
      <p>Zus\u00e4tzlich gibt\u2019s: Neukundenbonus, Wiederholungsbonus, Autobonus, Wachstumsbonus.</p>
      <p>\u00dcbermorgen erkl\u00e4re ich dir Schritt f\u00fcr Schritt, wie du startest.</p>
      <p>Enrico</p>
    `),
  };
}

// ── Email 3 / Tag 3: Registrierung + Einstiegspaket + DEAL ──
export function registrationEmail(name: string) {
  return {
    subject: "So startest du (Schritt f\u00fcr Schritt + Willkommenspaket)",
    html: WRAPPER(`
      <h1>${name}, heute wird\u2019s konkret.</h1>
      <p>Hier ist der genaue Ablauf \u2014 einfacher als du denkst:</p>
      <div class="step"><strong>1. Registrierung</strong> (5 Minuten online, Name + Adresse)</div>
      <div class="step"><strong>2. Einstiegspaket bestellen</strong> (ab 78 \u20ac \u2014 echte Warenproben zum Selbsttesten)</div>
      <div class="step"><strong>3. Startschulung mit mir</strong> (online, flexibler Termin \u2014 ich erkl\u00e4re dir alles)</div>
      <div class="step"><strong>4. Loslegen!</strong> Erste Kunden ansprechen mit meinen fertigen Vorlagen</div>
      <div class="highlight">
        <strong>\u{1f381} Willkommens-Deal:</strong><br>
        Du kaufst ein Einstiegspaket (ab 78 \u20ac) und bekommst nach der Startschulung ein <strong>zus\u00e4tzliches Warenproben-Paket im Wert von 80\u2013100 \u20ac GRATIS</strong> dazu.<br><br>
        Du investierst 78 \u20ac und bekommst Ware f\u00fcr ~160\u2013180 \u20ac. Das ist ein echtes 2-f\u00fcr-1.
      </div>
      <p><strong>Gewerbeschein?</strong> Brauchst du, ist aber in 15 Min. erledigt (online m\u00f6glich). Gewerbesteuer f\u00e4llt erst ab 24.500 \u20ac Jahresgewinn an \u2014 als Nebent\u00e4tigkeit bist du weit darunter. Ich helfe dir mit dem genauen Wortlaut.</p>
      <p><strong>Was du NICHT brauchst:</strong></p>
      <ul>
        <li>\u274c Kein Lager</li>
        <li>\u274c Kein Versand</li>
        <li>\u274c Keine Vorkenntnisse</li>
        <li>\u274c Keinen Mindestumsatz</li>
      </ul>
      <div class="urgency">
        <strong>\u{1f525} Nicht vergessen:</strong> 3 Kunden in 30 Tagen = 3 Monate lang 30 % Provision. Je fr\u00fcher du startest, desto mehr verdienst du.
      </div>
      <p style="text-align:center;margin:24px 0">
        <a href="${REG_LINK}" class="btn">Jetzt registrieren \u2192</a>
      </p>
      <p>Enrico</p>
    `),
  };
}

// ── Email 4 / Tag 5: Erste Kunden + Mentor + Vision ──
export function firstCustomersEmail(name: string) {
  return {
    subject: "So gewinnst du deine ersten 5 Kunden (meine besten Tipps)",
    html: WRAPPER(`
      <h1>${name}, die Frage Nr. 1:</h1>
      <p>"Wo kommen meine Kunden her?" Hier sind die 5 Wege, die bei meinen Beratern am besten funktionieren:</p>
      <ul>
        <li><strong>\u{1f436} Freunde & Familie mit Hund:</strong> "Ich hab was entdeckt, darf ich dir eine Probe mitbringen?" Fast jeder kennt Hundebesitzer.</li>
        <li><strong>\u{1f3de}\ufe0f Hundeplatz / Gassi-Runde:</strong> Wenn jemand \u00fcber Futter redet \u2014 und das passiert st\u00e4ndig \u2014 bist du sofort im Gespr\u00e4ch.</li>
        <li><strong>\u{1f4f1} Social Media:</strong> In Hunderassen-Gruppen wird t\u00e4glich nach Futterempfehlungen gefragt.</li>
        <li><strong>\u{1f4e6} Schnupperpaket:</strong> F\u00fcr 9,90 \u20ac k\u00f6nnen Neukunden Anifit testen. Super niedrige H\u00fcrde.</li>
        <li><strong>\u2728 Dein eigener Hund:</strong> Wenn Leute sehen, wie gut es ihm geht, fragen sie von selbst.</li>
      </ul>
      <div class="highlight">
        <strong>\u{1f3c6} Mein Angebot als Mentor:</strong><br>
        Ich mache \u00fcber 10.000 \u20ac monatlich mit Anifit und habe 1.000+ Kunden. Dieses Wissen gebe ich 1:1 weiter \u2014 aber nur an Berater, die ihre Startschulung abgeschlossen haben.<br><br>
        Du bekommst: fertige WhatsApp-Vorlagen, Instagram-Post-Ideen, E-Mail-Templates, und pers\u00f6nliches Coaching f\u00fcr deine ersten 10 Kunden.
      </div>
      <p><strong>Dein Fahrplan:</strong></p>
      <ul>
        <li>Woche 1: Registrieren + Einstiegspaket + Startschulung</li>
        <li>Woche 2\u20134: Erste 3 Kunden gewinnen (\u2192 Startbonus sichern!)</li>
        <li>Monat 2\u20133: Mit 30 % Provision wachsen</li>
        <li>Danach: Pers\u00f6nliches Mentoring mit mir</li>
      </ul>
      <p style="text-align:center;margin:24px 0">
        <a href="${REG_LINK}" class="btn">Jetzt starten \u2192</a>
      </p>
      <p>Enrico</p>
    `),
  };
}

// ── Email 5 / Tag 7: Letzter Push + FOMO ──
export function ctaEmail(name: string) {
  return {
    subject: "${name}, dein Willkommenspaket wartet",
    html: WRAPPER(`
      <h1>${name}, kurzes Recap:</h1>
      <ul>
        <li>\u2705 15\u201330 % Provision, lebenslang</li>
        <li>\u2705 Einstiegspaket ab 78 \u20ac + 80\u2013100 \u20ac Willkommenspaket GRATIS</li>
        <li>\u2705 Startbonus: 30 % f\u00fcr 3 Monate (bei 3 NK in 30 Tagen)</li>
        <li>\u2705 Kein Lager, kein Versand, kein Mindestumsatz</li>
        <li>\u2705 Gewerbeschein in 15 Min., Steuern erst ab 24.500 \u20ac Gewinn</li>
        <li>\u2705 Pers\u00f6nliches Mentoring von Enrico (10.000+ \u20ac/Monat Erfahrung)</li>
      </ul>
      <div class="urgency">
        <strong>\u23f0 Der Startbonus l\u00e4uft ab Registrierung:</strong> Du hast 30 Tage Zeit, 3 Kunden zu gewinnen. Je fr\u00fcher du startest, desto mehr Zeit hast du. Wer heute registriert, hat bis ${getDeadlineDate()} Zeit.
      </div>
      <p style="text-align:center;margin:24px 0">
        <a href="${REG_LINK}" class="btn">Jetzt registrieren + Willkommenspaket sichern \u2192</a>
      </p>
      <p>Oder ruf an: <a href="tel:+4932212619379" style="color:#4CAF50;font-weight:700">+49 322 126 19 379</a> \u2014 Lisa beantwortet alle Fragen sofort.</p>
      <p>Enrico</p>
    `),
  };
}

// ── Email 6 / Tag 10: Follow-up ──
export function followUp1Email(name: string) {
  return {
    subject: "Noch unsicher? Das h\u00f6re ich am h\u00e4ufigsten",
    html: WRAPPER(`
      <h1>Hallo ${name},</h1>
      <p>Vielleicht z\u00f6gerst du noch. Das ist normal. Hier sind die drei h\u00e4ufigsten Bedenken:</p>
      <p><strong>"78 \u20ac f\u00fcr das Einstiegspaket sind mir zu viel."</strong><br>
      Du bekommst echte Produkte + 80\u2013100 \u20ac Werbematerial gratis. Mit deinen ersten 3\u20134 Kunden hast du die Kosten drin. Und mit dem Startbonus verdienst du sofort 30 %.</p>
      <p><strong>"Ich bin kein Verk\u00e4ufer."</strong><br>
      Musst du nicht sein. Hundebesitzer suchen aktiv nach besserem Futter. Du hilfst bei der Entscheidung \u2014 das Produkt verkauft sich durch Qualit\u00e4t.</p>
      <p><strong>"Ich habe keine Zeit."</strong><br>
      2\u20133 Stunden pro Woche reichen. Kein B\u00fcro, keine festen Zeiten. Du bestimmst.</p>
      <p>\u{1f4de} <strong>Ruf einfach an:</strong> <a href="tel:+4932212619379" style="color:#4CAF50">+49 322 126 19 379</a> \u2014 unsere Beraterin Lisa kl\u00e4rt alles in 5 Minuten.</p>
      <p>Oder antworte auf diese Mail. Ich beantworte jede Frage pers\u00f6nlich.</p>
      <p>Enrico</p>
    `),
  };
}

// ── Email 7 / Tag 14: Letzte Nachricht ──
export function followUp2Email(name: string) {
  return {
    subject: "Letzte Nachricht von mir, ${name}",
    html: WRAPPER(`
      <h1>${name}, eine letzte Mail.</h1>
      <p>Nicht jeder ist f\u00fcr diesen Weg gemacht. Aber wenn du bis hierhin gelesen hast, interessiert es dich.</p>
      <p><strong>Die Kurzversion:</strong></p>
      <ul>
        <li>Premium-Hundefutter empfehlen, 15\u201330 % Provision</li>
        <li>78 \u20ac Einstieg + 80\u2013100 \u20ac Willkommenspaket gratis</li>
        <li>Startbonus: 30 % f\u00fcr 3 Monate</li>
        <li>Pers\u00f6nliches Mentoring nach Startschulung</li>
        <li>Kein Lager, kein Versand, kein Risiko</li>
      </ul>
      <p style="text-align:center;margin:24px 0">
        <a href="${REG_LINK}" class="btn">Jetzt registrieren \u2192</a>
      </p>
      <p>Alles Gute,<br>Enrico</p>
    `),
  };
}

function getDeadlineDate(): string {
  const d = new Date();
  d.setDate(d.getDate() + 30);
  return d.toLocaleDateString("de-DE", { day: "numeric", month: "long" });
}
