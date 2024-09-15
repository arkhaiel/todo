export default defineNuxtConfig({
  compatibilityDate: '2024-07-30',
  future: { compatibilityVersion: 4 },
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxt/content',
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
  devtools: { enabled: true }
})