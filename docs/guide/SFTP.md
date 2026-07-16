---
description: "OS Cloud ondersteunt voor bestandsbeheer SFTP via SSH."
audience: customers
---

# Veilig verbinding maken via SFTP

OS Cloud ondersteunt voor bestandsbeheer **SFTP via SSH**. Onversleuteld FTP en SSH-inloggen met alleen een wachtwoord zijn om veiligheidsredenen niet beschikbaar. Je gebruikt daarom een persoonlijk sleutelpaar en de gebruikersnaam van een FTP/SFTP-account.

## Voordat je begint

Je hebt nodig:

- een FTP/SFTP-account in het OS Cloud-paneel;
- een SSH-sleutelpaar waarvan alleen jij de privésleutel bezit;
- een SFTP-client, bijvoorbeeld Termius, WinSCP, Cyberduck of FileZilla;
- de hostnaam en poort uit het paneel.

::: danger Bescherm je privésleutel
Upload alleen de **publieke sleutel** naar OS Cloud. Deel je privésleutel nooit en sla deze niet op in een openbare cloudmap of repository.
:::

## Verbinding instellen

1. Maak eerst een [SSH-sleutel](/guide/SSH) aan en voeg de publieke sleutel toe in het OS Cloud-paneel.
2. Maak onder **Geavanceerd → FTP** een account aan of selecteer een bestaand account.
3. Kies in je client het protocol **SFTP**—niet FTP of FTPS.
4. Vul de hostnaam uit het paneel in. Gebruik poort `22` wanneer geen andere poort wordt vermeld.
5. Vul de gebruikersnaam van het FTP/SFTP-account in.
6. Selecteer je privésleutel als authenticatiemethode en maak verbinding.
7. Controleer bij de eerste verbinding de host fingerprint voordat je deze accepteert.

## Problemen oplossen

- **Permission denied (publickey):** controleer of de juiste publieke sleutel aan het account is gekoppeld en of de client de bijbehorende privésleutel gebruikt.
- **Connection timed out:** controleer hostnaam, poort, VPN en lokale firewall. Probeer zo nodig een ander netwerk.
- **Connection refused:** controleer of je SFTP gebruikt en of het account nog actief is.
- **Geen toegang tot een map:** controleer het ingestelde hoofdpad en de [bestandsrechten](/guide/chmod). Verhoog rechten niet zonder de gevolgen te begrijpen.
- **Host key changed:** accepteer de nieuwe sleutel niet automatisch. Controleer eerst via support of de serverwijziging legitiem is.

De verbinding is correct wanneer je de toegewezen hoofdmap kunt openen en een testbestand kunt uploaden, downloaden en verwijderen.
