# Retargeting Adset — Vorbereitung

## Konzept
Wer die Landing Page besucht aber NICHT konvertiert (kein Lead) → bekommt eine andere Ad mit neuem Angle.

## Technische Voraussetzung
- Meta Pixel (1366154121191008) ist bereits installiert
- PageView feuert auf allen Seiten
- Lead-Event feuert auf /danke
- Custom Audience noetig: "Website Visitors minus Leads"

## Custom Audiences (vor Aktivierung erstellen)

### Audience 1: "TP Retargeting - Besucher ohne Lead"
- Quelle: Pixel 1366154121191008
- Regel: PageView auf partner.anifutter-shop.de in letzten 14 Tagen
- MINUS: Lead-Event in letzten 14 Tagen
- Mindestgroesse: ~100 Personen (braucht ein paar Tage nach Kampagnenstart)

### Audience 2: "TP Retargeting - Guide gelesen"
- Quelle: Pixel
- Regel: PageView auf /guide in letzten 14 Tagen
- MINUS: Lead-Event
- Diese Leute haben den Guide gelesen aber nicht konvertiert → heisseste Leads

## Adset-Setup

- Kampagne: Bestehende "TP Recruiting - Anifit Berater" (120240364251910446)
- Neues Adset: "TP - Retargeting - Besucher"
- Budget: Wird von CBO aus Kampagnenbudget verteilt
- Targeting: Custom Audience (Besucher ohne Lead)
- Optimierung: OFFSITE_CONVERSIONS → Lead
- Placement: Automatic

## Ad-Angles fuer Retargeting

### Angle 1: "Noch unsicher?"
"Du warst schon auf unserer Seite. Hast du noch Fragen? Ruf einfach an: +49 322 126 19 379"
→ Telefon als CTA (niedrigere Huerde)

### Angle 2: "Startbonus laeuft"
"3 Kunden in 30 Tagen = 3 Monate 30% Provision. Warte nicht zu lange."
→ FOMO/Urgency

### Angle 3: "2-fuer-1 Deal"
"78 EUR investieren, 160-180 EUR Ware bekommen. Einstiegspaket + Willkommenspaket gratis."
→ Deal/Value

## Zeitplan
- Retargeting erst sinnvoll wenn ~200+ Pixel-Events gesammelt
- Bei 15-25 Klicks/Tag: nach ~7-10 Tagen moeglich
- Adset vorbereiten, Audience erstellen, aber PAUSED lassen bis genug Daten
