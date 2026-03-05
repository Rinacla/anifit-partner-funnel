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
.step{background:#f9fafb;border-radius:8px;padding:16px 20px;margin:12px 0}
</style></head><body><div class="container"><div class="card">${content}</div>
<div class="footer">\u{1f4de} Fragen? Ruf an: <a href="tel:+4932212619379" style="color:#4CAF50;font-weight:700">+49 322 126 19 379</a><br>Enrico Bachmann \u00b7 Anifit-Fachberater<br>
<a href="https://partner.anifutter-shop.de" style="color:#9ca3af">partner.anifutter-shop.de</a></div>
</div></body></html>`;

const REG_LINK = "https://www.anifutter-shop.de/content/partners/201289a/anifit_berater_werden/?utm_source=email&utm_medium=sequence&utm_campaign=teampartner";

// ── Tag 0: Willkommen + Guide ──
export function welcomeEmail(name: string) {
  return {
    subject: "Dein Guide: So startest du als Tierern\u00e4hrungsberater",
    html: WRAPPER(`
      <h1>Hallo ${name},</h1>
      <p>sch\u00f6n, dass du dich f\u00fcr den Einstieg als Tierern\u00e4hrungsberater interessierst.</p>
      <p>In den n\u00e4chsten Tagen bekommst du von mir alles, was du f\u00fcr eine fundierte Entscheidung brauchst. Kein Verkaufsdruck, nur Fakten.</p>
      <div class="highlight">
        <strong>Kurz zusammengefasst:</strong><br>
        Als Anifit-Fachberater empfiehlst du Premium-Hundefutter (90\u201399 % Fleisch, schwedische Qualit\u00e4t) und verdienst 15\u201330 % Provision auf jede Bestellung \u2014 ein Leben lang.
      </div>
      <p>Hier ist dein Guide \u2014 alles Wichtige auf einer Seite:</p>
      <p style="text-align:center;margin:16px 0"><a href="https://partner.anifutter-shop.de/guide?utm_source=email&utm_medium=sequence&utm_campaign=welcome" class="btn">Guide lesen \u2192</a></p>
      <p><strong>Was kommt als n\u00e4chstes?</strong></p>
      <ul>
        <li>Tag 2: Was du konkret verdienst (echte Zahlen)</li>
        <li>Tag 4: Wie die Registrierung + Einstiegspaket funktionieren</li>
        <li>Tag 7: Gewerbeschein \u2014 einfacher als du denkst</li>
        <li>Tag 10: Deine ersten Kunden gewinnen</li>
      </ul>
      <p>Bis bald,<br><strong>Enrico</strong></p>
    `),
  };
}

// ── Tag 2: Verdienst im Detail ──
export function earningsEmail(name: string) {
  return {
    subject: "Was verdient ein Anifit-Berater wirklich?",
    html: WRAPPER(`
      <h1>${name}, reden wir \u00fcber Zahlen.</h1>
      <p>Keine vagen Versprechen. Hier sind echte Provisionsstufen von Provital:</p>
      <ul>
        <li><strong>12 Kunden \u2192 19 % \u2192 ~182 \u20ac / Monat</strong> (2\u20133 Std./Woche)</li>
        <li><strong>25 Kunden \u2192 23 % \u2192 ~460 \u20ac / Monat</strong> (solider Nebenverdienst)</li>
        <li><strong>50 Kunden \u2192 27 % \u2192 ~1.080 \u20ac / Monat</strong> (Teilzeit)</li>
        <li><strong>96 Kunden \u2192 30 % \u2192 ~2.304 \u20ac / Monat</strong> (Vollzeit m\u00f6glich)</li>
      </ul>
      <p><strong>Das Besondere: Lebenslanger Kundenschutz.</strong></p>
      <p>Ein Kunde, der einmal bei dir bestellt, bleibt dir dauerhaft zugeordnet. Jede Nachbestellung bringt dir Provision \u2014 automatisch, ohne Zutun.</p>
      <div class="highlight">
        Rechenbeispiel: Ein Kunde bestellt monatlich f\u00fcr 80 \u20ac. Bei 23 % Provision sind das <strong>220 \u20ac pro Jahr</strong> \u2014 von einem einzigen Kunden. Bei 25 Kunden: \u00fcber 5.500 \u20ac/Jahr passiv.
      </div>
      <p><strong>Zus\u00e4tzliche Boni:</strong> Neukundenbonus (ab 5 NK/Monat), Wiederholungsbonus, Autobonus, Wachstumsbonus.</p>
      <p>In 2 Tagen erkl\u00e4re ich dir genau, was das Einstiegspaket enth\u00e4lt und wie die Registrierung l\u00e4uft.</p>
      <p>Enrico</p>
    `),
  };
}

// ── Tag 4: Registrierung + Einstiegspaket erkl\u00e4rt ──
export function registrationEmail(name: string) {
  return {
    subject: "So funktioniert die Registrierung (Schritt f\u00fcr Schritt)",
    html: WRAPPER(`
      <h1>${name}, heute zeige ich dir den genauen Ablauf.</h1>
      <p>Viele fragen: "Was muss ich eigentlich machen, um zu starten?" Hier ist die Antwort \u2014 Schritt f\u00fcr Schritt:</p>
      <div class="step"><strong>Schritt 1:</strong> Registrierung auf der Anifit-Seite (5 Minuten, Name + Adresse + E-Mail)</div>
      <div class="step"><strong>Schritt 2:</strong> Einstiegspaket bestellen (ab ca. 78 \u20ac). Enth\u00e4lt Warenproben zum Selbsttesten \u2014 denn du sollst das Futter kennen, bevor du es empfiehlst.</div>
      <div class="step"><strong>Schritt 3:</strong> Startschulung mit mir (online, flexibler Termin). Ich erkl\u00e4re dir alles: Beraterbereich, erste Schritte, Kundenansprache.</div>
      <div class="step"><strong>Schritt 4:</strong> Nach der Startschulung bekommst du ein <strong>zus\u00e4tzliches Warenproben-Paket im Wert von 80\u2013100 \u20ac gratis</strong> \u2014 als Willkommensbonus.</div>
      <p><strong>Was ist im Einstiegspaket drin?</strong></p>
      <ul>
        <li>Verschiedene Futtersorten zum Probieren (78\u201385 \u20ac)</li>
        <li>Werbematerial im Wert von ~80\u2013100 \u20ac \u2014 <strong>gratis dazu</strong></li>
        <li>Flyer, Produktkataloge, Proben f\u00fcr deine ersten Kundentermine</li>
      </ul>
      <div class="highlight">
        Das Einstiegspaket ist kein "Startgeb\u00fchr" \u2014 es sind echte Produkte, die du brauchst und nutzt. Und das Werbematerial bekommst du kostenlos obendrauf.
      </div>
      <p>N\u00e4chste Mail: Gewerbeschein \u2014 warum das viel einfacher ist, als die meisten denken.</p>
      <p>Enrico</p>
    `),
  };
}

// ── Tag 7: Gewerbeschein ──
export function gewerbeEmail(name: string) {
  return {
    subject: "Gewerbeschein: Einfacher als du denkst (Anleitung)",
    html: WRAPPER(`
      <h1>${name}, viele haben Respekt vor dem Thema Gewerbe.</h1>
      <p>Verst\u00e4ndlich. Aber ich verspreche dir: Es ist wirklich unkompliziert.</p>
      <p><strong>Was du brauchst:</strong></p>
      <ul>
        <li>Personalausweis oder Reisepass</li>
        <li>10\u201340 \u20ac Geb\u00fchr (je nach Stadt/Gemeinde)</li>
        <li>15 Minuten Zeit</li>
      </ul>
      <p><strong>Wie es funktioniert:</strong></p>
      <div class="step"><strong>Online oder vor Ort:</strong> Die meisten Gemeinden bieten die Gewerbeanmeldung inzwischen online an. Einfach "Gewerbeanmeldung [deine Stadt]" googeln.</div>
      <div class="step"><strong>T\u00e4tigkeit eintragen:</strong> "Vermittlung von Tiernahrung" oder "\u00c4hnliches" \u2014 ich sage dir den genauen Wortlaut.</div>
      <div class="step"><strong>Kleinunternehmerregelung:</strong> Bis 22.000 \u20ac Jahresumsatz zahlst du keine Umsatzsteuer. Die meisten Einsteiger fallen darunter.</div>
      <p><strong>Was danach passiert:</strong></p>
      <ul>
        <li>Du bekommst einen Gewerbeschein (oft am selben Tag)</li>
        <li>Das Finanzamt meldet sich automatisch \u2014 Fragebogen ausf\u00fcllen, fertig</li>
        <li>Steuern? Erst wenn du Gewinn machst, und auch dann gelten Freibetr\u00e4ge</li>
      </ul>
      <div class="highlight">
        <strong>Mein Angebot:</strong> Ich helfe dir pers\u00f6nlich bei der Anmeldung. Schreib mir einfach und ich schicke dir die Vorlage mit dem richtigen Wortlaut f\u00fcr deine Stadt.
      </div>
      <p>In 3 Tagen: Wie du deine ersten Kunden gewinnst \u2014 ohne "Verk\u00e4ufer" zu sein.</p>
      <p>Enrico</p>
    `),
  };
}

// ── Tag 10: Erste Kunden gewinnen ──
export function firstCustomersEmail(name: string) {
  return {
    subject: "So gewinnst du deine ersten 5 Kunden (ohne Kaltakquise)",
    html: WRAPPER(`
      <h1>${name}, jetzt wird\u2019s praktisch.</h1>
      <p>Die Frage, die alle besch\u00e4ftigt: Wo kommen meine Kunden her?</p>
      <p><strong>Die ehrliche Antwort:</strong> Die meisten erfolgreichen Berater starten im Bekanntenkreis. Nicht weil sie "nerven", sondern weil fast jeder Hundebesitzer kennt, der sich besseres Futter w\u00fcnscht.</p>
      <p><strong>5 bew\u00e4hrte Wege zu deinen ersten Kunden:</strong></p>
      <ul>
        <li><strong>Freunde & Familie mit Hund:</strong> "Ich hab was Spannendes entdeckt \u2014 darf ich dir eine Probe mitbringen?"</li>
        <li><strong>Hundeplatz / Gassi-Runde:</strong> Wenn jemand \u00fcber Futter redet \u2014 und das passiert st\u00e4ndig \u2014 hast du die perfekte Gelegenheit.</li>
        <li><strong>Facebook-/Instagram-Gruppen:</strong> In Hunderassen-Gruppen wird t\u00e4glich nach Futterempfehlungen gefragt.</li>
        <li><strong>Das Schnupperpaket:</strong> F\u00fcr nur 9,90 \u20ac k\u00f6nnen Neukunden Anifit testen. Niedrige H\u00fcrde, hohe Conversion.</li>
        <li><strong>Dein eigener Hund:</strong> Wenn Leute sehen, wie gut es deinem Hund geht \u2014 fragen sie von selbst.</li>
      </ul>
      <div class="highlight">
        <strong>Was ich dir mitgebe:</strong> Fertige Vorlagen f\u00fcr WhatsApp-Nachrichten, Instagram-Posts und Kundentermine. Du musst das Rad nicht neu erfinden.
      </div>
      <p>Fast geschafft \u2014 in meiner n\u00e4chsten Mail bekommst du den direkten Link zur Registrierung.</p>
      <p>Enrico</p>
    `),
  };
}

// ── Tag 14: Registrierungs-CTA ──
export function ctaEmail(name: string) {
  return {
    subject: "${name}, bereit f\u00fcr deinen Start?",
    html: WRAPPER(`
      <h1>Es ist so weit, ${name}.</h1>
      <p>Du wei\u00dft jetzt alles, was du f\u00fcr den Start brauchst:</p>
      <ul>
        <li>\u2705 15\u201330 % Provision auf jede Bestellung, lebenslang</li>
        <li>\u2705 Einstiegspaket ab 78 \u20ac (Warenproben + Werbematerial gratis)</li>
        <li>\u2705 Gewerbeschein \u2014 15 Min., ich helfe dir</li>
        <li>\u2705 Kein Lager, kein Versand \u2014 Provital macht alles</li>
        <li>\u2705 Pers\u00f6nliche Startschulung + 80\u2013100 \u20ac Willkommenspaket gratis</li>
        <li>\u2705 Fertige Vorlagen f\u00fcr deine ersten Kunden</li>
      </ul>
      <p style="text-align:center;margin:24px 0">
        <a href="${REG_LINK}" class="btn">Jetzt als Anifit-Berater registrieren \u2192</a>
      </p>
      <div class="highlight">
        Die Registrierung dauert 5 Minuten. Danach melde ich mich pers\u00f6nlich bei dir f\u00fcr deine Startschulung.
      </div>
      <p>Ich freue mich darauf, dich in meinem Team willkommen zu hei\u00dfen.</p>
      <p>Enrico</p>
    `),
  };
}

// ── Tag 18: Follow-up f\u00fcr Z\u00f6gerer ──
export function followUp1Email(name: string) {
  return {
    subject: "${name}, hast du noch Fragen?",
    html: WRAPPER(`
      <h1>Hallo ${name},</h1>
      <p>vor ein paar Tagen habe ich dir den Registrierungslink geschickt. Vielleicht hast du noch Fragen \u2014 das ist v\u00f6llig normal.</p>
      <p><strong>Die h\u00e4ufigsten Gr\u00fcnde, warum Menschen z\u00f6gern:</strong></p>
      <ul>
        <li><strong>"Ich bin unsicher, ob ich das kann."</strong> \u2014 Die meisten erfolgreichen Berater hatten null Erfahrung. Die Schulungen machen dich fit.</li>
        <li><strong>"78 \u20ac f\u00fcr das Einstiegspaket sind viel."</strong> \u2014 Du bekommst echte Produkte + 80\u2013100 \u20ac Werbematerial gratis. Und mit deinen ersten 3\u20134 Kunden hast du die Kosten wieder drin.</li>
        <li><strong>"Ich habe gerade keine Zeit."</strong> \u2014 2 Stunden pro Woche reichen. Du bestimmst wann.</li>
      </ul>
      <p>\u{1f4de} <strong>Ruf einfach an:</strong> <a href="tel:+4932212619379" style="color:#4CAF50">+49 322 126 19 379</a> \u2014 unsere Beraterin Lisa beantwortet alle Fragen sofort.</p>
      <p>Oder antworte auf diese Mail \u2014 ich beantworte jede Frage pers\u00f6nlich.</p>
      <p>Enrico</p>
    `),
  };
}

// ── Tag 22: Letzte Erinnerung ──
export function followUp2Email(name: string) {
  return {
    subject: "Letzte Nachricht von mir, ${name}",
    html: WRAPPER(`
      <h1>${name}, eine letzte Nachricht.</h1>
      <p>Nicht jeder ist f\u00fcr diesen Weg gemacht \u2014 und das ist okay.</p>
      <p>Aber wenn du bis hierhin gelesen hast, dann interessiert dich das Thema. Und genau solche Menschen suche ich.</p>
      <div class="highlight">
        <strong>Zusammenfassung:</strong><br>
        \u2705 Premium-Hundefutter empfehlen, 15\u201330 % Provision<br>
        \u2705 Einstiegspaket ab 78 \u20ac + 80\u2013100 \u20ac Willkommenspaket gratis<br>
        \u2705 Gewerbeschein in 15 Min. (ich helfe)<br>
        \u2705 Pers\u00f6nliche Startschulung mit mir<br>
        \u2705 Kein Lager, kein Versand, kein Mindestumsatz
      </div>
      <p style="text-align:center;margin:24px 0">
        <a href="${REG_LINK}" class="btn">Jetzt registrieren \u2192</a>
      </p>
      <p>Wenn du Fragen hast: <a href="tel:+4932212619379" style="color:#4CAF50">+49 322 126 19 379</a> (Lisa) oder antworte auf diese Mail.</p>
      <p>Alles Gute,<br>Enrico</p>
    `),
  };
}
