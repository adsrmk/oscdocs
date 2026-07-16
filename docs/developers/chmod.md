---
description: "Het instellen van de juiste bestands- en mapmachtigingen is essentieel om ongeautoriseerde toegang tot — of aanpassingen van — je WordPress-site te voorkomen."
audience: developers
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

- Gebruik nooit `777`. Hiermee krijgt iedereen schrijfrechten en dat vormt een groot beveiligingsrisico.
- Controleer machtigingen regelmatig, zeker na het installeren van nieuwe plugins of thema's.

## Geavanceerd: corebestanden tijdelijk alleen-lezen maken

Het toepassen van `444`-machtigingen maakt corebestanden volledig alleen-lezen. Dit kan nuttig zijn tijdens gecontroleerd onderzoek of herstel, maar is geen veilige standaard voor dagelijks beheer: WordPress-updates en reparaties kunnen hierdoor mislukken.

Gebruik deze maatregel alleen tijdelijk, met een herstelbare back-up, onderhoudsvenster en gedocumenteerde rollback. Combineer hem bij een incident met integriteitscontrole en herstel vanuit een bekende schone WordPress-bron.

<div class="warning custom-block" style="padding-top: 8px">
Pas <b>geen</b> <code>444</code>-machtiging toe op de <code>wp-includes</code>-map zelf — alleen op de bestanden erin. Mappen hebben namelijk de <i>execute</i>-machtiging nodig om toegankelijk te zijn. Heb je deze per ongeluk verwijderd? Log dan in via SFTP en zet de mapmachtigingen terug naar <code>755</code>.
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

Herstel vóór updates of reparaties de reguliere bestandsrechten:

```bash
find wp-admin wp-includes -type f -exec chmod 644 {} \;
```

## Hoe wijzig je machtigingen?

Je kunt de machtigingen van een bestand of map aanpassen door er met de **rechtermuisknop** op te klikken en in het menu **Machtigingen** te kiezen.

<img width="1060" height="542" alt="Schermafbeelding van Hoe wijzig je machtigingen?" src="https://github.com/user-attachments/assets/40b5f7b8-9ebe-42da-8d2b-a4a1c6d308f3" />
