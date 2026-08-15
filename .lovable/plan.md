# Bessere Fotos für die Codebricks-Website

Die aktuellen Bilder sind generische Business-Stockfotos (lachende Meeting-Runden, gelbes Netzwerkkabel, bunter Code-Screen). Sie werden vollständig durch echte, hochwertige Fotos ersetzt — keine KI-Generierung.

## Bildsprache

Eine klare Richtung statt Zufallsauswahl:

- Ruhige, natürliche Lichtstimmung, gedeckte Farben (passt zum blau-weißen Enterprise-Theme)
- Echte Arbeitssituationen aus der Nähe: Hände, Notizen, Whiteboards, Bildschirmausschnitte, Raumdetails
- Keine gestellten Gruppen, die in die Kamera lachen, keine bunten Icon-Bildschirme, keine Kabel-Symbolbilder
- Mindestens 1600 px Breite, Querformat 3:2, einheitlicher Bildschnitt über alle Sektionen

## Quelle und Lizenz

Fotos kommen von Unsplash (kostenlose Nutzung, auch kommerziell, keine Attribution nötig). Kuratiert wird gezielt nach Motiv, nicht per Zufalls-Endpoint. Der Fotografen-Nachweis wird in `src/assets/photos/CREDITS.md` dokumentiert, damit die Herkunft nachvollziehbar bleibt.

## Motivliste

| Einsatzort | Motiv |
| --- | --- |
| Hero (Startseite) | Heller, ruhiger Arbeitsraum, Team an einem Bildschirm, seitlich fotografiert, Fläche links für die Headline |
| Start · Prinzip | Whiteboard mit strukturierten Diagramm-Skizzen, Personen im Anschnitt |
| Start · Ergebnis | Nah am Bildschirm: sachlicher, monochromer Editor-Code |
| Start · Team | Konzentrierter Arbeitsplatz mit Berliner Büro-Charakter, natürliches Licht |
| Plattform · Architektur | Detail: Laptop, Notizbuch, Modellskizze auf dem Tisch |
| Plattform · Codequalität | Ausschnitt Terminal/Diff auf dunklem Bildschirm, ruhig statt bunt |
| MDD · Zusammenarbeit | Zwei Personen im Gespräch vor einem Diagramm, dokumentarisch |
| MDD · Fallbeispiel | Handschriftliche Modellskizze mit Stift, von oben |
| Services · Schulung | Kleine Gruppe am Tisch, jemand erklärt an einem Bildschirm |
| Services · Support | Ruhiger Einzelarbeitsplatz mit Headset, seitlich |

## Ablauf

1. Mehr Kandidaten herunterladen als benötigt und als Kontaktbogen zusammenstellen
2. Kontaktbogen sichten und aussortieren, was gestellt oder farblich unpassend wirkt — erst dann festlegen
3. Ausgewählte Bilder auf 1600 px Breite, 3:2, JPEG (Qualität ~82) normalisieren, Dateigröße unter ~250 KB
4. Dateien in `src/assets/photos/` ersetzen, Dateinamen beibehalten, damit keine Importe brechen
5. `alt`-Texte in Hero, Start, Plattform, Modellgetriebene Entwicklung und Services an die neuen Motive anpassen
6. Alle Seiten im Browser prüfen (Screenshots), besonders die Lesbarkeit der Hero-Headline über dem Bild

## Technisches

- Betroffen: `src/assets/photos/*`, `src/components/limex/HeroFull.tsx`, `src/pages/Start.tsx`, `src/pages/Plattform.tsx`, `src/pages/ModellgetriebeneEntwicklung.tsx`, `src/pages/Services.tsx`
- Nicht mehr genutzte Motive (`berlin-skyline.jpg`, `network-cable.jpg`, `team-conference.jpg`) werden entfernt
- `SplitSection` und Hero-Layout bleiben unverändert; es ändern sich nur Bilddateien und Alt-Texte