<script setup>
import { defineProps } from "vue";
const { question } = defineProps(["question"]);
</script>
<template>
  <div class="mt-5">
    <h1 class="text-3xl mb-5">{{ question.text }}</h1>
  </div>
  <div class="options-container">
    <div
      v-for="option in question.options"
      :key="option.id"
      class="flex mb-5 cursor-pointer"
    >
      <p
        class="bg-blue-400 w-10 h-10 text-3xl flex items-center justify-center"
      >
        {{ option.label }}
      </p>
      <div class="bg-blue-300 w-full text-3xl px-5 py-0">
        <p>{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>
