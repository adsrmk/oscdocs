---
description: "Some customers run into issues when requesting an SSL certificate for their website — most often shortly after transferring a domain or updating nameservers/DNS records."
audience: customers
---

# Requesting SSL Certificates

Some customers run into issues when requesting an SSL certificate for their website — most often shortly after transferring a domain or updating nameservers/DNS records.

Below are the most common errors and how to fix them.

## Error 400 — Timeout during connect

```
Failed to issue a Let's Encrypt certificate for example.site.com: LetsEncrypt challenge failed
for example.site.com: Some(ServerError { type: Some("urn:ietf:params:acme:error:connection"),
title: None, status: Some(400), detail: Some("91.98.61.44: Fetching
http://example.site.com/.well-known/acme-challenge/S2MRYRq83Hi7ADEzBii1fko-ZGuNzp-I73BLyzFYJ28:
Timeout during connect (likely firewall problem)") })
```

This error usually means the firewall (**ModSecurity**) is blocking the request from reaching the Web Application Firewall (WAF).

**Solution:** This issue rarely occurs nowadays. Since version v12.04, MODSEC has been disabled due to its limited added value and the high number of internal blockages.

## Error 403 — Unauthorized

```
Failed to issue a Let's Encrypt certificate for example.site.com: LetsEncrypt challenge failed
for example.site.com: Some(ServerError { type: Some("urn:ietf:params:acme:error:unauthorized"),
title: None, status: Some(403), detail: Some("2a01:4f2:1c1e:51c7::1: Invalid response from
http://example.site.com/.well-known/acme-challenge/ybh4LsRVboU-qkGSJE3s3ElIYu1_5kFT78c9cL3LKuY: 404") })
```

Usually appears shortly after adding a domain to the panel or updating nameservers/DNS records. In most cases this is a DNS propagation issue and will resolve automatically within about **one hour**.

**Fix (if the issue persists after one hour):**

1. Select your domain.
2. Open the **Security** tab.
3. Try disabling **Force HTTPS**, then request the certificate again.

## Error 429 — Rate limited

```
Failed to issue a Let's Encrypt certificate for example.site.com: SSL error: Server(ServerError {
type: Some("urn:ietf:params:acme:error:rateLimited"), title: None, status: Some(429),
detail: Some("too many certificates (5) already issued for this exact set of identifiers in the
last 168h0m0s, retry after 2025-09-18 09:13:16 UTC: see https://letsencrypt.org/docs/rate-limits/") })
```

If you request more than a few certificates in a short period, Let's Encrypt will temporarily block further requests for your domain. This restriction is temporary and lifts automatically after a few hours.

**Fix:** Wait until the cooldown period has passed before trying again. The exact retry time is shown in the error message.

<div class="tip custom-block" style="padding-top: 8px">
If you run into a different error code, please contact us. We'll help resolve the issue and add it to this documentation for future reference.
</div>
