<script setup>
import Card from "../components/Card.vue";
import q from "../assets/data/quizes.json";
import { ref, watch } from "vue";

const quizes = ref(q);
const search = ref("");

// use watch to apply searching
// watch accepts 2 parameters: the state being monitored and a callback function to be executed when the state changes.
// watch(search, () => {
//   quizes.value = q.filter((quiz) =>
//     quiz.name.toLowerCase().includes(search.value.toLowerCase())
//   );
// });
</script>

<template>
  <div>
    <!-- <header class="mb-2.5 mt-7 flex items-center">
      <h1 class="font-bold mr-7">Quizes</h1>
      <input
        v-model.trim="search"
        class="border-0 bg-inputColor p-2.5 rounded-sm"
        type="text"
        placeholder="Search..."
      />
    </header> -->
    <div class="flex flex-wrap mt-10">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </div>
  </div>
</template>

<style scoped></style>
