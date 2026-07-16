---
description: "Het instellen van de juiste bestands- en mapmachtigingen is essentieel om ongeautoriseerde toegang tot — of aanpassingen van — je WordPress-site te voorkomen."
audience: customers
---

# Veilige bestands- en mapmachtigingen

Het instellen van de juiste bestands- en mapmachtigingen is essentieel om ongeautoriseerde toegang tot — of aanpassingen van — je WordPress-site te voorkomen. Onjuiste machtigingen kunnen aanvallers in staat stellen om bestanden te overschrijven, kwaadaardige code te injecteren of zelfs de volledige controle over je website te krijgen.

<div class="info custom-block" style="padding-top: 8px">
Het paneel stelt standaard al aanbevolen machtigingen in. Voor extra beveiliging raden we aan om <code>wp-config.php</code> op <b>440</b> in te stellen.
</div>

## Aanbevolen machtigingen

- **Bestanden: `644`** — De eigenaar mag lezen en schrijven; anderen mogen alleen lezen.
- **Mappen: `755`** — De eigenaar mag lezen, schrijven en uitvoeren; anderen mogen lezen en uitvoeren.
- **`wp-config.php`: `440`** — Beperkt de toegang tot gevoelige configuratiegegevens.

**Tips:**

- Gebruik nooit `777`-machtigingen. Hiermee krijgt iedereen schrijfrechten en dat vormt een groot beveiligingsrisico.
- Controleer je machtigingen regelmatig, zeker nadat je nieuwe plugins of thema's hebt geïnstalleerd.

De juiste machtigingen zorgen ervoor dat WordPress soepel blijft draaien en verkleinen tegelijk de kans op ongeautoriseerde wijzigingen.

## Geavanceerd: corebestanden tijdelijk alleen-lezen maken

Met `444` maak je bestanden volledig alleen-lezen. Dit kan in een gecontroleerde herstel- of onderzoeksfase voorkomen dat corebestanden worden gewijzigd, maar is **geen standaardinstelling voor regulier WordPress-beheer**.

De `wp-includes`-map bevat kernbibliotheken die WordPress moet kunnen **lezen en uitvoeren** — maar tijdens normaal gebruik nooit hoeft aan te passen. Door deze bestanden alleen-lezen te maken, voorkom je dat kwaadaardige code, kwetsbare plugins of gehackte beheerdersaccounts de kernfunctionaliteit kunnen wijzigen of injecteren.

Omdat WordPress en beheertools dan ook niet meer kunnen schrijven, kunnen core-updates en reparaties mislukken. Gebruik dit alleen tijdelijk, met een actuele back-up en een vastgelegde rollback.

<div class="warning custom-block" style="padding-top: 8px">
Pas <b>geen</b> <code>444</code>-machtiging toe op de <code>wp-includes</code>-map zelf. Mappen hebben namelijk de <i>execute</i>-machtiging nodig om toegankelijk te zijn. Heb je deze per ongeluk verwijderd? Log dan in via SFTP en zet de mapmachtigingen terug naar <code>755</code>.
</div>

**Zo stel je veilige machtigingen in voor alle wp-includes-bestanden:**

1. Maak verbinding via [SSH](/guide/SSH).
2. Ga naar de hoofdmap van je website:
   ```bash
   cd public_html
   ```
3. Voer de volgende opdracht uit:
   ```bash
   find wp-admin wp-includes -type f -exec chmod 444 {} \;
   ```

Zet de bestanden vóór een WordPress-update of reparatie terug naar de gebruikelijke waarde:

```bash
find wp-admin wp-includes -type f -exec chmod 644 {} \;
```

Controleer daarna de website, het beheerpaneel en het updateproces. Gebruik bestandsintegriteitscontrole en herstel vanuit een bekende schone bron als je malware vermoedt; alleen bestandsrechten wijzigen verwijdert geen infectie.

## Hoe wijzig je machtigingen?

Je kunt de machtigingen van een bestand of map aanpassen door er met de **rechtermuisknop** op te klikken en in het menu **Machtigingen** te kiezen.
