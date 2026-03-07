const WRAPPER = (content: string, preheader?: string) => `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<style>body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1a1a1a;background:#f9fafb}
.container{max-width:560px;margin:0 auto;padding:32px 24px}
.card{background:#fff;border-radius:12px;padding:32px 28px;border:1px solid #e5e7eb}
h1{font-size:22px;margin:0 0 16px;color:#1a1a1a}
p{font-size:16px;line-height:1.6;margin:0 0 16px;color:#4b5563}
.footer{text-align:center;padding:24px 0;font-size:13px;color:#9ca3af}
ul{padding-left:20px}li{margin-bottom:8px;color:#4b5563}
.highlight{background:#eff6ff;border-left:4px solid #2563eb;padding:16px 20px;border-radius:0 8px 8px 0;margin:16px 0}
</style></head><body>${preheader ? `<div style="display:none;font-size:1px;color:#f9fafb;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden">${preheader}${'&#847; &zwnj; '.repeat(30)}</div>` : ''}<div class="container"><div class="card">${content}</div>
<div class="footer">Enrico Bachmann \u00b7 Anifit-Fachberater<br>
<a href="tel:+4932212619379" style="color:#2563eb;font-weight:700">+49 322 126 19 379</a><br>
<a href="https://partner.anifutter-shop.de/tierberufe" style="color:#9ca3af">partner.anifutter-shop.de</a></div>
</div></body></html>`;

export function tierberufeConfirmEmail(name: string) {
  return {
    subject: "Ihre Anfrage zum Anifit Partner-Programm",
    html: WRAPPER(`
      <h1>Guten Tag ${name},</h1>
      <p>vielen Dank f\u00fcr Ihr Interesse am Anifit Partner-Programm. Ich melde mich innerhalb von 24 Stunden pers\u00f6nlich bei Ihnen.</p>
      <div class="highlight">
        <strong>Ihre Vorteile als Partner:</strong><br>
        \u2022 30 % Sofortrabatt auf alle eigenen Eink\u00e4ufe<br>
        \u2022 5 % Provision auf Kundenempfehlungen (lebenslang)<br>
        \u2022 Spezielle Welpen- und Kittenpakete<br>
        \u2022 Kein Lager, kein Versand \u2014 Provital \u00fcbernimmt alles
      </div>
      <p><strong>Was Sie f\u00fcr die Registrierung brauchen:</strong></p>
      <ul>
        <li>Einen T\u00e4tigkeitsnachweis (Mitgliedskarte, Webseite oder Zertifikat)</li>
        <li>Die Registrierung ist kostenlos</li>
      </ul>
      <p>Falls Sie vorab Fragen haben, rufen Sie gerne an: <a href="tel:+4932212619379" style="color:#2563eb">+49 322 126 19 379</a></p>
      <p>Mit freundlichen Gr\u00fc\u00dfen,<br><strong>Enrico Bachmann</strong><br>Zertifizierter Ern\u00e4hrungsberater f\u00fcr Hunde & Katzen</p>
    `, "30 % Rabatt, 5 % Provision, kostenlose Registrierung. Enrico meldet sich persönlich."),
  };
}

export function tierberufeFollowUpEmail(name: string) {
  return {
    subject: "${name}, haben Sie noch Fragen zum Partner-Programm?",
    html: WRAPPER(`
      <h1>Guten Tag ${name},</h1>
      <p>vor ein paar Tagen haben Sie sich \u00fcber unser Partner-Programm informiert. Ich wollte kurz nachfragen, ob Sie noch Fragen haben.</p>
      <p><strong>Kurz zusammengefasst:</strong></p>
      <ul>
        <li>30 % Sofortrabatt auf das gesamte Anifit-Sortiment</li>
        <li>5 % Provision auf Kundenbestellungen</li>
        <li>Kostenlose Registrierung mit T\u00e4tigkeitsnachweis</li>
        <li>Welpen-/Kittenpakete f\u00fcr Ihre K\u00e4ufer</li>
      </ul>
      <p>Antworten Sie einfach auf diese Mail oder rufen Sie an: <a href="tel:+4932212619379" style="color:#2563eb">+49 322 126 19 379</a></p>
      <p>Freundliche Gr\u00fc\u00dfe,<br><strong>Enrico Bachmann</strong></p>
    `, "30 % Rabatt + lebenslange Provision. Ihre Vorteile auf einen Blick."),
  };
}
