import { createRouter, createWebHistory } from "vue-router";
import TodoView from "../views/TodoView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => TodoView,
    },
    {
      path: "/todos",
      name: "todos",
      component: () => TodoView,
    },
  ],
});

export default router;
