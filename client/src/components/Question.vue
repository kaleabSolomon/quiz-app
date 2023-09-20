<script setup>
import { defineProps, defineEmits } from "vue";
const { question } = defineProps(["question"]);
console.log(question);

const emit = defineEmits(["selectOption"]);

const emitSelectedOption = (isCorrect) => {
  emit("selectOption", isCorrect);
};
</script>
<template>
  <div class="mt-5">
    <h1 class="text-3xl mb-5">{{ question.question }}</h1>
  </div>
  <div class="options-container">
    <div
      @click="emitSelectedOption(option.isCorrect)"
      v-for="option in question.quiz_choices"
      :key="option.id"
      class="flex mb-5 cursor-pointer"
    >
      <p
        class="bg-blue-400 w-10 h-10 text-3xl flex items-center justify-center"
      >
        {{ option.label }}
      </p>
      <div class="bg-blue-300 w-full text-3xl px-5 py-0">
        <p>{{ option.choice }}</p>
      </div>
    </div>
  </div>
</template>
