---
description: "Analyseer HTTP-beveiligingsheaders met Mozilla Observatory en voer verbeteringen gecontroleerd door zonder functionaliteit te breken."
audience: developers
---

# Mozilla Observatory

De [Mozilla Observatory↗](https://developer.mozilla.org/en-US/observatory) (specifiek de **HTTP Observatory**) is een gratis beveiligingstool van Mozilla waarmee website-eigenaren en ontwikkelaars de beveiligingsconfiguratie van hun site kunnen beoordelen. De tool werd oorspronkelijk gelanceerd in 2016 en is in juli 2024 ondergebracht bij **MDN (Mozilla Developer Network)**. Hij richt zich op het analyseren van **HTTP-response-headers** en moderne beveiligingsstandaarden.

## Een scan uitvoeren

1. Scan eerst een test- of stagingomgeving die dezelfde webserverconfiguratie gebruikt als productie.
2. Beoordeel per bevinding welke header ontbreekt, te ruim is ingesteld of dubbel wordt verzonden.
3. Pas één categorie tegelijk aan en controleer daarna login, formulieren, embeds, betaalstromen en externe scripts.
4. Scan opnieuw en leg de wijziging en de rollback vast voordat je deze naar productie brengt.

Een lagere score is niet automatisch een kwetsbaarheid en een hoge score is geen garantie dat de applicatie veilig is. De juiste instellingen hangen af van de gebruikte bronnen, integraties en browserondersteuning. Zie [HTTP-beveiligingsheaders](/developers/HTTP_security) voor voorbeelden en implementatierisico's.

::: warning
Een te strikte Content Security Policy of Cross-Origin-instelling kan legitieme functionaliteit blokkeren. Zet headers niet blind over vanuit een scanneradvies en voorkom dat dezelfde header op meerdere lagen wordt toegevoegd.
:::
