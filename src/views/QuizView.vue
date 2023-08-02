<script setup>
import { useRoute } from "vue-router";
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
</script>

<template>
  <div>
    <QuizHeader />
    <div>
      <Question />
    </div>
  </div>
</template>

<style scoped></style>
