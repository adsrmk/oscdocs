# Foutmelding bij uploaden van media

```
The server cannot process the image. This can happen if the server is busy or does
not have enough resources to complete the task. Uploading a smaller image may help.
Suggested maximum size is 2560 pixels.
```

Deze foutmelding verschijnt meestal bij het gebruik van de ingebouwde WordPress-media-uploader. Wanneer je een afbeelding uploadt, slaat WordPress het bestand op, maakt het een bijlage-record aan en voert het PHP-beeldbewerking uit voor schaling en optimalisatie — een van die stappen kan misgaan wanneer de server te weinig resources heeft.

<br>

## Troubleshooten

### 1. Probeer de upload opnieuw

Ververs de pagina, wacht een paar minuten en probeer het opnieuw — bij voorkeur **één afbeelding tegelijk** als je een bulk-upload deed. Deze fout verschijnt vaak tijdens bulkbewerkingen wanneer de CPU van de server zijn limiet bereikt.

<br>

### 2. Gebruik een kleinere afbeelding

Blijft het probleem bestaan? Upload dan een afbeelding met afmetingen **kleiner dan 2560 pixels** in breedte en/of hoogte. Dit verlaagt de verwerkingsbelasting en voorkomt de fout meestal.

<br>

### 3. Verhoog de WordPress-geheugenlimiet

De foutmelding suggereert dat er onvoldoende resources zijn. Je kunt de PHP-geheugenlimiet verhogen door de onderstaande regel toe te voegen aan je `wp-config.php`-bestand:

```php [/public_html/wp-config.php]
define( 'WP_MEMORY_LIMIT', '168M' );
```

<br>

### 4. Schakel over naar de GD-beeldbewerker

WordPress verwerkt afbeeldingen met een van de twee PHP-modules: **ImageMagick** of de **GD Library**. Standaard kiest WordPress er automatisch een — maar ImageMagick kan tegen geheugenlimieten aanlopen die uploadfouten veroorzaken. Je kunt WordPress dwingen om in plaats daarvan GD te gebruiken.

<div class="warning custom-block" style="padding-top: 8px">
Deze aanpassing vereist het bewerken van het <code>functions.php</code>-bestand van je thema. Een fout hierin kan je site stuk maken. Voel je je niet zeker bij het bewerken van themabestanden? Neem dan contact op met onze supportafdeling voor hulp.
</div>

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
