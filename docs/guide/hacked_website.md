---
description: Beperk de impact van een vermoedelijk gehackte WordPress-website, bewaar bewijs en herstel vanuit een aantoonbaar schone situatie.
audience: customers
---

# Website gehackt: eerste hulp

Onbekende beheerders, gewijzigde pagina's, ongewenste redirects, malwarewaarschuwingen of uitgaande spam kunnen wijzen op misbruik. Behandel dit als een beveiligingsincident: werk rustig, leg handelingen vast en voorkom dat waardevol bewijs verloren gaat.

::: danger
Vermoed je dat persoonsgegevens, betaalgegevens of accounts zijn ingezien? Betrek direct de verantwoordelijke voor privacy en beveiliging. Deze handleiding vervangt geen juridisch advies of professionele incidentrespons.
:::

## 1. Leg het incident vast

Noteer wat je ziet, wanneer het begon, wie toegang heeft en welke updates of wijzigingen recent zijn uitgevoerd. Bewaar foutmeldingen, verdachte URL's en relevante logregels. Maak geen openbare screenshots van persoonsgegevens, tokens of configuratiebestanden.

Maak vóór het opschonen een geïsoleerde momentopname van bestanden en database. Een besmette back-up is **niet geschikt om direct terug te zetten**, maar kan later nodig zijn om de oorzaak en omvang te onderzoeken.

## 2. Beperk verdere schade

- Plaats de site zo nodig tijdelijk in onderhoud of beperk publieke toegang.
- Stop verdachte cronjobs, onbekende deployments en ongewenste uitgaande e-mail.
- Verwijder verdachte bestanden nog niet voordat een kopie en relevante logs veilig zijn bewaard.
- Controleer of andere websites, mailboxen of apparaten dezelfde inloggegevens gebruiken.

Als je niet zeker weet hoe je de site veilig isoleert, neem dan direct [contact op met support](/guide/contact-support).

## 3. Beveilig alle toegangen

Wijzig vanaf een schoon apparaat de wachtwoorden van:

- OS Cloud en andere beheerdersaccounts;
- alle WordPress-beheerders;
- SFTP, SSH en deploymentsleutels;
- database- en mailboxaccounts wanneer daar aanwijzingen voor zijn;
- externe diensten met toegang tot de website.

Verwijder onbekende gebruikers, trek ongebruikte sleutels en API-tokens in en activeer [2FA](/guide/2fa). Ververs na het veiligstellen van bewijs ook de WordPress salts, zodat bestaande sessies ongeldig worden.

## 4. Bepaal een schone herstelbron

Gebruik bij voorkeur een back-up van vóór het eerste bekende incident. Controleer de datum, integriteit en inhoud voordat je herstelt. Een herstel alleen is onvoldoende wanneer de oorspronkelijke kwetsbaarheid, gestolen toegang of achterdeur blijft bestaan.

Herinstalleer WordPress-core vanuit een vertrouwde bron en vervang plugins en thema's door schone, actuele exemplaren. Het artikel [WordPress-core herstellen met WP-CLI](/developers/wp_cli) helpt bij kernbestanden, maar controleert niet automatisch uploads, maatwerk of de database.

De officiële WordPress-documentatie adviseert onder meer symptomen en tijdstippen vast te leggen, de lokale omgeving te controleren, alle toegangen opnieuw te beveiligen en na herstel opnieuw wachtwoorden te wijzigen. Zie [FAQ My site was hacked↗](https://wordpress.org/documentation/article/faq-my-site-was-hacked/).

## 5. Zoek de oorzaak

Controleer minimaal:

- verouderde of verlaten plugins en thema's;
- onbekende beheerders en actieve sessies;
- gewijzigde bestanden, `.htaccess`, `wp-config.php` en mu-plugins;
- verdachte PHP-bestanden in uploads- en cachemappen;
- geplande taken, database-injecties en onbekende redirects;
- apparaten of wachtwoordmanagers waarmee beheerders inloggen.

Alleen zichtbare malware verwijderen is geen afgerond herstel. Achterdeuren kunnen op meerdere plaatsen aanwezig zijn.

## 6. Controleer vóór heropening

Test de site eerst afgeschermd. Controleer beheeraccounts, formulieren, betalingen, uitgaande e-mail, geplande taken, DNS en SSL. Scan vervolgens opnieuw en controleer of zoekmachines of browsers nog een waarschuwing tonen.

Werk WordPress, plugins en thema's bij, verwijder ongebruikte software en stel [automatische updates](/developers/auto_updates) alleen in waar gecontroleerde updates verantwoord zijn. Bewaak logs en wijzigingen na heropening extra intensief.

## Informatie voor support

Vermeld het domein, tijdstip van ontdekking, symptomen, recent uitgevoerde wijzigingen en reeds genomen maatregelen. Deel geen wachtwoorden of privésleutels. Geef duidelijk aan of de website nog online staat en of er mogelijk persoonsgegevens betrokken zijn.
