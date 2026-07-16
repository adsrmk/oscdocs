---
description: Verhuis een domein en website gefaseerd naar OS Cloud met minimale onderbreking en een duidelijke rollback.
audience: customers
---

# Domein verhuizen zonder onnodige downtime

Een domeinverhuizing bestaat uit meerdere onderdelen: registratie, DNS, website, SSL en vaak e-mail. Plan deze onderdelen afzonderlijk. Alleen de verhuiscode van een domein aanvragen verplaatst je website en mailboxen niet automatisch.

## Maak eerst een inventarisatie

Leg vóór de wijziging vast:

- alle huidige DNS-records en nameservers;
- websitebestanden, database en gebruikte PHP-versie;
- mailboxen, aliassen, doorstuuradressen en maildiensten;
- subdomeinen, API's, verificatierecords en externe diensten;
- huidige SSL-configuratie en redirects;
- wie toegang heeft tot registrar, oude hosting en OS Cloud.

Maak een actuele [websiteback-up](/guide/backups) en exporteer DNS-records waar mogelijk. Maak schermafbeeldingen alleen als aanvulling; tekstuele recordwaarden zijn betrouwbaarder voor herstel.

## 1. Verlaag de DNS-TTL vooraf

Verlaag indien mogelijk 24 tot 48 uur vóór de omschakeling de TTL van records die gaan veranderen. Gebruik een waarde die je DNS-provider ondersteunt. Een lagere TTL versnelt latere wijzigingen, maar heeft pas effect nadat de oude TTL is verstreken.

## 2. Bouw de nieuwe omgeving op

1. [Voeg het domein of de website toe](/guide/add_domain) in OS Cloud.
2. Kopieer bestanden en database zonder de productieomgeving te stoppen.
3. Pas configuratie, databasegegevens en interne URL's gecontroleerd aan.
4. Controleer de site via een tijdelijke URL, preview of lokale testmethode.
5. Test formulieren, login, webshop, cronjobs, uploads en externe koppelingen.

Voorkom tijdens tests dat de nieuwe omgeving echte bestellingen, nieuwsbrieven of geplande taken dubbel uitvoert. Gebruik daarvoor zo nodig een stagingmodus of tijdelijke blokkade.

## 3. Bereid e-mail afzonderlijk voor

Maak mailboxen en aliassen vooraf aan en volg [e-mail migreren naar OS Cloud](/guide/email_migration). Neem bestaande MX-, SPF-, DKIM- en DMARC-records niet blind over: ze moeten passen bij de diensten die na de migratie blijven verzenden en ontvangen.

## 4. Schakel DNS om

Kies één van deze routes:

- wijzig alleen de relevante A-, AAAA-, CNAME- en mailrecords; of
- wijzig de nameservers wanneer OS Cloud de volledige DNS-zone gaat beheren.

Controleer vóór opslaan nogmaals IP-adressen, hostnamen en ontbrekende subdomeinen. Verwijder de oude DNS-zone nog niet.

## 5. Controleer na de omschakeling

Test vanaf meerdere netwerken:

- hoofddomein en `www` via HTTPS;
- belangrijke subdomeinen en redirects;
- WordPress-login, formulieren en betalingen;
- inkomende en uitgaande e-mail;
- DNS-records en het nieuwe [SSL-certificaat](/guide/SSL).

DNS-caches kunnen tijdelijk verschillende antwoorden geven. Vergelijk daarom de uitkomst op meerdere resolvers voordat je concludeert dat de migratie overal gereed is.

## Houd de oude omgeving beschikbaar

Laat de oude hosting en maildienst minimaal enkele dagen beschikbaar, afhankelijk van TTL, verkeer en bedrijfsrisico. Voer waar nodig een laatste database- of mailboxsynchronisatie uit. Zeg de oude dienst pas op nadat logs, bestellingen en e-mail aantoonbaar op de nieuwe omgeving binnenkomen.

## Rollback

Bij ernstige problemen zet je de eerder vastgelegde DNS-records terug en controleer je of de oude omgeving nog actuele data accepteert. Noteer transacties of content die tijdens de omschakeling zijn ontstaan, zodat deze niet verloren gaan bij het terugzetten.

Neem bij een vastlopende verhuizing [contact op met support](/guide/contact-support) en vermeld het domein, de oude en nieuwe DNS-waarden, het omschakeltijdstip en welke onderdelen wel of niet werken.
