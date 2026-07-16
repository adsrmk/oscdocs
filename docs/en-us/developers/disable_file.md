---
description: "WordPress includes a built-in code editor that lets you edit theme and plugin files directly from the admin dashboard."
audience: developers
---

# Disable File Editing

WordPress includes a built-in code editor that lets you edit theme and plugin files directly from the admin dashboard. While convenient, it's also a major security risk — if an attacker gains access to your dashboard, they can inject malicious code straight into your site.

We recommend disabling this editor by adding the following line to your `wp-config.php` file:

```php [/public_html/wp-config.php]
// Disallow file editing from the WordPress dashboard
define( 'DISALLOW_FILE_EDIT', true );
```

Place the line before the `/* That's all, stop editing! */` comment. Back up `wp-config.php` first, then confirm that both the website and WordPress dashboard still open normally.

The setting hides the theme and plugin editors in WordPress. Updates and management through the OS Cloud panel, WP-CLI, SFTP, or a deployment process remain available.

::: warning
This limits the impact of a compromised administrator account, but it does not prevent malware or replace strong passwords, [2FA](/en-us/guide/2fa), updates, and least-privilege access.
:::

## Roll back

Remove the line or temporarily change the value to `false`. Re-enable the protection after troubleshooting, and use version control with a controlled deployment process for structural changes.
