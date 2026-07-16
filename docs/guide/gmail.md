---
description: "Koppel je zakelijke e-mailadres aan Gmail, zodat je berichten kunt versturen en ontvangen zonder tussen platforms te wisselen."
audience: customers
---

# Je zakelijke e-mail koppelen aan Gmail

Koppel je zakelijke e-mailadres aan Gmail, zodat je berichten kunt versturen en ontvangen zonder tussen platforms te wisselen.

## Stap 1 — Open Gmail-instellingen

Open Gmail, klik op het ⚙️ tandwiel-icoon rechtsboven en kies **Alle instellingen weergeven**.

## Stap 2 — Voeg je e-mailaccount toe

1. Ga naar het tabblad **Accounts en import**.
2. Klik onder **E-mail van andere accounts controleren** op **Een e-mailaccount toevoegen**.

<img width="1344" height="818" alt="Schermafbeelding van Stap 2 — Voeg je e-mailaccount toe" src="https://github.com/user-attachments/assets/567563d1-17cc-417b-b8b1-0e5f148fe75e" />

3. Voer je zakelijke e-mailadres in en klik op **Volgende →**.

<img width="551" height="184" alt="Schermafbeelding van Stap 2 — Voeg je e-mailaccount toe (2)" src="https://github.com/user-attachments/assets/57958ea8-c04d-46c1-8f4e-66ebd37bce9d" />

4. Kies **E-mails importeren van mijn andere account (POP3)** en klik op **Volgende**.

## Stap 3 — Vul de inkomende mail-instellingen (POP3) in

| Instelling | Waarde |
| --- | --- |
| **Gebruikersnaam** | Je volledige e-mailadres |
| **Wachtwoord** | Het wachtwoord van je e-mailaccount |
| **POP Server** | `mail.`<mark>`jedomein.nl`</mark> |
| **Poort** | `995` |

<img width="593" height="373" alt="Schermafbeelding van Stap 3 — Vul de inkomende mail-instellingen (POP3) in (3)" src="https://github.com/user-attachments/assets/0307d656-4b95-4c22-ba70-b82325b027c8" />

## Stap 4 — Importinstellingen afronden

Vink alle selectievakjes aan **behalve de laatste**. Als alles correct is geconfigureerd, voegt Gmail je account toe en begint het automatisch met het importeren van je e-mails. 

## Stap 5 — Verzenden instellen (SMTP)

Wil je vanuit Gmail e-mails versturen vanaf je zakelijke adres? Kies dan **Ja, ik wil ook e-mails kunnen versturen** en vul onderstaande SMTP-gegevens in.

| Instelling | Waarde |
| --- | --- |
| **SMTP-server** | Dezelfde mailserver als hierboven (zie **E-mailclient-instellingen**) |
| **Gebruikersnaam** | Je volledige e-mailadres |
| **Wachtwoord** | Het wachtwoord van je e-mailaccount |
| **Poort** | `587` |
| **Beveiligde verbinding** | TLS |

<img width="593" height="321" alt="Schermafbeelding van Stap 5 — Verzenden instellen (SMTP) (4)" src="https://github.com/user-attachments/assets/0bae460d-24c9-4cf2-83b9-32995a5ab469" />

## Stap 6 — Bevestigen en afronden

Gmail stuurt een verificatielink naar je zakelijke e-mailadres, bevestig dat het account van jou is.
Klaar — je zakelijke e-mailadres is nu gekoppeld aan Gmail. Je kunt vanaf nu berichten direct vanuit Gmail versturen en ontvangen.

## Authenticatiefout bij Gmail-koppeling

> Server returned error: `[AUTH] Authentication failed.`

De meest voorkomende oorzaak van deze error is dat het **e-mailadres** of **wachtwoord** niet correct is ingevuld, waardoor de mailserver geen verbinding kan maken met Google.

### Oplossing

1. Controleer of het wachtwoord exact overeenkomt met wat je hebt ingesteld in het **OS Cloud-paneel**.
2. Controleer of het volledige e-mailadres is gebruikt (inclusief domein, bijv. `naam@jouwdomein.nl`).
3. Reset eventueel het wachtwoord in het OS Cloud-paneel en probeer opnieuw.

::: tip
Wachtwoorden zijn hoofdlettergevoelig. Kopieer en plak het wachtwoord rechtstreeks vanuit het OS Cloud-paneel om typefouten te voorkomen.
:::
