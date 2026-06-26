// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/design.css'],
  app: {
    head: {
      title: 'CRYPTO. — The Future of Digital Assets',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'CRYPTO. is the most trusted platform for cryptocurrency investing. Secure, smart, and built for every level of expertise.'
        },
        { property: 'og:title', content: 'CRYPTO. — The Future of Digital Assets' },
        {
          property: 'og:description',
          content: 'Secure crypto investing platform trusted by 168K+ active users worldwide.'
        },
        { property: 'og:type', content: 'website' },
        { name: 'theme-color', content: '#0a0a0a' }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
        }
      ]
    }
  }
})
