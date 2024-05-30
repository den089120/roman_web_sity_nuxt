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
          <input @click.prevent="update" type="submit" value="обновить" class="fit primary" />
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
// @ts-ignore
// import {Ref} from "vue";
import {useFirstSectionStore} from "../../stores/FirstSectionStore";

const elStore = useFirstSectionStore()

const title: Ref<string> = ref(elStore.firstSectionElement.title)
const text: Ref<string> = ref(elStore.firstSectionElement.content)

async function update (event: any) {
  const el = {
    id: elStore.firstSectionElement.id,
    title: title.value,
    content: text.value,
    createdAt: elStore.firstSectionElement.createdAt,
    updatedAt: elStore.firstSectionElement.updatedAt
  }
  await elStore.first_sectionUpdate(el)
  await navigateTo('/FirstSection/ListComponent')
}

</script>

<style scoped>

</style>