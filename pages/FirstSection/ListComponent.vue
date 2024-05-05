<template>
  <div class="container">
    <div v-for="el in resAll" :key="el.id" class="row">
      <div class="col-8">
        {{ el.title }}
      </div>
      <div class="col-8">
        {{ el.content }}
      </div>
      <div class="col-3 button">
        <NuxtLink to="/FirstSection/UpdateComponent">Редактировать</NuxtLink>
      </div>
      <div class="col-3 button">
        <NuxtLink to="/FirstSection/DeleteComponent">Удалить</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import type {typeFirstSection} from "../../typesMy/index";

const resAll: Array<typeFirstSection> = await $fetch('/api/first_section/all')
</script>

<style scoped>

</style>