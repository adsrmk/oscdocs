---
description: Los HTTP-fouten 403, 404, 500 en 504 doelgericht op door eerst bereik, logs en recente wijzigingen te controleren.
audience: customers
---

# HTTP-fouten 403, 404, 500 en 504 oplossen

Een HTTP-statuscode beschrijft waar een verzoek is geëindigd. De code is een beginpunt, geen volledige diagnose. Noteer daarom altijd de getroffen URL, het tijdstip, de actie die eraan voorafging en of het probleem voor iedereen geldt.

| Code | Betekenis | Veelvoorkomende richting |
| --- | --- | --- |
| **403 Forbidden** | De server begrijpt het verzoek maar weigert toegang | Rechten, beveiligingsregel, authenticatie of blokkade |
| **404 Not Found** | De gevraagde route of het bestand bestaat niet op die locatie | Verkeerde URL, permalink, redirect of ontbrekend bestand |
| **500 Internal Server Error** | De applicatie of server kon het verzoek niet verwerken | PHP-fout, configuratie, plugin, thema of resourceprobleem |
| **504 Gateway Timeout** | Een bovenliggende server wachtte te lang op een antwoord | Trage PHP, database, externe API of vastgelopen proces |

De volledige lijst en betekenis van HTTP-statuscodes staat in de [MDN HTTP-referentie↗](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status).

## Begin met deze controles

1. Controleer de [servicestatus](https://status.oscloud.nl/).
2. Test de exacte URL in een privévenster en op een ander netwerk.
3. Bepaal of één pagina, het beheer of de hele website is getroffen.
4. Noteer recente deployments, updates, redirects, rechten- of DNS-wijzigingen.
5. Bekijk webserver- en PHP-foutlogs rond hetzelfde tijdstip.

Schakel niet meerdere plugins of beveiligingsregels tegelijk uit. Daarmee verlies je het verband tussen oorzaak en resultaat.

## 403 Forbidden

Controleer:

- of je bent ingelogd met de juiste gebruiker;
- bestands- en maprechten volgens [bestandsrechten](/guide/chmod);
- beveiligingsplugins, IP-blokkades en webserverregels;
- of een indexbestand aanwezig is en directe directorytoegang is toegestaan;
- of alleen jouw netwerk of account is geblokkeerd.

Verlaag rechten niet naar `777`. Dat vergroot het beveiligingsrisico en maskeert vaak de werkelijke oorzaak.

## 404 Not Found

Controleer eerst spelling, hoofdletters en het pad. Bestaat de content wel, sla dan in WordPress de permalinkstructuur opnieuw op en controleer redirects en webserverregels. Controleer na een migratie of interne URL's en document root correct zijn bijgewerkt.

Maak voor een permanent verplaatste pagina een gerichte [redirect](/guide/redirect). Stuur niet iedere 404 naar de homepage; dat verbergt fouten en geeft bezoekers een onduidelijk resultaat.

## 500 Internal Server Error

Een fout 500 vereist vrijwel altijd de bijbehorende logregel. Controleer:

- PHP-syntax- en fatale fouten;
- een recente plugin-, thema- of core-update;
- `.htaccess` of webserverconfiguratie;
- PHP-versie en ontbrekende extensies;
- geheugenlimiet en beschadigde bestanden.

Gebruik [WordPress-debugging](/guide/debug) alleen tijdelijk en toon foutdetails niet aan bezoekers. Zie ook [PHP-versie veilig wijzigen](/guide/change_php_version) en [WordPress-geheugenlimiet](/guide/wp_memory).

## 504 Gateway Timeout

Een 504 ontstaat vaak doordat PHP, de database of een externe dienst niet op tijd reageert. Controleer trage queries, imports, back-uptaken, cronjobs en externe API-calls. Herhaald verversen kan de belasting verhogen; start dezelfde zware taak niet meerdere keren.

Controleer ook of het probleem samenvalt met een deployment of piekbelasting. Voor een 502-fout gebruik je de aparte handleiding [502 Bad Gateway](/guide/502).

## Verificatie en support

Het probleem is pas opgelost wanneer de oorspronkelijke actie meerdere keren slaagt en de logs geen nieuwe relevante fouten tonen. Controleer ook gerelateerde pagina's en processen.

Stuur bij [contact met support](/guide/contact-support) de statuscode, volledige URL, tijd met tijdzone, netwerk of gebruiker, recente wijzigingen en relevante logregels mee. Deel geen wachtwoorden, sessiecookies of API-geheimen.
