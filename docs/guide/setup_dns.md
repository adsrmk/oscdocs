---
description: "Elk domein gebruikt het Domain Name System (DNS) om bezoekers naar de juiste server te leiden — het werkt als het adresboek van het internet."
audience: customers
---

# DNS-records instellen

Elk domein gebruikt het **Domain Name System (DNS)** om bezoekers naar de juiste server te leiden — het werkt als het adresboek van het internet. Wanneer je een domein registreert, verwijst het in eerste instantie naar de nameservers van je registrar. Om je domein volledig te laten werken met **OS Cloud**, kun je óf de nameservers aanpassen, óf de DNS-records handmatig configureren.

<div class="tip custom-block" style="padding-top: 8px">
Je hebt <b>twee opties</b> om je domein aan OS Cloud te koppelen, afhankelijk van hoeveel controle je over je DNS wilt hebben.
</div>

## Welke optie kies je?

| Optie | Geschikt voor |
| --- | --- |
| **1. Nameservers wijzigen** | Je wilt dat OS Cloud alles automatisch beheert (website, e-mail, subdomeinen). |
| **2. DNS-records handmatig beheren** | Je wilt e-mail bij een andere provider houden (bijv. Google Workspace, Microsoft 365) en alleen je website hosten bij OS Cloud. |

## Optie 1 — Nameservers wijzigen (aanbevolen)

De eenvoudigste opzet: laat je nameservers naar OS Cloud verwijzen en wij beheren alle DNS-records voor je. Je domein, website en mail werken meteen zonder verdere instellingen.

1. Log in bij je registrar en open de **DNS-instellingen**.
2. Zoek **nameservers** op en stel ze in op het volgende:

```
ns1.oscloud.nl
ns2.oscloud.nl
```

> De meeste registrars tonen vier invoervelden. Je hoeft er maar **twee** in te vullen — dat is voldoende voor een correcte configuratie.

## Optie 2 — DNS-records handmatig beheren

DNS-records zijn losse vermeldingen die bepalen hoe je domein zich gedraagt. Wil je je nameservers bij je registrar houden? Voeg dan onderstaande records toe om het verkeer naar OS Cloud te leiden.

Elke website draait in een geïsoleerde container met een **uniek IP-adres**. Je vindt het IPv4- en IPv6-adres van je site onder het onderdeel **"At a glance"** in je OS Cloud-paneel.

1. Log in bij je registrar.
2. Zoek onder je domein naar **DNS-records** of **DNS-instellingen**.
3. Voeg de volgende records toe:

| Type | Waarde |
| --- | --- |
| **A** | Het `IPv4`-adres uit je OS Cloud-paneel |
| **AAAA** | Het `IPv6`-adres uit je OS Cloud-paneel |
