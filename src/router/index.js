import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "../views/QuizesView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "quiz",
      component: QuizesView,
    },
  ],
});

export default router;
