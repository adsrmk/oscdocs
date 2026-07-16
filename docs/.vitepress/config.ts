import { defineConfig, type DefaultTheme } from 'vitepress'

function guideSidebarNl(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Aan de slag',
      collapsed: false,
      items: [
        { text: 'Start hier', link: 'getting-started' },
        { text: 'Domein of website toevoegen', link: 'add_domain' },
        { text: 'DNS-records instellen', link: 'setup_dns' },
        { text: 'Taal instellen', link: 'language' },
        { text: 'Gebruikers en rollen', link: 'users' },
        { text: 'Inloggegevens', link: 'credentials' }
      ]
    },
    {
      text: 'Websitebeheer',
      collapsed: false,
      items: [
        { text: 'Algemeen overzicht', link: 'general' },
        { text: 'Bestandsbeheer', link: 'file_manager' },
        { text: 'Redirects', link: 'redirect' },
        { text: 'SSH-sleutels', link: 'SSH' },
        { text: 'SFTP-toegang', link: 'SFTP' },
        { text: 'Back-ups en herstel', link: 'backups' },
        { text: 'Databases', link: 'database' },
        {
          text: 'WordPress Toolkit',
          items: [
            { text: 'Overzicht', link: 'general' },
            { text: 'Plugins', link: 'plugins' },
            { text: "Thema's", link: 'themes' },
            { text: 'WordPress-gebruikers', link: 'wp_users' },
            { text: 'Debugmodus', link: 'debug' }
          ]
        }
      ]
    },
    {
      text: 'E-mail',
      collapsed: false,
      items: [
        { text: 'E-mail-DNS instellen', link: 'setup_mail_records' },
        { text: 'E-mailclient-instellingen', link: 'email_settings' },
        { text: 'Mailbox beheren', link: 'mailbox' },
        { text: 'E-mailwachtwoord wijzigen', link: 'email_password' },
        { text: 'Doorstuuradressen', link: 'forwarders' },
        { text: 'Catch-all', link: 'catchall' },
        { text: 'Spaminstellingen', link: 'spam_settings' },
        { text: 'Afzenders blokkeren', link: 'block_emails' },
        { text: 'Afwezigheidsbericht', link: 'out_of_office' },
        { text: 'Maximale bijlagegrootte', link: 'file_attachment' },
        { text: 'Koppelen aan Gmail', link: 'gmail' },
        { text: 'Koppelen aan Google', link: 'email_google' },
        { text: 'Webmail', link: 'webmail' },
        { text: 'WordPress-mail instellen', link: 'wp_mail' }
      ]
    },
    {
      text: 'Beveiliging',
      collapsed: false,
      items: [
        { text: 'Tweestapsverificatie (2FA)', link: '2fa' },
        { text: 'DNSSEC', link: 'dnssec' },
        { text: 'DDoS-bescherming', link: 'DDoS' },
        { text: 'Gebruikers-enumeratie blokkeren', link: 'block_user_enum' },
        { text: 'Bestandsrechten', link: 'chmod' }
      ]
    },
    {
      text: 'Facturatie',
      collapsed: false,
      items: [
        { text: 'Betaalmethoden', link: 'payments' },
        { text: 'Mislukte betaling', link: 'failed-payment' },
        { text: 'Btw', link: 'VAT' }
      ]
    },
    {
      text: 'WordPress',
      collapsed: false,
      items: [
        { text: 'Geheugenlimiet verhogen', link: 'wp_memory' },
        { text: 'Adminwachtwoord resetten', link: 'reset_admin_pass' },
        { text: 'Websiteback-up maken of herstellen', link: 'ai1wm' },
        { text: 'WP-Cron vervangen', link: 'cronjobs' }
      ]
    },
    {
      text: 'Problemen oplossen',
      collapsed: false,
      items: [
        { text: 'ERR_CONNECTION_REFUSED', link: 'ERR_CONNECTION_REFUSED' },
        { text: 'ERR_NAME_NOT_RESOLVED', link: 'ERR_NAME_NOT_RESOLVED' },
        { text: 'ERR_SSL_PROTOCOL_ERROR', link: 'ERR_SSL_PROTOCOL_ERROR' },
        { text: 'Afbeelding uploaden mislukt', link: 'upload' },
        { text: 'Databaseverbinding mislukt', link: 'connection_db' },
        { text: '502 Bad Gateway', link: '502' },
        { text: 'Error 1015: Rate Limited', link: '1015' },
        { text: 'SSL-certificaat aanvragen', link: 'SSL' },
        { text: 'Elementor-fout 500', link: 'elementor_500' }
      ]
    },
    {
      text: 'Meer hulp',
      items: [{ text: 'Contact opnemen met support', link: 'contact-support' }]
    }
  ]
}

function guideSidebarEn(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting started',
      collapsed: false,
      items: [
        { text: 'Start here', link: 'getting-started' },
        { text: 'Add a domain or website', link: 'add_domain' },
        { text: 'Configure DNS records', link: 'setup_dns' },
        { text: 'Change the language', link: 'language' },
        { text: 'Users and roles', link: 'users' },
        { text: 'Login credentials', link: 'credentials' }
      ]
    },
    {
      text: 'Website management',
      collapsed: false,
      items: [
        { text: 'General overview', link: 'general' },
        { text: 'File Manager', link: 'file_manager' },
        { text: 'Redirects', link: 'redirect' },
        { text: 'SSH keys', link: 'SSH' },
        { text: 'SFTP access', link: 'SFTP' },
        { text: 'Backups and recovery', link: 'backups' },
        { text: 'Databases', link: 'database' },
        {
          text: 'WordPress Toolkit',
          items: [
            { text: 'Overview', link: 'general' },
            { text: 'Plugins', link: 'plugins' },
            { text: 'Themes', link: 'themes' },
            { text: 'WordPress users', link: 'wp_users' },
            { text: 'Debug mode', link: 'debug' }
          ]
        }
      ]
    },
    {
      text: 'Email',
      collapsed: false,
      items: [
        { text: 'Configure email DNS', link: 'setup_mail_records' },
        { text: 'Email client settings', link: 'email_settings' },
        { text: 'Manage a mailbox', link: 'mailbox' },
        { text: 'Change an email password', link: 'email_password' },
        { text: 'Forwarders', link: 'forwarders' },
        { text: 'Catch-all address', link: 'catchall' },
        { text: 'Spam settings', link: 'spam_settings' },
        { text: 'Block senders', link: 'block_emails' },
        { text: 'Out-of-office reply', link: 'out_of_office' },
        { text: 'Maximum attachment size', link: 'file_attachment' },
        { text: 'Connect to Gmail', link: 'gmail' },
        { text: 'Connect to Google', link: 'email_google' },
        { text: 'Webmail', link: 'webmail' },
        { text: 'Configure WordPress mail', link: 'wp_mail' }
      ]
    },
    {
      text: 'Security',
      collapsed: false,
      items: [
        { text: 'Two-factor authentication (2FA)', link: '2fa' },
        { text: 'DNSSEC', link: 'dnssec' },
        { text: 'DDoS protection', link: 'DDoS' },
        { text: 'Block user enumeration', link: 'block_user_enum' },
        { text: 'File permissions', link: 'chmod' }
      ]
    },
    {
      text: 'Billing',
      collapsed: false,
      items: [
        { text: 'Payment methods', link: 'payments' },
        { text: 'Failed payment', link: 'failed-payment' },
        { text: 'VAT', link: 'VAT' }
      ]
    },
    {
      text: 'WordPress',
      collapsed: false,
      items: [
        { text: 'Increase the memory limit', link: 'wp_memory' },
        { text: 'Reset the admin password', link: 'reset_admin_pass' },
        { text: 'Create or restore a website backup', link: 'ai1wm' },
        { text: 'Replace WP-Cron', link: 'cronjobs' }
      ]
    },
    {
      text: 'Troubleshooting',
      collapsed: false,
      items: [
        { text: 'ERR_CONNECTION_REFUSED', link: 'ERR_CONNECTION_REFUSED' },
        { text: 'ERR_NAME_NOT_RESOLVED', link: 'ERR_NAME_NOT_RESOLVED' },
        { text: 'ERR_SSL_PROTOCOL_ERROR', link: 'ERR_SSL_PROTOCOL_ERROR' },
        { text: 'Image upload failed', link: 'upload' },
        { text: 'Database connection failed', link: 'connection_db' },
        { text: '502 Bad Gateway', link: '502' },
        { text: 'Error 1015: Rate Limited', link: '1015' },
        { text: 'Request an SSL certificate', link: 'SSL' },
        { text: 'Elementor error 500', link: 'elementor_500' }
      ]
    },
    {
      text: 'More help',
      items: [{ text: 'Contact support', link: 'contact-support' }]
    }
  ]
}

function developerSidebarNl(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Start',
      items: [
        { text: 'Overzicht voor ontwikkelaars', link: 'index' },
        { text: 'WCAG', link: 'wcag' },
        { text: 'ARIA-attributen', link: 'ARIA' },
        { text: 'Semantische HTML', link: 'semantic_html' }
      ]
    },
    {
      text: 'Platform en hulpmiddelen',
      collapsed: false,
      items: [
        { text: 'ionCube Loader', link: 'ioncube' },
        { text: 'PHP configureren', link: 'php' },
        { text: 'Redis', link: 'redis' },
        { text: 'Can I Use', link: 'caniuse' },
        { text: 'Accessibility Checker', link: 'accessibility' },
        { text: 'PageSpeed Insights', link: 'psi' },
        { text: 'Google Search Console', link: 'search_console' },
        { text: 'Mozilla Observatory', link: 'mdn_http' }
      ]
    },
    {
      text: 'Webbeveiliging',
      collapsed: false,
      items: [
        { text: 'WordPress-core herstellen met WP-CLI', link: 'wp_cli' },
        { text: 'WordPress-structuur verbergen', link: 'obfuscate' },
        { text: 'Versie-informatie verwijderen', link: 'hide_wp' },
        { text: 'wp-login beveiligen', link: 'backend' },
        { text: 'REST API beperken', link: 'rest_api' },
        { text: 'HTTP-beveiligingsheaders', link: 'HTTP_security' },
        { text: 'CAPTCHA', link: 'captcha' },
        { text: 'Databaseprefix wijzigen', link: 'db_prefix' },
        { text: 'Sessietime-outs', link: 'session_timeout' },
        { text: 'Automatische updates', link: 'auto_updates' },
        { text: 'Bestandsbewerking uitschakelen', link: 'disable_file' },
        { text: 'Gebruikers-enumeratie blokkeren', link: 'block_user_enum' },
        { text: 'Bestandsrechten', link: 'chmod' }
      ]
    },
    {
      text: 'SEO',
      items: [
        { text: 'Schema markup', link: 'schema' },
        { text: 'XML-sitemaps', link: 'sitemap' },
        { text: 'Indexering', link: 'indexing' }
      ]
    },
    {
      text: 'Prestaties',
      collapsed: false,
      items: [
        { text: 'Speculation Rules API', link: 'speculation_rules_api' },
        { text: 'Preload en prefetch', link: 'preloading' },
        { text: 'Scripts en stijlen verwijderen', link: 'dequeue' },
        { text: 'FastCGI Cache', link: 'fastcgi' },
        { text: 'FastCGI Cache preloaden', link: 'preload_fcgi' },
        { text: 'Afbeeldingsformaten', link: 'image_formats' },
        { text: 'Fonts optimaliseren', link: 'optimizing_font' },
        { text: 'TTFB', link: 'ttfb' },
        { text: 'FCP en LCP', link: 'lcp' },
        { text: 'INP', link: 'inp' },
        { text: 'CLS', link: 'cls' }
      ]
    }
  ]
}

function developerSidebarEn(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Start',
      items: [
        { text: 'Developer overview', link: 'index' },
        { text: 'WCAG', link: 'wcag' },
        { text: 'ARIA attributes', link: 'ARIA' },
        { text: 'Semantic HTML', link: 'semantic_html' }
      ]
    },
    {
      text: 'Platform and tools',
      collapsed: false,
      items: [
        { text: 'ionCube Loader', link: 'ioncube' },
        { text: 'Configure PHP', link: 'php' },
        { text: 'Redis', link: 'redis' },
        { text: 'Can I Use', link: 'caniuse' },
        { text: 'Accessibility Checker', link: 'accessibility' },
        { text: 'PageSpeed Insights', link: 'psi' },
        { text: 'Google Search Console', link: 'search_console' },
        { text: 'Mozilla Observatory', link: 'mdn_http' }
      ]
    },
    {
      text: 'Web security',
      collapsed: false,
      items: [
        { text: 'Repair WordPress core with WP-CLI', link: 'wp_cli' },
        { text: 'Hide the WordPress structure', link: 'obfuscate' },
        { text: 'Remove version information', link: 'hide_wp' },
        { text: 'Secure wp-login', link: 'backend' },
        { text: 'Restrict the REST API', link: 'rest_api' },
        { text: 'HTTP security headers', link: 'HTTP_security' },
        { text: 'CAPTCHA', link: 'captcha' },
        { text: 'Change the database prefix', link: 'db_prefix' },
        { text: 'Session timeouts', link: 'session_timeout' },
        { text: 'Automatic updates', link: 'auto_updates' },
        { text: 'Disable file editing', link: 'disable_file' },
        { text: 'Block user enumeration', link: 'block_user_enum' },
        { text: 'File permissions', link: 'chmod' }
      ]
    },
    {
      text: 'SEO',
      items: [
        { text: 'Schema markup', link: 'schema' },
        { text: 'XML sitemaps', link: 'sitemap' },
        { text: 'Indexing', link: 'indexing' }
      ]
    },
    {
      text: 'Performance',
      collapsed: false,
      items: [
        { text: 'Speculation Rules API', link: 'speculation_rules_api' },
        { text: 'Preload and prefetch', link: 'preloading' },
        { text: 'Remove scripts and styles', link: 'dequeue' },
        { text: 'FastCGI Cache', link: 'fastcgi' },
        { text: 'Preload FastCGI Cache', link: 'preload_fcgi' },
        { text: 'Image formats', link: 'image_formats' },
        { text: 'Optimise font delivery', link: 'optimizing_font' },
        { text: 'TTFB', link: 'ttfb' },
        { text: 'FCP and LCP', link: 'lcp' },
        { text: 'INP', link: 'inp' },
        { text: 'CLS', link: 'cls' }
      ]
    }
  ]
}

const sharedTheme: DefaultTheme.Config = {
  siteTitle: false,
  logo: {
    src: '/OSCLO.png',
    alt: 'OS Cloud'
  },
  outline: { level: [2, 3], label: 'Op deze pagina' },
  externalLinkIcon: true,
  search: {
    provider: 'algolia',
    options: {
      appId: 'K0IFZQKPA9',
      apiKey: '240f46d06c9eb11ed5fba213c0f55bb5',
      indexName: 'Doc site'
    }
  },
  socialLinks: []
}

export default defineConfig({
  title: 'OS Support',
  description: 'Professionele supportdocumentatie voor het OS Cloud-platform',
  lang: 'nl-NL',
  cleanUrls: true,
  lastUpdated: true,
  appearance: false,
  sitemap: { hostname: 'https://support.oscloud.nl' },

  locales: {
    root: {
      label: 'Nederlands',
      lang: 'nl-NL',
      dir: 'ltr',
      link: '/guide/getting-started',
      title: 'OS Support',
      description: 'Handleidingen, probleemoplossing en technische documentatie voor OS Cloud',
      themeConfig: {
        nav: [
          { text: 'Handleidingen', link: '/guide/getting-started', activeMatch: '^/guide/' },
          { text: 'Voor ontwikkelaars', link: '/developers/', activeMatch: '^/developers/' },
          { text: 'Support', link: '/guide/contact-support' },
          { text: 'WhatsApp', link: 'https://api.whatsapp.com/send/?phone=31613332490' },
          { text: 'Status', link: 'https://status.oscloud.nl/' }
        ],
        sidebar: {
          '/guide/': { base: '/guide/', items: guideSidebarNl() },
          '/developers/': { base: '/developers/', items: developerSidebarNl() }
        },
        logoLink: '/guide/getting-started',
        outline: { level: [2, 3], label: 'Op deze pagina' },
        editLink: {
          pattern: 'https://github.com/adsrmk/oscdocs/edit/main/docs/:path',
          text: 'Verbeter deze pagina'
        },
        lastUpdated: { text: 'Laatst bijgewerkt' },
        docFooter: { prev: 'Vorige pagina', next: 'Volgende pagina' },
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Terug naar boven',
        langMenuLabel: 'Taal wijzigen',
        skipToContentLabel: 'Ga naar de inhoud',
        notFound: {
          title: 'Pagina niet gevonden',
          quote: 'De pagina is mogelijk verplaatst of bestaat niet meer.',
          linkLabel: 'Naar de startpagina',
          linkText: 'Terug naar OS Support'
        },
        footer: {
          message: 'Duidelijke antwoorden voor een veilig en betrouwbaar OS Cloud-platform.',
          copyright: '© OS Cloud'
        }
      }
    },
    'en-us': {
      label: 'English',
      lang: 'en-GB',
      dir: 'ltr',
      link: '/en-us/guide/getting-started',
      title: 'OS Support',
      description: 'Guides, troubleshooting and technical documentation for OS Cloud',
      themeConfig: {
        nav: [
          { text: 'Guides', link: '/en-us/guide/getting-started', activeMatch: '^/en-us/guide/' },
          { text: 'Developers', link: '/en-us/developers/', activeMatch: '^/en-us/developers/' },
          { text: 'Support', link: '/en-us/guide/contact-support' },
          { text: 'WhatsApp', link: 'https://api.whatsapp.com/send/?phone=31613332490' },
          { text: 'Status', link: 'https://status.oscloud.nl/' }
        ],
        sidebar: {
          '/en-us/guide/': { base: '/en-us/guide/', items: guideSidebarEn() },
          '/en-us/developers/': { base: '/en-us/developers/', items: developerSidebarEn() }
        },
        logoLink: '/en-us/guide/getting-started',
        outline: { level: [2, 3], label: 'On this page' },
        editLink: {
          pattern: 'https://github.com/adsrmk/oscdocs/edit/main/docs/:path',
          text: 'Improve this page'
        },
        lastUpdated: { text: 'Last updated' },
        docFooter: { prev: 'Previous page', next: 'Next page' },
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        langMenuLabel: 'Change language',
        skipToContentLabel: 'Skip to content',
        notFound: {
          title: 'Page not found',
          quote: 'The page may have moved or no longer exists.',
          linkLabel: 'Go to the homepage',
          linkText: 'Back to OS Support'
        },
        footer: {
          message: 'Clear answers for a secure and reliable OS Cloud platform.',
          copyright: '© OS Cloud'
        }
      }
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/emblem48x48.png' }],
    ['meta', { name: 'theme-color', content: '#bc3411' }],
    ['meta', { name: 'robots', content: 'index, follow' }]
  ],

  themeConfig: sharedTheme
})
