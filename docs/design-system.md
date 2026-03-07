# Design System — partner.anifutter-shop.de

## Farben (max 4 Farbfamilien)

### 1. Brand Green (Primary)
- `--brand`: #16a34a (green-600) — CTAs, Links, aktive Elemente
- `--brand-dark`: #15803d (green-700) — Hover, Footer-Links
- `--brand-light`: #f0fdf4 (green-50) — Section-Hintergründe, Light fills
- `--brand-muted`: #dcfce7 (green-100) — Badges, Icons, Checkmarks

### 2. Neutral (Text & Backgrounds)
- `--text`: #111827 (gray-900) — Headings
- `--text-body`: #4b5563 (gray-600) — Body text
- `--text-muted`: #9ca3af (gray-400) — Captions, Footnotes
- `--surface`: #f9fafb (gray-50) — Alternating section backgrounds
- `--border`: #e5e7eb (gray-200) — Borders, Dividers
- White (#ffffff) — Primary background

### 3. Accent Amber (Urgency/Bonus)
- `--accent`: #f59e0b (amber-500) — Announcement bar, Startbonus
- `--accent-light`: #fffbeb (amber-50) — Bonus section backgrounds
- `--accent-text`: #78350f (amber-900) — Text in accent sections

### 4. Error/Negative
- `--error`: #ef4444 (red-500) — nur für "0€ STARTKOSTEN" Badge und ✗

## Typografie

### Headings
- H1: `text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight`
- H2 (Section): `text-3xl font-bold tracking-tight`
- H3 (Subsection): `text-lg font-bold`
- H4 (Card title): `text-sm font-bold`

### Body
- Regular: `text-base text-gray-600 leading-relaxed`
- Small: `text-sm text-gray-600 leading-relaxed`
- Caption: `text-xs text-gray-400`

### Labels
- Badge/Tag: `text-xs font-bold tracking-widest uppercase`

## Spacing (Sections)

- Section padding: `py-20` (konsistent für alle content sections)
- Compact sections (trust strips, CTAs): `py-12`
- Section inner max-width: `max-w-3xl` (text), `max-w-4xl` (mit Bildern), `max-w-5xl` (Hero)
- Section horizontal padding: `px-6`
- Section heading margin-bottom: `mb-4` (title) + `mb-12` (subtitle to content)

## Component Patterns

### Cards
- `bg-white rounded-2xl border border-gray-200 p-6 sm:p-8`
- Highlight: `bg-green-50 border-2 border-green-200`

### Buttons
- Primary: `bg-green-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20`
- Ghost/Link: `text-green-700 font-semibold hover:text-green-800 transition-colors`

### Icons (in circles)
- `w-10 h-10 rounded-full bg-green-100 flex items-center justify-center`
- Icon itself: `w-5 h-5 text-green-600`

## Regeln
- KEINE willkürlichen Tailwind-Farben. Nur die oben definierten verwenden.
- Sections alternieren: white → gray-50 → white → gray-50
- Amber NUR für Startbonus/Urgency Sektionen
- Kein green-500, green-400, green-800 in Buttons oder Text. Nur green-600 (primary) und green-700 (hover/dark).
- text-gray-500 → text-gray-600 vereinheitlichen (body)
- text-gray-500 als subtitle/subhead unter h2 ist OK
