---
description: "Gebruik deze instellingen om een OS Cloud-mailbox handmatig toe te voegen aan Outlook, Apple Mail, Thunderbird, Gmail of een andere e-mailapp."
audience: customers
---

# E-mailclient-instellingen

Gebruik deze instellingen om een OS Cloud-mailbox handmatig toe te voegen aan Outlook, Apple Mail, Thunderbird, Gmail of een andere e-mailapp. Kies bij voorkeur **IMAP**: daarmee blijven berichten en mappen op al je apparaten gesynchroniseerd.

## Benodigde gegevens

Vervang `jouwdomein.nl` door het domein van je eigen mailbox.

| Functie | Protocol | Server | Poort | Beveiliging |
| --- | --- | --- | --- | --- |
| Inkomende e-mail | IMAP | `mail.jouwdomein.nl` | `993` | SSL/TLS |
| Uitgaande e-mail | SMTP | `mail.jouwdomein.nl` | `465` | SSL/TLS |
| Uitgaande e-mail, alternatief | SMTP | `mail.jouwdomein.nl` | `587` | STARTTLS |
| Inkomende e-mail, alleen downloaden | POP3 | `mail.jouwdomein.nl` | `995` | SSL/TLS |

Gebruik als **gebruikersnaam altijd het volledige e-mailadres**, bijvoorbeeld `naam@jouwdomein.nl`. Gebruik het wachtwoord van de mailbox, niet noodzakelijk het wachtwoord van je OS Cloud-account. Schakel authenticatie voor de uitgaande SMTP-server in.

## Instellen en testen

1. Voeg een nieuw account toe in je e-mailapp en kies indien nodig **Handmatige configuratie**.
2. Vul de IMAP- en SMTP-gegevens uit de tabel in.
3. Accepteer geen ongeldig of niet-vertrouwd certificaat. Controleer bij een certificaatmelding eerst de servernaam en DNS-configuratie.
4. Verstuur een testbericht naar een extern adres en beantwoord dat bericht vanaf het externe adres.
5. Controleer of verzonden berichten en het antwoord op alle gekoppelde apparaten zichtbaar zijn.

## Veelvoorkomende problemen

- **Authenticatie mislukt:** controleer het volledige e-mailadres en reset zo nodig het [mailboxwachtwoord](/guide/email_password).
- **Ontvangen werkt, verzenden niet:** controleer SMTP-authenticatie, poort en versleuteling.
- **Verbindingstime-out:** test zonder VPN en controleer of het netwerk de gebruikte poort toestaat.
- **Certificaatwaarschuwing:** ga niet verder voordat de servernaam en het certificaat overeenkomen.

Gebruik POP3 alleen als je bewust berichten wilt downloaden in plaats van synchroniseren. Een verkeerde POP3-configuratie kan berichten lokaal opslaan of van de server verwijderen, afhankelijk van de e-mailapp.
