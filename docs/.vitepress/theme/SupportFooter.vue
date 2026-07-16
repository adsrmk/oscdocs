<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

const { lang, frontmatter } = useData()
const route = useRoute()

const isEnglish = computed(() => lang.value.startsWith('en'))
const isArticle = computed(() =>
  route.path.includes('/guide/') || route.path.includes('/developers/')
)
const visible = computed(() => isArticle.value && frontmatter.value.supportFooter !== false)
</script>

<template>
  <aside v-if="visible" class="support-footer" :aria-label="isEnglish ? 'Support options' : 'Supportmogelijkheden'">
    <div class="support-footer__content">
      <p class="support-footer__eyebrow">
        {{ isEnglish ? 'OS Cloud Support' : 'OS Cloud Support' }}
      </p>
      <h2>{{ isEnglish ? 'Still need help?' : 'Nog niet opgelost?' }}</h2>
      <p v-if="isEnglish">
        Check the <a href="https://status.oscloud.nl/">service status</a> first. If no incident is
        reported, contact us and include the affected domain, the exact error message, the time of
        the issue and the steps you have already tried.
      </p>
      <p v-else>
        Controleer eerst de <a href="https://status.oscloud.nl/">servicestatus</a>. Is er geen storing
        gemeld? Neem dan contact op en vermeld het betrokken domein, de exacte foutmelding, het
        tijdstip en de stappen die je al hebt uitgevoerd.
      </p>
      <div class="support-footer__actions">
        <a class="support-footer__primary" href="mailto:support@originstudio.nl">
          {{ isEnglish ? 'Email support' : 'E-mail support' }}
        </a>
        <a :href="isEnglish ? '/en-us/guide/contact-support' : '/guide/contact-support'">
          {{ isEnglish ? 'Prepare a support request' : 'Supportaanvraag voorbereiden' }}
        </a>
      </div>
    </div>
    <p class="support-footer__security">
      <strong>{{ isEnglish ? 'Security:' : 'Veiligheid:' }}</strong>
      {{ isEnglish
        ? ' Never send passwords, two-factor authentication codes, private keys or API secrets.'
        : ' Deel nooit wachtwoorden, tweestapsverificatiecodes, privésleutels of API-geheimen.' }}
    </p>
  </aside>
</template>
