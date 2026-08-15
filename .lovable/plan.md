# Logo wirkt gleich groß — Ursache und Fix

## Befund
Die Höhenänderung (32 px → 44 px) ist in Header und Footer bereits im Code aktiv. Sichtbar ändert sich trotzdem kaum etwas, weil die Logodatei selbst viel leeren Rand hat:

- Datei: 1536 × 512 px
- Tatsächlicher Schriftzug darin: nur 1245 × 168 px, mittig platziert

Der Schriftzug füllt also nur rund ein Drittel der Bildhöhe. Bei 44 px Bildhöhe ist die Wortmarke real nur ca. 15 px hoch — deshalb der Eindruck "nichts passiert".

## Lösung
1. Transparenten Rand aus `src/assets/logo-codebricks.png` entfernen (auf den Inhalt zuschneiden, minimaler gleichmäßiger Rand). Dadurch entspricht die CSS-Höhe endlich der sichtbaren Höhe.
2. Höhen danach neu justieren, damit die Optik stimmt und nichts umbricht:
   - Header: Logo ca. 22–24 px sichtbare Höhe (Pill-Navbar bleibt unverändert hoch)
   - Footer: Logo ca. 28–30 px sichtbare Höhe
3. Favicon `public/favicon.png` bleibt unangetastet.
4. Kontrolle per Screenshot (Desktop + Mobile), dass Header-Pill, Nav-Items und CTA-Button unverändert sitzen.

## Technisch
- Zuschnitt der PNG-Datei auf die Inhaltsbox mit kleinem Padding, gleiche Datei, gleiche Importpfade — keine Codeänderung an Importen nötig.
- `src/components/limex/Header.tsx`: `h-11` → passende Klasse (z. B. `h-6`) nach Zuschnitt.
- `src/components/limex/Footer.tsx`: `h-11` → passende Klasse (z. B. `h-7`) nach Zuschnitt.
- Sonst keine Änderungen.
