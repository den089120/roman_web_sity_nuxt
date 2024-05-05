<template>
  <section id="one" class="spotlight style1 bottom">
    <span class="image fit main"><img src="public/images/avto-remont.jpg" alt="" /></span>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-4 col-12-medium">
            <header>
              <h2>{{ obj.title }}</h2>
              <p>Наши специалисты быстро подъедут и все поправят</p>
            </header>
          </div>
          <div class="col-4 col-12-medium">
            <p>{{ obj.content }}</p>
          </div>
          <div class="col-4 col-12-medium">
            <p>Работаем 24 на 7</p>
          </div>
        </div>
      </div>
    </div>
<!--    <a href="#" class="goto-next scrolly">Next</a>-->
  </section>
</template>

<script setup lang="ts">
// @ts-ignore
import type { typeFirstSection } from "../typesMy/index";
// @ts-ignore
import type {PropType} from "@vue/runtime-core";


const props = defineProps({
  obj: {
    type: Object as PropType<typeFirstSection>,
    required: true,
  },
});
</script>

<style scoped>

</style>