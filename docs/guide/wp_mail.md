---
description: "Om je website e-mails te kunnen laten versturen en ontvangen — bijvoorbeeld vanuit contact- of bestelformulieren — moet je SMTP (Simple Mail Transfer Protocol) configureren."
audience: customers
---

# E-mail configureren voor WordPress

Om je website e-mails te kunnen laten versturen en ontvangen — bijvoorbeeld vanuit contact- of bestelformulieren — moet je **SMTP (Simple Mail Transfer Protocol)** configureren.

Er zijn verschillende plugins die dit eenvoudig maken. In deze handleiding gebruiken we [WP Mail SMTP↗](https://wordpress.org/plugins/wp-mail-smtp/).

## Waarom SMTP belangrijk is

Standaard verstuurt WordPress e-mails via de PHP-functie `mail()`. Veel providers blokkeren of beperken deze functie, wat vaak leidt tot afleverproblemen. Met SMTP worden je e-mails verstuurd via een vertrouwde mailserver — wat de afleverbaarheid verbetert en zorgt voor correcte authenticatie van de berichten.

## Stap 1 — Installeer en activeer de plugin

1. Installeer en activeer **WP Mail SMTP** vanuit de WordPress-pluginbibliotheek.
2. Ga in het WordPress-dashboard naar **WP Mail SMTP → Settings**.
3. Scrol omlaag naar het onderdeel **Mailer** en kies **Other SMTP** (rechtsonder).

## Stap 2 — Vul je SMTP-gegevens in

De waarden hieronder vind je terug onder **E-mailclient-instellingen** in je **OS Cloud**-paneel. Vervang `jouwdomein.nl` door je werkelijke domeinnaam.

| Instelling | Waarde |
| --- | --- |
| **SMTP Host** | `mail.jouwdomein.nl` |
| **Encryption** | TLS |
| **SMTP Port** | `587` |
| **SMTP Auth** | Ingeschakeld |
| **SMTP Username** | Je volledige e-mailadres |
| **SMTP Password** | Je e-mailwachtwoord |

Vul in de laatste twee velden (**Naam** en **E-mail**) in hoe je klanten je e-mails te zien moeten krijgen (de "van"-naam en het afzenderadres).

## Stap 3 — Afronden en een testmail versturen

1. Wil je extra functies zoals wekelijkse rapporten, gedetailleerde logs of e-mailmeldingen (Pro-versie)? Schakel deze tijdens de setup in. Anders klik je op **Volgende** of **Overslaan** om door te gaan.
2. Verstuur na het voltooien van de configuratie een **testmail** om te controleren of alles werkt.

Je krijgt een bevestigingsmelding te zien zodra SMTP actief en functioneel is.
