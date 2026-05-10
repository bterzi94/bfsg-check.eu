# Bilder-Ordner

## Struktur

```
images/
├── icons/        → SVG-Icons (Logo, Favicon etc.)
├── mockups/      → Bericht-Mockup (PDF-Vorschau als PNG/WebP)
└── photos/       → Fotos (Portrait des Experten etc.)
```

## Platzhalter ersetzen

| Datei | Verwendung | Empfohlene Größe |
|---|---|---|
| `photos/portrait.jpg` | Section "Wer prüft deine Website?" | 512×512 px |
| `mockups/bericht-mockup.png` | Section "Dein Bericht" | 800×600 px |
| `icons/favicon.svg` | Browser-Tab Icon | 32×32 px |
| `icons/og-image.png` | Social Media Preview | 1200×630 px |

## Format-Empfehlung

- Fotos: `.webp` (kleinere Dateigröße) mit `.jpg` Fallback
- Icons: `.svg` bevorzugt
- Alle Bilder brauchen `alt`-Text im HTML!
