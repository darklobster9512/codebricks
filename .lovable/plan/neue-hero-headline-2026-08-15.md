# Neue Hero-Headline

## Ziel
Die Hero-Aussage auf der Startseite wird schärfer und produktorientierter: Codebricks tritt als Hersteller von Werkzeugen auf, nicht als Dienstleister.

## Neuer Text

**Headline**
> Wir bauen die Werkzeuge, die **Ihren Code schreiben**.

Der Teil "Ihren Code schreiben" steht in der blauen Akzentfarbe, alles andere in Navy — gleiche Schrift, Größe und Zeilenführung wie bisher.

**Subline (geschärft, kürzer)**
> Modelle, eigene DSLs und Generatoren, aus denen produktionsreifer Code entsteht — als Plattform mit Lizenz, Einführung und Hersteller-Support aus Berlin.

**Buttons** bleiben unverändert: "Live-Demo vereinbaren" und "Plattform ansehen".

## Technische Umsetzung
- Nur `src/components/limex/HeroFull.tsx` wird angepasst: Inhalt der `<h1>` und des Absatzes darunter.
- Keine Layout-, Grid- oder Style-Änderungen; Kacheln, Bild und Kennzahlen bleiben identisch.
- Kontrolle per Screenshot: Headline belegt auf Desktop maximal drei Zeilen und bricht auf Mobile sauber um.