# Gebruikers-enumeratie blokkeren

Gebruikers-enumeratie is een veelgebruikte techniek waarmee aanvallers geldige WordPress-gebruikersnamen kunnen achterhalen. Standaard kan WordPress gebruikersnamen blootgeven via auteursarchief-URL's zoals `?author=1`. Zodra een geldige gebruikersnaam bekend is, kunnen aanvallers veel gerichter brute-force- of credential-stuffing-aanvallen uitvoeren.

<br>

## Waarom gebruikers-enumeratie blokkeren?

Als gebruikers-enumeratie ingeschakeld blijft, kunnen aanvallers:

- Geldige gebruikersnamen op je site identificeren
- De tijd die nodig is om accounts te kraken aanzienlijk verkorten
- Beheerders heel gericht aanvallen

Door dit gedrag te blokkeren, beperk je de informatie die zichtbaar is voor anonieme bezoekers en verhoog je de algehele veiligheid van je site.

<br>

## Hoe schakel je deze bescherming in?

Voeg de onderstaande code toe aan het `functions.php`-bestand van je actieve thema:

```php [/public_html/wp-content/themes/jouw-thema/functions.php]
if (!is_admin() && preg_match('/author=([0-9]*)/i', $_SERVER['QUERY_STRING'])) {
    wp_die('Toegang geweigerd');
}
```

Zodra de code is toegevoegd, krijgt elke bezoeker die een auteursarchief-URL zoals `jouwdomein.nl/?author=1` probeert te openen de melding **Toegang geweigerd** te zien — in plaats van de bijbehorende gebruikersnaam.
