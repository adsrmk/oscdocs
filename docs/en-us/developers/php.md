# Configure & Edit PHP

**PHP (Hypertext Preprocessor)** is a server-side scripting language used for web development. On **OS Cloud**, you have several options to customise your site's PHP version, extensions, and configuration.

<br>

## PHP version

We recommend using the latest stable PHP version for optimal performance and security. To use a different version, switch the PHP engine in **Advanced → Developer Tools**.

<div class="warning custom-block" style="padding-top: 8px">
PHP versions older than 8.0 are not supported due to security and performance concerns. If you need an older version, you can request it — but we are <b>not responsible</b> for any issues or vulnerabilities that may result from using outdated PHP versions.
</div>

<br>

<img width="1323" height="221" alt="image" src="https://github.com/user-attachments/assets/9cbf1605-c940-4f71-a2ef-16f725b16641" />

<br>

## Extensions

PHP extensions are modules that add extra functionality — like database connections, image processing, or encryption. You can enable or disable them directly in the panel.

You can enable up to **five additional extensions**. We recommend activating **Brotli** and **APCu** by default.

| Extension | Description |
| --- | --- |
| **Brotli** | A compression algorithm by Google, more efficient than Gzip. Reduces bandwidth usage and improves load times. |
| **APCu** | An in-memory caching layer that speeds up PHP by storing frequently accessed data in RAM, reducing database queries. |
| XMLRPC | Enables XML-RPC support, allowing PHP applications to communicate with remote servers using XML-based messages. |
| OAuth | Provides OAuth authentication for secure authorisation between applications (commonly used for social logins). |
| PdoDblib | A PDO driver for Microsoft SQL Server and Sybase databases via the FreeTDS library. |

<br>

## PHP error log

The PHP error log records warnings, errors, and issues occurring in your PHP application — useful for debugging.

You can find the log in your website's home directory as `php-error.log`.

<div class="tip custom-block" style="padding-top: 8px">
Since panel version <b>12.0+</b>, you can also view the log directly within the <b>PHP section</b> in the panel.
</div>

<br>

<img width="1243" height="298" alt="image" src="https://github.com/user-attachments/assets/b8f6be9b-17aa-4fb3-bafb-be597cec042e" />

<br>

## PHP.ini editor  <Badge type="info" text="op aanvraag" />

<div class="tip custom-block" style="padding-top: 8px">
The default values are optimized for each server to ensure the best performance. If you’d like to change them to a custom configuration, please contact us. We will review the reason for the change and determine whether it is possible
  
</div>


A full list of available **PHP directives** can be found on the official PHP website: [php.net/manual/en/ini.list.php↗](https://www.php.net/manual/en/ini.list.php)
