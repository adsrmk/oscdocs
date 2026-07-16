---
description: "Analyse HTTP security headers with Mozilla Observatory and roll out improvements without breaking legitimate functionality."
audience: developers
---

# Mozilla Observatory

The [Mozilla Observatory↗](https://developer.mozilla.org/en-US/observatory) (specifically the **HTTP Observatory**) is a free security tool by Mozilla that helps website owners and developers assess their site's security configuration. Originally launched in 2016 and migrated to the **MDN (Mozilla Developer Network)** in July 2024, it focuses on analysing **HTTP response headers** and modern security standards.

## Run a scan

1. Start with a test or staging environment that uses the same web-server configuration as production.
2. Review each finding to determine which header is missing, too permissive, or sent more than once.
3. Change one category at a time, then test login, forms, embeds, payment flows, and third-party scripts.
4. Scan again and document both the change and rollback before deploying to production.

A lower score is not automatically a vulnerability, and a high score does not guarantee application security. Appropriate settings depend on your resources, integrations, and browser support. See [HTTP security headers](/en-us/developers/HTTP_security) for examples and implementation risks.

::: warning
An overly strict Content Security Policy or cross-origin setting can break legitimate functionality. Do not copy scanner recommendations blindly, and avoid configuring the same header at multiple layers.
:::
