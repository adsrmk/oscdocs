---
description: "Email DNS records ensure your messages are delivered correctly, securely, and reliably."
audience: customers
---

# Set Up Mail DNS

Email DNS records ensure your messages are delivered correctly, securely, and reliably. Just like for your website, the right DNS records need to be in place — otherwise emails may fail to deliver or land in spam.

The records below are the four essentials: **A**, **SPF**, **DKIM**, and **DMARC**.

<div class="tip custom-block" style="padding-top: 8px">
If you're using OS Cloud's nameservers, you can skip these steps. For improved deliverability, we still recommend enabling <b>DKIM</b> and adding a <b>DMARC</b> record.
</div>

## A record (IPv4)

The **A record** points your mail subdomain to your mail server's IPv4 address. You can find this IP in the OS Cloud panel under **"At a glance"** or under your domain settings.

| Type | Hostname | Value |
| --- | --- | --- |
| **A** | `mail.yourdomain.com` | Mail server IP from the panel |

## SPF

**SPF (Sender Policy Framework)** specifies which mail servers are allowed to send emails on behalf of your domain. It prevents spoofing and improves deliverability.

OS Cloud uses [Mailgun](https://www.mailgun.com/) for sending and receiving email, so Mailgun must be included in your SPF record as an authorised sender.

| Type | Hostname | Value |
| --- | --- | --- |
| **TXT** | `@` | `v=spf1 include:mailgun.org ~all` |

## DKIM

**DKIM (DomainKeys Identified Mail)** uses cryptographic signatures to verify the sender's identity and confirm that emails weren't tampered with in transit. DKIM is stored as a TXT record.

### Enable DKIM in OS Cloud

1. Go to **Websites** in the left sidebar.
2. Select the website you want to configure.
3. Open **Domains** in the top menu and select the domain.
4. Scroll to **Email Authentication** and toggle **DKIM** to **On**.
5. If you're using OS Cloud nameservers, wait for the validation to complete.

<img width="1338" height="229" alt="Screenshot of Enable DKIM in OS Cloud" src="https://github.com/user-attachments/assets/e8651eba-8efa-470e-85a3-d0918575522a" />

<div class="info custom-block" style="padding-top: 8px">
If your DNS is hosted elsewhere, follow the on-screen instructions and paste the generated DKIM key into your DNS provider. The record will look like this:
</div>

| Type | Hostname | Value |
| --- | --- | --- |
| **TXT** | `hostingcp._domainkey` | *Generated DKIM key* |

## DMARC

**DMARC (Domain-based Message Authentication, Reporting, and Conformance)** protects your domain against phishing and spoofing. It works together with **SPF** and **DKIM** to make sure only authorised servers send emails on your behalf.

| Type | Hostname | Value |
| --- | --- | --- |
| **TXT** | `_dmarc` | `v=DMARC1; p=none; rua=mailto:example@yourdomain.com` |

DMARC uses three key tags:

- **`v`** — DMARC version (always `DMARC1`, currently the only valid version).
- **`p`** — The policy for failed emails:
  - **`none`** — No action taken for failed messages.
  - **`quarantine`** — Failed messages are sent to the spam/junk folder.
  - **`reject`** — Failed messages are blocked and never reach the recipient.
- **`rua`** — Email address where DMARC reports are sent (e.g. your DNS registrar or business address).

<div class="warning custom-block" style="padding-top: 8px">
Be careful with strict DMARC policies (<code>quarantine</code> or <code>reject</code>) — they can block legitimate emails if SPF or DKIM is misconfigured. Start with <code>p=none</code> to monitor before enforcing.
</div>
