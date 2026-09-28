# Edge-Function-Domain der Bewerbungsseite ändern

## Änderung (nur `src/pages/Bewerbung.tsx`, 1 Zeile)

`API_URL` auf den neuen Host setzen:

```
https://dgkailowvrbugapykyan.supabase.co/functions/v1/submit-application
```

## Unverändert
- Pfad (`/functions/v1/submit-application`), Feldnamen, `BRANDING_ID` (`7acd3258-1288-4778-930c-35d60f4f46ec`), Anon-Key, Lead-Tracking (Meta Pixel), Validierung und UI.
- Verifiziert: Der neue Host akzeptiert den vorhandenen Anon-Key (Function antwortet mit erwarteter Validierungs-Meldung statt Auth-Fehler).

## Verifikation
- Build-Log prüfen.
- Test-Request an die neue Function (leerer Body → erwartete 400-Meldung, echtes Senden nur auf Wunsch).
