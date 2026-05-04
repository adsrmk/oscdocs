# WordPress-geheugenlimiet verhogen

WordPress kan af en toe geheugen tekortkomen — meestal bij sites met veel verkeer, veel functionaliteiten of veel plugins. Het kan ook voorkomen als een thema of plugin problematische code bevat.

Wanneer dit gebeurt, zie je een foutmelding zoals:

```
Allowed memory size of 19242411 bytes exhausted.
```

Soms bevat de foutmelding ook de specifieke functie of het bestand dat de fout veroorzaakt — handig om te achterhalen welke plugin of thema problemen geeft. In andere gevallen heeft je site simpelweg meer geheugen nodig om goed te functioneren.

<div class="tip custom-block" style="padding-top: 8px">
We raden aan om je site te draaien op de <b>nieuwste ondersteunde PHP-versie</b>, samen met de actuele versies van WordPress core, thema's en plugins. Dat voorkomt veel geheugenproblemen al meteen.
</div>

<br>

## Stap 1 — Controleer je huidige geheugenlimieten

WordPress 5.0+ bevat een ingebouwde **Site Health**-tool. Open deze via **Gereedschap → Site-status → Info** in je WordPress-dashboard.

Er zijn twee limieten waarmee je rekening moet houden:

| Limiet | Waar je het vindt | Wat het bepaalt |
| --- | --- | --- |
| **Server PHP-limiet** | Onderdeel **Server** | Het maximaal beschikbare geheugen voor PHP op de server. WordPress kan deze waarde nooit overschrijden. |
| **WordPress-geheugenlimiet** | Onderdeel **WordPress-constanten** | De geheugenlimiet die WordPress voor zichzelf hanteert (standaard `40M`). |

<div class="info custom-block" style="padding-top: 8px">
Op shared hosting staat de server PHP-limiet vast op <b>168 MB</b> voor alle klanten. Op een <b>Managed VPS</b> kunnen we de PHP-instellingen op maat aanpassen aan jouw behoeften.
</div>

<br>

## Stap 2 — De WordPress-constanten begrijpen

Onder **WordPress-constanten** vind je twee waarden:

- **`WP_MEMORY_LIMIT`** — De geheugenlimiet voor de **front-end** van je site. Dit is meestal de waarde die je wilt verhogen wanneer bezoekers fatale fouten zien.
- **`WP_MAX_MEMORY_LIMIT`** — De geheugenlimiet voor het **adminpaneel**. Mag hoger worden ingesteld dan `WP_MEMORY_LIMIT`, omdat admintaken (zoals paginabouwers) vaak meer geheugen nodig hebben.

<br>

## Stap 3 — Verhoog de geheugenlimieten

Om deze limieten aan te passen, bewerk je je `wp-config.php`-bestand. Je vindt dit bestand in de hoofdmap van je site, te benaderen via de **Bestandsbeheerder** of **SFTP**.

Zoek de volgende regels (of voeg ze toe als ze niet bestaan):

```php [/public_html/wp-config.php]
define( 'WP_MEMORY_LIMIT', '256M' );
define( 'WP_MAX_MEMORY_LIMIT', '512M' );
```

<div class="warning custom-block" style="padding-top: 8px">
De waarden die je instelt <b>mogen de PHP-geheugenlimiet van de server niet overschrijden</b>. Stel je <code>WP_MEMORY_LIMIT</code> in op <code>512M</code> terwijl je serverlimiet <code>168M</code> is, dan wordt WordPress alsnog beperkt tot <code>168M</code>.
</div>

Sla het bestand op en ververs de Site Health-pagina om te controleren of de nieuwe limieten actief zijn.
