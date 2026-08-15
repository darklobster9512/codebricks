# codebricks.gmbh als erlaubten Host eintragen

## Problem
`vite.config.ts` erlaubt aktuell nur die alten LIMEX-Domains. Aufrufe über `codebricks.gmbh` werden vom Vite-Dev-Server mit "Blocked request" abgewiesen.

## Änderung
In `vite.config.ts` `server.allowedHosts` auf die aktuellen Domains umstellen:

```ts
allowedHosts: [
  "codebricks.gmbh",
  "www.codebricks.gmbh",
  ".lovable.app",
],
```

Die veralteten `limex.solutions` / `limex-solutions.gmbh` Einträge entfallen.

## Technische Details
- Betrifft nur den Entwicklungs-/Preview-Server, keine Auswirkung auf den Produktions-Build.
- Keine weiteren Dateien betroffen.
