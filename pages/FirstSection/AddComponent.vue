<template>
  <div class="container">
    <header>
      <h2>Добавление первой секции</h2>
      <br/>
      <img :src="file.value" alt="ваша картинка">
    </header>
    <form method="post" class="cta">
      <div class="row gtr-uniform gtr-50">
        <div class="col-8 col-12-xsmall">
          <input v-model="title" type="text" name="title" placeholder="Введите заголовок" />
        </div>
        <div class="col-8 col-12-xsmall">
          <textarea v-model="text" name="text" placeholder="Введите текст" />
        </div>
        <div class="col-8 col-12-xsmall">
          <input type="file" name="file" @change="changeFile" />
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
import {ref} from "@vue/reactivity";
// @ts-ignore
import {navigateTo} from "nuxt/app";
// @ts-ignore
// import {Ref} from "vue";
import {useFirstSectionStore} from "../../stores/FirstSectionStore";
// @ts-ignore
import {useAsyncData} from "nuxt/app";
const FirstStore = useFirstSectionStore

const title = ref('')
const text = ref('')
const file = ref<File|null>(null)

function changeFile (event: Event) {
  const [_file] = (event.target as HTMLInputElement).files as FileList
  file.value = _file
}

async function Add (event: any) {

  // await FirstStore.first_sectionAdd({
  //   title: title.value,
  //   content: text.value
  // })
  await useAsyncData('FirstSectionStore', () => FirstStore.first_sectionAdd({
    title: title.value,
    content: text.value
  }).then(() => true))
  await navigateTo('/FirstSection/ListComponent')
}

</script>

<style scoped>

</style>