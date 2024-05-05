<template>
  <div>
    <BannerComponent/>
    <FirstSection v-for="el in resAll" :obj="el" :key="el.id"/>
  </div>
</template>

<script setup lang="ts">
import BannerComponent from "/components/BannerComponent.vue";
import FirstSection from "/components/FirstSection.vue";

const resAll = await $fetch('/api/first_section/all')
</script>

<style scoped>

</style>