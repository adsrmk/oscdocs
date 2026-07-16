---
description: "A catch-all address receives messages sent to a non-existent address on your domain."
audience: customers
---

# Configure a catch-all email address

A catch-all address receives messages sent to a non-existent address on your domain. For example, a typing error such as `sales@yourdomain.com` can still be received even if that mailbox does not exist.

## When to use a catch-all

Use a catch-all only when you intentionally want to process every unknown address. For important addresses such as `invoices@` or `support@`, a real mailbox, alias or forwarder is clearer and easier to control.

## Configure the catch-all

1. Open **Emails** in the OS Cloud panel.
2. Select the relevant domain and open the catch-all setting.
3. Choose an existing mailbox as the destination.
4. Save the change.
5. Test from an external address using a random, non-existent address on your domain.

## Risks and management

- A catch-all generally receives more spam and phishing because every arbitrary address is accepted.
- Apply strict [spam settings](/en-us/guide/spam_settings) and review the spam folder regularly.
- Restrict access to the destination mailbox and document who manages it.
- Review periodically whether the catch-all is still required.
- Do not use it as a substitute for properly managed mailboxes and aliases.

Disable the feature if the volume of spam becomes unmanageable or if unknown addresses should intentionally be rejected.
