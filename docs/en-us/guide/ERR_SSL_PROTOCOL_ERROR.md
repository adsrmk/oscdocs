---
description: "This error means the browser couldn't establish a secure connection because the website's SSL certificate is invalid, misconfigured, or cannot be verified."
audience: customers
---

# ERR_SSL_PROTOCOL_ERROR

This error means the browser couldn't establish a secure connection because the website's SSL certificate is invalid, misconfigured, or cannot be verified.

In Chrome, you may see this displayed as **`ERR_PROTOCOL_ERROR`** — a more generic message that usually points to the same underlying SSL issue.

## Common causes

- The SSL/TLS certificate is missing, expired, or set up incorrectly
- A protocol mismatch between the browser and server
- Browser extensions interfering with the secure request

## How to fix it

On **OS Cloud**, this error is often caused by an SSL certificate that has not been requested, does not cover every hostname in use or has expired. Follow [Request an SSL certificate](/en-us/guide/SSL) to check the configuration and request a certificate.

> **Note:** If you're on a managed cloud plan and your website is moved to another server, this issue is resolved automatically.
