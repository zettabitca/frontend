import { defineNuxtConfig } from 'nuxt3'
export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'zettabit',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  firebase: {
    config: {
      apiKey: process.env.NUXT_ENV_FIREBASE_API_KEY,
      authDomain: process.env.NUXT_ENV_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.NUXT_ENV_FIREBASE_DATABASE_URL,
      projectId: process.env.NUXT_ENV_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NUXT_ENV_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NUXT_ENV_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NUXT_ENV_FIREBASE_APP_ID,
      measurementId: process.env.NUXT_ENV_FIREBASE_MEASUREMENT_ID
    },
    services: {
      auth: true,
      firestore: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
})

