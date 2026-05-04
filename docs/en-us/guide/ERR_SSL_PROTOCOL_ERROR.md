# ERR_SSL_PROTOCOL_ERROR

This error means the browser couldn't establish a secure connection because the website's SSL certificate is invalid, misconfigured, or cannot be verified.

In Chrome, you may see this displayed as **`ERR_PROTOCOL_ERROR`** — a more generic message that usually points to the same underlying SSL issue.

<br>

## Common causes

- The SSL/TLS certificate is missing, expired, or set up incorrectly
- A protocol mismatch between the browser and server
- Browser extensions interfering with the secure request

<br>

## How to fix it

On **OS Cloud**, this error is most likely caused by an SSL certificate that hasn't been requested yet — or has expired. Follow [this guide](#) to request a free SSL certificate for your website.

> **Note:** If you're on a managed cloud plan and your website is moved to another server, this issue is resolved automatically.
