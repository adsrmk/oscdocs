import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'OS Support',
  description: 'OSCloud Support Documentation',
  lang: 'nl-NL',
  cleanUrls: true,
  lastUpdated: true,

  locales: {
    root: { 
      label: 'Nederlands', 
      lang: 'nl-NL', 
      dir: 'ltr' 
    },
    'en-us': { 
      label: 'English', 
      lang: 'en-US', 
      dir: 'ltr' 
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/emblem48x48.png' }],
    ['meta', { name: 'theme-color', content: '#bc3411' }]
  ],

  themeConfig: {
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
})
