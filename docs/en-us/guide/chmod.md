# Secure File and Directory Permissions

Setting the right file and directory permissions is essential to prevent unauthorised access to — or modification of — your WordPress site. Incorrect permissions can allow attackers to overwrite files, inject malicious code, or even take full control of your website.

<div class="info custom-block" style="padding-top: 8px">
The panel automatically assigns recommended permissions by default. For extra security, we recommend setting <code>wp-config.php</code> to <b>440</b>.
</div>

<br>

## Recommended permissions

- **Files: `644`** — The owner can read and write; everyone else can only read.
- **Directories: `755`** — The owner can read, write, and execute; everyone else can read and execute.
- **`wp-config.php`: `440`** — Restricts access to sensitive configuration details.

**Tips:**

- Never use `777` permissions. This grants write access to everyone and is a major security risk.
- Audit your permissions regularly, especially after installing new plugins or themes.

Correct permissions help WordPress run smoothly while minimising the risk of unauthorised changes.

<br>

## Set WordPress core directories to 444

Setting file permissions to `444` on the `wp-includes` directory is a simple but effective WordPress hardening step.

The `wp-includes` folder contains core libraries that WordPress needs to **read and execute** — but never modifies during normal operation. By making these files read-only, you prevent malicious code, vulnerable plugins, or compromised admin accounts from injecting or altering core functionality.

This significantly reduces the risk of persistent malware infections and helps protect the integrity of your WordPress core files.

<div class="warning custom-block" style="padding-top: 8px">
Do <b>not</b> apply <code>444</code> to the <code>wp-includes</code> directory itself. Directories need the <i>execute</i> permission to be accessible. If you accidentally remove it, log in via SFTP and set the directory permissions back to <code>755</code>.
</div>

<br>

**To set secure permissions across all wp-includes files:**

1. Log in via [SSH](#).
2. Go to your main website directory:
   ```ssh
   cd public_html
   ```
3. Run the following command:
   ```ssh
   find wp-admin wp-includes -type f -exec chmod 444 {} \;
   ```

<br>

## How to edit permissions

You can change permissions on any file or folder by **right-clicking** it and selecting **Permissions** from the menu.

<br>

<img width="935" height="491" alt="image" src="https://github.com/user-attachments/assets/30334757-0643-425e-941d-27d0ad63e458" />

<br>
