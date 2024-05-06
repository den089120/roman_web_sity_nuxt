<template>
  <div class="container">
    <header>
      <h2>Редактирование</h2>
    </header>
    <form method="post" class="cta">
      <div class="row gtr-uniform gtr-50">
        <div class="col-8 col-12-xsmall">
          <input v-model="title" type="text" name="title" />
        </div>
        <div class="col-8 col-12-xsmall">
          <textarea v-model="text" name="text" />
        </div>
        <div class="col-4 col-12-xsmall">
          <input @click.prevent="Add" type="submit" value="ДОБАВИТЬ" class="fit primary" />
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
import {Ref} from "vue";

const props = defineProps({
  obj: {
    type: Object as PropType<typeFirstSection>,
    required: true,
  },
});

const title: Ref<string> = ref(props.obj ? props.obj.title : '')
const text: Ref<string> = ref(props.obj ? props.obj.content : '')

async function Add (event: any) {
  if (props.obj) {
    await $fetch(`/api/first_section/${props.obj.id}`,{
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
  else {
    return
  }
}

</script>

<style scoped>

</style>