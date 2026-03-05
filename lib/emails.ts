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
</style></head><body><div class="container"><div class="card">${content}</div>
<div class="footer">Enrico Bachmann · Anifit-Fachberater<br>
<a href="https://partner.anifutter-shop.de" style="color:#9ca3af">partner.anifutter-shop.de</a></div>
</div></body></html>`;

export function welcomeEmail(name: string) {
  return {
    subject: "Dein Guide: So startest du als Tierernährungsberater",
    html: WRAPPER(`
      <h1>Hallo ${name},</h1>
      <p>schön, dass du dich für den Einstieg als Tierernährungsberater interessierst.</p>
      <p>In den nächsten Tagen bekommst du von mir alles, was du für eine fundierte Entscheidung brauchst — Zahlen, Fakten und ehrliche Einblicke.</p>
      <div class="highlight">
        <strong>Kurz zusammengefasst:</strong><br>
        Als Anifit-Fachberater empfiehlst du Premium-Hundefutter (90–99 % Fleisch, schwedische Qualität) und verdienst 15–30 % Provision auf jede Bestellung — ein Leben lang.
      </div>
      <p>Keine Lagerhaltung, kein Versand, kein Risiko. Provital übernimmt alles. Du konzentrierst dich auf Beratung.</p>
      <p>Hier ist dein Guide — alles Wichtige auf einer Seite:</p>
      <p style="text-align:center;margin:16px 0"><a href="https://partner.anifutter-shop.de/guide?utm_source=email&utm_medium=sequence&utm_campaign=welcome" class="btn">Guide lesen →</a></p>
      <p>In 2 Tagen zeige ich dir, was Berater konkret verdienen.</p>
      <p>Bis bald,<br><strong>Enrico</strong></p>
    `),
  };
}

export function earningsEmail(name: string) {
  return {
    subject: "Was verdient ein Anifit-Berater wirklich?",
    html: WRAPPER(`
      <h1>${name}, reden wir über Zahlen.</h1>
      <p>Viele fragen sich: Lohnt sich das überhaupt? Hier sind echte Zahlen von Provital:</p>
      <ul>
        <li><strong>12 Kunden, 19 % Provision → ~182 € / Monat</strong></li>
        <li><strong>25 Kunden, 23 % Provision → ~460 € / Monat</strong></li>
        <li><strong>50 Kunden, 27 % Provision → ~1.080 € / Monat</strong></li>
        <li><strong>96 Kunden, 30 % Provision → ~2.304 € / Monat</strong></li>
      </ul>
      <p>Das Besondere: Durch den <strong>lebenslangen Kundenschutz</strong> bleiben dir einmal gewonnene Kunden dauerhaft zugeordnet. Jede Nachbestellung bringt dir Provision — ohne dass du etwas dafür tun musst.</p>
      <div class="highlight">
        Ein Kunde, der jeden Monat für 80 € bestellt, bringt dir bei 23 % Provision <strong>über 220 € pro Jahr</strong> — automatisch.
      </div>
      <p>Dazu kommen Boni: Neukundenbonus (ab 5 NK/Monat), Wiederholungsbonus, Autobonus.</p>
      <p>In meiner nächsten Mail zeige ich dir, warum der richtige Mentor den Unterschied macht.</p>
      <p>Enrico</p>
    `),
  };
}

export function mentorEmail(name: string) {
  return {
    subject: "Warum dein Mentor den Unterschied macht",
    html: WRAPPER(`
      <h1>${name}, kurze Frage:</h1>
      <p>Würdest du lieber allein starten — oder mit jemandem, der den Weg schon kennt?</p>
      <p>Ich bin seit 2018 Anifit-Fachberater und betreue über 1.000 aktive Kunden. Mein Hund frisst selbst Anifit. Ich empfehle nur, wovon ich überzeugt bin.</p>
      <p><strong>Was ich dir als Mentor biete:</strong></p>
      <ul>
        <li>Persönliche Einarbeitung nach deiner Registrierung</li>
        <li>Bewährte Vorlagen für Kundengespräche und E-Mails</li>
        <li>Tipps für deine ersten 10 Kunden</li>
        <li>Laufender Austausch — du bist nicht allein</li>
      </ul>
      <div class="highlight">
        Viele Berater scheitern nicht am Produkt, sondern am fehlenden Support. Bei mir bekommst du beides: ein Spitzenprodukt und echte Unterstützung.
      </div>
      <p>In ein paar Tagen beantworte ich die häufigsten Fragen, die Einsteiger haben.</p>
      <p>Enrico</p>
    `),
  };
}

export function faqEmail(name: string) {
  return {
    subject: "Die 5 häufigsten Fragen zum Start als Anifit-Berater",
    html: WRAPPER(`
      <h1>${name}, diese Fragen höre ich am häufigsten:</h1>
      <p><strong>1. Muss ich etwas investieren?</strong><br>
      Nein. Die Registrierung ist kostenlos. Optional gibt es ein Einstiegspaket (~80 €), aber das ist kein Muss.</p>
      <p><strong>2. Brauche ich einen Gewerbeschein?</strong><br>
      Ja, da du als freier Handelsvertreter arbeitest. Anifit hilft dir bei der Beantragung — dauert 15 Minuten.</p>
      <p><strong>3. Wie viel Zeit brauche ich?</strong><br>
      Die meisten starten mit 2–5 Stunden pro Woche. Es gibt keine Mindestanforderungen.</p>
      <p><strong>4. Ist das ein MLM / Schneeballsystem?</strong><br>
      Nein. Du verdienst an echten Produktverkäufen deiner Kunden. Kein Recruiting nötig.</p>
      <p><strong>5. Muss ich Produkte lagern oder verschicken?</strong><br>
      Nein. Provital übernimmt Lager, Versand, Retouren und Zahlungen komplett.</p>
      <div class="highlight">
        Noch unsicher? Schreib mir einfach eine Antwort auf diese Mail. Ich beantworte jede Frage persönlich.
      </div>
      <p>In meiner letzten Mail zeige ich dir, wie du in 5 Minuten startest.</p>
      <p>Enrico</p>
    `),
  };
}

export function ctaEmail(name: string) {
  return {
    subject: `${name}, bereit für deinen Start?`,
    html: WRAPPER(`
      <h1>Es ist so weit, ${name}.</h1>
      <p>Du weißt jetzt:</p>
      <ul>
        <li>✅ 15–30 % Provision auf jede Bestellung</li>
        <li>✅ Lebenslanger Kundenschutz</li>
        <li>✅ Kein Lager, kein Versand, kein Risiko</li>
        <li>✅ Kostenlose Schulungen + Zertifizierung</li>
        <li>✅ Persönlicher Mentor an deiner Seite</li>
      </ul>
      <p>Die Registrierung dauert keine 5 Minuten. Du brauchst nur deinen Namen und eine E-Mail-Adresse.</p>
      <p style="text-align:center;margin:24px 0">
        <a href="https://provital.com/registrierung?code=EB-Hundeo&utm_source=email&utm_medium=sequence&utm_campaign=teampartner" class="btn">
          Jetzt als Anifit-Berater registrieren →
        </a>
      </p>
      <div class="highlight">
        <strong>Willkommensbonus:</strong> Registriere dich jetzt und erhalte nach deiner Startschulung ein zusätzliches Warenproben-Paket im Wert von über 80 € gratis.
      </div>
      <p>Ich freue mich darauf, dich in meinem Team willkommen zu heißen.</p>
      <p>Enrico</p>
    `),
  };
}

export function followUp1Email(name: string) {
  return {
    subject: `${name}, hast du noch Fragen?`,
    html: WRAPPER(`
      <h1>Hallo ${name},</h1>
      <p>vor ein paar Tagen habe ich dir den Registrierungslink geschickt. Vielleicht hast du noch Fragen — das ist voellig normal.</p>
      <p>Die haefigsten Gruende, warum Interessenten zoegern:</p>
      <ul>
        <li><strong>"Ich bin unsicher, ob ich das kann."</strong> — Die meisten erfolgreichen Berater hatten null Erfahrung beim Start. Die Schulungen machen dich fit.</li>
        <li><strong>"Ich habe gerade keine Zeit."</strong> — 2 Stunden pro Woche reichen fuer den Anfang. Und du bestimmst wann.</li>
        <li><strong>"Ich kenne niemanden der Hundefutter braucht."</strong> — Deutschland hat 10 Millionen Hunde. Du wirst ueberrascht sein, wie schnell du Kunden findest.</li>
      </ul>
      <p>Antworte einfach auf diese Mail — ich beantworte jede Frage persoenlich.</p>
      <p>Enrico</p>
    `),
  };
}

export function followUp2Email(name: string) {
  return {
    subject: "Letzte Erinnerung: Dein Platz als Anifit-Berater",
    html: WRAPPER(`
      <h1>${name}, eine letzte Nachricht von mir.</h1>
      <p>Ich moechte ehrlich sein: Nicht jeder ist fuer diesen Weg gemacht. Und das ist okay.</p>
      <p>Aber wenn du bis hierhin gelesen hast, dann interessiert dich das Thema. Und genau solche Menschen suche ich fuer mein Team.</p>
      <div class="highlight">
        <strong>Was du bekommst, wenn du dich heute registrierst:</strong><br>
        ✅ Persoenliche Einarbeitung von mir<br>
        ✅ Bewrahrte Vorlagen fuer deine ersten Kundengespraeche<br>
        ✅ Willkommenspaket im Wert von 80 EUR nach deiner Startschulung
      </div>
      <p style="text-align:center;margin:24px 0">
        <a href="https://provital.com/registrierung?code=EB-Hundeo&utm_source=email&utm_medium=sequence&utm_campaign=teampartner-followup" class="btn">
          Jetzt als Anifit-Berater registrieren →
        </a>
      </p>
      <p>Wenn du Fragen hast, antworte einfach auf diese Mail. Ansonsten wuensche ich dir alles Gute.</p>
      <p>Enrico</p>
    `),
  };
}
