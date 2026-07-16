---
description: "In het Debug-onderdeel beheer je direct de ingebouwde foutopsporingsmodi van WordPress — handig om site-problemen op te sporen."
audience: customers
---

# Debug

In het Debug-onderdeel beheer je direct de ingebouwde foutopsporingsmodi van WordPress — handig om site-problemen op te sporen.

## Beschikbare debug-modi

- **`WP_DEBUG`** — Schakelt de WordPress debug-modus in om onderliggende codeproblemen op te sporen.
- **`WP_DEBUG_LOG`** — Slaat alle fouten op in een logbestand op `wp-content/debug.log`, zodat je ze later kunt bekijken.
- **`WP_DEBUG_DISPLAY`** — Toont debug-meldingen direct in de HTML van de pagina.

<div class="warning custom-block" style="padding-top: 8px">
Gebruik <code>WP_DEBUG_LOG</code> op live sites om fouten in stilte te volgen zonder dat bezoekers er iets van merken. Schakel <code>WP_DEBUG_DISPLAY</code> alleen in op ontwikkelomgevingen — het kan gevoelige code-details zichtbaar maken voor het publiek.
</div>
