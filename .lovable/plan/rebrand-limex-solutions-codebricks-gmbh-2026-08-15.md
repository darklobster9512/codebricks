# Rebrand: LIMEX Solutions → Codebricks GmbH

Die komplette Website wird auf die **Codebricks GmbH** umgestellt: Firmendaten, Inhalte, Navigation, Bilder.

## 1. Firmendaten (überall)

Neu, ersetzt alle Vorkommen von LIMEX:

```text
Codebricks GmbH
Leipziger Platz 15, 10117 Berlin
Amtsgericht Charlottenburg (Berlin), HRB 258971 B
USt-ID DE458097140
Web:   https://codebricks.gmbh
Mail:  kontakt@codebricks-gmbh.de
Tel.:  030 123456789
```

Betroffen: Header, Footer, Impressum, Datenschutz, Kontakt, Karriere/Bewerbung, `index.html` (Title, Description, Canonical, OG, JSON-LD), `README.md`, `public/sitemap.xml`, `public/robots.txt`, `vite.config.ts` (allowedHosts → codebricks.gmbh).

## 2. Neues Logo

Eine Codebricks-Wortmarke im bestehenden Stil (klare Groteske, blauer Akzent, „brick"-Motiv) wird erzeugt und in Header, Footer und als Favicon eingesetzt.

## 3. Neuer Unternehmensgegenstand

„Entwicklung neuartiger Frameworks und Lösungen für die modellgetriebene Softwareentwicklung sowie deren Vertrieb und dazugehörige Dienstleistungen."

Sämtliche Texte (Hero, Leistungen, Prinzipien, Referenzen, Stimmen, FAQ, Technologien, Stellenanzeigen) werden darauf umgeschrieben: Modellierung, Codegenerierung, DSLs, Metamodelle, Low-Code-/MDD-Plattform, Lizenzierung, Schulung und Support.

## 4. Seitenstruktur

Umbenennung mit Weiterleitungen von den alten URLs:

| alt | neu | Inhalt |
| --- | --- | --- |
| `/beratung` | `/plattform` | Das Codebricks-Framework: Modellierung, Generatoren, Laufzeit |
| `/softwareentwicklung` | `/modellgetriebene-entwicklung` | Methodik MDD: Metamodelle, DSLs, Roundtrip |
| `/systemintegration` | `/services` | Einführung, Migration, Schulung, Support, Lizenzen |

Navigation, Footer, Startseite und Sitemap werden entsprechend angepasst. `/leistungen`, `/software`, `/methodik` und die alten Pfade leiten weiter.

## 5. Bilder und 50/50-Sektionen

Echte Fotos (Unsplash-Lizenz, kostenfrei nutzbar) werden ausgewählt, heruntergeladen, optimiert und ins Projekt gelegt — keine KI-Bilder. Motive: Entwicklerteams, Whiteboard-/Modellierungssessions, Berliner Büroarchitektur, Bildschirme mit Code, Workshop-Situationen.

Neue wiederverwendbare Komponente `SplitSection`: links Text (Label, Titel, Fließtext, Bullet-Liste, Link), rechts Bild — auf Mobil untereinander, Bildseite pro Sektion umschaltbar.

Einsatz:
- Startseite: Plattform-Vorstellung, Methodik, Über uns
- `/plattform`: Architektur-Sektion
- `/modellgetriebene-entwicklung`: Vorgehen
- `/services`: Support/Schulung
- Karriere: Team-Sektion
- Kontakt: Standort Leipziger Platz

Bilder erhalten sinnvolle `alt`-Texte, `loading="lazy"` und bleiben gegen Kontextmenü/Drag geschützt.

## Technisches

- Fotos werden nach `src/assets/photos/` gelegt und per ES6-Import eingebunden; Bildquellen/Fotografen in einer Kommentarzeile bzw. optional im Impressum als Bildnachweis.
- Routen-Umbenennung in `App.tsx` inkl. `Navigate`-Redirects; Dateien in `src/pages/` werden umbenannt.
- Design-System (Farben, Typo, Ruled Rows, Section-Logik) bleibt unverändert.
- Abschließend Prüfung im Preview auf allen Routen.
