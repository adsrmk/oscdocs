---
description: "User enumeration is a technique used to discover valid WordPress usernames through public author archives and API responses."
audience: customers
---

# Block user enumeration

User enumeration is a technique used to discover valid WordPress usernames through public author archives and API responses. A username is not a password, but exposing it gives attackers useful information for targeted password attacks.

## Before you change anything

Blocking one discovery method does not remove usernames that are already public in author names, feeds, cached pages or third-party services. Treat this measure as defence in depth and combine it with unique passwords, two-factor authentication and login rate limiting.

Create a backup and test the change in staging if the website uses author archives, an editorial workflow or integrations that read public WordPress user data.

## Block author query enumeration

Add the following code to a small site-specific plugin or a child theme. A site-specific plugin is preferable because a theme update or theme change will not remove the protection.

```php
add_action('template_redirect', function () {
    if (!is_admin() && isset($_GET['author']) && ctype_digit((string) $_GET['author'])) {
        status_header(404);
        nocache_headers();
        exit;
    }
});
```

## Verify the change

1. Open `https://yourdomain.com/?author=1` in a private browser window.
2. Confirm that the request no longer redirects to an author archive.
3. Test legitimate author pages and editorial functions used by the website.
4. Review the public REST API separately; this snippet only handles the `?author=` query method.

## Roll back

Remove the snippet and clear the page cache. Test the author URL again to confirm that the original behaviour has been restored.
