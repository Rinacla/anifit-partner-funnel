# AGENTS.md - Anifit Partner Funnel

## Project Overview
Next.js landing page + email funnel for recruiting Anifit Teampartner (pet food affiliate partners).
Deployed on Vercel, subdomain: partner.anifutter-shop.de

## Tech Stack
- Next.js 15 (App Router), TypeScript, Tailwind CSS
- emailit API v2 for sending emails
- Vercel Cron for email sequence scheduling

## Pages
- `/` — Landing page with lead magnet ("Gratis-Guide: Dein Start als Tierernährungsberater")
- `/danke` — Thank you page after signup

## API Routes
- `POST /api/lead` — Receives form (name, email), adds to emailit audience, sends welcome email
- `GET /api/cron` — Vercel Cron, runs daily, sends scheduled sequence emails

## Email Sequence (5 emails over 14 days)
1. Day 0: Welcome + Guide link
2. Day 2: "Was verdient ein Anifit-Berater?" (earnings, calculations)
3. Day 4: "Dein Mentor-Vorteil" (team benefits)
4. Day 7: FAQ + objection handling
5. Day 10: CTA → registrierung link + bonus

## Data Storage
- Use Vercel KV (Redis) for leads + email tracking
- Store: email, name, signup_date, emails_sent, last_email_date

## Email Setup
- emailit API: POST https://api.emailit.com/v2/emails
- Auth: Bearer token in EMAILIT_API_KEY env var
- Sender: "Enrico von Anifit <partner@anifutter-shop.de>"
- Audience ID for contacts: will be created via API

## emailit API example
```
curl -X POST https://api.emailit.com/v2/emails \
  -H "Authorization: Bearer $EMAILIT_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"from":"Enrico von Anifit <partner@anifutter-shop.de>","to":"x@y.com","subject":"Test","html":"<p>Hi</p>"}'
```

## Design
- Green (#4CAF50) accent, white bg, dark text
- Mobile-first, German language
- Clean, professional, trustworthy — no generic AI look
- CTA buttons: prominent green

## Brand Copy
- Enrico Bachmann, Anifit-Fachberater seit 2018
- 1.000+ aktive Kunden, Premium-Hundefutter 90-99% Fleisch
- Provision 15-30%, Kundenschutz = lebenslange Vergütung
- Keine Lagerhaltung, Provital übernimmt Versand
- Kostenlose Schulungen + Zertifizierung
- Registrierung: https://provital.com/registrierung?code=EB-Hundeo

## Rules
- All text in German
- Authentic tone, no marketing fluff
- Must work 100% autonomously without Enrico
