# Seitentitel und Beschreibungen schärfen

Alle Seiten haben bereits Titel/Beschreibungen, aber mehrere sind zu lang für Google (Titel werden ab ~60 Zeichen abgeschnitten, Beschreibungen ab ~160), teils generisch und ohne Keyword-Fokus. Die 404-Seite hat gar keine Metadaten.

## Neue Titel und Beschreibungen

| Route | Titel (< 60 Z.) | Beschreibung (< 160 Z.) |
| --- | --- | --- |
| `/` | Codebricks – modellgetriebene Softwareentwicklung | Frameworks für modellgetriebene Softwareentwicklung aus Berlin: Modellierung, Codegenerierung, Einführung, Schulung und Support. |
| `/plattform` | Codebricks Framework – Modell, Generator, Laufzeit | Metamodell, Modell-Editor, Generatoren und Laufzeitbibliotheken: die Plattform, aus der Ihre Anwendungen reproduzierbar entstehen. |
| `/modellgetriebene-entwicklung` | Modellgetriebene Entwicklung (MDD) in der Praxis | Domänenmodelle, eigene DSLs, Codegenerierung und Roundtrip — wie MDD Altsysteme schrittweise ablöst und Entwicklung beschleunigt. |
| `/services` | Services, Schulung & Lizenzen | Einführung, Generator-Anpassung, Migration, Schulung und Support zum Codebricks-Framework — mit klaren Lizenzmodellen und SLA. |
| `/team` | Team – die Menschen hinter Codebricks | Geschäftsführung, Framework-Entwicklung, Sprachdesign, Qualitätssicherung und Beratung: das Team der Codebricks GmbH in Berlin. |
| `/karriere` | Karriere bei Codebricks – Jobs in Berlin & remote | Offene Stellen in Framework- und Generator-Entwicklung, Sprachdesign, Consulting und Support — in Berlin Mitte oder remote. |
| `/karriere/bewerbung` | Jetzt bei Codebricks bewerben | In wenigen Schritten bewerben: Lebenslauf hochladen, Stelle wählen, absenden. Wir melden uns kurzfristig zurück. |
| `/karriere/:slug` | `{Stellentitel} – Job bei Codebricks` | Kurzbeschreibung der Stelle (wie bisher aus den Stellendaten). |
| `/kontakt` | Kontakt – Codebricks GmbH Berlin | Direkter Draht nach Berlin Mitte: Demo vereinbaren, Angebot anfragen oder Fragen zum Framework klären. Telefon, Mail und Formular. |
| `/impressum` | Impressum | Angaben gemäß § 5 TMG — Codebricks GmbH, Leipziger Platz 15, 10117 Berlin, HRB 258971 B. |
| `/datenschutz` | Datenschutzerklärung | Wie die Codebricks GmbH personenbezogene Daten gemäß DSGVO verarbeitet: Zwecke, Rechtsgrundlagen, Speicherdauer und Ihre Rechte. |
| 404 | Seite nicht gefunden | Diese Seite existiert nicht (mehr). Zurück zur Startseite oder direkt zur Plattform-Übersicht. |

Marken-Suffix „| Codebricks GmbH" wird konsistent im `SEO`-Baustein ergänzt, statt in jedem Titel einzeln — so bleiben die sichtbaren Titel kurz und einheitlich.

## Technisches

- `src/components/limex/SEO.tsx`: optionales Anhängen von „ | Codebricks" (abschaltbar über eine Prop für die Startseite, deren Titel die Marke bereits enthält).
- Titel/Beschreibungen in allen `src/pages/*.tsx` ersetzen.
- `src/pages/NotFound.tsx` bekommt den `SEO`-Baustein inklusive `noindex`.
- `index.html` (statischer Fallback für Crawler ohne JavaScript) erhält denselben Startseiten-Titel und dieselbe Beschreibung.
