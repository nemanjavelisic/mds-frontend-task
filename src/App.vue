<template>
  <div id="app">
    <router-view />
    <TaskModal v-if="store.isModalOpen" />
  </div>
</template>

<script setup lang="ts">
import { useKanbanStore } from "@/stores/kanbanStore";
import TaskModal from "@/components/KanbanComponents/TaskModal.vue";

const store = useKanbanStore();
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
