---
description: "The Debug section gives you direct control over WordPress's built-in troubleshooting modes — useful for tracking down site errors."
audience: customers
---

# Debug

The Debug section gives you direct control over WordPress's built-in troubleshooting modes — useful for tracking down site errors.

## Available debug modes

- **`WP_DEBUG`** — Turns on WordPress debug mode to catch underlying code issues.
- **`WP_DEBUG_LOG`** — Saves all errors to a log file at `wp-content/debug.log` for later review.
- **`WP_DEBUG_DISPLAY`** — Shows debug messages directly inside the page's HTML.

<div class="warning custom-block" style="padding-top: 8px">
Use <code>WP_DEBUG_LOG</code> on live sites to track errors silently without affecting visitors. Only enable <code>WP_DEBUG_DISPLAY</code> in development environments — it can expose sensitive code details to the public.
</div>
