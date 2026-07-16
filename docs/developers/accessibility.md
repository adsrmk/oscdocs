---
description: "Gebruik Accessibility Checker als eerste geautomatiseerde controle en combineer de resultaten met handmatige WCAG-tests."
audience: developers
---

# Accessibility Checker

[Accessibility Checker↗](https://AccessibilityChecker.org/) scant webpagina's op bekende toegankelijkheidsproblemen en koppelt bevindingen aan standaarden zoals **WCAG**, **ADA**, **Section 508**, **AODA** en de **European Accessibility Act**. Gebruik de tool als startpunt voor kwaliteitscontrole, niet als volledige conformiteitsverklaring.

## Aanbevolen werkwijze

1. Scan representatieve pagina's, waaronder de homepage, formulieren, accountpagina's en belangrijke landingspagina's.
2. Prioriteer fouten die navigatie of taakuitvoering blokkeren, zoals ontbrekende formulierlabels, onvoldoende contrast en niet-bedienbare elementen.
3. Los het probleem op in het component of template waar het ontstaat, zodat alle onderliggende pagina's profiteren.
4. Test opnieuw en leg vast welke bevindingen zijn opgelost of bewust geaccepteerd.

## Altijd handmatig controleren

Automatische scanners vinden slechts een deel van de mogelijke problemen. Controleer daarom ook toetsenbordnavigatie, zichtbare focus, zoom tot 200%, formulierfouten en de leesvolgorde met een schermlezer. Raadpleeg voor implementatiekeuzes ook de artikelen over [WCAG](/developers/wcag), [ARIA](/developers/ARIA) en [semantische HTML](/developers/semantic_html).

::: tip
Neem toegankelijkheid op in ontwerp, development en acceptatietests. Achteraf repareren kost doorgaans meer tijd en vergroot het risico op inconsistenties.
:::
