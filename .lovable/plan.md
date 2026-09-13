# Domain und E-Mail vollständig auf codebricks-gmbh.com umstellen

## Ziel
Die Website verwendet künftig durchgehend **https://codebricks-gmbh.com** und **kontakt@codebricks-gmbh.com**. Aufrufe über die neue Domain werden nicht mehr vom Vorschau-Server blockiert.

## Änderungen
1. **Neue Domain erlauben**
   - `codebricks-gmbh.com` und `www.codebricks-gmbh.com` in die erlaubten Hosts aufnehmen.
   - Bestehende Domain-Einträge als Rückwärtskompatibilität beibehalten.

2. **Sichtbare Kontaktdaten aktualisieren**
   - Website-Adresse im Impressum auf `https://codebricks-gmbh.com` ändern.
   - Alle sichtbaren E-Mail-Adressen und `mailto:`-Links auf `kontakt@codebricks-gmbh.com` ändern: Impressum, Datenschutz, Kontakt, Karriere und Footer.

3. **SEO und technische Verweise aktualisieren**
   - Canonical- und Open-Graph-Adressen auf die neue Domain umstellen.
   - Strukturierte Unternehmensdaten aktualisieren.
   - Sämtliche Einträge in `sitemap.xml` und den Sitemap-Verweis in `robots.txt` ändern.
   - Die seitenbezogenen Canonical- und Open-Graph-URLs als vollständige URLs unter `https://codebricks-gmbh.com` ausgeben.

4. **Prüfung**
   - Projektweit sicherstellen, dass keine öffentlichen Verweise auf `codebricks.solutions`, `codebricks.gmbh` oder `kontakt@codebricks-gmbh.de` übrig bleiben.
   - Build sowie die neue Domain-Freigabe prüfen.

## Technische Details
Betroffen sind `vite.config.ts`, `index.html`, `public/robots.txt`, `public/sitemap.xml`, die SEO-Komponente sowie die Seiten und der Footer mit E-Mail-Angaben. Inhalte, Gestaltung und Telefonnummer bleiben unverändert.
