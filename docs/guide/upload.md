---
description: "Los WordPress-fouten bij het uploaden van afbeeldingen systematisch op door bestandsgrootte, serverresources en beeldverwerking te controleren."
audience: customers
---

# Foutmelding bij uploaden van media

```
The server cannot process the image. This can happen if the server is busy or does
not have enough resources to complete the task. Uploading a smaller image may help.
Suggested maximum size is 2560 pixels.
```

Deze foutmelding verschijnt meestal bij het gebruik van de ingebouwde WordPress-media-uploader. Wanneer je een afbeelding uploadt, slaat WordPress het bestand op, maakt het een bijlage-record aan en voert het PHP-beeldbewerking uit voor schaling en optimalisatie — een van die stappen kan misgaan wanneer de server te weinig resources heeft.

## Troubleshooten

### 1. Probeer de upload opnieuw

Ververs de pagina, wacht een paar minuten en probeer het opnieuw — bij voorkeur **één afbeelding tegelijk** als je een bulk-upload deed. Deze fout verschijnt vaak tijdens bulkbewerkingen wanneer de CPU van de server zijn limiet bereikt.

### 2. Gebruik een kleinere afbeelding

Blijft het probleem bestaan? Upload dan een afbeelding met afmetingen **kleiner dan 2560 pixels** in breedte en/of hoogte. Dit verlaagt de verwerkingsbelasting en voorkomt de fout meestal.

### 3. Verhoog de WordPress-geheugenlimiet

Controleer eerst de actuele PHP-geheugenlimiet en het foutenlogboek. Als je pakket voldoende geheugen beschikbaar stelt, kun je WordPress toestaan daarvan meer te gebruiken door de onderstaande regel toe te voegen aan `wp-config.php`:

```php [/public_html/wp-config.php]
define( 'WP_MEMORY_LIMIT', '168M' );
```

Kies geen hogere waarde dan de PHP-limiet van je pakket. Een verhoging verhelpt geen beschadigd bestand, ontbrekende PHP-module of structureel capaciteitsprobleem. Zie [WordPress-geheugenlimiet](/guide/wp_memory) voor aanvullende controles.

### 4. Schakel over naar de GD-beeldbewerker

WordPress verwerkt afbeeldingen met een van de twee PHP-modules: **ImageMagick** of de **GD Library**. Standaard kiest WordPress er automatisch een — maar ImageMagick kan tegen geheugenlimieten aanlopen die uploadfouten veroorzaken. Je kunt WordPress dwingen om in plaats daarvan GD te gebruiken.

::: warning
Deze aanpassing vereist PHP-kennis. Maak vooraf een back-up en gebruik bij voorkeur een child theme of site-specifieke plugin; wijzigingen in het hoofdthema kunnen bij een update worden overschreven. Een syntaxfout kan de website onbereikbaar maken.
:::

Voeg de volgende code toe aan het `functions.php`-bestand van je actieve thema:

```php [/public_html/wp-content/themes/jouw-thema/functions.php]
function wpb_image_editor_default_to_gd( $editors ) {
    $gd_editor = 'WP_Image_Editor_GD';
    $editors = array_diff( $editors, array( $gd_editor ) );
    array_unshift( $editors, $gd_editor );
    return $editors;
}
add_filter( 'wp_image_editors', 'wpb_image_editor_default_to_gd' );
```

Test daarna een kleine JPEG en PNG, gevolgd door het oorspronkelijke bestand. Werkt GD niet beter, verwijder dan de snippet om de automatische selectie te herstellen.

Blijft de fout bestaan? Noteer het tijdstip, bestandstype, afmetingen en bestandsgrootte en voeg relevante regels uit het PHP-foutenlogboek toe wanneer je [support benadert](/guide/contact-support). Deel geen afbeelding met vertrouwelijke gegevens.
