# WP Cron Jobs uitschakelen

Standaard verwerkt WordPress zijn geplande taken — zoals het controleren op updates of het publiceren van ingeplande berichten — via een script genaamd `wp-cron.php`.

Dit "pseudo-cron"-systeem is handig, maar het werkt alleen wanneer iemand daadwerkelijk je website bezoekt. Dat kan twee problemen veroorzaken:

- **Op websites met veel verkeer:** het script wordt bij elke paginalading uitgevoerd, wat onnodig veel serverbronnen verbruikt.
- **Op websites met weinig verkeer:** geplande taken worden mogelijk helemaal niet uitgevoerd als er op het juiste moment geen bezoekers zijn.

Daarnaast: als je site gebruikmaakt van **full-page caching** (bijvoorbeeld via Varnish of Cloudflare), krijgen bezoekers vaak een gecachte versie van de pagina te zien zonder dat WordPress zelf wordt aangesproken. In dat geval wordt `wp-cron.php` helemaal niet geactiveerd — een cron job op systeemniveau is dan essentieel.

De oplossing is om de **interne WordPress-cron uit te schakelen** en deze te vervangen door een cron job op systeemniveau die op een vast tijdsinterval draait.

<br>

## Stap 1 — De interne WordPress-cron uitschakelen

Om te voorkomen dat WordPress het cron-script bij elke paginalading uitvoert, moet je het bestand `wp-config.php` aanpassen.

1. Log in op je **OS Cloud**-paneel en open de **Bestandsbeheerder**.
2. Navigeer naar de hoofdmap van je website: `/public_html/`.
3. Zoek het bestand `wp-config.php`, klik er met de rechtermuisknop op en kies **Bewerken**.
4. Scrol naar de onderkant van het bestand en zoek de volgende regel:
   ```
   /* That's all, stop editing! Happy blogging. */
   ```
5. Plak de onderstaande code **direct boven** die regel:
   ```php [/public_html/wp-config.php]
   define('DISABLE_WP_CRON', true);
   ```
6. Klik op **Wijzigingen opslaan**.

<br>

## Stap 2 — Een cron job op systeemniveau instellen

Nu de interne trigger is uitgeschakeld, moet je de server vertellen om het script handmatig op een vast tijdsinterval uit te voeren.

1. Ga terug naar het **OS Cloud**-paneel-dashboard.
2. Selecteer je website en ga naar **Geavanceerd → Ontwikkelaarstools**.
3. Klik op **Cron Jobs** in de linkerzijbalk.
4. Klik op **Cron Job toevoegen**.
5. Vul het **uitvoeringstype** en het **interval** in en klik op opslaan.

<br>

> **Belangrijk:** Houd na het voltooien van deze instelling de werking van je site goed in de gaten om zeker te weten dat de geplande taken correct worden uitgevoerd. Je kunt het tijdsinterval op elk moment aanpassen via het onderdeel **Cron Jobs** in je paneel.
