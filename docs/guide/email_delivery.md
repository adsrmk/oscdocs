---
description: Onderzoek systematisch waarom e-mail niet aankomt of niet wordt verzonden en verzamel de juiste gegevens voor verdere analyse.
audience: customers
---

# E-mail komt niet aan of wordt niet verzonden

Een afleverprobleem kan ontstaan bij de afzender, de uitgaande mailserver, DNS-authenticatie, de ontvangende provider of de mailbox van de ontvanger. Bepaal daarom eerst **welke richting en welke berichten** zijn getroffen voordat je instellingen wijzigt.

## Leg één concrete test vast

Noteer voor een recent testbericht:

- het volledige afzender- en ontvangeradres;
- datum, tijd en tijdzone;
- het onderwerp, zonder vertrouwelijke berichtinhoud;
- of het probleem inkomend, uitgaand of beide kanten op speelt;
- de volledige tekst van een bounce- of foutmelding;
- of andere afzenders en ontvangers wel werken.

Deel nooit mailboxwachtwoorden, SMTP-wachtwoorden of herstelcodes. Een exacte test is nuttiger dan meerdere berichten zonder tijdstip of foutmelding.

## Snelle controles

1. Controleer de [OS Cloud-statuspagina](https://status.oscloud.nl/) op een actuele storing.
2. Open [webmail](/guide/webmail) en test daar. Werkt webmail wel, controleer dan de [instellingen van je e-mailclient](/guide/email_settings).
3. Controleer de mappen **Spam**, **Ongewenst**, **Prullenbak** en eventuele filters of regels.
4. Controleer of de mailbox bestaat, actief is en voldoende vrije opslag heeft.
5. Test met één extern adres bij een andere provider. Verstuur geen grote bijlage tijdens de eerste test.

## Inkomende e-mail ontbreekt

Controleer eerst of e-mail van **alle afzenders** ontbreekt of slechts van één afzender.

- Controleer de [MX- en overige mailrecords](/guide/setup_mail_records). MX-records moeten verwijzen naar de provider die je inkomende e-mail verwerkt.
- Controleer de [spaminstellingen](/guide/spam_settings), blokkeerlijst en eventuele [doorstuuradressen](/guide/forwarders).
- Verwijder een catch-all of filter niet zonder eerst te bepalen welke adressen daarvan afhankelijk zijn.
- Vraag de afzender om de volledige bouncecode. Codes die met `4` beginnen zijn doorgaans tijdelijk; codes die met `5` beginnen wijzen meestal op een definitieve afwijzing voor die poging.

Komt directe e-mail wel aan maar doorgestuurde e-mail niet, test dan het bronadres en bestemmingsadres afzonderlijk. Doorsturen kan authenticatiecontroles beïnvloeden.

## Uitgaande e-mail wordt geweigerd of komt in spam

1. Controleer of SMTP-authenticatie is ingeschakeld en het volledige e-mailadres als gebruikersnaam wordt gebruikt.
2. Controleer of het zichtbare **Van-adres** past bij het account waarmee je verzendt. Gebruik geen willekeurig extern afzenderadres.
3. Controleer of alle legitieme verzenddiensten in SPF zijn opgenomen en of DKIM actief is.
4. Voeg DMARC gecontroleerd toe en beoordeel rapportages voordat je een streng beleid instelt.
5. Verstuur alleen naar ontvangers die je berichten verwachten en bied bij marketingmail een duidelijke afmeldmogelijkheid.

Google adviseert verzenddomeinen te authenticeren met SPF, DKIM en DMARC en geldige DNS, TLS en berichtopmaak te gebruiken. Zie de [actuele richtlijnen voor e-mailafzenders↗](https://support.google.com/mail/answer/81126) voor providerspecifieke eisen.

::: warning
Publiceer niet meerdere losse SPF-records. Combineer toegestane verzenders in één geldig SPF-record. Een onjuiste wijziging kan ook werkende verzenddiensten blokkeren.
:::

## Berichtheaders gebruiken

In de volledige berichtheaders zie je via welke servers een bericht is gegaan en of SPF, DKIM en DMARC zijn geslaagd. Zoek onder andere naar `Authentication-Results`, `Received` en de uiteindelijke afleverstatus.

Headers kunnen interne adressen en persoonsgegevens bevatten. Deel ze alleen via een geschikt supportkanaal en verwijder geen regels die nodig zijn om de route van het bericht te reconstrueren.

## Controleer het resultaat

Verstuur na iedere wijziging een nieuw bericht met een herkenbaar onderwerp en noteer het tijdstip. Test beide richtingen en controleer zowel inbox als spam. DNS-wijzigingen kunnen afhankelijk van de eerdere TTL niet overal direct zichtbaar zijn.

Blijft het probleem bestaan, neem dan [contact op met support](/guide/contact-support) en stuur de testgegevens, bouncecode en relevante headers mee. Vermeld ook welke DNS- of mailboxwijzigingen je kort voor het probleem hebt uitgevoerd.
