<script setup>
import { useRoute } from "vue-router";
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import { ref, watch, computed } from "vue";
import quizes from "../assets/data/quizes.json";
const route = useRoute();
// get the id of the quiz
const quizId = parseInt(route.params.id);

const quiz = quizes.find((q) => q.id === quizId);

const currentQuestionIndex = ref(0);

// const questionStatus = ref(
//   `${currentQuestionIndex.value}/${quiz.questions.length}`
// );
// watch(
//   () => currentQuestionIndex.value,
//   () => {
//     questionStatus.value = `${currentQuestionIndex.value} / ${quiz.questions.length}`;
//   }
// );

const questionStatus = computed(() => {
  return `${currentQuestionIndex.value} / ${quiz.questions.length}`;
});
const barPercentage = computed(
  () => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`
);
</script>

<template>
  <div>
    <QuizHeader
      :barPercentage="barPercentage"
      :questionStatus="questionStatus"
    />
    <div>
      <Question :question="quiz.questions[currentQuestionIndex]" />
    </div>
    <button @click="currentQuestionIndex++">next Question</button>
  </div>
</template>

<style scoped></style>
