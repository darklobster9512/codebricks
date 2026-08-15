# Meta Pixel auf der Bewerbungsseite

## Ergebnis der Prüfung

Der gewünschte Meta Pixel ist bereits vollständig eingebaut:

- `index.html`: Pixel-Script mit ID `1768879150791223` inkl. `PageView`, dazu der `<noscript>`-Bildfallback im Body (dort muss er stehen, im Head ist er laut HTML-Spezifikation nicht erlaubt).
- `src/pages/Bewerbung.tsx`: `fbq('track', 'Lead')` feuert beim Klick auf den Abschicken-Button, direkt nach der Pflichtfeldprüfung.
- `src/components/ScrollToTop.tsx`: sendet bei Routenwechseln zusätzlich `PageView`, damit die Single-Page-Navigation korrekt getrackt wird.

## Änderungen

Keine. Das Timing des Lead-Events bleibt wie gewünscht beim Klick.

## Optionaler nächster Schritt

Nach dem Veröffentlichen im Meta Events Manager prüfen, ob `PageView` und `Lead` ankommen (Test-Events-Tab).
