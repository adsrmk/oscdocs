# Error Establishing a Database Connection

This error means that WordPress is unable to connect to its database. It's usually caused by incorrect credentials, database corruption, or a temporary server-side issue.
Follow the troubleshooting steps below to identify and resolve the problem.

<br>

## 1. Verify the database credentials in `wp-config.php`

Start by checking the credentials stored in your WordPress configuration file.

1. Log in to your **OS Cloud** panel.
2. Go to the **Websites** section, select your website, and open the **File Manager**.
3. Navigate to your WordPress root directory (usually `/public_html/`).
4. Open the `wp-config.php` file for editing. You'll find entries like this:

```php [/public_html/wp-config.php]
define('DB_NAME', 'your_database_name');
define('DB_USER', 'your_database_user');
define('DB_PASSWORD', 'your_database_password');
define('DB_HOST', 'localhost');
```

<br>

## 2. Verify the database details in the panel

Once you've reviewed the credentials in `wp-config.php`, make sure they match the actual database details in the panel.

1. In the panel, go to your website and select **Databases**.
2. Confirm that the values for `DB_NAME`, `DB_USER`, and `DB_PASSWORD` in `wp-config.php` match an existing database in the list.

If any of these details don't match, update them in `wp-config.php` to reflect the correct database name and user.

> **Tip:** You can also create new database users under the **Database users** section if needed.

<br>

## 3. Reset the MySQL user password

If the database details look correct, the issue is most likely the password. In that case, reset the MySQL user's password and update it in `wp-config.php`.

1. Go back to the **Database users** section.
2. Select the user whose password you want to change.

<img width="1790" height="670" alt="image" src="https://github.com/user-attachments/assets/3908df5b-f0fc-4f32-90e1-2f1f549ae5b8" />

3. Click **Reset** in the top-right of the block and enter a new password in the input field.

<img width="1810" height="910" alt="image" src="https://github.com/user-attachments/assets/fa55452d-5198-4051-a50a-467b26ff512d" />

4. Click **Change password** to confirm. Then update the `DB_PASSWORD` value in your `wp-config.php` file with the new password.

<br>

## 4. Make sure the MySQL user has the right permissions

1. Go back to the **Database users** section.
2. Select the user whose privileges you want to edit.
3. Scroll down to the **Database access** section.
4. Click the kebab menu (three vertical dots) on the right and select **Edit privileges**.

<img width="1788" height="458" alt="image" src="https://github.com/user-attachments/assets/43bbb6bf-ba83-4a35-9a98-5d73c81d86d4" />

5. Tick the box **All database privileges**.

<img width="1352" height="586" alt="image" src="https://github.com/user-attachments/assets/66b68a5e-740e-4959-9642-641d6cee5ae9" />

6. Save your changes and exit.

<br>

This gives the MySQL user full access to the database, ensuring WordPress can connect and function correctly.
