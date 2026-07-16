---
audience: customers
description: Set up your OS Cloud account, domain, website and email securely and efficiently.
---

# Getting started with OS Cloud

Use this checklist to configure the essential parts of your OS Cloud environment. Complete the steps in order when setting up a new account, domain or website.

## Before you begin

Make sure you can access:

- your OS Cloud account;
- your domain registrar's control panel if OS Cloud does not manage the domain;
- the email address used for account notifications;
- any existing website and email backups.

::: warning Do not share secret information
Never send passwords, two-factor authentication codes, private keys or API keys by email or chat. A support engineer does not need these details to investigate your account.
:::

## 1. Secure your account

Review your [login credentials](/en-us/guide/credentials), add only the required [users and roles](/en-us/guide/users), and enable [two-factor authentication](/en-us/guide/2fa). Give every team member a personal account instead of sharing an administrator login.

## 2. Add your domain and website

Follow [Add a domain or website](/en-us/guide/add_domain). Note the server address and DNS values shown in the panel; you will need them in the next step.

## 3. Configure DNS

Choose one of the two supported methods in [Configure DNS records](/en-us/guide/setup_dns):

- change the nameservers to OS Cloud; or
- manage the required DNS records manually with your current DNS provider.

DNS changes are not visible everywhere immediately. Confirm that the domain resolves to the correct server address before configuring SSL or email.

## 4. Enable HTTPS

Once DNS is correct, request an [SSL certificate](/en-us/guide/SSL). Open both `https://yourdomain.com` and `https://www.yourdomain.com` afterwards if you use both hostnames.

## 5. Configure email

If you use OS Cloud email, configure the [email DNS records](/en-us/guide/setup_mail_records) first. Then create a [mailbox](/en-us/guide/mailbox) and add it to your preferred [email client](/en-us/guide/email_settings) or [Gmail](/en-us/guide/gmail).

## 6. Check backups and monitoring

Open the **Backups** tab and confirm that restore points are being created. For business-critical data, also keep an independently restorable copy outside OS Cloud. If an unexpected outage occurs, check the [OS Cloud status page](https://status.oscloud.nl/) first.

## Final check

Your basic setup is complete when:

- the domain opens over HTTPS without a certificate warning;
- you can sign in with a personal account and 2FA;
- incoming and outgoing email work;
- a recent restore point is available;
- only authorised users have access.

Continue with [website management](/en-us/guide/general) or explore the [developer section](/en-us/developers/) for security, performance and SEO guidance.
