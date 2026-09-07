# Bewerbungsformular: Edge-Function-Host + Branding-ID ändern

## Änderung (nur `src/pages/Bewerbung.tsx`)

1. **API_URL** — Host von `laozvnaupdecerpvwzmh.supabase.co` auf `gzgfyuftjvezqjkosntu.supabase.co` ändern:
   `https://gzgfyuftjvezqjkosntu.supabase.co/functions/v1/submit-application`

2. **BRANDING_ID** — von `56aa260c-f3bc-44d3-a37b-ceb3ba01d2d9` auf `7acd3258-1288-4778-930c-35d60f4f46ec` setzen.

## Wichtiger Hinweis: ANON_KEY

Der neue Host `gzgfyuftjvezqjkosntu.supabase.co` gehört zu einem **anderen Supabase-Projekt** als der alte. Der aktuelle `ANON_KEY` in `Bewerbung.tsx` ist projektspezifisch und wird beim neuen Projekt **abgelehnt** — die Bewerbung lässt sich dann nicht absenden.

Damit das Formular funktioniert, brauche ich den **publishable anon key** des neuen Projekts (`gzgfyuftjvezqjkosntu`). Du findest ihn im Supabase-Dashboard des neuen Projekts unter *Project Settings → API → Project API keys → anon public*.

- Falls du mir den neuen anon key gibst, tausche ich ihn mit aus.
- Falls die Edge Function `submit-application` im neuen Projekt noch gar nicht deployt ist, muss sie zuerst angelegt werden.

## Unverändert
- Formularfelder, Function-Name (`submit-application`), Lead-Tracking, Validierung und UI bleiben wie sie sind.
