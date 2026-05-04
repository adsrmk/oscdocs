# Fout bij het maken van een databaseverbinding

Deze foutmelding betekent dat WordPress geen verbinding kan maken met de database. Meestal wordt dit veroorzaakt door onjuiste inloggegevens, een corrupte database of een tijdelijk serverprobleem.

Volg de onderstaande stappen om het probleem op te sporen en te verhelpen.

<br>

## 1. Controleer de databasegegevens in `wp-config.php`

Begin met het controleren van de gegevens in je WordPress-configuratiebestand.

1. Log in op je **OS Cloud**-paneel.
2. Ga naar het onderdeel **Websites**, selecteer je website en open de **Bestandsbeheerder**.
3. Navigeer naar de hoofdmap van je WordPress-installatie (meestal `/public_html/`).
4. Open het `wp-config.php`-bestand om het te bewerken. Je vindt hier regels zoals:

```php [/public_html/wp-config.php]
define('DB_NAME', 'jouw_database_naam');
define('DB_USER', 'jouw_database_gebruiker');
define('DB_PASSWORD', 'jouw_database_wachtwoord');
define('DB_HOST', 'localhost');
```

<br>

## 2. Controleer de databasegegevens in het paneel

Nadat je de gegevens in `wp-config.php` hebt gecontroleerd, check je of ze overeenkomen met de daadwerkelijke databasegegevens in het paneel.

1. Ga in het paneel naar je website en selecteer **Databases**.
2. Controleer of de waarden voor `DB_NAME`, `DB_USER` en `DB_PASSWORD` uit `wp-config.php` overeenkomen met een bestaande database in de lijst.

Als de gegevens niet overeenkomen, pas je `wp-config.php` aan met de juiste databasenaam en gebruikersnaam.

> **Tip:** Je kunt indien nodig nieuwe databasegebruikers aanmaken via het onderdeel **Databasegebruikers**.

<br>

## 3. Reset het wachtwoord van de MySQL-gebruiker

Als de databasegegevens kloppen, ligt de oorzaak meestal bij het wachtwoord. Reset in dat geval het wachtwoord van de MySQL-gebruiker en werk dit ook bij in `wp-config.php`.

1. Ga terug naar het onderdeel **Databasegebruikers**.
2. Selecteer de gebruiker waarvan je het wachtwoord wilt wijzigen.

<img width="1790" height="670" alt="image" src="https://github.com/user-attachments/assets/3908df5b-f0fc-4f32-90e1-2f1f549ae5b8" />

3. Klik op **Resetten** rechtsboven in het blok en voer een nieuw wachtwoord in.

<img width="1810" height="910" alt="image" src="https://github.com/user-attachments/assets/fa55452d-5198-4051-a50a-467b26ff512d" />

4. Klik op **Wachtwoord wijzigen** om te bevestigen. Werk daarna de waarde van `DB_PASSWORD` in `wp-config.php` bij met het nieuwe wachtwoord.

<br>

## 4. Zorg dat de MySQL-gebruiker de juiste rechten heeft

1. Ga terug naar het onderdeel **Databasegebruikers**.
2. Selecteer de gebruiker waarvan je de rechten wilt aanpassen.
3. Scrol omlaag naar het onderdeel **Database-toegang**.
4. Klik op het kebab-menu (drie verticale stippen) rechts en kies **Rechten bewerken**.

<img width="1788" height="458" alt="image" src="https://github.com/user-attachments/assets/43bbb6bf-ba83-4a35-9a98-5d73c81d86d4" />

5. Vink het selectievakje **Alle databaserechten** aan.

<img width="1352" height="586" alt="image" src="https://github.com/user-attachments/assets/66b68a5e-740e-4959-9642-641d6cee5ae9" />

6. Sla je wijzigingen op en sluit het scherm.

<br>

Hiermee geef je de MySQL-gebruiker volledige toegang tot de database, zodat WordPress weer correct verbinding kan maken en functioneren.
