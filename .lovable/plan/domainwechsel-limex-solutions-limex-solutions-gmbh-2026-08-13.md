# Domainwechsel: limex.solutions → limex-solutions.gmbh

Alle Stellen im Projekt, die die Web-Domain nennen, werden auf `limex-solutions.gmbh` umgestellt. Die E-Mail-Adresse (`kontakt@limex-solutions.net`) bleibt unverändert.

## Änderungen

- `index.html`: Canonical-URL und JSON-LD `url` → `https://limex-solutions.gmbh`
- `src/pages/Impressum.tsx`: Web-Link und Linktext → `https://limex-solutions.gmbh`
- `vite.config.ts`: `allowedHosts` → `limex-solutions.gmbh`, `www.limex-solutions.gmbh`
- `public/sitemap.xml`: veraltete `for-tel.solutions`-URLs auf die neue Domain und die aktuellen Routen umstellen (`/`, `/beratung`, `/softwareentwicklung`, `/systemintegration`, `/team`, `/karriere`, `/kontakt`, `/impressum`, `/datenschutz`)
- `public/robots.txt`: Sitemap-Verweis → `https://limex-solutions.gmbh/sitemap.xml`

## Hinweis

Die Domain muss zusätzlich in den Projekteinstellungen unter Domains verbunden werden, damit sie tatsächlich ausgeliefert wird — der Code-Wechsel allein reicht dafür nicht.
