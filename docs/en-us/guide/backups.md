---
description: "Our systems automatically create daily backups of all your resources — including email accounts, websites, and databases (where applicable)."
audience: customers
---

# Backups

Our systems automatically create daily backups of all your resources — including email accounts, websites, and databases (where applicable). This ensures that your data is always protected and recoverable.
All backups are securely stored on an external S3 object storage platform.

<div class="tip custom-block" style="padding-top: 8px">
Backups from previous versions are <b>retained for up to 7 days</b>. Older backups are automatically overwritten by newer versions, with a maximum of 7 backups kept at any time.
This policy keeps our storage servers manageable and prevents unused data from accumulating over months or years.
</div>

## Restore or Rollback

To restore your data or roll back to a previous version:

1. Open your website and click on the **Backups** tab.
2. Find the restore point you'd like to use, then click **Recover** on the right side of the row. *A dropdown menu will appear.*
3. Choose to directly restore either your email or your website — or manually select the specific components you want to restore.
