<script setup>
import { useRoute } from "vue-router";
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import { ref } from "vue";
import quizes from "../assets/data/quizes.json";
const route = useRoute();
// get the id of the quiz
const quizId = parseInt(route.params.id);

const quiz = quizes.find((q) => q.id == quizId);

const currentQuestionIndex = ref(0);
</script>

<template>
  <div>
    <QuizHeader />
    <div>
      <Question :question="quiz.questions[currentQuestionIndex]" />
    </div>
  </div>
</template>

<style scoped></style>
