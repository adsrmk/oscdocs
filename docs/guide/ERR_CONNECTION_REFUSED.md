---
description: "De browser heeft het serveradres gevonden, maar de verbinding is geweigerd voordat de website een antwoord kon geven."
audience: customers
---

# ERR_CONNECTION_REFUSED

De browser heeft het serveradres gevonden, maar de verbinding is geweigerd voordat de website een antwoord kon geven. De oorzaak kan bij de server, een firewall of een lokale VPN- of proxyconfiguratie liggen.

## Controleer eerst de omvang

1. Bekijk de [OS Cloud-statuspagina](https://status.oscloud.nl/).
2. Open de website op een ander apparaat en via een ander netwerk, bijvoorbeeld mobiele data.
3. Controleer zowel `https://` als de exacte hostnaam die in OS Cloud is ingesteld.

Werkt de website alleen op een ander netwerk, dan blokkeert waarschijnlijk een lokale firewall, VPN, proxy of beveiligingsfilter de verbinding. Werkt de website nergens, controleer dan de website- en serverstatus in het paneel.

## Mogelijke oplossingen

- Pauzeer een VPN of proxy tijdelijk en test opnieuw. Schakel beveiligingssoftware niet permanent uit; voeg indien nodig een gerichte uitzondering toe.
- Controleer of het domein naar het juiste OS Cloud-serveradres verwijst.
- Controleer of de websiteapplicatie actief is en niet is gestopt door onderhoud, een mislukte deployment of een resourceprobleem.
- Controleer recente firewall- of toegangsregels en draai de laatste wijziging terug als het probleem direct daarna begon.
- Gebruik je een afwijkende poort? Controleer of die poort beschikbaar en toegestaan is.

## Controleer het resultaat

De verbinding werkt wanneer de website via HTTPS op meerdere netwerken opent. Vermeld bij een supportaanvraag het domein, het tijdstip, de geteste netwerken en eventuele recente DNS-, firewall- of deploymentwijzigingen.

::: warning
Deel geen firewall-export, privésleutel of inloggegevens in een supportbericht. Stuur alleen relevante, geanonimiseerde logregels mee.
:::
