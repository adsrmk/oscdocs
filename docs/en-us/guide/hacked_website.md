---
description: Contain a suspected WordPress compromise, preserve evidence, and recover from a demonstrably clean state.
audience: customers
---

# Hacked website: first response

Unknown administrators, modified pages, unwanted redirects, malware warnings, or outbound spam may indicate a compromise. Treat this as a security incident: work calmly, document your actions, and avoid destroying valuable evidence.

::: danger
If personal data, payment information, or accounts may have been accessed, involve the person responsible for privacy and security immediately. This guide is not a substitute for legal advice or professional incident response.
:::

## 1. Document the incident

Record what you see, when it began, who has access, and which updates or changes were made recently. Preserve error messages, suspicious URLs, and relevant log entries. Do not publish screenshots containing personal data, tokens, or configuration files.

Before cleaning, create an isolated snapshot of the files and database. An infected backup is **not suitable for immediate restoration**, but it may be required later to determine the cause and scope.

## 2. Contain further damage

- Put the site into maintenance or restrict public access where necessary.
- Stop suspicious scheduled tasks, unknown deployments, and unwanted outgoing email.
- Do not remove suspicious files until a copy and relevant logs have been preserved safely.
- Determine whether other sites, mailboxes, or devices use the same credentials.

If you are unsure how to isolate the site safely, [contact support](/en-us/guide/contact-support) immediately.

## 3. Secure every access path

From a clean device, change the passwords for:

- OS Cloud and other administrator accounts;
- every WordPress administrator;
- SFTP, SSH, and deployment keys;
- database and mailbox accounts when evidence indicates they are affected;
- third-party services with access to the website.

Remove unknown users, revoke unused keys and API tokens, and enable [2FA](/en-us/guide/2fa). After preserving evidence, rotate the WordPress salts to invalidate existing sessions.

## 4. Identify a clean recovery source

Prefer a backup from before the earliest known incident. Verify its date, integrity, and contents before restoring it. Restoration alone is insufficient if the original vulnerability, stolen access, or backdoor remains.

Reinstall WordPress core from a trusted source and replace plugins and themes with clean, current copies. [Repair WordPress core with WP-CLI](/en-us/developers/wp_cli) can help with core files, but it does not automatically inspect uploads, custom code, or the database.

Official WordPress guidance recommends documenting symptoms and times, checking the local environment, securing every access path, and changing passwords again after recovery. See [FAQ My site was hacked↗](https://wordpress.org/documentation/article/faq-my-site-was-hacked/).

## 5. Find the cause

At a minimum, review:

- outdated or abandoned plugins and themes;
- unknown administrators and active sessions;
- modified files, `.htaccess`, `wp-config.php`, and must-use plugins;
- suspicious PHP files in upload and cache directories;
- scheduled tasks, database injections, and unknown redirects;
- devices or password managers used by administrators.

Removing visible malware alone is not a complete recovery. Backdoors may exist in several locations.

## 6. Verify before reopening

Test the site while it remains restricted. Review administrator accounts, forms, payments, outgoing email, scheduled tasks, DNS, and SSL. Scan again and check whether search engines or browsers still display a warning.

Update WordPress, plugins, and themes, remove unused software, and configure [automatic updates](/en-us/developers/auto_updates) only where controlled updates are appropriate. Monitor logs and changes more closely after reopening.

## Information for support

Include the domain, discovery time, symptoms, recent changes, and measures already taken. Never share passwords or private keys. Clearly state whether the website remains online and whether personal data may be involved.
