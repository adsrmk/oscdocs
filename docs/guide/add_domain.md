---
description: "Met een domein koppel je een herkenbaar webadres aan je website. Zorg na het toevoegen dat je DNS-configuratie naar de juiste OS Cloud-server verwijst."
audience: customers
---

# Domein of website toevoegen

Met een domein koppel je een herkenbaar webadres aan je website. Zorg na het toevoegen dat je [DNS-configuratie](/guide/setup_dns) naar de juiste OS Cloud-server verwijst.

1. Ga in het paneel naar **Websites**.
2. Selecteer rechtsboven **Add new website**.
3. Kies het type website dat bij je situatie past:

- **Blank** — Maakt lege webruimte aan onder `public_html`. Gebruik dit voor een eigen deployment of een statische HTML-, CSS- of JavaScript-site.
- **App** — Installeert een applicatie met de opgegeven beheerdersgegevens. Het actuele aanbod staat in het paneel; beschikbaarheid kan per pakket veranderen.
- **Clone website** — Kopieert een bestaande website en maakt een nieuwe database aan. Deze optie is alleen zichtbaar bij ondersteunde pakketten. Schakel bij WordPress **Perform a WordPress search and replace** in, zodat interne URL's naar het nieuwe domein worden aangepast.

4. Vul je domein in en volg de stappen om het proces te voltooien.
5. Noteer het toegewezen IP-adres en configureer daarna de [DNS-records](/guide/setup_dns).
6. Vraag zodra DNS correct verwijst een [SSL-certificaat](/guide/SSL) aan en controleer de website via HTTPS.

::: warning
Kloon je een productiewebsite, controleer dan vóór ingebruikname formulieren, betaalproviders, geplande taken, uitgaande e-mail en zoekmachine-indexering. Een kloon kan anders onbedoeld echte acties uitvoeren.
:::
