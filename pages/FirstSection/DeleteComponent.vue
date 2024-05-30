<template>
  <div class="container">
    <header>
      <h2>Редактирование</h2>
    </header>
    <form method="post" class="cta">
      <div class="row gtr-uniform gtr-50">
        <div class="col-8 col-12-xsmall">
          <input disabled :value="elStore.firstSectionElement.title" type="text" name="title" />
        </div>
        <div class="col-8 col-12-xsmall">
          <textarea disabled :value="elStore.firstSectionElement.content" name="text" />
        </div>
        <div class="col-4 col-12-xsmall">
          <input @click.prevent="deleteEl" type="submit" value="Удалить" class="fit primary" />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import type { typeFirstSection } from "../../typesMy/index";
import {useFirstSectionStore} from "../../stores/FirstSectionStore";
// @ts-ignore
import {navigateTo} from "nuxt/app";

const elStore = useFirstSectionStore();

async function deleteEl() {
  await elStore.first_sectionDelete(elStore.firstSectionElement)
  await navigateTo('/FirstSection/ListComponent')
}

</script>

<style scoped>

</style>