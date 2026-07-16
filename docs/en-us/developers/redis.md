---
description: "Redis (Remote Dictionary Server) is a high-performance object cache that makes your website faster."
audience: developers
---

# Redis

**Redis (Remote Dictionary Server)** is a high-performance object cache that makes your website faster. Instead of reading data from disk like a standard database (e.g. MySQL), Redis stores frequently accessed data directly in the server's RAM — which is significantly faster.

## Benefits

- **Faster load times** — Redis remembers previous database queries, so your server has less work to do.
- **Handles high traffic** — Acts as a buffer, letting your site serve more simultaneous visitors without crashing.
- **Better user experience** — Features like shopping carts, user sessions, and live notifications run smoother and faster.

## Enable Redis

1. Log in to your **OS Cloud** panel.
2. Scroll down to the **Developer Tools** section.
3. Locate the **Redis** block.
4. Toggle the slider to **On**.

Once enabled, Redis will start running automatically inside your PHP container.

<img width="1316" height="517" alt="Screenshot of Enable Redis" src="https://github.com/user-attachments/assets/464a6b22-3274-44df-a980-4d02b90fd8c7" />

## Connect Redis to WordPress

1. Log in to WordPress, go to **Plugins**, search for **Redis Object Cache**, and install it.

<img width="565" height="274" alt="Screenshot of Connect Redis to WordPress (2)" src="https://github.com/user-attachments/assets/224568ed-ba77-4e00-9ae7-4cc3531720de" />

2. In WordPress, go to **Settings → Redis**.
3. Click **Enable Object Cache**.
4. In your `wp-config.php` file, add the following. Replace `my_unique_site_name` with a custom name (or leave it as-is):

```php [/public_html/wp-config.php]
define( 'WP_REDIS_HOST', '127.0.0.1' );
define( 'WP_REDIS_PORT', 6379 );

// Optional: give this site a unique prefix if you run multiple sites
define( 'WP_CACHE_KEY_SALT', 'my_unique_site_name' );
```

<div class="warning custom-block" style="padding-top: 8px">
After activating Redis, you may briefly see a <b>502: Bad Gateway</b> error. This usually means the Redis configuration hasn't fully connected to the application server yet. Fix it by restarting your PHP container: go to <b>Advanced → Developer Tools</b> and click the first <b>Restart</b> button under <b>PHP</b>.
</div>

## Tuning Redis

Once enabled, Redis runs with default settings. Fine-tuning the configuration keeps Redis fast while staying within your container's resource limits. The configuration below is a recommended **best-practice** setup, optimised for stability and performance in a containerised environment.

You can copy and paste this directly into your `redis.conf` file:

```ini [redis.conf]
bind 127.0.0.1
protected-mode yes

maxmemory 192mb
maxmemory-policy allkeys-lru

save ""
appendonly no

lazyfree-lazy-eviction yes
lazyfree-lazy-expire yes

tcp-keepalive 300
timeout 0
```

<div class="warning custom-block" style="padding-top: 8px">
Only adjust these values if you know what you're doing. Incorrect settings may cause Redis to stop working or perform poorly.
</div>
