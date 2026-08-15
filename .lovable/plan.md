# Geschäftsführung ändern + Team neu besetzen

## Geschäftsführung
Einziger Geschäftsführer: **Erik Andreas Hübner**. Alla Lehnert entfällt komplett.

Betroffen:
- `src/pages/Impressum.tsx`: "Geschäftsführer: Erik Andreas Hübner"
- `src/pages/Datenschutz.tsx`: "vertreten durch den Geschäftsführer Erik Andreas Hübner"
- `src/pages/Team.tsx`: Bereich 01 zeigt nur noch eine Person; Titel/Intro angepasst ("Eine Person, die jedes Projekt kennt.")

## Teamseite — neue Besetzung
Alle übrigen Personen bekommen neue Namen. Geschlechterverteilung bleibt identisch (weiblich bleibt weiblich, männlich bleibt männlich), Bereiche bleiben bestehen, Rollen und Fokus werden leicht auf das MDD-/Plattform-Profil geschärft.

| Bereich | alt | neu (gleiches Geschlecht) |
|---|---|---|
| 01 Geschäftsführung | Ivan Kulinstev, Alla Lehnert | Erik Andreas Hübner (allein) |
| 02 Betrieb & Finanzen | Katharina Meinhardt (w), Tobias Reinhard (m) | Sandra Küpper (w), Daniel Ohlert (m) |
| 03 People & Community | Markus Brenner (m), Julian Vollmer (m) | Philipp Radtke (m), Jonas Wiegand (m) |
| 04 Technologie | Dr. Matthias Ehrenberg (m), Sebastian Kleinert (m) | Dr. Henning Aschoff (m), Roman Sedlacek (m) |
| 05 QS & Testing | Franziska Neuhaus (w), Marek Ostrowski (m) | Miriam Falkenstein (w), Pawel Grabowski (m) |
| 06 Kunden & Beratung | Christoph Wendland (m), Lena Brinkmeier (w) | Andreas Löffler (m), Nora Steinbach (w) |

Rollen/Fokus/Beschreibungen werden dabei neu formuliert (z. B. "Lead Plattform-Architektur", "Lead Generator-Engineering", "Lead Testautomatisierung für generierte Systeme"), damit sie zum Framework-/MDD-Geschäft passen.

## Technisch
- Nur Textinhalte in `src/pages/Team.tsx` (Array `bereiche`), `src/pages/Impressum.tsx`, `src/pages/Datenschutz.tsx`.
- Keine Layout-, Komponenten- oder Designänderungen.
- Prüfung auf weitere Vorkommen der alten Namen im Projekt (Karriere-Daten, JSON-LD), damit nirgends ein alter Name stehen bleibt.
