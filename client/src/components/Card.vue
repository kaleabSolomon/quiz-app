<script setup>
const { quiz } = defineProps(["quiz"]);
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToQuiz = () => {
  router.push(`/quiz/${quiz.id}`);
};
</script>

<template>
  <div
    @click="navigateToQuiz"
    class="card w-310 overflow-hidden mb-9 mr-5 cursor-pointer"
  >
    <img class="w-full h-48 m-0" :src="quiz.img" alt="course image" />
    <div class="card-text py-0 px-2.5">
      <h2 class="font-bold">{{ quiz.name }}</h2>
      <p>{{ quiz.quiz_questions.length }} questions</p>
    </div>
  </div>
</template>
<style scoped>
.card {
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
}
</style>
