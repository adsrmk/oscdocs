# Set Up DNS Records

Every domain relies on the **Domain Name System (DNS)** to connect visitors to the right server — it acts as the internet's address book. When you register a domain, it initially points to your registrar's nameservers. To make your domain fully work with **OS Cloud**, you can either update the nameservers or configure the DNS records manually.

<div class="tip custom-block" style="padding-top: 8px">
You have <b>two options</b> to connect your domain to OS Cloud, depending on how much DNS control you want.
</div>

<br>

## Which option should you pick?

| Option | Best for |
| --- | --- |
| **1. Change nameservers** | You want OS Cloud to manage everything (website, email, subdomains) automatically. |
| **2. Manage DNS records manually** | You want to keep email with another provider (e.g. Google Workspace, Microsoft 365) while hosting your site with OS Cloud. |

<br>

## Option 1 — Change nameservers (recommended)

The easiest setup: point your nameservers to OS Cloud and we manage all DNS records for you. Your domain, website, and mail services work out of the box.

1. Log in to your registrar and open the **DNS settings**.
2. Locate **nameservers** and update them to the following:

```
ns1.oscloud.nl
ns2.oscloud.nl
```

> Most registrars show four input fields. You only need to fill in **two** — that's enough for proper configuration.

<br>

## Option 2 — Manage DNS records manually

DNS records are individual entries that define how your domain behaves. If you want to keep your nameservers at your registrar, add the records below to route traffic to OS Cloud.

Each website runs in an isolated container with its own **unique IP address**. You can find your site's IPv4 and IPv6 addresses under the **"At a glance"** section in your OS Cloud panel.

1. Log in to your registrar.
2. Under your domain, find **DNS records** or **DNS settings**.
3. Add the following records:

| Type | Value |
| --- | --- |
| **A** | The `IPv4` address shown in your OS Cloud panel |
| **AAAA** | The `IPv6` address shown in your OS Cloud panel |
