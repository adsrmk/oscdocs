---
description: "Resolve WordPress image-upload errors systematically by checking file size, server resources, and image processing."
audience: customers
---

# Uploading Media Gives an Error

```
The server cannot process the image. This can happen if the server is busy or does
not have enough resources to complete the task. Uploading a smaller image may help.
Suggested maximum size is 2560 pixels.
```

This error usually appears when using the built-in WordPress media uploader. When you upload an image, WordPress saves the file, creates an attachment record, and runs PHP image processing for resizing and optimisation — and one of those steps can fail when the server doesn't have enough resources.

## Troubleshoot

### 1. Retry the upload

Refresh the page, wait a couple of minutes, and try again — ideally **one image at a time** if you were doing a bulk upload. The error often appears during bulk operations when the server's CPU is at capacity.

### 2. Use a smaller image

If the issue continues, upload an image with dimensions **smaller than 2560 pixels** in width and/or height. This reduces processing load and usually avoids the error.

### 3. Increase the WordPress memory limit

Check the current PHP memory limit and error log first. If your plan provides sufficient memory, you can allow WordPress to use more of it by adding the following line to `wp-config.php`:

```php [/public_html/wp-config.php]
define( 'WP_MEMORY_LIMIT', '168M' );
```

Do not choose a value above your plan's PHP limit. Increasing memory does not resolve a damaged file, missing PHP module, or structural capacity issue. See [WordPress memory limit](/en-us/guide/wp_memory) for additional checks.

### 4. Switch to the GD image editor

WordPress processes images using one of two PHP modules: **ImageMagick** or the **GD Library**. By default, WordPress picks one automatically — but ImageMagick can hit memory limits that cause upload errors. You can force WordPress to use GD instead.

::: warning
This change requires PHP knowledge. Create a backup first and preferably use a child theme or site-specific plugin; changes in the parent theme may be overwritten during an update. A syntax error can make the site unavailable.
:::

Add the following code to your active theme's `functions.php`:

```php [/public_html/wp-content/themes/your-theme/functions.php]
function wpb_image_editor_default_to_gd( $editors ) {
    $gd_editor = 'WP_Image_Editor_GD';
    $editors = array_diff( $editors, array( $gd_editor ) );
    array_unshift( $editors, $gd_editor );
    return $editors;
}
add_filter( 'wp_image_editors', 'wpb_image_editor_default_to_gd' );
```

Then test a small JPEG and PNG before retrying the original file. If GD does not improve the result, remove the snippet to restore automatic selection.

If the error continues, note the time, file type, dimensions, and file size, and include relevant PHP error-log entries when you [contact support](/en-us/guide/contact-support). Do not share images containing confidential information.
