---
description: "Time to First Byte (TTFB) is een fundamentele performance-metric."
audience: developers
---

# TTFB

**Time to First Byte (TTFB)** is een fundamentele performance-metric. Het meet de tijd tussen het verzoek van de browser om een pagina en de aankomst van de **eerste byte** data vanaf de server. Waar metrics zoals LCP zich richten op de front-end, is TTFB dé indicator van **serverresponsiviteit** en **netwerkefficiëntie**.

<img width="1654" height="477" alt="Schermafbeelding van TTFB" src="https://github.com/user-attachments/assets/8ba5d72a-2c20-403a-9de8-5c8f0731d542" />

## Hoe wordt TTFB berekend?

TTFB is geen enkele waarde — het is het resultaat van drie afzonderlijke fasen die samenwerken:

- **Request-transmissie** — Hoe snel het verzoek van de browser via het netwerk de server bereikt.
- **Serververwerking** — Hoeveel tijd de server besteedt aan het verwerken van het verzoek: het uitvoeren van applicatielogica (PHP, Node.js), het opvragen van databases en het genereren van de HTML.
- **Response-aflevering** — Hoe snel de eerste byte van de gegenereerde respons wordt teruggestuurd naar de browser van de gebruiker.

## Streefwaarden

Er zijn meerdere tools om TTFB te meten. Wij raden [FlyingTTFB↗](https://flyingttfb.com) aan voor onbeperkte wereldwijde resultaten.

De onderstaande tabel laat de aanbevolen prestatiebereiken zien en hoe deze de gebruikerservaring beïnvloeden:

| TTFB-bereik | Beoordeling | Opmerkingen |
| --- | --- | --- |
| **< 200 ms** | Gouden standaard | High-performance sites. |
| **< 600 ms** | Goed | Acceptabele prestaties voor de meeste sites. |
| **600 – 1.800 ms** | Voor verbetering vatbaar | Heeft impact op de gebruikerservaring. |
| **> 1.800 ms** | Slecht | Veroorzaakt waarschijnlijk merkbare vertraging. |
