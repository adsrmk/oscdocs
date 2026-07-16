import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import SupportFooter from './SupportFooter.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'doc-after': () => h(SupportFooter)
    })
}
