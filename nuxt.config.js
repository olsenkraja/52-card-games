export default defineNuxtConfig({
  css: [
    '@/assets/css/main.css'
  ],

  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      { code: 'de', file: 'de.json' },
      { code: 'en', file: 'en.json' }
    ],
    langDir: 'locales',
    defaultLocale: 'en'
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  runtimeConfig: {
    public: {
      IPSUM: process.env.IPSUM
    }
  }
})