---
description: "De browser kan voor het ingevoerde domein geen IP-adres vinden."
audience: customers
---

# ERR_NAME_NOT_RESOLVED

De browser kan voor het ingevoerde domein geen IP-adres vinden. De website wordt daardoor niet bereikt. Dit wijst meestal op een ontbrekend of onjuist DNS-record, een typefout in de domeinnaam of een DNS-wijziging die nog niet overal zichtbaar is.

## Controleer eerst de omvang

Open het domein op een tweede apparaat of via een mobiel netwerk. Werkt het daar wel, dan is het probleem waarschijnlijk lokaal. Werkt het nergens, controleer dan de DNS-configuratie van het domein.

## Oplossing

1. Controleer de volledige URL, inclusief het subdomein zoals `www`.
2. Controleer bij je DNS-provider of de nameservers overeenkomen met de gekozen configuratiemethode.
3. Gebruik je handmatig beheerde DNS? Controleer dan of het A- of AAAA-record naar het serveradres uit het OS Cloud-paneel verwijst.
4. Controleer afzonderlijk of zowel het hoofddomein als `www` correct is ingesteld.
5. Heb je DNS recent gewijzigd? Wacht totdat de wijziging is verspreid en voorkom tussentijdse, tegenstrijdige aanpassingen.
6. Wis alleen bij een lokaal probleem de DNS-cache van je apparaat of router en probeer opnieuw.

Lees [DNS-records instellen](/guide/setup_dns) voor de volledige configuratie.

## Controleer het resultaat

De fout is opgelost wanneer het domein op meerdere apparaten naar de juiste website opent. Verschijnt daarna een certificaatwaarschuwing, controleer dan de [SSL-configuratie](/guide/SSL).

Neem contact op met support als de ingestelde records correct lijken maar het domein na de gebruikelijke DNS-verwerking nog steeds nergens wordt gevonden. Vermeld het domein, de gebruikte nameservers en het tijdstip van de laatste wijziging.
