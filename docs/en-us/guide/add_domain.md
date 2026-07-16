---
description: "A domain connects a recognisable web address to your website. After adding it, make sure your DNS configuration points to the correct OS Cloud server."
audience: customers
---

# Add a domain or website

A domain connects a recognisable web address to your website. After adding it, make sure your [DNS configuration](/en-us/guide/setup_dns) points to the correct OS Cloud server.

1. In the panel, go to **Websites**.
2. In the top-right corner, select **Add new website**.
3. Choose the website type that fits your situation:

- **Blank** — Creates empty webspace under `public_html`. Use this for your own deployment or a static HTML, CSS, or JavaScript site.
- **App** — Installs an application with the supplied administrator details. The current selection is shown in the panel; availability may vary by plan.
- **Clone website** — Copies an existing site and creates a new database. This option is only visible on supported plans. For WordPress, enable **Perform a WordPress search and replace** so internal URLs are updated to the new domain.

4. Enter your domain and follow the steps to complete the process.
5. Record the assigned IP address and configure the [DNS records](/en-us/guide/setup_dns).
6. Once DNS points correctly, request an [SSL certificate](/en-us/guide/SSL) and verify the site over HTTPS.

::: warning
When cloning a production site, review forms, payment providers, scheduled tasks, outgoing email, and search-engine indexing before use. Otherwise, the clone may perform real actions unintentionally.
:::
