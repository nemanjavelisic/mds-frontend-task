<template>
  <div class="task-item">
    <span class="task-title">{{ task.title }}</span>
    <button class="delete-btn" @click.stop="handleDelete">X</button>
  </div>
</template>

<script setup lang="ts">
import { useKanbanStore } from "@/stores/kanbanStore";
const props = defineProps<{
  task: { id: number; title: string; description?: string };
  columnId: number;
}>();
const store = useKanbanStore();

function handleDelete() {
  store.deleteTask(props.columnId, props.task.id);
}
</script>

<style scoped>
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.task-title {
  flex-grow: 1;
}
.delete-btn {
  background: none;
  border: none;
  color: red;
  font-size: 14px;
  cursor: pointer;
}
.delete-btn:hover {
  color: darkred;
}
.task-item:hover {
  background-color: #eef;
}
</style>
