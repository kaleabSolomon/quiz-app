<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import { ref, computed } from "vue";
import quizes from "../assets/data/quizes.json";
import Result from "../components/Result.vue";
import queries from "../api/queries";
const route = useRoute();
// get the id of the quiz
const quizId = route.params.id;

const quiz = quizes.find((q) => q.id === quizId);

const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResult = ref(false);
const endpoint = "http://localhost:8080/v1/graphql";

axios
  .post(
    endpoint,
    {
      query: queries.getQuizzesAndChoices,
      variables: { quizTypeId: quizId },
    },
    {
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": "myadminsecretkey",
      },
    }
  )
  .then((response) => {
    console.log(response.data.data);
  })
  .catch((error) => {
    console.log(error);
  });

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

const onOptionSelected = (isCorrect) => {
  if (isCorrect) numberOfCorrectAnswers.value++;
  if (quiz.questions.length - 1 == currentQuestionIndex.value)
    showResult.value = true;
  currentQuestionIndex.value++;
};
</script>

<template>
  <div>
    <QuizHeader
      :barPercentage="barPercentage"
      :questionStatus="questionStatus"
    />
    <div>
      <Question
        v-if="!showResult"
        @selectOption="onOptionSelected"
        :question="quiz.questions[currentQuestionIndex]"
      />
      <Result
        :quizQuestionLength="quiz.questions.length"
        :numberOfCorrectAnswers="numberOfCorrectAnswers"
        v-else
      />
    </div>
  </div>
</template>

<style scoped></style>
