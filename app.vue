<template>
  <div id="page-wrapper">
<!--    <NuxtWelcome />-->
<!--    <div>{{ res }}</div>-->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
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
    // {
    //   name: 'charset',
    //   content: 'utf-8'
    // },
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
      href: './index.css'
    },
    {
      rel: 'stylesheet',
      href: './fontawesome-all.min.css'
    },
  ],
  bodyAttrs: {
    class: 'landing'
  },
  script: [
    {
      src: './js/jquery.min.js',
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: 'bodyClose'
    },
    {
      src: './js/jquery.scrolly.min.js',
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: 'bodyClose'
    },
    {
      src: './js/jquery.dropotron.min.js',
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: 'bodyClose'
    },
    {
      src: './js/jquery.scrollex.min.js',
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: 'bodyClose'
    },
    {
      src: './js/browser.min.js',
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: 'bodyClose'
    },
    {
      src: './js/breakpoints.min.js',
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: 'bodyClose'
    },
    {
      src: './js/util.js',
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: 'bodyClose'
    },
    {
      src: './js/main.js',
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: 'bodyClose'
    },
    {
      src: './index.js',
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: 'bodyClose'
    }
  ]
})

</script>