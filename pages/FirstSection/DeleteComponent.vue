<template>
  <div>DeleteComponent</div>
</template>

<script setup lang="ts">
// @ts-ignore
import type { typeFirstSection } from "../../typesMy/index";
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