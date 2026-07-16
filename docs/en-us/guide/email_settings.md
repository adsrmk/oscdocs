---
description: "Use these settings to add an OS Cloud mailbox manually to Outlook, Apple Mail, Thunderbird, Gmail or another email application."
audience: customers
---

# Email client settings

Use these settings to add an OS Cloud mailbox manually to Outlook, Apple Mail, Thunderbird, Gmail or another email application. Prefer **IMAP** because it keeps messages and folders synchronised across your devices.

## Required settings

Replace `yourdomain.com` with the domain used by your mailbox.

| Function | Protocol | Server | Port | Security |
| --- | --- | --- | --- | --- |
| Incoming email | IMAP | `mail.yourdomain.com` | `993` | SSL/TLS |
| Outgoing email | SMTP | `mail.yourdomain.com` | `465` | SSL/TLS |
| Outgoing email, alternative | SMTP | `mail.yourdomain.com` | `587` | STARTTLS |
| Incoming email, download only | POP3 | `mail.yourdomain.com` | `995` | SSL/TLS |

Always use the **complete email address as the username**, for example `name@yourdomain.com`. Use the mailbox password, which is not necessarily the same as your OS Cloud account password. Enable authentication for the outgoing SMTP server.

## Configure and test the account

1. Add a new account in your email application and select **Manual configuration** if prompted.
2. Enter the IMAP and SMTP settings from the table.
3. Do not accept an invalid or untrusted certificate. If a certificate warning appears, check the server name and DNS configuration first.
4. Send a test message to an external address and reply from that address.
5. Confirm that the sent message and reply appear on every connected device.

## Common problems

- **Authentication failed:** check the complete email address and reset the [mailbox password](/en-us/guide/email_password) if necessary.
- **Receiving works but sending fails:** check SMTP authentication, port and encryption.
- **Connection timed out:** test without a VPN and confirm that the network permits the selected port.
- **Certificate warning:** do not continue until the server name matches the certificate.

Use POP3 only when you intentionally want to download messages instead of synchronising them. Depending on the email application, an incorrect POP3 configuration can store messages only locally or remove them from the server.
