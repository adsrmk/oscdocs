---
description: "By default, WordPress handles its scheduled tasks — like checking for updates or publishing scheduled posts — through a script called wp-cron.php."
audience: customers
---

# Disable WP Cron Jobs

By default, WordPress handles its scheduled tasks — like checking for updates or publishing scheduled posts — through a script called `wp-cron.php`.

This "pseudo-cron" system is convenient, but it only runs when someone actually visits your website. That can cause two problems:

- **On high-traffic sites:** the script fires on every page load, wasting valuable server resources.
- **On low-traffic sites:** scheduled tasks may be skipped entirely if no one visits at the right time.

In addition, if your site uses **full-page caching** (such as Varnish or Cloudflare), visitors may receive a cached version of the page without ever "hitting" WordPress. When that happens, `wp-cron.php` won't trigger at all — making a system-level cron job essential.

The solution is to **disable the internal WordPress cron** and replace it with a system-based cron job that runs on a fixed schedule.

## Step 1 — Disable the internal WordPress cron

To stop WordPress from running the cron script on every page load, you need to edit your `wp-config.php` file.

1. Log in to your **OS Cloud** panel and open the **File Manager**.
2. Navigate to your website's root directory: `/public_html/`.
3. Find the `wp-config.php` file, right-click it, and select **Edit**.
4. Scroll to the bottom of the file and find this line:
   ```
   /* That's all, stop editing! Happy blogging. */
   ```
5. Just **above** that line, paste the following code:
   ```php [/public_html/wp-config.php]
   define('DISABLE_WP_CRON', true);
   ```
6. Click **Save Changes**.

## Step 2 — Set up a system cron job

Now that the internal trigger is disabled, you'll need to tell the server to run the script manually on a fixed schedule.

1. Return to the **OS Cloud** panel dashboard.
2. Select your website and go to **Advanced → Developer Tools**.
3. Click **Cron Jobs** in the left-hand sidebar.
4. Click **Add Cron Job**.
5. Set the **Execution Type** and **Interval**, then save.

> **Important:** After completing this setup, keep an eye on your site's functionality to make sure scheduled tasks are running as expected. You can adjust the schedule at any time from the **Cron Jobs** management area in your panel.
