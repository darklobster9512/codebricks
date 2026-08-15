# allowedHosts: limex.solutions hinzufügen

## Ziel
`vite.config.ts` erlaubt aktuell nur `limex-solutions.gmbh` und `www.limex-solutions.gmbh`. Die vorherige Hauptdomain `limex.solutions` soll ebenfalls wieder als erlaubter Host aufgenommen werden, damit Vite-Entwicklungsserver und lokale Aufrufe über diese Domain funktionieren.

## Änderung
- In `vite.config.ts` den Eintrag `allowedHosts` erweitern:
  ```ts
  allowedHosts: [
    "limex.solutions",
    "www.limex.solutions",
    "limex-solutions.gmbh",
    "www.limex-solutions.gmbh",
  ],
  ```

## Technische Details
- Vite 5 nutzt `allowedHosts`, um sichere Verbindungen zu erlauben.
- Keine weiteren Dateien betroffen.
- Keine Auswirkungen auf den Produktions-Build oder Head-Metadaten.