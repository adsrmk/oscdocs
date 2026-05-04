import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { watch, nextTick } from 'vue'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window === 'undefined') return

    const applyTheme = (path: string) => {
      const isDevelopers = path.includes('/developers/')
      const html = document.documentElement
      
      if (isDevelopers) {
        html.classList.add('dark')
      } else {
        // Respecteer user preference op andere paginas
        const userPref = localStorage.getItem('vitepress-theme-appearance')
        if (userPref !== 'dark') {
          html.classList.remove('dark')
        }
      }
    }

    router.onAfterRouteChange = (to) => {
      nextTick(() => applyTheme(to))
    }

    // Initial load
    if (typeof window !== 'undefined') {
      applyTheme(window.location.pathname)
    }
  }
} satisfies Theme
