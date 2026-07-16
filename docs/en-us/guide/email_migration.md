---
description: Migrate mailboxes to OS Cloud in controlled stages, preserve existing messages, and prevent loss during DNS cutover.
audience: customers
---

# Migrate email to OS Cloud

A mailbox migration copies existing messages and then switches delivery of new email. Work in stages and keep the previous provider active temporarily so messages are not lost while DNS changes propagate.

## Preparation

For each domain, inventory:

- every mailbox and its storage use;
- aliases, [forwarders](/en-us/guide/forwarders), catch-all, and out-of-office messages;
- shared mailboxes and access rights;
- folders, calendars, and contacts;
- devices and applications that use SMTP;
- current MX, SPF, DKIM, and DMARC records.

IMAP copies email folders, but usually not calendars, contacts, filters, signatures, or local POP3 archives. Export those components separately.

::: warning
Do not cancel the old mail service until the final synchronisation and delivery checks are complete. Transferring a domain does not automatically migrate existing mailbox content.
:::

## 1. Create the new mail environment

1. Create every mailbox, alias, and forwarder in OS Cloud.
2. Choose new, unique passwords and share them with each mailbox owner through a secure channel.
3. Check available storage and adjust the plan before copying large mailboxes.
4. Record the [new client settings](/en-us/guide/email_settings), but do not reconfigure user devices permanently yet.

## 2. Run the initial synchronisation

Use a dependable IMAP migration tool or email client to copy folders from the previous mailbox to the new one. Test one small mailbox first.

Then compare:

- approximate message count and total size;
- Inbox, Sent, Drafts, and custom folders;
- folder names containing special characters;
- oldest and newest messages;
- large messages and attachments.

Do not delete source messages during this stage. IMAP migration temporarily requires access to both mailboxes; treat those credentials as secrets and revoke temporary access afterwards.

## 3. Prepare DNS and sending services

Configure the [mail records](/en-us/guide/setup_mail_records) for the new environment. Ensure SPF includes every service that will continue to send for the domain, enable DKIM where available, and introduce DMARC in stages.

Also identify websites, scanners, accounting software, and CRM systems that use the old SMTP server. Update these around cutover.

## 4. Plan the cutover

Choose a quiet period and tell users that messages may briefly appear in two environments. Then change the MX and required authentication records.

Configure devices with the new mailboxes or use [webmail](/en-us/guide/webmail) temporarily. Name old and new accounts clearly so an email client does not mix them up.

## 5. Run a final synchronisation

Some senders may temporarily continue to use the previous MX records, so run one or more delta synchronisations after the DNS change. Copy only new or modified messages and check for duplicates.

Then test:

- delivery from an external service to each important mailbox;
- sending from OS Cloud to several external providers;
- replies, aliases, and forwarders;
- website forms and other SMTP applications;
- spam classification and bounce messages.

## Complete the migration

Keep the previous environment until no new messages have arrived there during the agreed monitoring period. Create a final archive if required, remove temporary migration accounts, and update internal documentation.

If messages or folders are missing, stop deleting and resynchronising. When you [contact support](/en-us/guide/contact-support), include the mailbox, folder, date range, and migration method. Never include mailbox passwords in the request.
