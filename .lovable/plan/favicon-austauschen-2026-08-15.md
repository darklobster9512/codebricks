# Favicon austauschen

Das hochgeladene Brick-Icon (blaue Treppen-Bausteine) ersetzt das aktuelle Favicon.

## Schritte
- Upload nach `public/favicon.png` kopieren, quadratisch auf 64x64 skaliert (transparenter Hintergrund, kein Verzerren).
- Zusätzlich `public/apple-touch-icon.png` aus derselben Quelle mit 180x180 erzeugen.
- In `index.html` den Cache-Buster der beiden Icon-Links auf `?v=7` erhöhen, damit Browser das neue Icon laden.

Sonst bleibt nichts verändert — Logo in Header und Footer bleiben wie sie sind.
