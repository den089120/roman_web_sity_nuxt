<template>
  <div>
    <div id="page-wrapper">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
<script setup lang="ts">
// const res = await $fetch('/api/first_section/add',{
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: {
//     title: 'title my work ',
//     content: 'test for'
//   }
// })
// console.log(res)
//
// const resAll = await $fetch('/api/first_section/all')
// console.log(resAll)


useHead({
  title: 'Помощь на дороге',
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, user-scalable=no'
    },
    {
      charset: 'utf-8'
    }
  ],
  link: [
    {
      rel: 'stylesheet',
      href: '/index.css'
    },
    {
      rel: 'stylesheet',
      href: '/fontawesome-all.min.css'
    },
  ],
  bodyAttrs: {
    class: 'landing'
  },
  script: [
    {
      src: '/js/jquery.min.js',
      tagPosition: 'bodyClose'
    },
    {
      src: '/js/jquery.scrolly.min.js',
      tagPosition: 'bodyClose'
    },
    {
      src: '/js/jquery.dropotron.min.js',
      tagPosition: 'bodyClose'
    },
    {
      src: '/js/jquery.scrollex.min.js',
      tagPosition: 'bodyClose'
    },
    {
      src: '/js/browser.min.js',
      tagPosition: 'bodyClose'
    },
    {
      src: '/js/breakpoints.min.js',
      tagPosition: 'bodyClose'
    },
    {
      src: '/js/util.js',
      tagPosition: 'bodyClose'
    },
    {
      src: '/js/main.js',
      tagPosition: 'bodyClose'
    },
  ]
})

</script>

<style>
/*@import "public/index.css";*/
/*@import "public/fontawesome-all.min.css";*/
</style>