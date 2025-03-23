<template>
  <div class="kanban-column">
    <div class="column-header">
      <h2>{{ column.title }}</h2>
      <button class="delete-column" @click="store.deleteColumn(column.id)">
        X
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useKanbanStore } from "@/stores/kanbanStore";
import type { Column } from "@/types/kanbanTypes";

defineProps<{ column: Column }>();
const store = useKanbanStore();
</script>

<style scoped>
.kanban-column {
  background: #f4f7fa;
  border: 1px solid #d2d6db;
  padding: 20px;
  width: 300px;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px;
}
.column-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.delete-column {
  background-color: #ff6b6b;
  border: none;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
