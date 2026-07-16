---
description: Migreer mailboxen gecontroleerd naar OS Cloud, behoud bestaande berichten en voorkom verlies tijdens de DNS-omschakeling.
audience: customers
---

# E-mail migreren naar OS Cloud

Een mailboxmigratie kopieert bestaande berichten en schakelt daarna de aflevering van nieuwe e-mail om. Werk in fasen en houd de oude provider tijdelijk actief, zodat berichten tijdens DNS-verwerking niet verloren gaan.

## Voorbereiding

Inventariseer per domein:

- alle mailboxen en opslaggebruik;
- aliassen, [doorstuuradressen](/guide/forwarders), catch-all en afwezigheidsberichten;
- gedeelde mailboxen en toegangsrechten;
- mappen, agenda's en contacten;
- apparaten en applicaties die SMTP gebruiken;
- huidige MX-, SPF-, DKIM- en DMARC-records.

IMAP kopieert e-mailmappen, maar meestal geen agenda's, contacten, filters, handtekeningen of lokale POP3-archieven. Exporteer die onderdelen afzonderlijk.

::: warning
Zeg de oude maildienst niet op voordat de laatste synchronisatie en aflevercontroles zijn afgerond. Een domeinverhuizing migreert bestaande mailboxinhoud niet automatisch.
:::

## 1. Maak de nieuwe mailomgeving aan

1. Maak in OS Cloud alle mailboxen, aliassen en doorstuuradressen aan.
2. Kies nieuwe, unieke wachtwoorden en deel deze via een veilig kanaal met de eigenaar van iedere mailbox.
3. Controleer de beschikbare opslag en pas de indeling aan voordat je grote mailboxen kopieert.
4. Noteer de [nieuwe clientinstellingen](/guide/email_settings), maar wijzig gebruikersapparaten nog niet definitief.

## 2. Voer de eerste synchronisatie uit

Gebruik een betrouwbare IMAP-migratietool of e-mailclient om mappen van de oude naar de nieuwe mailbox te kopiëren. Test eerst één kleine mailbox.

Controleer daarna:

- aantal en globale omvang van berichten;
- Inbox, Verzonden, Concepten en zelfgemaakte mappen;
- mapnamen met speciale tekens;
- oudste en nieuwste berichten;
- grote berichten en bijlagen.

Verwijder geen bronberichten tijdens deze stap. IMAP-migratie vereist tijdelijk toegang tot beide mailboxen; behandel die inloggegevens als geheim en trek tijdelijke toegang na afloop in.

## 3. Bereid DNS en verzenddiensten voor

Configureer de [mailrecords](/guide/setup_mail_records) voor de nieuwe situatie. Zorg dat SPF alle diensten bevat die namens je domein blijven verzenden, activeer DKIM waar beschikbaar en wijzig DMARC gefaseerd.

Inventariseer ook websites, scanners, boekhoudsoftware en CRM-systemen die de oude SMTP-server gebruiken. Pas deze rond de omschakeling aan.

## 4. Plan de omschakeling

Kies een rustig moment en communiceer vooraf dat gebruikers korte tijd berichten in twee omgevingen kunnen zien. Wijzig vervolgens de MX- en vereiste authenticatierecords.

Stel de nieuwe mailboxen in op apparaten of gebruik tijdelijk [webmail](/guide/webmail). Voorkom dat een e-mailclient oude en nieuwe accounts door elkaar haalt door ze duidelijk te benoemen.

## 5. Voer een laatste synchronisatie uit

Omdat sommige afzenders tijdelijk nog de oude MX-records gebruiken, voer je na de DNS-wijziging een of meer delta-synchronisaties uit. Kopieer alleen nieuwe of gewijzigde berichten en controleer op duplicaten.

Test vervolgens:

- extern naar iedere belangrijke mailbox;
- vanuit OS Cloud naar meerdere externe providers;
- antwoorden, aliassen en doorstuuradressen;
- websiteformulieren en andere SMTP-applicaties;
- spamclassificatie en bounceberichten.

## Afronden

Houd de oude omgeving aan totdat gedurende de afgesproken controleperiode geen nieuwe berichten meer binnenkomen. Exporteer eventueel een eindarchief, verwijder tijdelijke migratieaccounts en werk interne documentatie bij.

Ontbreken berichten of mappen, stop dan met verwijderen en opnieuw synchroniseren. Noteer mailbox, map, datumreeks en migratiemethode wanneer je [support benadert](/guide/contact-support). Deel geen mailboxwachtwoorden in het supportverzoek.
