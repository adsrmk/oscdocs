---
description: "PHP (Hypertext Preprocessor) is een server-side scripttaal die gebruikt wordt voor webontwikkeling."
audience: developers
---

# PHP configureren en aanpassen

**PHP (Hypertext Preprocessor)** is een server-side scripttaal die gebruikt wordt voor webontwikkeling. Op **OS Cloud** heb je verschillende mogelijkheden om de PHP-versie, extensies en configuratie van je site aan te passen.

## PHP-versie

We raden aan om de meest recente stabiele PHP-versie te gebruiken voor de beste prestaties en veiligheid. Wil je een andere versie gebruiken? Wissel dan de PHP-engine via **Geavanceerd → Ontwikkelaarstools**.

<div class="warning custom-block" style="padding-top: 8px">
PHP-versies ouder dan 8.0 worden niet ondersteund vanwege beveiligings- en prestatieredenen. Heb je toch een oudere versie nodig? Dan kun je deze aanvragen — maar wij zijn <b>niet verantwoordelijk</b> voor problemen of kwetsbaarheden die voortkomen uit het gebruik van verouderde PHP-versies.
</div>

<img width="1323" height="221" alt="Schermafbeelding van PHP-versie" src="https://github.com/user-attachments/assets/82fe363e-0570-4485-82db-8fbc965cd781" />

## Extensies

PHP-extensies zijn modules die extra functionaliteit toevoegen — zoals databaseconnecties, beeldverwerking of versleuteling. Je kunt ze direct in het paneel in- of uitschakelen.

Je kunt maximaal **vijf extra extensies** activeren. We raden aan om standaard **Brotli** en **APCu** in te schakelen.

| Extensie | Beschrijving |
| --- | --- |
| **Brotli** | Een compressie-algoritme van Google, efficiënter dan Gzip. Verlaagt het bandbreedteverbruik en verbetert laadtijden. |
| **APCu** | Een in-memory cachelaag die PHP versnelt door veelgebruikte data in RAM op te slaan, waardoor er minder database-queries nodig zijn. |
| XMLRPC | Schakelt XML-RPC-ondersteuning in, waarmee PHP-applicaties via XML-berichten met externe servers kunnen communiceren. |
| OAuth | Biedt OAuth-authenticatie voor veilige autorisatie tussen applicaties (vaak gebruikt voor social logins). |
| PdoDblib | Een PDO-driver voor Microsoft SQL Server- en Sybase-databases via de FreeTDS-bibliotheek. |

## PHP-foutenlogboek

Het PHP-foutenlogboek registreert waarschuwingen, fouten en problemen in je PHP-applicatie — handig bij het debuggen.

Je vindt het logbestand in de hoofdmap van je website onder de naam `php-error.log`.

<div class="tip custom-block" style="padding-top: 8px">
Sinds paneelversie <b>12.0+</b> kun je het logboek ook direct bekijken binnen het <b>PHP-onderdeel</b> in het paneel.
</div>

<img width="1243" height="298" alt="Schermafbeelding van PHP-foutenlogboek (2)" src="https://github.com/user-attachments/assets/60b1e021-0586-4b17-83d6-c15660da4b13" />

## PHP.ini-editor  <Badge type="info" text="op aanvraag" />

<div class="tip custom-block" style="padding-top: 8px">
De standaardwaarden zijn afgestemd op optimale prestaties per server. Wil je deze aanpassen naar een eigen configuratie, neem dan contact met ons op. We beoordelen dan de reden van de wijziging en of deze mogelijk is.

</div>

Een volledige lijst met beschikbare **PHP-directives** vind je op de officiële PHP-website: [php.net/manual/en/ini.list.php↗](https://www.php.net/manual/en/ini.list.php)
