export default defineNuxtConfig({
  compatibilityDate: '2024-07-30',
  future: { compatibilityVersion: 4 },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/ui',
    'nuxt-auth-utils',
    "@pinia/nuxt",
    '@nuxt/image'
  ],
  hub: {
    database: true,
  },
  runtimeConfig: {
    appleOtp: '',
    appleId: '',
    public: {
      helloText: 'Hello from the Edge 👋'
    }
  },

  eslint: {
    config: {
      stylistic: {
        quotes: 'single'
      }
    }
  },
  ui: {
    global: true,
  },
  components: {
    global: true,
    dirs: ['~/components']
  },
  devtools: { enabled: true }
})