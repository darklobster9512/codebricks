# Mobile-Optimierung: alle Seiten

Die Seiten laufen auf dem Handy ohne horizontales Scrollen, aber sie wirken wie eine verkleinerte Desktop-Version: sehr große Überschriften, üppige Innenabstände, ein Cookie-Banner im alten Design und Formulare, die auf iPhones beim Tippen hineinzoomen. Das wird durchgängig geglättet.

## 1. Cookie-Banner neu (`src/components/CookieBanner.tsx`)
- Läuft noch im alten Design (Glas-Effekt, blauer Verlauf) und passt nicht zum Bento-Look; das Keks-Emoji wird als leeres Kästchen dargestellt.
- Neu: helle Bento-Kachel mit Rand und weichem Schatten, kein Emoji, Text und zwei Pill-Buttons, auf dem Handy Buttons nebeneinander in voller Breite.
- Sitzt näher am unteren Rand mit sicherem Abstand (Safe-Area), damit er nicht über wichtige Inhalte kippt.

## 2. Header (`src/components/limex/Header.tsx`)
- Logo auf dem Handy etwas kleiner (Desktop unverändert), damit die Pill-Navbar nicht überproportional hoch wird.
- Mobiles Menü wird zu einem eigenständigen Panel mit eigener Scroll-Fähigkeit und maximaler Höhe, damit alle Punkte auch auf kleinen Geräten erreichbar bleiben.
- Menü schließt zusätzlich beim Tippen außerhalb / auf Escape.

## 3. Typografie und Abstände auf kleinen Screens
- `HeroFull` H1: von 40px auf ca. 32–34px auf dem Handy, Intro auf 16px, Kachel-Padding von `p-8` auf `p-6`.
- `PageHero` H1 analog kleiner, Breadcrumb umbruchsicher.
- `Section`: vertikale Abstände von `py-16` auf `py-12`, Titel von 32px auf 28px, Außenabstand `px-6` → `px-5`.
- `Bento`-Kacheln: Padding `p-7` → `p-6` auf dem Handy, Grid-Abstand `gap-4` → `gap-3`.

## 4. Footer (`src/components/limex/Footer.tsx`)
- Kleinere Radien und Paddings auf dem Handy, Claim von 30px auf 26px, Spalten mit knapperen Abständen, Rechtszeile gestapelt und lesbar.

## 5. Formulare (Bewerbung, Kontakt)
- Eingabefelder und Selects auf mind. 16px Schriftgröße (verhindert iOS-Zoom) und mind. 44px Höhe.
- Absende-Button auf dem Handy volle Breite, Formular-Padding `p-8` → `p-6`.

## 6. Restliche Seiten
- Plattform, Modellgetriebene Entwicklung, Services, Team, Karriere, Karriere-Detail, Kontakt, Impressum, Datenschutz: Split-Sektionen, Listen und Kachelraster auf die neuen mobilen Abstände ziehen; Bildkacheln bekommen feste Seitenverhältnisse, damit sie nicht zu hoch werden.

## Prüfung
Nach der Umsetzung werden alle Seiten bei 393px und 360px Breite gescreenshottet und auf Überlauf, Tap-Ziele und Textgrößen kontrolliert. Desktop-Layout bleibt unverändert.