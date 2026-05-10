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

## Farbpalette (ERGO Design System)

| Name | Hex | Verwendung |
|---|---|---|
| Akzent Rot | `#ed0039` | Links, Fokus-Ring, kleine Elemente |
| Dunkelmaroon | `#8e0038` | Headlines, primäre Buttons (ERGO theme-primary) |
| Hover | `#bf1528` | Button-Hover-Zustand |
| Crème Hero | `#fef6d2` | Hero-Bereich Hintergrund (ERGO-typisch) |
| Dunkel | `#333333` | Footer, dunkle Sections, Primärtext |
| Hintergrund | `#ffffff` | Standard-Seite |
| Hell | `#f5f5f5` | Abwechselnde Sections |
| Slate | `#f1f5f9` | Wissens-Bereich |
| Gedämpft | `#6a625a` | Sekundärer Text, Infos |
| Rahmen | `#d3d3d3` | Karten, Trennlinien |

## Typografie

- **Schrift:** Plus Jakarta Sans (Google Fonts) — modernes Geometric Sans
- **Überschriften:** weight 800, letter-spacing −0.02em
- **Fließtext:** weight 400/600
- **Zeilenlänge:** max. 65 Zeichen (65ch) für optimale Lesbarkeit

## Wichtig: WCAG 2.1 AA

Da diese Seite BFSG-Konformität bewirbt, muss sie selbst konform sein:
- Kontrast ≥ 4.5:1 für normalen Text
- Fokus-Indikatoren immer sichtbar
- Alle Bilder mit Alt-Text
- Tastaturnavigation vollständig
