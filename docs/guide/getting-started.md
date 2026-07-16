---
audience: customers
description: Start veilig en efficiënt met je OS Cloud-account, domein, website en e-mail.
---

# Aan de slag met OS Cloud

Met deze checklist richt je de belangrijkste onderdelen van je OS Cloud-omgeving in. Werk de stappen in volgorde af wanneer je een nieuw account, domein of website configureert.

## Voordat je begint

Zorg dat je toegang hebt tot:

- je OS Cloud-account;
- het beheerportaal van je domeinregistrar, als OS Cloud je domein niet beheert;
- het e-mailadres waarop je accountmeldingen ontvangt;
- eventuele bestaande website- en e-mailback-ups.

::: warning Deel geen geheime gegevens
Stuur nooit wachtwoorden, tweestapsverificatiecodes, privésleutels of API-sleutels via e-mail of chat. Een supportmedewerker heeft deze gegevens niet nodig om je account te onderzoeken.
:::

## 1. Beveilig je account

Controleer je [inloggegevens](/guide/credentials), voeg alleen noodzakelijke [gebruikers en rollen](/guide/users) toe en activeer [tweestapsverificatie](/guide/2fa). Gebruik voor iedere gebruiker een persoonlijk account; deel geen beheerdersaccount binnen een team.

## 2. Voeg je domein en website toe

Volg [Domein of website toevoegen](/guide/add_domain). Noteer daarna het serveradres en de DNS-waarden die in het paneel worden getoond. Deze gegevens heb je in de volgende stap nodig.

## 3. Configureer DNS

Kies één van de twee ondersteunde methoden in [DNS-records instellen](/guide/setup_dns):

- wijzig de nameservers naar OS Cloud; of
- beheer de vereiste DNS-records handmatig bij je huidige DNS-provider.

DNS-wijzigingen zijn niet overal direct zichtbaar. Controleer daarom eerst of het domein naar het juiste serveradres verwijst voordat je SSL of e-mail instelt.

## 4. Activeer HTTPS

Vraag na een correcte DNS-configuratie een [SSL-certificaat](/guide/SSL) aan. Open vervolgens zowel `https://jouwdomein.nl` als `https://www.jouwdomein.nl` als je beide hostnamen gebruikt.

## 5. Configureer e-mail

Gebruik je e-mail via OS Cloud? Stel dan eerst de [mail-DNS-records](/guide/setup_mail_records) in. Maak daarna een [mailbox](/guide/mailbox) en voeg deze toe aan je gewenste [e-mailclient](/guide/email_settings) of aan [Gmail](/guide/gmail).

## 6. Controleer back-ups en monitoring

Open het tabblad **Back-ups** en controleer of er herstelpunten worden aangemaakt. Bewaar voor bedrijfskritische data daarnaast een eigen, extern herstelbaar exemplaar. Bekijk bij een onverwachte storing altijd eerst de [OS Cloud-statuspagina](https://status.oscloud.nl/).

## Eindcontrole

Je basisconfiguratie is gereed wanneer:

- het domein via HTTPS opent zonder certificaatwaarschuwing;
- je kunt inloggen met een persoonlijk account en 2FA;
- inkomende en uitgaande e-mail werken;
- een recent herstelpunt zichtbaar is;
- alleen de juiste gebruikers toegang hebben.

Ga verder met [websitebeheer](/guide/general) of bekijk de [developerssectie](/developers/) voor beveiliging, prestaties en SEO.
