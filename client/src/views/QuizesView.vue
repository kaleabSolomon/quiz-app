<script setup>
import axios from "axios";
import queries from "../api/queries";
import Card from "../components/Card.vue";
// import q from "../assets/data/quizes.json";
import { ref, watch } from "vue";
let originalQuizes;
const quizes = ref([]);
const search = ref("");
const endpoint = "http://localhost:8080/v1/graphql";
const adminSecret = "myadminsecretkey";
axios
  .post(
    endpoint,
    { query: queries.allQuizzes },
    {
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": adminSecret,
      },
    }
  )
  .then((response) => {
    const result = response.data.data;
    quizes.value = result.quiz_types;
    originalQuizes = quizes.value;
  })
  .catch((error) => {
    // Handle any errors here
    console.error(error);
  });

// use watch to apply searching
// watch accepts 2 parameters: the state being monitored and a callback function to be executed when the state changes.
watch(search, () => {
  quizes.value = originalQuizes.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <div>
    <header class="mb-2.5 mt-7 flex items-center">
      <h1 class="font-bold mr-7">Quizes</h1>
      <input
        v-model.trim="search"
        class="border-0 bg-inputColor p-2.5 rounded-sm"
        type="text"
        placeholder="Search..."
      />
    </header>
    <div class="flex flex-wrap mt-10">
      <p v-if="quizes.length === 0">loading quizes</p>
      <Card v-else v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </div>
  </div>
</template>

<style scoped></style>
