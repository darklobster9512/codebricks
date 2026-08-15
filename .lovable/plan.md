# Bewerbungsformular: Branding-ID und Backend-Anbindung korrigieren

## Ziel
Das Bewerbungsformular soll auf die neue Branding-ID laufen und zuverlässig gegen die Edge Function des Referenzprojekts "vic-automation" senden.

## Was geändert wird (nur `src/pages/Bewerbung.tsx`)

1. **Branding-ID** auf `56aa260c-f3bc-44d3-a37b-ceb3ba01d2d9` setzen.
2. **Anon-Key korrigieren.** Der aktuell hinterlegte Key gehört zur Projekt-Referenz `laovvnaupdecerpvwzmh`, die Function-URL zeigt aber auf `laozvnaupdecerpvwzmh`. Der Key wird durch den passenden öffentlichen Key aus dem Referenzprojekt ersetzt.
3. **Function-URL bestätigt korrekt:** `https://laozvnaupdecerpvwzmh.supabase.co/functions/v1/submit-application` — bleibt unverändert.
4. **Feldname korrigieren:** Die Function liest `zip_code`, das Formular sendet aktuell `zip`. Wird angeglichen.
5. **Leeres `resume`-Feld** nicht mehr mitsenden (die Function erwartet dort eine PDF-Datei oder gar nichts).

## Technische Details
- `employment_type` erlaubt `minijob`, `teilzeit`, `vollzeit` — die aktuellen Auswahlwerte (Teilzeit/Minijob) passen.
- Nach der Änderung wird ein Testabsenden gegen die Function ausgeführt und die Antwort geprüft.