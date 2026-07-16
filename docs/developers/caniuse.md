---
description: "Controleer browserondersteuning met Can I Use en bepaal wanneer progressive enhancement, een fallback of extra tests nodig zijn."
audience: developers
---

# Ondersteuning / compatibiliteitstabellen

[Can I Use↗](https://caniuse.com/) biedt actuele ondersteuningstabellen voor front-end-webtechnologieën in desktop- en mobiele browsers.

Hiermee zie je welke functies breed beschikbaar zijn en waar een fallback of alternatieve implementatie nodig is. Baseer de beslissing op de browsers en versies die je organisatie daadwerkelijk ondersteunt; een groen totaalpercentage alleen is onvoldoende.

## Zo gebruik je de gegevens

1. Zoek de gewenste HTML-, CSS- of JavaScript-functie op.
2. Controleer beperkingen en voetnoten per browser, niet alleen de kleur van de tabel.
3. Vergelijk de uitkomst met je analytics en afgesproken browsermatrix.
4. Kies waar nodig voor **progressive enhancement**: de basisfunctionaliteit blijft werken, terwijl moderne browsers extra mogelijkheden krijgen.
5. Test de uiteindelijke implementatie op echte apparaten of betrouwbare browseromgevingen.

::: warning
Vendor prefixes en polyfills lossen niet ieder compatibiliteitsprobleem op. Controleer ook prestaties, toegankelijkheid en gedrag wanneer JavaScript niet of vertraagd wordt geladen.
:::
