# Telefonnummer global austauschen

## Ziel
Überall im Projekt die Telefonnummer von `+49 30 209663650` auf `030 754387430` ändern.

## Betroffene Stellen
- `index.html` – JSON-LD `telephone`
- `src/pages/Impressum.tsx` – Impressumstext
- `src/pages/Kontakt.tsx` – sichtbare Nummer + `tel:`-Link
- `src/components/limex/Footer.tsx` – sichtbare Nummer + `tel:`-Link

## Durchführung
1. In allen Dateien die lesbare Nummer austauschen.
2. In `Kontakt.tsx` und `Footer.tsx` auch den `tel:`-Link auf `tel:+4930754387430` aktualisieren.
3. Projekt builden, um sicherzustellen, dass keine Syntaxfehler entstehen.
4. Kurze Suche nach Restbeständen der alten Nummer durchführen.

## Nicht im Scope
- E-Mail-Adresse bleibt `kontakt@limex-solutions.net`.
- Meta-Pixel oder andere Tracking-Änderungen sind nicht Teil dieses Plans.
