# Logo größer in Header und Footer

## Änderung
Das Wortmarken-Logo wird an beiden Stellen vergrößert — sonst bleibt alles unverändert.

- **Header**: Logohöhe von 32 px auf 44 px. Die Navigationsleiste ist hoch genug, dass die Pill-Form, Nav-Items und der CTA-Button dabei unverändert sitzen bleiben.
- **Footer**: Logohöhe von 32 px auf 44 px, invertierte Darstellung auf dunklem Grund bleibt gleich.

## Technische Umsetzung
- `src/components/limex/Header.tsx`: `h-8` → `h-11` an der Logo-`<img>`.
- `src/components/limex/Footer.tsx`: `h-8` → `h-11` an der Logo-`<img>`.
- Keine weiteren Klassen, Abstände oder Komponenten werden angefasst.
- Screenshot-Kontrolle von Header und Footer auf Desktop und Mobile, damit die Header-Pill nicht höher wird.