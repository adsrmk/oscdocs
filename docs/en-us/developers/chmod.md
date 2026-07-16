---
description: "Setting the right file and directory permissions is essential to prevent unauthorised access to — or modification of — your WordPress site."
audience: developers
---

# Secure File and Directory Permissions

Setting the right file and directory permissions is essential to prevent unauthorised access to — or modification of — your WordPress site. Incorrect permissions can allow attackers to overwrite files, inject malicious code, or take full control of your website.

<div class="info custom-block" style="padding-top: 8px">
The panel automatically assigns recommended permissions by default. For extra security, we recommend setting <code>wp-config.php</code> to <b>440</b>.
</div>

## Recommended permissions

- **Files: `644`** — The owner can read and write; everyone else can only read.
- **Directories: `755`** — The owner can read, write, and execute; everyone else can read and execute.
- **`wp-config.php`: `440`** — Restricts access to sensitive configuration details.

**Tips:**

- Never use `777`. It grants write access to everyone and is a major security risk.
- Audit permissions regularly, especially after installing new plugins or themes.

## Advanced: make core files temporarily read-only

Applying `444` permissions makes core files completely read-only. This can be useful during a controlled investigation or recovery window, but it is not a safe default for daily management because WordPress updates and repairs may fail.

Use this measure only temporarily, with a restorable backup, a maintenance window and a documented rollback. During an incident, combine it with integrity checks and a restore from a known-clean WordPress source.

<div class="warning custom-block" style="padding-top: 8px">
Do <b>not</b> apply <code>444</code> to the <code>wp-includes</code> directory itself — only to the files inside it. Directories need the <i>execute</i> permission to be accessible. If you accidentally remove it, log in via SFTP and reset the directory permissions to <code>755</code>.
</div>

**To set secure permissions across all wp-includes files:**

1. Connect using [SSH](/en-us/guide/SSH).
2. Go to your main website directory:
   ```bash
   cd public_html
   ```
3. Run the following command:
   ```bash
   find wp-admin wp-includes -type f -exec chmod 444 {} \;
   ```

Restore normal file permissions before updates or repairs:

```bash
find wp-admin wp-includes -type f -exec chmod 644 {} \;
```

## How to edit permissions

You can change permissions on any file or folder by **right-clicking** it and selecting **Permissions** from the menu.

<img width="1060" height="542" alt="Screenshot of How to edit permissions" src="https://github.com/user-attachments/assets/40b5f7b8-9ebe-42da-8d2b-a4a1c6d308f3" />
