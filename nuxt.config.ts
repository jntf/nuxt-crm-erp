// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/supabase',
    '@pinia/nuxt'
  ],
  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/confirm',
    }
  }
})