<template>
  <section class="wrapper special fade">
    <div class="content">
      <div class="container">
        <div v-for="el in resAll" :key="el.id" class="row">
          <div class="col-4">
            {{ el.title }}
          </div>
          <div class="col-4">
            {{ el.content }}
          </div>
          <div class="col-2 button">
            <NuxtLink to="/FirstSection/UpdateComponent" @click="FirstSectionStore.addFirstSection(el)">Редактировать</NuxtLink>
          </div>
          <div class="col-2 button">
            <NuxtLink to="/FirstSection/DeleteComponent" @click="FirstSectionStore.addFirstSection(el)">Удалить</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">

import type {typeFirstSection} from "../../typesMy/index";
import {useFirstSectionStore} from "../../stores/FirstSectionStore";

const FirstSectionStore = useFirstSectionStore()

// await FirstSectionStore.first_sectionAll()

const resAll: Array<typeFirstSection> = FirstSectionStore.listFirstSection
</script>

<style scoped>

</style>