// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@@": "/<srcDir>/typesMy",
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  imports: {
    dirs: ['./typesMy', './stores']
  },
  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**']
  },

})
