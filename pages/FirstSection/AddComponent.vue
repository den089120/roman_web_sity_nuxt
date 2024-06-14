<template>
  <div class="container">
    <header class="my_header">
      <h2>Добавление первой секции</h2>
    </header>
    <div class="row">
      <img v-if="file" src="" alt="ваша картинка" class="my_image col" style="width: 150px;height: 150px;padding: 0">
      <form method="post" class="cta col-8">
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
const FirstStore = useFirstSectionStore()

const title = ref('')
const text = ref('')
const file = ref<File|null>(null)

function changeFile (event: Event) {
  const [_file] = (event.target as HTMLInputElement).files as FileList
  file.value = _file
  
  const reader = new FileReader()
  reader.onload = (e) => {
    const node = document.querySelector('.my_image') as HTMLInputElement
    if (node) {
      if (typeof e.target?.result === "string")
      node.src = e.target?.result
    }
  }
  reader.readAsDataURL(file.value)
}

const Add = async () => {
  if (file.value) {

    await FirstStore.first_sectionAdd({
      title: title.value,
      content: text.value,
      fileValue: file.value,
      fileName: file.value.name
    })
    await navigateTo('/FirstSection/ListComponent')
  }
}

</script>

<style scoped>
.my_header {
  margin-top: 50px;
}
</style>