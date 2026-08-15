# Logo als PNG exportieren

Das Header-Logo (`src/assets/logo-codebricks.png`, 1536x512, transparent) als Download bereitstellen.

## Umfang
- Original 1:1 als `codebricks-logo.png` exportieren.
- Zusätzlich eine zugeschnittene Variante `codebricks-logo-trimmed.png` ohne die transparenten Ränder (nur der sichtbare Schriftzug).
- Beide Dateien als Download-Artefakte bereitstellen.

## Technisch
- Kopie der Quelldatei nach `/mnt/documents/`.
- Zuschnitt via PIL `getbbox()` auf den nicht-transparenten Bereich.
- Keine Änderungen am Website-Code; Header und Footer bleiben unverändert.
