<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <TaskModal v-if="store.isModalOpen" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useKanbanStore } from "@/stores/kanbanStore";
import TaskModal from "@/components/KanbanComponents/TaskModal.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const store = useKanbanStore();
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
