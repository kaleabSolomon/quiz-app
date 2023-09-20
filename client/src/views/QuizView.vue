<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import { ref, computed, watch } from "vue";
import quizes from "../assets/data/quizes.json";
import Result from "../components/Result.vue";
import queries from "../api/queries";
const route = useRoute();
// get the id of the quiz
const quizId = route.params.id;

const quiz = ref({});
const isLoading = ref(true);
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
    const result = response.data.data;
    quiz.value = result.quiz_types[0];
    isLoading.value = false;
  })
  .catch((error) => {
    console.log(error);
    isLoading.value = false;
  });

const questionStatus = computed(() => {
  if (isLoading.value || !quiz.quiz_questions) {
    return "";
  }
  return `${currentQuestionIndex.value} / ${quiz.value.quiz_questions.length}`;
});

watch(quiz, () => {
  questionStatus.value; // Trigger the computed property when quiz changes
});
const barPercentage = computed(() => {
  if (!isLoading.value && quiz.value.quiz_questions)
    return `${
      ((currentQuestionIndex.value + 1) / quiz.value.quiz_questions.length) *
      100
    }%`;
  return `0%`;
});

const onOptionSelected = (isCorrect) => {
  if (isCorrect) numberOfCorrectAnswers.value++;
  if (!isLoading.value && quiz.value.quiz_questions) {
    if (quiz.quiz_questions.length - 1 == currentQuestionIndex.value)
      // if (currentQuestionIndex.value === quiz.value.quiz_questions.length - 1)
      showResult.value = true;
  }
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
        v-if="!showResult && !isLoading"
        @selectOption="onOptionSelected"
        :question="quiz.quiz_questions[currentQuestionIndex]"
      />
      <Result
        v-else
        v-if="!isLoading && quiz.value.quiz_questions"
        :quizQuestionLength="quiz.quiz_questions.length"
        :numberOfCorrectAnswers="numberOfCorrectAnswers"
        >{{ console.log(quiz.quiz_questions) }}</Result
      >
    </div>
  </div>
</template>

<style scoped></style>
