---
description: "Link your business email to Gmail so you can send and receive messages without switching between platforms."
audience: customers
---

# Set Up Your Business Email with Gmail

Link your business email to Gmail so you can send and receive messages without switching between platforms.

## Step 1 — Open Gmail settings

Open Gmail, click the ⚙️ gear icon in the top-right corner, and select **See all settings**.

## Step 2 — Add your email account

1. Go to the **Accounts and Import** tab.
2. Under **Check mail from other accounts**, click **Add a mail account**.

<img width="1344" height="818" alt="Screenshot of Step 2 — Add your email account" src="https://github.com/user-attachments/assets/c264a0f9-53c7-4d9e-ade8-5d9504267c7d" />

3. Enter your business email address and click **Next →**.

4. Select **Import emails from my other account (POP3)** and click **Next**.

## Step 3 — Enter the incoming mail (POP3) settings

| Setting | Value |
| --- | --- |
| **Username** | Your full email address |
| **Password** | The password for your email account |
| **POP Server** | `mail.`<mark>`yourdomain.com`</mark> |
| **Port** | `995` |

<img width="593" height="373" alt="Screenshot of Step 3 — Enter the incoming mail (POP3) settings (3)" src="https://github.com/user-attachments/assets/2e5ff8e0-483e-4e31-b5a4-9a2da0f95d15" />

## Step 4 — Finalise the import setup

Tick all checkboxes **except the last one**. If everything is configured correctly, Gmail will add your account and start importing your emails. 

## Step 5 — Set up sending mail (SMTP)

To send emails from your business address through Gmail, select **Yes, I want to be able to send mail** and enter the SMTP details below.

| Setting | Value |
| --- | --- |
| **SMTP Server** | The same mail server as above (see **Email Client Settings**) |
| **Username** | Your full email address |
| **Password** | The password for your email account |
| **Port** | `587` |
| **Secure Connection** | TLS |

<img width="593" height="321" alt="Screenshot of Step 5 — Set up sending mail (SMTP) (4)" src="https://github.com/user-attachments/assets/52a74de7-1fe9-41c5-957f-fa4dfa3cd227" />

## Step 6 — Verify and finish

Gmail will send a verification link to your business email address.
That's it — your business email is now linked to Gmail. You can send and receive messages directly from the Gmail interface.

## Gmail authentication error

> Server returned error: `[AUTH] Authentication failed.`

The most common cause of this error is an incorrect **email address** or **password**, which prevents the mail server from establishing a connection with Google.

### Solution

1. Verify that the password exactly matches the one set in the **OS Cloud panel**.
2. Make sure you're using the full email address (including domain, e.g. `name@yourdomain.com`).
3. If needed, reset the password in the OS Cloud panel and try again.

::: tip
Passwords are case-sensitive. Copy and paste the password directly from the OS Cloud panel to avoid typing mistakes.
:::
