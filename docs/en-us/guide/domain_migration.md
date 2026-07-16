---
description: Move a domain and website to OS Cloud in controlled stages, with minimal interruption and a defined rollback.
audience: customers
---

# Move a domain without unnecessary downtime

A domain migration consists of several parts: registration, DNS, website, SSL, and often email. Plan each part separately. Obtaining a domain transfer code does not automatically move the website or existing mailboxes.

## Create an inventory first

Before making changes, record:

- all current DNS records and nameservers;
- website files, database, and PHP version;
- mailboxes, aliases, forwarders, and mail services;
- subdomains, APIs, verification records, and external services;
- current SSL configuration and redirects;
- who can access the registrar, previous host, and OS Cloud.

Create a current [website backup](/en-us/guide/backups) and export DNS records where possible. Screenshots are useful as supporting evidence, but text record values are more reliable for restoration.

## 1. Lower the DNS TTL in advance

Where possible, lower the TTL of records that will change 24 to 48 hours before cutover. Use a value supported by your DNS provider. A lower TTL speeds up later changes, but only after the previous TTL has expired.

## 2. Build the new environment

1. [Add the domain or website](/en-us/guide/add_domain) in OS Cloud.
2. Copy files and the database without stopping production.
3. Update configuration, database credentials, and internal URLs carefully.
4. Review the site through a temporary URL, preview, or local testing method.
5. Test forms, login, shop, scheduled tasks, uploads, and integrations.

During testing, prevent the new environment from processing real orders, newsletters, or scheduled tasks twice. Use a staging mode or temporary block where required.

## 3. Prepare email separately

Create mailboxes and aliases in advance and follow [Migrate email to OS Cloud](/en-us/guide/email_migration). Do not copy existing MX, SPF, DKIM, and DMARC records blindly: they must match the services that will continue to send and receive after migration.

## 4. Switch DNS

Choose one of these routes:

- change only the relevant A, AAAA, CNAME, and mail records; or
- change the nameservers when OS Cloud will manage the complete DNS zone.

Before saving, verify IP addresses, hostnames, and any missing subdomains again. Do not remove the old DNS zone yet.

## 5. Verify after cutover

Test from more than one network:

- the main domain and `www` over HTTPS;
- important subdomains and redirects;
- WordPress login, forms, and payments;
- incoming and outgoing email;
- DNS records and the new [SSL certificate](/en-us/guide/SSL).

DNS caches may temporarily return different answers. Compare results through multiple resolvers before treating the migration as complete everywhere.

## Keep the previous environment available

Keep the previous hosting and mail service available for at least several days, depending on TTL, traffic, and business risk. Run a final database or mailbox synchronisation where necessary. Cancel the old service only after logs, orders, and email demonstrably reach the new environment.

## Roll back

For a serious problem, restore the DNS records captured earlier and confirm that the old environment can still accept current data. Record transactions or content created during cutover so they are not lost when reverting.

If the migration stalls, [contact support](/en-us/guide/contact-support) with the domain, old and new DNS values, cutover time, and a list of the components that do and do not work.
