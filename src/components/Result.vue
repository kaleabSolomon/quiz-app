<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

const { quizQuestionLength, numberOfCorrectAnswers } = defineProps([
  "quizQuestionLength",
  "numberOfCorrectAnswers",
]);
</script>

<template>
  <div class="text-center px-0 py-24">
    <p class="text-[25px]">Your result...</p>
    <h1 class="text-[80px]">
      {{ numberOfCorrectAnswers }}/{{ quizQuestionLength }}
    </h1>
    <RouterLink to="/">Go Back</RouterLink>
  </div>
</template>
