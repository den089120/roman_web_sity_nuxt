<template>
  <div class="container">
    <header>
      <h2>Редактирование</h2>
    </header>
    <form method="post" class="cta">
      <div class="row gtr-uniform gtr-50">
        <div class="col-8 col-12-xsmall">
          <input v-model="title" type="text" name="title" :value="obj.title" />
        </div>
        <div class="col-8 col-12-xsmall">
          <textarea v-model="text" name="text" :value="obj.content" />
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
import type { typeFirstSection } from "../../typesMy/index";
// @ts-ignore
import type {PropType} from "@vue/runtime-core";
// @ts-ignore
import {ref} from "@vue/reactivity";
// @ts-ignore
import {navigateTo} from "nuxt/app";

const props = defineProps({
  obj: {
    type: Object as PropType<typeFirstSection>,
    required: true,
  },
});

const title: string = ref('')
const text: string = ref('')

async function Add (event: any) {
  await $fetch(`/api/first_section/${props.obg.id}`,{
    method: 'PUT',
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