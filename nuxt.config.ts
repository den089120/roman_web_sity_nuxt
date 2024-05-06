// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@@": "/<srcDir>/typesMy",
  },
  imports: {
    dirs: ['typesMy']
  },
  modules: ['@pinia/nuxt'],
})
