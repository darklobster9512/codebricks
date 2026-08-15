# Visueller Neuaufbau: unverwechselbares Bento-Design

Ziel: Die Website bleibt inhaltlich identisch (Codebricks GmbH, MDD), sieht aber komplett anders aus als die Remix-Vorlage — hell, mit blauem Akzent, aber neuer Struktur, Typografie und Formsprache.

## Neue Designrichtung

- Palette "Cloud White": Background `#FAFBFC`, Surface `#FFFFFF`, Linien `#E8ECF1`, Muted `#94A3B8`, Primary `#3B82F6`, Tiefton Navy `#0F1B3D` für dunkle Bänder.
- Typografie: **Space Grotesk** für Headlines (statt Urbanist), **DM Sans** für Fließtext (statt Epilogue). JetBrains Mono entfällt als Section-Label-Font; Labels werden zu kleinen Uppercase-Chips in Space Grotesk.
- Formsprache: weichere, größere Radien (`--radius: 1rem`), Kacheln mit dünner Linie plus sehr weichem Schatten statt der bisherigen harten Kanten und "Ruled Rows".
- Neue Sektionslogik: **Bento-Grid** — gemischte Kachelgrößen (2x2, 1x2, 1x1) statt durchgehender Trennlinien und 50/50-Splits. Bilder werden Teil der Kacheln (große Bildkachel neben mehreren Textkacheln).

## Header & Footer (komplett neu)

- Header: freischwebende, abgerundete Navigationsleiste mit weichem Schatten (statt schmaler, randloser Top-Bar mit Unterlinie). Neue Wortmarke links, Nav mittig als Pill-Links mit aktivem Zustand, Primär-Button rechts.
- Footer: dunkles Navy-Band mit großer Claim-Zeile oben und vierspaltigem Linkblock darunter (statt hellem 4-Spalten-Footer).

## Wortmarke

Neues Codebricks-Logo im neuen Stil (geometrisch, Space-Grotesk-nah, blaues Bausteinsymbol), Favicon daraus abgeleitet. Das alte Logo wird ersetzt.

## Seiten

Alle Seiten werden auf die neuen Bausteine umgestellt:

- **Start**: Hero mit Split-Bildkachel und abgerundetem Bildrahmen, danach Bento-Blöcke für Leistungen, Methode, Ergebnis und Grundsätze.
- **Plattform / Modellgetriebene Entwicklung / Services**: Page-Hero neu (Chip + große Headline + Kennzahlen-Kacheln), Inhalte als Bento-Kacheln; die bestehenden 50/50-Sektionen werden zu asymmetrischen Bild-/Textkacheln.
- **Team, Karriere, Karriere-Detail, Bewerbung, Kontakt**: Karten-, Listen- und Formular-Styles auf die neuen Tokens und Radien umgestellt.
- **Impressum, Datenschutz, 404**: typografische Anpassung an das neue System.

Fotos bleiben unverändert, nur die Rahmung ändert sich (abgerundet, in Kacheln eingebettet).

## Technische Umsetzung

- `src/index.css`: neue HSL-Tokens (Cloud-White-Palette), `--radius: 1rem`, Google-Fonts-Import auf Space Grotesk + DM Sans umstellen, alte Gradient-/Glass-Utilities durch neue Bento-Utilities (`.tile`, `.tile-accent`, weiche Schatten) ersetzen.
- `tailwind.config.ts`: `fontFamily.sans` = DM Sans, `fontFamily.display` = Space Grotesk; Schatten- und Radius-Erweiterungen.
- Neue Komponente `src/components/limex/BentoGrid.tsx` (Grid + `BentoTile` mit Größenvarianten). `Section.tsx`, `PageHero.tsx`, `HeroFull.tsx`, `CTABand.tsx`, `SplitSection.tsx`, `Header.tsx`, `Footer.tsx` werden neu gestaltet; `SplitSection` bleibt als API erhalten, rendert aber die neue Kachel-Optik.
- Hardcodierte Hex-Werte (`#E6ECF5` etc.) in allen Seiten und Komponenten durch semantische Tokens ersetzen.
- Neues Logo via Bildgenerierung nach `src/assets/logo-codebricks.png` plus Favicon; `index.html` Theme-Color anpassen.
- Projektspeicher (Design-Regeln zu Farben, Typo, Sektionslogik, Header/Footer) auf das neue System aktualisieren.

## Prüfung

Screenshots aller Seiten via Playwright (Desktop + mobil) nach dem Umbau, Kontrast- und Layoutkontrolle.
