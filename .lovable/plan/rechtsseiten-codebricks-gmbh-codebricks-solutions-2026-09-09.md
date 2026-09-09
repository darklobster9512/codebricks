# Rechtsseiten: codebricks.gmbh → codebricks.solutions

## Ziel
Auf den Rechtsseiten (Impressum, Datenschutz) soll die Web-URL von `codebricks.gmbh` auf die neue Domain `codebricks.solutions` umgestellt werden. Die E-Mail-Adresse `kontakt@codebricks-gmbh.de` bleibt unverändert.

## Änderung
In `src/pages/Impressum.tsx` (Zeile 44):
```tsx
Web: <a href="https://codebricks.solutions" className="text-[#3B82F6] hover:underline">https://codebricks.solutions</a>
```

`src/pages/Datenschutz.tsx` enthält nur die E-Mail-Adresse (`kontakt@codebricks-gmbh.de`), keine Web-URL — dort ist keine Änderung nötig.

## Technische Details
- Betrifft nur `Impressum.tsx`.
- E-Mail-Adresse bleibt unverändert.
- Keine Auswirkung auf andere Seiten, Header, Footer oder Build.
