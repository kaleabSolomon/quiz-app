<script setup>
import { defineProps } from "vue";

const { questionStatus, barPercentage } = defineProps([
  "questionStatus",
  "barPercentage",
]);
</script>
<template>
  <header class="mt-5">
    <h4 class="text-3xl">Question {{ questionStatus }}</h4>
    <div class="w-[300px] h-[50px] border-blue-400 border-4">
      <div class="h-full bg-blue-400" :style="{ width: barPercentage }"></div>
    </div>
  </header>
</template>
