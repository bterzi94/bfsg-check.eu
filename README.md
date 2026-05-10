# bfsg-check.eu

Landingpage für den kostenlosen BFSG-Konformitäts-Check.

## Stack

- **Next.js 14** App Router
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts**: Fraunces (Headings) + Nunito Sans (Body)

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

## Deployment

Empfohlen: **Vercel** (GitHub-Integration, zero config).

1. Repo mit Vercel verbinden
2. Framework: Next.js (auto-detected)
3. Deploy

## Platzhalter — vor Go-Live ersetzen

| Datei | Platzhalter | Beschreibung |
|---|---|---|
| `lib/content.ts` | `calendlyUrl` | Calendly- oder Kontakt-URL für den Service-CTA |
| `components/About.tsx` | Foto-Block | Echtes Foto + Name eintragen |
| `components/Deliverable.tsx` | Mockup-Bild | PDF-Mockup des Berichts |
| `app/api/check-request/route.ts` | Backend-Logik | CRM / E-Mail-Service anschließen (Resend, Postmark, Airtable o. ä.) |
| `components/Footer.tsx` | Footer-Links | Impressum, Datenschutz, AGB, Kontakt als echte Seiten anlegen |

## Backend-Endpunkt `/api/check-request`

Erwartet `POST` mit JSON-Body:

```json
{ "domain": "https://beispiel.de", "email": "nutzer@beispiel.de" }
```

Antwort bei Erfolg:

```json
{ "success": true, "message": "Anfrage erhalten. Bericht innerhalb von 24h." }
```

### Empfohlene Integrationen

- **E-Mail-Bestätigung**: Resend oder Postmark
- **Lead-Tracking**: Airtable oder Notion
- **CRM**: HubSpot Free oder Pipedrive

## Texte bearbeiten

Alle Inhalte sind zentralisiert in `lib/content.ts` — keine Code-Kenntnisse nötig, um Texte zu ändern.

## Barrierefreiheit

Die Seite ist nach WCAG 2.1 AA gebaut:
- Semantisches HTML5 mit korrekter Heading-Hierarchie
- Tastaturnavigation vollständig
- Sichtbare Fokus-Indikatoren (3px roter Outline)
- Skip-to-content Link
- ARIA-Labels auf allen interaktiven Elementen
- Kontrastverhältnis ≥ 4.5:1 für alle Texte
- Accordion-FAQ mit korrekten `aria-expanded` / `aria-controls`
