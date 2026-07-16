---
description: Troubleshoot email that is not arriving or sending, and collect the evidence required for further analysis.
audience: customers
---

# Email is not arriving or sending

A delivery problem may originate with the sender, outbound mail server, DNS authentication, receiving provider, or recipient mailbox. Before changing settings, establish **which direction and which messages** are affected.

## Record one specific test

For a recent test message, note:

- the complete sender and recipient addresses;
- date, time, and time zone;
- the subject, without confidential message content;
- whether incoming mail, outgoing mail, or both are affected;
- the complete bounce or error message;
- whether other senders and recipients work correctly.

Never share mailbox passwords, SMTP passwords, or recovery codes. One exact test is more useful than several messages without a time or error.

## Quick checks

1. Check the [OS Cloud status page](https://status.oscloud.nl/) for a current incident.
2. Open [webmail](/en-us/guide/webmail) and test there. If webmail works, review your [email client settings](/en-us/guide/email_settings).
3. Check Spam, Junk, Trash, and any filters or rules.
4. Confirm that the mailbox exists, is active, and has sufficient free storage.
5. Test with one external address at another provider. Do not use a large attachment for the first test.

## Incoming email is missing

First establish whether mail is missing from **every sender** or only one sender.

- Review the [MX and other mail records](/en-us/guide/setup_mail_records). MX records must point to the provider that handles your incoming mail.
- Review [spam settings](/en-us/guide/spam_settings), the block list, and any [forwarders](/en-us/guide/forwarders).
- Do not remove a catch-all address or filter before identifying which addresses depend on it.
- Ask the sender for the complete bounce code. Codes beginning with `4` are generally temporary; codes beginning with `5` usually indicate a permanent rejection for that attempt.

If direct delivery works but forwarded mail does not, test the source and destination addresses separately. Forwarding can affect authentication checks.

## Outgoing email is rejected or marked as spam

1. Confirm that SMTP authentication is enabled and that the complete email address is used as the username.
2. Ensure the visible **From address** belongs with the account or service used to send. Do not use an arbitrary external sender address.
3. Confirm that SPF includes every legitimate sending service and that DKIM is active.
4. Introduce DMARC carefully and review reports before applying an enforcement policy.
5. Send only to recipients who expect your messages and provide a clear unsubscribe method for marketing email.

Google recommends authenticating sending domains with SPF, DKIM, and DMARC and using valid DNS, TLS, and message formatting. Review the [current email sender guidelines↗](https://support.google.com/mail/answer/81126) for provider-specific requirements.

::: warning
Do not publish multiple separate SPF records. Combine authorised senders into one valid SPF record. An incorrect change may block services that currently deliver successfully.
:::

## Use message headers

Complete message headers show which servers handled a message and whether SPF, DKIM, and DMARC passed. Look for fields including `Authentication-Results`, `Received`, and the final delivery status.

Headers may contain internal addresses and personal data. Share them only through an appropriate support channel, and do not remove lines required to reconstruct the delivery path.

## Verify the result

After each change, send a new message with a recognisable subject and note the time. Test both directions and check the inbox and spam folder. Depending on the previous TTL, DNS changes may not be visible everywhere immediately.

If the problem continues, [contact support](/en-us/guide/contact-support) with the test details, bounce code, and relevant headers. Include any DNS or mailbox changes made shortly before the problem began.
