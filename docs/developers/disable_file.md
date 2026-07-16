---
description: "WordPress beschikt over een ingebouwde code-editor waarmee je thema- en pluginbestanden rechtstreeks vanuit het admin-dashboard kunt aanpassen."
audience: developers
---

# Bestandsbewerking uitschakelen

WordPress beschikt over een ingebouwde code-editor waarmee je thema- en pluginbestanden rechtstreeks vanuit het admin-dashboard kunt aanpassen. Handig, maar ook een groot beveiligingsrisico — krijgt een aanvaller toegang tot je dashboard, dan kan diegene direct kwaadaardige code in je site injecteren.

We raden aan deze editor uit te schakelen door de onderstaande regel toe te voegen aan je `wp-config.php`-bestand:

```php [/public_html/wp-config.php]
// Bestandsbewerking via het WordPress-dashboard uitschakelen
define( 'DISALLOW_FILE_EDIT', true );
```

Plaats de regel vóór de commentaarregel `/* That's all, stop editing! */`. Maak vooraf een back-up van `wp-config.php` en controleer na de wijziging of de website en het WordPress-dashboard normaal openen.

De instelling verbergt de thema- en plugin-editor in WordPress. Updates en beheer via het OS Cloud-paneel, WP-CLI, SFTP of een deploymentproces blijven mogelijk.

::: warning
Dit beperkt de impact van een overgenomen beheerdersaccount, maar voorkomt geen malware en vervangt geen sterke wachtwoorden, [2FA](/guide/2fa), updates of minimale gebruikersrechten.
:::

## Terugdraaien

Verwijder de regel of wijzig de waarde tijdelijk naar `false`. Zet de bescherming na het probleemonderzoek weer aan en gebruik voor structurele wijzigingen bij voorkeur versiebeheer en een gecontroleerd deploymentproces.
