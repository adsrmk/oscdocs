---
description: "The All-in-One WP Migration plugin lets you back up your entire WordPress website — including content, images, plugins, and themes — into a single file."
audience: customers
---

# Save or Restore Your Website Data

The **All-in-One WP Migration** plugin lets you back up your entire WordPress website — including content, images, plugins, and themes — into a single file. You can use this file to restore your website at any time.

## Create a Backup

1. Install and activate the [All-in-One WP Migration](https://wordpress.org/plugins/all-in-one-wp-migration/) plugin.
2. In your WordPress Dashboard, go to the left sidebar and click **All-in-One WP Migration → Backups**.
3. Click **Create Backup** and wait for the process to complete.
4. Download the backup file to your computer. We recommend also saving it to a cloud storage service (such as Google Drive or OneDrive) for safekeeping.

## Restore a Backup

1. In your WordPress Dashboard, go to **All-in-One WP Migration → Backups** in the left sidebar.
2. Click **Import**.
3. Drag and drop your backup file into the upload area — or click **File** from the dropdown to browse and select the file from your computer.

> **Note:** Our platform has a maximum upload limit of **100 MB**. If your file is larger, or if the upload gets stuck, use the SFTP method described below.

## Upload via SFTP (for files larger than 100 MB)

If your backup file exceeds 100 MB, you need to upload it manually using SFTP.

1. Connect to your website using an SFTP client (such as FileZilla).
2. Navigate to the following folder:
   ```
   public_html/wp-content/ai1wm-backups
   ```
3. Upload your `.wpress` backup file to this folder.

Once the upload is complete, the file will automatically appear in the **Backups** section of the plugin. Click the vertical menu next to the file and select **Restore** to bring your website back.
