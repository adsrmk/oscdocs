---
description: "Met gebruikers-enumeratie proberen aanvallers geldige WordPress-gebruikersnamen te achterhalen via openbare auteursarchieven of API-responses."
audience: customers
---

# Gebruikers-enumeratie beperken

Met gebruikers-enumeratie proberen aanvallers geldige WordPress-gebruikersnamen te achterhalen via openbare auteursarchieven of API-responses. Een gebruikersnaam is geen geheim zoals een wachtwoord, maar kan gerichte wachtwoordaanvallen eenvoudiger maken.

## Belangrijk om te weten

Het blokkeren van één methode verwijdert geen namen die al zichtbaar zijn in auteursnamen, feeds, caches of externe zoekresultaten. Zie dit daarom als aanvullende beveiliging en combineer de maatregel met unieke wachtwoorden, [tweestapsverificatie](/guide/2fa) en bescherming tegen herhaalde inlogpogingen.

Gebruik je auteursarchieven, een redactionele workflow of integraties die openbare gebruikersgegevens lezen? Test de wijziging dan eerst in een stagingomgeving.

## Querymethode blokkeren

Voeg de volgende code toe aan een kleine site-specifieke plugin of een child theme. Een site-specifieke plugin heeft de voorkeur, omdat een thema-update of themawissel de beveiliging dan niet verwijdert.

```php
add_action('template_redirect', function () {
    if (!is_admin() && isset($_GET['author']) && ctype_digit((string) $_GET['author'])) {
        status_header(404);
        nocache_headers();
        exit;
    }
});
```

## Testen en terugdraaien

1. Open `https://jouwdomein.nl/?author=1` in een privévenster.
2. Controleer dat het verzoek niet meer naar een auteursarchief doorstuurt.
3. Test legitieme auteurspagina's en redactionele functies.
4. Controleer de REST API afzonderlijk; deze code behandelt alleen de `?author=`-query.

Verwijder de code en leeg de paginacache om de wijziging terug te draaien.
