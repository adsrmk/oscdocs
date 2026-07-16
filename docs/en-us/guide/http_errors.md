---
description: Resolve HTTP errors 403, 404, 500, and 504 by checking scope, logs, and recent changes first.
audience: customers
---

# Resolve HTTP errors 403, 404, 500, and 504

An HTTP status code describes where a request ended. It is a starting point, not a complete diagnosis. Always record the affected URL, time, preceding action, and whether the problem affects everyone.

| Code | Meaning | Common direction |
| --- | --- | --- |
| **403 Forbidden** | The server understands the request but refuses access | Permissions, security rule, authentication, or blocking |
| **404 Not Found** | The requested route or file does not exist at that location | Incorrect URL, permalink, redirect, or missing file |
| **500 Internal Server Error** | The application or server could not process the request | PHP error, configuration, plugin, theme, or resource issue |
| **504 Gateway Timeout** | An upstream server waited too long for a response | Slow PHP, database, external API, or stalled process |

The [MDN HTTP reference↗](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status) lists the complete set of HTTP status codes and their meanings.

## Start with these checks

1. Check the [service status](https://status.oscloud.nl/).
2. Test the exact URL in a private window and on another network.
3. Determine whether one page, the administration area, or the whole website is affected.
4. Record recent deployments, updates, redirects, permission changes, and DNS changes.
5. Review web-server and PHP error logs for the same time.

Do not disable several plugins or security rules at once. Doing so removes the connection between cause and result.

## 403 Forbidden

Check:

- that you are signed in as the correct user;
- file and directory permissions using [File permissions](/en-us/guide/chmod);
- security plugins, IP blocks, and web-server rules;
- whether an index file exists and direct directory access is allowed;
- whether only your network or account is blocked.

Do not loosen permissions to `777`. This increases security risk and often hides the actual cause.

## 404 Not Found

Check spelling, letter case, and path first. If the content exists, save the WordPress permalink structure again and review redirects and web-server rules. After a migration, confirm that internal URLs and the document root were updated correctly.

Create a specific [redirect](/en-us/guide/redirect) for a permanently moved page. Do not send every 404 to the homepage; this hides errors and gives visitors an unclear result.

## 500 Internal Server Error

An error 500 almost always requires the matching log entry. Review:

- PHP syntax and fatal errors;
- a recent plugin, theme, or core update;
- `.htaccess` or web-server configuration;
- PHP version and missing extensions;
- memory limits and damaged files.

Enable [WordPress debugging](/en-us/guide/debug) temporarily only, and do not show error details to visitors. Also see [Change the PHP version safely](/en-us/guide/change_php_version) and [WordPress memory limit](/en-us/guide/wp_memory).

## 504 Gateway Timeout

A 504 often means PHP, the database, or an external service did not answer in time. Review slow queries, imports, backup tasks, scheduled tasks, and external API calls. Repeatedly refreshing may increase load; do not start the same heavy task several times.

Check whether the problem coincides with a deployment or traffic spike. For a 502 response, use [502 Bad Gateway](/en-us/guide/502).

## Verification and support

The issue is resolved only when the original action succeeds repeatedly and logs contain no new related errors. Check associated pages and processes as well.

When [contacting support](/en-us/guide/contact-support), include the status code, complete URL, time and time zone, network or user, recent changes, and relevant log entries. Never share passwords, session cookies, or API secrets.
