# FastCGI Cache

FastCGI Cache slaat de output van PHP-pagina's op zodat herhaalde requests direct vanaf NGINX worden geserveerd, zonder PHP of database opnieuw aan te roepen.

## Hoe het werkt

```mermaid
flowchart LR
    A([HTTP Request]) --> B[NGINX :80]
    A2([HTTPS Request]) --> C[NGINX :443]
    B -. redirect .-> C
    C --> D{FastCGI<br/>Cache?}
    D -- HIT --> E([HTTPS Response])
    D -- MISS --> F[PHP-FPM]
    F <--> G[(MariaDB)]
    F --> E

    classDef entry fill:#bc3411,stroke:#8a2509,stroke-width:2px,color:#fff,rx:8,ry:8
    classDef server fill:#1e293b,stroke:#0f172a,stroke-width:2px,color:#fff,rx:6,ry:6
    classDef decision fill:#fef3c7,stroke:#bc3411,stroke-width:2px,color:#1e293b
    classDef db fill:#334155,stroke:#1e293b,stroke-width:2px,color:#fff
    classDef response fill:#bc3411,stroke:#8a2509,stroke-width:2px,color:#fff,rx:8,ry:8

    class A,A2 entry
    class B,C,F server
    class D decision
    class G db
    class E response

    linkStyle default stroke:#94a3b8,stroke-width:2px
```

::: tip Waarom is dit snel?
Een cache HIT levert pagina's binnen milliseconden — geen PHP execution, geen database queries. Voor sites met hoge traffic kan dit het verschil zijn tussen een trage en een razendsnelle ervaring.
:::


<br>


## FastCGI Cache inschakelen

1. Ga naar **Ontwikkelaarstools**.
2. Gebruik in het onderdeel **NGINX** de schakelaar om FastCGI Cache in te schakelen.

> Heb je meerdere domeinen? Selecteer dan eerst het juiste domein in het dropdown-menu.

<img width="806" height="310" alt="image" src="https://github.com/user-attachments/assets/63f3b2d5-4d25-4ab8-acca-88434075d383" />

<br>

<div class="warning custom-block" style="padding-top: 8px">
We raden af om FastCGI Cache in te schakelen terwijl je nog aan je website werkt — bijgewerkte content kan dan namelijk blijven worden uitgeleverd vanuit de cache. Gebeurt dit toch? Dan kun je de <b>cache leegmaken</b> zodat NGINX een nieuwe versie genereert met je laatste wijzigingen.
</div>
