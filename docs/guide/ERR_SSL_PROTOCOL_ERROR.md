---
description: "Deze foutmelding betekent dat de browser geen beveiligde verbinding kon opzetten, omdat het SSL-certificaat van de website ongeldig is, verkeerd is geconfigureerd of niet kan worden geverifieerd."
audience: customers
---

# ERR_SSL_PROTOCOL_ERROR

Deze foutmelding betekent dat de browser geen beveiligde verbinding kon opzetten, omdat het SSL-certificaat van de website ongeldig is, verkeerd is geconfigureerd of niet kan worden geverifieerd.

In Chrome verschijnt dit soms als **`ERR_PROTOCOL_ERROR`** — een algemenere melding, maar meestal met dezelfde onderliggende SSL-oorzaak.

## Veelvoorkomende oorzaken

- Het SSL/TLS-certificaat ontbreekt, is verlopen of is verkeerd ingesteld
- Een protocolmismatch tussen de browser en de server
- Browser-extensies die het beveiligde verzoek verstoren

## Hoe los je dit op?

Op **OS Cloud** wordt deze fout vaak veroorzaakt door een SSL-certificaat dat nog niet is aangevraagd, niet alle gebruikte hostnamen dekt of is verlopen. Volg de handleiding [SSL-certificaten aanvragen](/guide/SSL) om de configuratie te controleren en een certificaat aan te vragen.

> **Let op:** Maak je gebruik van een managed cloud-pakket en wordt je website verplaatst naar een andere server? Dan wordt dit probleem automatisch opgelost.
