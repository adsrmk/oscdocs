# Increase WordPress Memory Limit

WordPress can occasionally run out of memory — usually on sites with heavy traffic, lots of features, or many plugins. It can also happen when a theme or plugin has problematic code.

When this occurs, you'll see an error like:

```
Allowed memory size of 19242411 bytes exhausted.
```

Sometimes the error includes the specific file or function that triggered it, which helps pinpoint a faulty plugin or theme. In other cases, your site simply needs more memory to function properly.

<div class="tip custom-block" style="padding-top: 8px">
We recommend running your site on the <b>latest supported PHP version</b>, along with up-to-date WordPress core, themes, and plugins. This avoids many memory issues out of the box.
</div>

<br>

## Step 1 — Check your current memory limits

WordPress 5.0+ includes a built-in **Site Health** tool. Open it via **Tools → Site Health → Info** in your WordPress dashboard.

There are two limits to be aware of:

| Limit | Where it lives | What it controls |
| --- | --- | --- |
| **Server PHP limit** | **Server** section | The maximum memory available to PHP on the server. WordPress can never exceed this value. |
| **WordPress memory limit** | **WordPress Constants** section | The memory limit WordPress applies to itself (default `40M`). |

<div class="info custom-block" style="padding-top: 8px">
On shared hosting, the server PHP limit is fixed at <b>168 MB</b> for all customers. On <b>Managed VPS</b>, we can customise the PHP settings for your server to meet your specific needs.
</div>

<br>

## Step 2 — Understand the WordPress constants

Within the **WordPress Constants** section, you'll find two values:

- **`WP_MEMORY_LIMIT`** — Memory limit for the **front-end** of your site. This is usually the value to raise when visitors are hitting fatal errors.
- **`WP_MAX_MEMORY_LIMIT`** — Memory limit for the **admin area**. Can be set higher than `WP_MEMORY_LIMIT` since admin tasks (like page builders) often need more memory.

<br>

## Step 3 — Increase the memory limits

To raise these limits, edit your `wp-config.php` file. You'll find it in your site's root directory, accessible via the **File Manager** or **SFTP**.

Look for these lines (or add them if they don't exist):

```php [/public_html/wp-config.php]
define( 'WP_MEMORY_LIMIT', '256M' );
define( 'WP_MAX_MEMORY_LIMIT', '512M' );
```

<div class="warning custom-block" style="padding-top: 8px">
The values you set <b>cannot exceed your server's PHP memory limit</b>. If you set <code>WP_MEMORY_LIMIT</code> to <code>512M</code> but your server limit is <code>168M</code>, WordPress will be capped at <code>168M</code>.
</div>

Save the file and refresh the Site Health page to confirm the new limits are active.
