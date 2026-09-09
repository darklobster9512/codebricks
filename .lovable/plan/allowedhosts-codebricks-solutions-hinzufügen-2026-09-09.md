# allowedHosts: codebricks.solutions hinzufügen

## Ziel
`vite.config.ts` erlaubt aktuell nur `codebricks.gmbh`, `www.codebricks.gmbh` und `.lovable.app`. Aufrufe über die Domain `codebricks.solutions` werden vom Vite-Dev-Server mit „Blocked request" abgewiesen. Die Domain soll als erlaubter Host aufgenommen werden.

## Änderung
In `vite.config.ts` `server.allowedHosts` um `codebricks.solutions` und `www.codebricks.solutions` erweitern:

```ts
allowedHosts: [
  "codebricks.gmbh",
  "www.codebricks.gmbh",
  "codebricks.solutions",
  "www.codebricks.solutions",
  ".lovable.app",
],
```

## Technische Details
- Betrifft nur den Entwicklungs-/Preview-Server, keine Auswirkung auf den Produktions-Build.
- Keine weiteren Dateien betroffen.
