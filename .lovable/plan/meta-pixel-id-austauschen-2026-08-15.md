# Meta-Pixel-ID austauschen

Die Pixel-ID wird von `1768879150791223` auf `1055052437112922` geändert.

## Änderung

`index.html`:
- `fbq('init', '1055052437112922')` im Pixel-Script im Head
- `<noscript>`-Bild-URL im Body: `...facebook.com/tr?id=1055052437112922&ev=PageView&noscript=1`

Sonst bleibt alles unverändert: `PageView` bei jedem Routenwechsel über `ScrollToTop.tsx`, `Lead` beim Klick auf den Abschicken-Button im Bewerbungsformular.
