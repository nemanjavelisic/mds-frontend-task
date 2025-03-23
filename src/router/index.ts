import { createRouter, createWebHistory } from "vue-router";
import TodoView from "@/views/TodoView.vue";
import KanbanView from "@/views/KanbanView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => TodoView,
    },
    {
      path: "/kanban",
      name: "kanban",
      component: () => KanbanView,
    },
  ],
});

export default router;
