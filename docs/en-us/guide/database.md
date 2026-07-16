---
description: "WordPress stores all your content, users, and settings in a database — posts, pages, comments, and configuration data."
audience: customers
---

# Databases

WordPress stores all your content, users, and settings in a database — posts, pages, comments, and configuration data. Managing this database gives you control over how that information is stored and accessed.

## Create a database

<div class="tip custom-block" style="padding-top: 8px">
If you use our automated WordPress installer, a database is created and configured for you automatically.
</div>

1. Click **Add Database** in the top-right corner of the panel.
2. Enter a unique name for the database.
3. *(Optional)* Create a new database user or assign existing users and permissions.
4. Click **Add**. Your database will appear in the list.

## Manage a database

To manage your data directly, open the database list, select your database, and click **phpMyAdmin**.

<div class="warning custom-block" style="padding-top: 8px">
phpMyAdmin is an advanced tool — recommended for experienced users only. Incorrect changes can break your site. Make sure your site has been working correctly within the last 24 hours before editing the database. If something goes wrong, use the backup feature to restore it.
</div>

### Manage users

1. Select your database from the list.
2. Under **Database Users**, click **Add Database User**.
3. Select an existing user from the dropdown or create a new one.
4. Set specific privileges or grant **Full Access**.

### Import an SQL file

Supported formats: `.sql`, `.gz`, `.zip`. Maximum upload size: **500 MB**.

1. Click the **Upload** icon.
2. Select the SQL file from your computer and confirm.

### Export an SQL file

Exports are downloaded as a compressed `.sql.gz` file.

1. Select your database.
2. Click **Download** to generate and save the export.

> Periodic manual exports are a good extra safety net alongside our automated backups.

## Database user management

Database users interact with your data based on **privileges** — you decide whether they can only read data, or also insert, modify, or delete records.

### Add a new user

1. Click **Add User** in the top-right corner of the **Users** section.
2. Set a secure username and password.
3. Under **Database Access**, choose whether the user can access all databases or just a specific one.
4. Toggle **All Database Privileges** or select specific roles.
5. Click **Add** to save.

### Edit privileges or revoke access

1. Go to the **Users** tab.
2. Find the user and click the **kebab menu** (three vertical dots) on the right of their row.
3. Choose **Edit Privileges** to adjust permissions, or **Revoke Access** to remove the user from a database.
4. To set custom rights, uncheck **All Database Privileges** and select specific ones (e.g. `SELECT`, `INSERT`, `UPDATE`).

### Delete a database or user

1. Select the database or user.
2. Scroll to the bottom of the management page.
3. Click **Delete**.

<div class="warning custom-block" style="padding-top: 8px">
This action is permanent. Once deleted, all associated data is purged from the server and cannot be recovered.
</div>
