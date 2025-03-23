<template>
  <div class="kanban-view-container">
    <h1>Jira Kanban Board</h1>
    <KanbanBoard />
  </div>
</template>

<script setup lang="ts">
import KanbanBoard from "../components/KanbanComponents/KanbanBoard.vue";
</script>

<style scoped>
.kanban-view-container {
  padding: 20px;
}
h1 {
  text-align: center;
}
</style>
