<template>
  <div class="container">
    <header>
      <h2>Добавление первой секции</h2>
    </header>
    <form method="post" class="cta">
      <div class="row gtr-uniform gtr-50">
        <div class="col-8 col-12-xsmall">
          <input v-model="title" type="text" name="title" placeholder="Введите заголовок" />
        </div>
        <div class="col-8 col-12-xsmall">
          <textarea v-model="text" name="text" placeholder="Введите текст" />
        </div>
        <div @click.prevent="Add" class="col-4 col-12-xsmall">
          <input type="submit" value="ДОБАВИТЬ" class="fit primary" />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import {ref} from "@vue/reactivity";
// @ts-ignore
import {navigateTo} from "nuxt/app";

const title: string = ref('')
const text: string = ref('')

async function Add (event: any) {
    await $fetch('/api/first_section/add',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        title: title,
        content: text
      }
    })
  await navigateTo('/FirstSection/ListComponent')
}

</script>

<style scoped>

</style>