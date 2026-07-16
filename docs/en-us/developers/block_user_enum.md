---
description: "WordPress can expose user information through several public routes, including author archives and some REST API responses."
audience: developers
---

# Restrict user enumeration

WordPress can expose user information through several public routes, including author archives and some REST API responses. Restrict only the routes your application does not need, then test editorial features, headless clients and integrations after each change.

## Threat model

A discovered username does not provide access by itself. This measure mainly reduces the information available for targeted brute-force and credential-stuffing attacks. Strong unique passwords, 2FA, rate limiting and monitoring remain more important.

## Block `?author=` enumeration

Place the code in a site-specific plugin. Use `functions.php` only if the protection may intentionally depend on the active theme.

```php
add_action('template_redirect', function () {
    if (!is_admin() && isset($_GET['author']) && ctype_digit((string) $_GET['author'])) {
        status_header(404);
        nocache_headers();
        exit;
    }
});
```

This code prevents the common redirect from a numeric `author` query. It does not automatically block user information exposed through the REST API, feeds, sitemaps or existing caches.

## Validate the change

1. Test `/?author=1` while signed out.
2. Test existing author pages, search features and editorial workflows.
3. Review the REST routes used by the application.
4. Check application logs for unexpected 404 responses.

## Roll back

Disable the site-specific plugin or remove the snippet, clear every cache and repeat the tests. Document the change and test results for future maintenance.
