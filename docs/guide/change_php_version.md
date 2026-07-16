---
description: Wijzig de PHP-versie van een website veilig met compatibiliteitscontrole, stagingtest, verificatie en rollback.
audience: customers
---

# PHP-versie veilig wijzigen

Een nieuwere PHP-versie kan beveiligings- en prestatieverbeteringen bieden, maar verouderde plugins, thema's of maatwerk kunnen incompatibel zijn. Wijzig PHP daarom nooit zonder back-up, test en terugvalplan.

## Voor je begint

Leg vast:

- de huidige PHP-versie en de gewenste versie;
- de actieve WordPress-, plugin- en themaversies;
- vereiste PHP-extensies en aangepaste configuratie;
- gekoppelde cronjobs, command-line scripts en webhooks;
- een moment waarop je veilig kunt testen.

Maak een volledige [back-up](/guide/backups) van bestanden en database. Controleer dat je weet hoe je die herstelt. Gebruik voor een bedrijfskritische website eerst een staging- of kloonomgeving.

## 1. Controleer compatibiliteit

1. Werk WordPress, plugins en thema's bij binnen de ondersteunde versies.
2. Controleer documentatie van leveranciers en maatwerkcode op de gewenste PHP-versie.
3. Bekijk het huidige PHP-foutenlogboek, zodat bestaande meldingen niet met nieuwe problemen worden verward.
4. Controleer of vereiste extensies ook in de nieuwe omgeving beschikbaar zijn.

De officiële PHP-handleiding publiceert per versie een migratiehoofdstuk met incompatibele wijzigingen, nieuwe functies en verouderde onderdelen. Raadpleeg de relevante [PHP-migratiehandleidingen↗](https://www.php.net/manual/en/appendices.php) voor de versies waartussen je overstapt.

## 2. Test op staging

Wijzig op staging eerst de PHP-versie. Leeg applicatie- en servercache en test daarna:

- homepage, belangrijke templates en zoekfunctie;
- WordPress-login en beheeracties;
- formulieren, uploads en e-mail;
- winkelmand, checkout en betaalprovider;
- cronjobs, API-koppelingen en command-line scripts;
- foutlogboek en zichtbare waarschuwingen.

Een pagina die alleen visueel opent is geen volledige compatibiliteitstest. Voer de belangrijkste gebruikersprocessen daadwerkelijk uit met testgegevens.

## 3. Wijzig de productieversie

1. Plan een rustig moment en voorkom gelijktijdige deployments of updates.
2. Open de PHP-instellingen van de juiste website in OS Cloud.
3. Selecteer de geteste versie en sla de wijziging op.
4. Leeg caches die nog oude PHP-output of opcode bevatten.
5. Herhaal de belangrijkste acceptatietests en controleer direct de logs.

Wijzig niet tegelijk de PHP-versie, plugins, DNS en webserverconfiguratie. Eén wijzigingsgroep per keer maakt diagnose en rollback betrouwbaarder.

## Veelvoorkomende problemen

- **Witte pagina of fout 500:** controleer het PHP-foutenlogboek en schakel de veroorzakende plugin of maatwerkfunctie niet blind uit op productie.
- **Ontbrekende functie of extensie:** controleer of de code nog wordt ondersteund en of de vereiste extensie beschikbaar is.
- **Alleen cron of CLI faalt:** controleer welke PHP-binary het commando gebruikt; deze kan afwijken van de websiteversie.
- **Waarschuwingen na de update:** behandel deprecated-meldingen als onderhoudswerk, maar toon ze niet aan bezoekers.

## Rollback

Zet bij ernstige fouten de vorige PHP-versie terug, leeg caches en controleer opnieuw. Herstel alleen een databaseback-up als de applicatie tijdens de test gegevens heeft gewijzigd die niet compatibel zijn met de oude versie.

Vermeld bij [support](/guide/contact-support) de oude en nieuwe PHP-versie, het wijzigingstijdstip, de getroffen URL en relevante logregels. Deel geen volledige configuratiebestanden met geheimen.
