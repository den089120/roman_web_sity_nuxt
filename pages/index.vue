<template>
  <div>
    <BannerComponent/>
    <FirstSection v-for="el in resAll" :obj="el" :key="el.id"/>
  </div>
</template>

<script setup lang="ts">
import BannerComponent from "../components/BannerComponent.vue";
import FirstSection from "../components/FirstSection.vue";

import type {typeFirstSection} from "../typesMy/index";
import {useFirstSectionStore} from "../stores/FirstSectionStore";
// @ts-ignore
import {useAsyncData} from "nuxt/app";

const FirstSectionStore = useFirstSectionStore()
// await useAsyncData('FirstSectionStore', () => FirstSectionStore.first_sectionAll)

// await FirstSectionStore.first_sectionAll()

const resAll: Array<typeFirstSection> = FirstSectionStore.listFirstSection

// const resAll = await $fetch('/api/first_section/all')
</script>

<style scoped>

</style>