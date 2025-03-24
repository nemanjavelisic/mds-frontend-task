import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/TodoView.vue"),
    },
    {
      path: "/kanban",
      name: "kanban",
      component: () => import("@/views/KanbanView.vue"),
    },
  ],
});

export default router;
