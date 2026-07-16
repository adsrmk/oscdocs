---
description: "The browser cannot find an IP address for the domain you entered, so it cannot reach the website."
audience: customers
---

# ERR_NAME_NOT_RESOLVED

The browser cannot find an IP address for the domain you entered, so it cannot reach the website. This usually points to a missing or incorrect DNS record, a typing error in the domain name, or a recent DNS change that is not yet visible everywhere.

## Check the scope first

Open the domain on a second device or over a mobile network. If it works there, the issue is probably local. If it fails everywhere, review the domain's DNS configuration.

## Resolution

1. Check the complete URL, including any subdomain such as `www`.
2. At your DNS provider, confirm that the nameservers match the configuration method you selected.
3. If you manage DNS records manually, confirm that the A or AAAA record points to the server address shown in the OS Cloud panel.
4. Check the root domain and `www` separately if you use both.
5. If DNS was changed recently, allow the change to propagate and avoid making conflicting changes while propagation is in progress.
6. Only for a local issue, clear the DNS cache on your device or router and try again.

See [Configure DNS records](/en-us/guide/setup_dns) for the complete setup.

## Verify the result

The issue is resolved when the domain opens the correct website on multiple devices. If a certificate warning appears next, review the [SSL configuration](/en-us/guide/SSL).

Contact support if the records appear correct but the domain still cannot be resolved after normal DNS propagation. Include the domain, configured nameservers and time of the last change.
