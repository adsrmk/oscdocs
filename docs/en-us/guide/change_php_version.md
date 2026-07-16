---
description: Change a website's PHP version safely through compatibility review, staging, verification, and rollback.
audience: customers
---

# Change the PHP version safely

A newer PHP version can provide security and performance improvements, but outdated plugins, themes, or custom code may be incompatible. Never change PHP without a backup, test, and fallback plan.

## Before you begin

Record:

- the current and intended PHP versions;
- active WordPress, plugin, and theme versions;
- required PHP extensions and custom configuration;
- connected scheduled tasks, command-line scripts, and webhooks;
- a suitable time for testing.

Create a complete [backup](/en-us/guide/backups) of files and database. Confirm that you know how to restore it. Test a business-critical website in a staging or cloned environment first.

## 1. Review compatibility

1. Update WordPress, plugins, and themes within their supported versions.
2. Check vendor documentation and custom code against the intended PHP version.
3. Review the current PHP error log so existing messages are not confused with new problems.
4. Confirm that required extensions are also available in the new environment.

The official PHP manual publishes a migration chapter for each release, covering incompatible changes, new features, and deprecated behaviour. Consult the relevant [PHP migration guides↗](https://www.php.net/manual/en/appendices.php) for the versions involved.

## 2. Test on staging

Change the PHP version on staging first. Clear application and server caches, then test:

- the homepage, key templates, and search;
- WordPress login and administration actions;
- forms, uploads, and email;
- basket, checkout, and payment provider;
- scheduled tasks, API integrations, and command-line scripts;
- the error log and visible warnings.

A page loading visually is not a complete compatibility test. Perform the most important user journeys with test data.

## 3. Change production

1. Choose a quiet period and prevent concurrent deployments or updates.
2. Open the PHP settings for the correct website in OS Cloud.
3. Select the tested version and save the change.
4. Clear caches that may retain old PHP output or opcode.
5. Repeat the key acceptance tests and review logs immediately.

Do not change PHP, plugins, DNS, and web-server configuration at the same time. One change group at a time makes diagnosis and rollback more dependable.

## Common problems

- **Blank page or error 500:** inspect the PHP error log; do not disable plugins or custom functions blindly on production.
- **Missing function or extension:** check whether the code remains supported and whether the required extension is available.
- **Only scheduled tasks or CLI fail:** check which PHP binary the command uses; this may differ from the website version.
- **Warnings after the upgrade:** treat deprecated notices as maintenance work, but do not display them to visitors.

## Roll back

For serious errors, restore the previous PHP version, clear caches, and test again. Restore a database backup only when the application changed data during testing that is incompatible with the previous version.

When [contacting support](/en-us/guide/contact-support), include the previous and new PHP versions, change time, affected URL, and relevant log lines. Do not share complete configuration files containing secrets.
