// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
      },
      title: 'labfero',
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  experimental: {
    payloadExtraction: false,
  }
})
