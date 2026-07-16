---
description: "FastCGI Cache slaat de output van PHP-pagina's op zodat herhaalde requests direct vanaf NGINX worden geserveerd, zonder PHP of database opnieuw aan te roepen."
audience: developers
---

# FastCGI Cache

FastCGI Cache slaat de output van PHP-pagina's op zodat herhaalde requests direct vanaf NGINX worden geserveerd, zonder PHP of database opnieuw aan te roepen.

## Hoe het werkt

<img width="1034" height="700" alt="Screenshot of Hoe het werkt" src="https://github.com/user-attachments/assets/a535a34e-0d19-45e3-824b-1df265084f2f" />

::: tip Waarom is dit snel?
Een cache HIT levert pagina's binnen milliseconden — geen PHP execution, geen database queries. Voor sites met hoge traffic kan dit het verschil zijn tussen een trage en een razendsnelle ervaring.
:::

## Enable FastCGI Cache

1. Go to **Developer Tools**.
2. In the **NGINX** section, use the toggle to enable FastCGI Cache.

> If you have multiple domains, select the correct one from the dropdown first.

<img width="1316" height="304" alt="Screenshot of Enable FastCGI Cache (2)" src="https://github.com/user-attachments/assets/d482658f-730f-4845-a749-c9414807434d" />

<div class="warning custom-block" style="padding-top: 8px">
We don't recommend enabling FastCGI Cache while you're still developing your website — updated content may keep getting served from the cache. If that happens, simply <b>purge the cache</b> so NGINX can generate a new version with your latest changes.
</div>
