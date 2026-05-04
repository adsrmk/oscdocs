# Uploading Media Gives an Error

```
The server cannot process the image. This can happen if the server is busy or does
not have enough resources to complete the task. Uploading a smaller image may help.
Suggested maximum size is 2560 pixels.
```

This error usually appears when using the built-in WordPress media uploader. When you upload an image, WordPress saves the file, creates an attachment record, and runs PHP image processing for resizing and optimisation — and one of those steps can fail when the server doesn't have enough resources.

<br>

## Troubleshoot

### 1. Retry the upload

Refresh the page, wait a couple of minutes, and try again — ideally **one image at a time** if you were doing a bulk upload. The error often appears during bulk operations when the server's CPU is at capacity.

<br>

### 2. Use a smaller image

If the issue continues, upload an image with dimensions **smaller than 2560 pixels** in width and/or height. This reduces processing load and usually avoids the error.

<br>

### 3. Increase the WordPress memory limit

The error message suggests insufficient resources. You can raise the PHP memory limit by adding the following line to your `wp-config.php` file:

```php [/public_html/wp-config.php]
define( 'WP_MEMORY_LIMIT', '168M' );
```

<br>

### 4. Switch to the GD image editor

WordPress processes images using one of two PHP modules: **ImageMagick** or the **GD Library**. By default, WordPress picks one automatically — but ImageMagick can hit memory limits that cause upload errors. You can force WordPress to use GD instead.

<div class="warning custom-block" style="padding-top: 8px">
This change requires editing your theme's <code>functions.php</code> file. A mistake here can break your site. If you're not comfortable editing theme files, please contact our support team for help.
</div>

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
