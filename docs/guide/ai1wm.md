# Websitedata opslaan of herstellen

Met de plugin **All-in-One WP Migration** maak je eenvoudig een volledige back-up van je WordPress-website — inclusief inhoud, afbeeldingen, plugins en thema's — in één bestand. Dit bestand kun je op elk moment gebruiken om je website te herstellen.

<br>

## Een back-up maken

1. Installeer en activeer de plugin [All-in-One WP Migration](https://wordpress.org/plugins/all-in-one-wp-migration/).
2. Ga in je WordPress-dashboard naar de linkerzijbalk en klik op **All-in-One WP Migration → Back-ups**.
3. Klik op **Back-up maken** en wacht tot het proces is voltooid.
4. Download het back-upbestand naar je computer. We raden aan het ook op te slaan in een clouddienst (zoals Google Drive of OneDrive) als extra beveiliging.

<br>

## Een back-up terugzetten

1. Ga in je WordPress-dashboard naar **All-in-One WP Migration → Back-ups** in de linkerzijbalk.
2. Klik op **Importeren**.
3. Sleep je back-upbestand naar het uploadgebied — of klik op **Bestand** in het dropdown-menu om het bestand op je computer op te zoeken.

> **Let op:** Ons platform heeft een maximale uploadlimiet van **100 MB**. Is je bestand groter, of loopt de upload vast? Gebruik dan de SFTP-methode hieronder.

<br>

## Uploaden via SFTP (voor bestanden groter dan 100 MB)

Als je back-upbestand groter is dan 100 MB, moet je het handmatig uploaden via SFTP.

1. Maak verbinding met je website via een SFTP-programma (zoals FileZilla).
2. Navigeer naar de volgende map:
   ```
   public_html/wp-content/ai1wm-backups
   ```
3. Upload je `.wpress` back-upbestand naar deze map.

Zodra het uploaden klaar is, verschijnt het bestand automatisch in het onderdeel **Back-ups** van de plugin. Klik op het verticale menu naast het bestand en kies **Herstellen** om je website terug te zetten.
