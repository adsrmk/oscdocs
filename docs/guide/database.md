---
description: "WordPress slaat al je content, gebruikers en instellingen op in een database — berichten, pagina's, reacties en configuratie."
audience: customers
---

# Databases

WordPress slaat al je content, gebruikers en instellingen op in een database — berichten, pagina's, reacties en configuratie. Door je database te beheren bepaal je zelf hoe die informatie wordt opgeslagen en benaderd.

## Een database aanmaken

<div class="tip custom-block" style="padding-top: 8px">
Gebruik je onze automatische WordPress-installer? Dan wordt er automatisch een database voor je aangemaakt en geconfigureerd.
</div>

1. Klik op **Database toevoegen** rechtsboven in het paneel.
2. Geef je database een unieke naam.
3. *(Optioneel)* Maak een nieuwe databasegebruiker aan of koppel bestaande gebruikers en rechten.
4. Klik op **Toevoegen**. Je database verschijnt nu in de lijst.

## Een database beheren

Om je data direct te beheren, open je de databaselijst, selecteer je je database en klik je op **phpMyAdmin**.

<div class="warning custom-block" style="padding-top: 8px">
phpMyAdmin is een geavanceerde tool — alleen aanbevolen voor ervaren gebruikers. Onjuiste wijzigingen kunnen je site onbruikbaar maken. Zorg dat je site de afgelopen 24 uur correct heeft gewerkt voordat je iets aanpast. Gaat er iets mis? Gebruik dan de back-upfunctie om je database terug te zetten.
</div>

### Gebruikers beheren

1. Selecteer je database in de lijst.
2. Klik onder **Databasegebruikers** op **Databasegebruiker toevoegen**.
3. Kies een bestaande gebruiker uit het dropdown-menu of maak een nieuwe aan.
4. Stel specifieke rechten in of geef **volledige toegang**.

### Een SQL-bestand importeren

Ondersteunde formaten: `.sql`, `.gz`, `.zip`. Maximale uploadgrootte: **500 MB**.

1. Klik op het **upload**-icoon.
2. Selecteer het SQL-bestand op je computer en bevestig.

### Een SQL-bestand exporteren

Exports worden gedownload als een gecomprimeerd `.sql.gz`-bestand.

1. Selecteer je database.
2. Klik op **Downloaden** om de export te genereren en op te slaan.

> Een periodieke handmatige export is een handige extra zekerheid naast onze automatische back-ups.

## Databasegebruikersbeheer

Databasegebruikers werken met je data op basis van **rechten** — jij bepaalt of een gebruiker alleen mag lezen, of ook records mag toevoegen, aanpassen of verwijderen.

### Een nieuwe gebruiker toevoegen

1. Klik rechtsboven in het onderdeel **Gebruikers** op **Gebruiker toevoegen**.
2. Kies een veilige gebruikersnaam en wachtwoord.
3. Bepaal onder **Database-toegang** of de gebruiker toegang krijgt tot alle databases of slechts één specifieke.
4. Schakel **Alle databaserechten** in, of kies specifieke rollen.
5. Klik op **Toevoegen** om op te slaan.

### Rechten aanpassen of toegang intrekken

1. Ga naar het tabblad **Gebruikers**.
2. Zoek de gebruiker en klik op het **kebab-menu** (drie verticale stippen) rechts op de rij.
3. Kies **Rechten bewerken** om de rechten aan te passen, of **Toegang intrekken** om de gebruiker uit een database te verwijderen.
4. Wil je specifieke rechten instellen? Vink dan **Alle databaserechten** uit en selecteer de gewenste opties (bijv. `SELECT`, `INSERT`, `UPDATE`).

### Een database of gebruiker verwijderen

1. Selecteer de database of gebruiker.
2. Scrol naar de onderkant van de beheerpagina.
3. Klik op **Verwijderen**.

<div class="warning custom-block" style="padding-top: 8px">
Deze actie is onomkeerbaar. Eenmaal verwijderd is alle bijbehorende data definitief van de server gewist en niet meer te herstellen.
</div>
