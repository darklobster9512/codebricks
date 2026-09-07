# Bewerbungsformular: Edge Function + Branding-ID auf Referenzprojekt umstellen

## Änderung (nur `src/pages/Bewerbung.tsx`)

1. **API_URL** — auf das Referenzprojekt "vic-automation" zeigen:
   `https://gzgfyuftjvezqjkosntu.supabase.co/functions/v1/submit-application`
   (dort ist die Edge Function `submit-application` deployt — verifiziert.)

2. **ANON_KEY** — durch den publishable anon key des Projekts `gzgfyuftjvezqjkosntu` ersetzen
   (liegt im Referenzprojekt unter `VITE_SUPABASE_PUBLISHABLE_KEY`; publishable keys dürfen im Client-Code stehen).

3. **BRANDING_ID** — auf `7acd3258-1288-4778-930c-35d60f4f46ec` setzen.

## Unverändert
- Formularfelder, Function-Name, Lead-Tracking (Meta Pixel), Validierung und UI bleiben wie sie sind.
- Der Referenzaufruf nutzt dieselben Feldnamen (`first_name`, `last_name`, `email`, `phone`, `branding_id`), die das Formular bereits sendet — keine Anpassung nötig.

## Verifikation
- Build-Log prüfen.
- Test-Absendung gegen die neue Function (Erfolgs-Toast bzw. Fehlermeldung aus der Antwort).
