---
description: "WordPress kan gebruikersinformatie via meerdere openbare routes beschikbaar maken, waaronder auteursarchieven en bepaalde REST API-responses."
audience: developers
---

# Gebruikers-enumeratie beperken

WordPress kan gebruikersinformatie via meerdere openbare routes beschikbaar maken, waaronder auteursarchieven en bepaalde REST API-responses. Beperk alleen de routes die je applicatie niet nodig heeft en test redactionele functies, headless clients en integraties na iedere wijziging.

## Dreigingsmodel

Een gevonden gebruikersnaam geeft op zichzelf geen toegang. De maatregel verlaagt vooral de hoeveelheid informatie voor gerichte brute-force- en credential-stuffing-aanvallen. Sterke unieke wachtwoorden, 2FA, rate limiting en monitoring blijven belangrijker.

## `?author=`-enumeratie blokkeren

Plaats de code in een site-specifieke plugin. Gebruik `functions.php` alleen als de beveiliging bewust aan het actieve thema gekoppeld mag zijn.

```php
add_action('template_redirect', function () {
    if (!is_admin() && isset($_GET['author']) && ctype_digit((string) $_GET['author'])) {
        status_header(404);
        nocache_headers();
        exit;
    }
});
```

Deze code voorkomt de gebruikelijke redirect van een numerieke `author`-query. Hij blokkeert niet automatisch gebruikersinformatie in de REST API, feeds, sitemaps of bestaande caches.

## Valideren

1. Test `/?author=1` als uitgelogde bezoeker.
2. Test bestaande auteurspagina's, zoekfuncties en redactionele workflows.
3. Controleer de relevante REST-routes van de applicatie.
4. Bekijk applicatielogs op onverwachte 404-responses.

## Rollback

Schakel de site-specifieke plugin uit of verwijder de snippet, leeg alle caches en herhaal de tests. Leg de wijziging en testresultaten vast voor toekomstig beheer.
