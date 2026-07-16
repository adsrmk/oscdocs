---
description: "Sommige klanten lopen tegen problemen aan bij het aanvragen van een SSL-certificaat voor hun website — meestal kort na een domeinoverdracht of na het wijzigen van nameservers/DNS-records."
audience: customers
---

# SSL-certificaten aanvragen

Sommige klanten lopen tegen problemen aan bij het aanvragen van een SSL-certificaat voor hun website — meestal kort na een domeinoverdracht of na het wijzigen van nameservers/DNS-records.

Hieronder vind je de meest voorkomende fouten en hun oplossingen.

## Error 400 — Timeout during connect

```
Failed to issue a Let's Encrypt certificate for example.site.nl: LetsEncrypt challenge failed
for example.site.nl: Some(ServerError { type: Some("urn:ietf:params:acme:error:connection"),
title: None, status: Some(400), detail: Some("91.98.61.44: Fetching
http://example.site.nl/.well-known/acme-challenge/S2MRYRq83Hi7ADEzBii1fko-ZGuNzp-I73BLyzFYJ28:
Timeout during connect (likely firewall problem)") })
```

Deze fout betekent meestal dat de firewall (**ModSecurity**) het verzoek tegenhoudt voordat het de Web Application Firewall (WAF) bereikt.

**Oplossing:** Deze fout komt tegenwoordig vrijwel niet meer voor. Sinds v12.04 is MODSEC uitgeschakeld vanwege de minimale meerwaarde en het hoge aantal interne blokkades.

## Error 403 — Unauthorized

```
Failed to issue a Let's Encrypt certificate for example.site.nl: LetsEncrypt challenge failed
for example.site.nl: Some(ServerError { type: Some("urn:ietf:params:acme:error:unauthorized"),
title: None, status: Some(403), detail: Some("2a01:4f2:1c1e:51c7::1: Invalid response from
http://example.site.nl/.well-known/acme-challenge/ybh4LsRVboU-qkGSJE3s3ElIYu1_5kFT78c9cL3LKuY: 404") })
```

Komt meestal voor kort nadat je een domein hebt toegevoegd aan het paneel of je nameservers/DNS-records hebt gewijzigd. In de meeste gevallen ligt het aan DNS-propagatie en lost het zich vanzelf op binnen ongeveer **één uur**.

**Oplossing (als het probleem na een uur nog steeds optreedt):**

1. Selecteer je domein.
2. Open het tabblad **Beveiliging**.
3. Probeer **Force HTTPS** uit te schakelen en vraag het certificaat opnieuw aan.

## Error 429 — Rate limited

```
Failed to issue a Let's Encrypt certificate for example.site.nl: SSL error: Server(ServerError {
type: Some("urn:ietf:params:acme:error:rateLimited"), title: None, status: Some(429),
detail: Some("too many certificates (5) already issued for this exact set of identifiers in the
last 168h0m0s, retry after 2025-09-18 09:13:16 UTC: see https://letsencrypt.org/docs/rate-limits/") })
```

Als je in korte tijd meerdere certificaten aanvraagt, blokkeert Let's Encrypt tijdelijk verdere verzoeken voor jouw domein. Deze beperking is tijdelijk en wordt automatisch opgeheven na een aantal uur.

**Oplossing:** Wacht tot de cooldown-periode voorbij is voordat je het opnieuw probeert. Het exacte tijdstip waarop je weer mag, staat in de foutmelding.

<div class="tip custom-block" style="padding-top: 8px">
Krijg je een andere foutcode? Neem dan contact met ons op. We helpen je het probleem oplossen en voegen het toe aan deze documentatie zodat anderen er in de toekomst van kunnen profiteren.
</div>
