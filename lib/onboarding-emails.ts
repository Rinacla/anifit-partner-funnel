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
.step-number{display:inline-block;background:#4CAF50;color:#fff;width:28px;height:28px;line-height:28px;text-align:center;border-radius:50%;font-weight:700;font-size:14px;margin-right:8px}
.checklist{list-style:none;padding-left:0}
.checklist li{padding:8px 0;border-bottom:1px solid #f3f4f6}
.checklist li:last-child{border:none}
</style></head><body><div class="container"><div class="card">${content}</div>
<div class="footer">Enrico Bachmann · Dein Anifit-Mentor<br>
<a href="https://partner.anifutter-shop.de" style="color:#9ca3af">partner.anifutter-shop.de</a><br>
WhatsApp: <a href="https://wa.me/4915204000990" style="color:#9ca3af">0152 0400 0990</a></div>
</div></body></html>`;

/** Onboarding 1 — Sofort nach Registrierung */
export function onboarding1Welcome(name: string) {
  return {
    subject: `Willkommen im Team, ${name}!`,
    html: WRAPPER(`
      <h1>Herzlich willkommen, ${name}!</h1>
      <p>Du hast dich als Anifit-Fachberater registriert — das freut mich.</p>
      <p>Ich bin Enrico, dein Mentor. Ich begleite dich durch die ersten Wochen und stehe dir bei jeder Frage zur Seite.</p>
      <p><strong>Deine naechsten 3 Schritte:</strong></p>
      <ul>
        <li><span class="step-number">1</span> <strong>Startschulung buchen</strong> — ca. 25 Minuten, online. Danach bekommst du dein Willkommenspaket (60 Dosen gratis).</li>
        <li><span class="step-number">2</span> <strong>Fachberaterbereich kennenlernen</strong> — Unter <a href="https://provital.com/content/fachberaterbereich/">provital.com</a> findest du dein CRM, Bestelluebersichten und Schulungsmaterial.</li>
        <li><span class="step-number">3</span> <strong>Erste Produkte testen</strong> — Bestelle dir ein Startpaket und probiere das Futter selbst. Du kannst nur empfehlen, was du kennst.</li>
      </ul>
      <div class="highlight">
        <strong>Tipp:</strong> Die Startschulung ist der wichtigste Schritt. Buchst du sie im gleichen Monat wie deine Registrierung, bekommst du das 60-Dosen-Paket kostenlos dazu.
      </div>
      <p>Antworte einfach auf diese Mail oder schreib mir per WhatsApp (0152 0400 0990), wenn du Fragen hast.</p>
      <p>Enrico</p>
    `),
  };
}

/** Onboarding 2 — Tag 3: Startschulung + Akademie */
export function onboarding2Training(name: string) {
  return {
    subject: "Deine Startschulung — so funktioniert's",
    html: WRAPPER(`
      <h1>${name}, hast du deine Startschulung schon gebucht?</h1>
      <p>Die Schulung dauert ca. 25 Minuten und ist komplett online. Du lernst:</p>
      <ul>
        <li>Wie der Fachberaterbereich funktioniert</li>
        <li>Wie du Kunden anlegst und Bestellungen nachverfolgst</li>
        <li>Was Anifit von anderen Futtermarken unterscheidet</li>
        <li>Wie Provision und Kundenschutz funktionieren</li>
      </ul>
      <p>Nach der Schulung bist du offiziell zertifizierter Ernaehrungsberater. Das ist dein Alleinstellungsmerkmal gegenueber jedem Futterverkaufer im Internet.</p>
      <div class="highlight">
        <strong>Online-Akademie:</strong> Neben der Startschulung gibt es die kostenlose Anifit-Akademie mit Vertiefungskursen zu Themen wie Allergien, Welpen-Ernaehrung und Seniorenhunde. Du findest sie im Fachberaterbereich.
      </div>
      <p>Fragen? Antwort auf diese Mail oder WhatsApp.</p>
      <p>Enrico</p>
    `),
  };
}

/** Onboarding 3 — Tag 7: Erste Kunden */
export function onboarding3FirstCustomers(name: string) {
  return {
    subject: "So gewinnst du deine ersten 3 Kunden",
    html: WRAPPER(`
      <h1>${name}, lass uns ueber deine ersten Kunden sprechen.</h1>
      <p>Die ersten 3 Kunden sind entscheidend — danach wird alles leichter. Und sie sind naeher als du denkst.</p>
      <p><strong>Wo du anfangen kannst:</strong></p>
      <ul>
        <li><strong>Freunde und Familie mit Hund</strong> — Du musst nicht verkaufen. Erzaehle einfach, was du machst und warum du von dem Futter ueberzeugt bist.</li>
        <li><strong>Hundewiese / Hundeschule</strong> — Gespraeche ueber Futter ergeben sich von allein. Wenn jemand fragt: "Was fuetterst du?" — das ist dein Moment.</li>
        <li><strong>Social Media</strong> — Ein ehrlicher Post ueber die Ernaehrung deines Hundes bringt oft mehr als jede Werbung.</li>
      </ul>
      <div class="highlight">
        <strong>Startbonus:</strong> Wenn du in den ersten 30 Tagen 3 neue Kunden gewinnst, erhaeltst du in den ersten 3 Monaten 30 % Provision statt 15 %. Das kann hunderte Euro ausmachen.
      </div>
      <p><strong>Der wichtigste Satz:</strong> "Ich bin zertifizierter Ernaehrungsberater und kann dir kostenlos zeigen, ob das Futter zu deinem Hund passt."</p>
      <p>Enrico</p>
    `),
  };
}

/** Onboarding 4 — Tag 14: Tools + Nachfrage */
export function onboarding4Tools(name: string) {
  return {
    subject: `${name}, nutzt du schon alle deine Tools?`,
    html: WRAPPER(`
      <h1>Zwei Wochen als Berater — wie laeuft's?</h1>
      <p>${name}, ich wollte kurz nachfragen, wie deine ersten Tage waren. Hast du schon Kunden angesprochen?</p>
      <p><strong>Deine wichtigsten Werkzeuge:</strong></p>
      <ul class="checklist">
        <li>☐ <strong>Dein persoenlicher Shop-Link</strong> — Kunden bestellen darueber direkt bei dir</li>
        <li>☐ <strong>Ernaehrungsfibel</strong> — <a href="https://www.anifit.com/partners/Ernaehrungsfibel/index.html">Online lesen</a>, perfekt zum Weiterleiten</li>
        <li>☐ <strong>Produktkatalog</strong> — <a href="https://www.provital.com/content/partners/Produktkatalog/index.html">Alle Sorten auf einen Blick</a></li>
        <li>☐ <strong>Futter-Rechner</strong> — Auf deinem Shop, hilft Kunden die richtige Menge zu bestimmen</li>
        <li>☐ <strong>Rabattcode JETZT10</strong> — 10 % Neukunden-Rabatt, dein bestes Argument</li>
      </ul>
      <div class="highlight">
        Jeder Kunde, den du einmal gewinnst, bleibt dir durch den Kundenschutz dauerhaft zugeordnet. Jede Nachbestellung bringt dir Provision — automatisch.
      </div>
      <p>Schreib mir, wenn du Hilfe brauchst.</p>
      <p>Enrico</p>
    `),
  };
}

/** Onboarding 5 — Tag 21: Langfristig + Stammkunden */
export function onboarding5Growth(name: string) {
  return {
    subject: "Dein Weg zu echtem passivem Einkommen",
    html: WRAPPER(`
      <h1>${name}, lass uns ueber die Zukunft reden.</h1>
      <p>Du hast jetzt das Fundament. Produkt verstanden, Tools kennengelernt, vielleicht erste Kunden gewonnen.</p>
      <p>Jetzt wird es spannend: Der wahre Hebel bei Anifit ist das <strong>Stammkunden-Modell</strong>.</p>
      <ul>
        <li><strong>Lieferservice-Abo:</strong> Kunden bestellen automatisch alle 4-8 Wochen. Du bekommst jedes Mal Provision.</li>
        <li><strong>Steigende Provisionsstufen:</strong> Je mehr Kunden, desto hoeher dein Satz (15 % → 30 %).</li>
        <li><strong>Team aufbauen:</strong> Wenn du andere Berater anwirbst, profitierst du von deren Umsaetzen.</li>
      </ul>
      <div class="highlight">
        <strong>Rechenbeispiel:</strong> 25 Stammkunden mit Lieferservice bestellen im Schnitt fuer 80 EUR/Monat. Bei 23 % Provision sind das 460 EUR monatlich — ohne aktives Zutun.
      </div>
      <p>Dein naechstes Ziel: Jeden Neukunden fragen, ob ein Lieferservice-Abo sinnvoll waere. Bei den meisten ist es das.</p>
      <p>Auf deinen Erfolg,<br><strong>Enrico</strong></p>
    `),
  };
}
