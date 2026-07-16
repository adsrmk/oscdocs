---
description: "The browser found the server address, but the connection was rejected before the website could respond."
audience: customers
---

# ERR_CONNECTION_REFUSED

The browser found the server address, but the connection was rejected before the website could respond. The cause may be the server, a firewall, or a local VPN or proxy configuration.

## Check the scope first

1. Check the [OS Cloud status page](https://status.oscloud.nl/).
2. Open the website on another device and over another network, such as mobile data.
3. Test `https://` with the exact hostname configured in OS Cloud.

If the website only works on another network, a local firewall, VPN, proxy or security filter is probably blocking the connection. If it fails everywhere, check the website and server status in the panel.

## Possible resolutions

- Pause a VPN or proxy temporarily and test again. Do not leave security software disabled; add a narrow exception if required.
- Confirm that the domain points to the correct OS Cloud server address.
- Check that the website application is running and has not stopped because of maintenance, a failed deployment or resource pressure.
- Review recent firewall or access-rule changes and roll back the last change if the problem started immediately afterwards.
- If you use a non-standard port, confirm that the port is available and allowed.

## Verify the result

The connection works when the website opens over HTTPS on multiple networks. When contacting support, include the domain, time of the issue, networks tested, and any recent DNS, firewall or deployment changes.

::: warning
Do not send a firewall export, private key or login credentials in a support request. Only include relevant, sanitised log entries.
:::
