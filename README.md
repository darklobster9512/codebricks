# LIMEX Solutions – Corporate Website

Corporate-Website der **LIMEX Solutions GmbH**, Berlin.
Themenschwerpunkte: IT-Beratung, individuelle Softwareentwicklung und Systemintegration.

## Tech-Stack

- Vite + React 18 + TypeScript
- Tailwind CSS 3 + shadcn/ui
- React Router 6
- react-helmet-async für Per-Route-SEO

## Entwicklung

```bash
npm install --legacy-peer-deps
npm run dev
```

Der Dev-Server läuft anschließend unter `http://localhost:8080`.

## Build

```bash
npm run build
```

Der Produktions-Build landet in `dist/` und kann statisch ausgeliefert werden
(z. B. via nginx oder einem beliebigen Static-Host).

## Struktur

- `src/pages/` – Routen (`/`, `/beratung`, `/softwareentwicklung`, `/systemintegration`, `/insights`, `/karriere`, `/kontakt`, `/impressum`, `/datenschutz`)
- `src/components/limex/` – LIMEX-spezifische Layout-Bausteine (Header, Footer, Hero, Section, SEO …)
- `src/components/ui/` – shadcn/ui-Komponenten
- `src/data/` – Redaktionelle Inhalte (z. B. Stellenanzeigen)
- `public/` – Statische Assets (Favicon, Bilder, robots, sitemap)

## Kontakt

LIMEX Solutions GmbH · Blankenhainer Str. 5 · 12249 Berlin · kontakt@limex-solutions.net
