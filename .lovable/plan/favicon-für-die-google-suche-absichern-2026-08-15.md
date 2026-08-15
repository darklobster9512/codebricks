# Favicon für die Google-Suche absichern

Google zeigt in den Suchergebnissen nur Favicons an, die bestimmte Anforderungen erfüllen. Das aktuelle Icon ist 64x64 — Google verlangt ein Vielfaches von 48 px (48, 96, 192...) und eine stabile, dauerhaft erreichbare URL ohne wechselnde Query-Parameter.

## Änderungen

- `public/favicon.png` aus dem hochgeladenen Brick-Icon in **96x96** neu erzeugen (quadratisch, transparenter Hintergrund).
- Zusätzlich `public/favicon-192.png` (192x192) und `public/favicon.ico` (48px) ablegen — Google crawlt `/favicon.ico` standardmäßig, wenn kein Tag greift.
- In `index.html` die Cache-Buster `?v=7` entfernen, damit die Icon-URLs stabil bleiben, und die Tags ergänzen:
  - `<link rel="icon" href="/favicon.ico" sizes="48x48">`
  - `<link rel="icon" type="image/png" href="/favicon.png" sizes="96x96">`
  - `<link rel="icon" type="image/png" href="/favicon-192.png" sizes="192x192">`
  - `<link rel="apple-touch-icon" href="/apple-touch-icon.png">`
- `public/robots.txt` bleibt offen für Googlebot (bereits der Fall) — wichtig, da ein blockiertes Icon nicht angezeigt wird.

## Hinweis

Google übernimmt das Favicon erst beim nächsten Crawl der Startseite und nur für die veröffentlichte Domain (`https://codebricks.gmbh`). Nach dem Veröffentlichen kann der Crawl in der Google Search Console über "URL prüfen" → "Indexierung beantragen" beschleunigt werden. Bis dahin kann in der Suche noch das alte oder ein Standard-Icon erscheinen.
