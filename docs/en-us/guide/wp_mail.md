---
description: "To enable your website to send and receive emails — for example from contact or order forms — you'll need to configure SMTP (Simple Mail Transfer Protocol)."
audience: customers
---

# Configure Email for WordPress

To enable your website to send and receive emails — for example from contact or order forms — you'll need to configure **SMTP (Simple Mail Transfer Protocol)**.

Several plugins make this easy. In this guide, we'll use [WP Mail SMTP↗](https://wordpress.org/plugins/wp-mail-smtp/).

## Why SMTP matters

By default, WordPress sends emails using the PHP `mail()` function. Many providers block or limit this function, which often leads to delivery issues. SMTP routes your emails through a trusted mail server — improving deliverability and ensuring messages are properly authenticated.

## Step 1 — Install and activate the plugin

1. Install and activate **WP Mail SMTP** from the WordPress plugin library.
2. In your WordPress dashboard, go to **WP Mail SMTP → Settings**.
3. Scroll to the **Mailer** section and select **Other SMTP** (bottom-right corner).

## Step 2 — Enter your SMTP details

You'll find the values below in the **Email Client Settings** of your **OS Cloud** panel. Replace `yourdomain.com` with your actual domain.

| Setting | Value |
| --- | --- |
| **SMTP Host** | `mail.yourdomain.com` |
| **Encryption** | TLS |
| **SMTP Port** | `587` |
| **SMTP Auth** | Enabled |
| **SMTP Username** | Your full email address |
| **SMTP Password** | Your email password |

In the final two fields (**Name** and **Email**), set how you want customers to see your emails (the "from" name and address).

## Step 3 — Finish and send a test email

1. If you'd like extra features such as weekly reports, detailed logs, or email alerts (Pro version), enable them during setup. Otherwise, click **Next** or **Skip** to continue.
2. Once the configuration is complete, send a **test email** to confirm everything is working.

You should see a success message confirming SMTP is active and functional.
