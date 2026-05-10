# Design System

Basiert auf dem ERGO Design System — extrahiert via skillui.

## Dateien

| Datei | Inhalt |
|---|---|
| `tokens.css` | Alle Design-Tokens: Farben, Abstände, Typografie, Schatten, Z-Index |
| `components.css` | Wiederverwendbare CSS-Klassen (Buttons, Cards, Badges, Grid) |

## Wie nutze ich das auf neuen Seiten?

Füge am Anfang deines `<head>` ein:

```html
<link rel="stylesheet" href="../design-system/tokens.css" />
<link rel="stylesheet" href="../design-system/components.css" />
```

## Farbpalette

| Name | Hex | Verwendung |
|---|---|---|
| Akzent Rot | `#cc0033` | Buttons, Links, Fokus-Ring |
| Akzent Dunkel | `#8e0038` | Hover-Zustand |
| ERGO Original | `#ed0039` | Sparsam, für Brand-Highlights |
| Dunkel | `#1e1e1e` | Hero, Footer, dunkle Bereiche |
| Hintergrund | `#ffffff` | Standard-Seite |
| Hell | `#f5f5f5` | Abwechselnde Sections |
| Slate | `#f1f5f9` | Wissens-Bereich |
| Text | `#1a1a1a` | Primärer Text |
| Gedämpft | `#6a625a` | Sekundärer Text, Infos |
| Rahmen | `#d3d3d3` | Karten, Trennlinien |

## Typografie

- **Überschriften:** Fraunces (Google Fonts, Serif)
- **Fließtext:** Nunito Sans (Google Fonts, Sans-Serif)
- **Zeilenlänge:** max. 65 Zeichen (65ch) für optimale Lesbarkeit

## Wichtig: WCAG 2.1 AA

Da diese Seite BFSG-Konformität bewirbt, muss sie selbst konform sein:
- Kontrast ≥ 4.5:1 für normalen Text
- Fokus-Indikatoren immer sichtbar
- Alle Bilder mit Alt-Text
- Tastaturnavigation vollständig
