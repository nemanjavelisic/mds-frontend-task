<template>
  <div class="kanban-column">
    <div class="column-header">
      <h2>{{ column.title }}</h2>
      <button class="delete-column" @click="store.deleteColumn(column.id)">
        X
      </button>
    </div>
    <draggable
      v-model="column.tasks"
      group="tasks"
      item-key="id"
      class="tasks"
      animation="150"
      @end="store.saveState"
    >
      <template #item="{ element }">
        <TaskItem :task="element" :columnId="column.id" />
      </template>
    </draggable>
    <div class="add-task">
      <input v-model="newTaskName" placeholder="Task name" class="task-input" />
      <button class="add-task-btn" @click="handleAddTask">Add Task</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useKanbanStore } from "@/stores/kanbanStore";
import type { Column } from "@/types/kanbanTypes";
import { ref } from "vue";
import TaskItem from "@/components/KanbanComponents/TaskItem.vue";
import draggable from "vuedraggable";

const props = defineProps<{ column: Column }>();
const store = useKanbanStore();
const newTaskName = ref("");

function handleAddTask() {
  if (!newTaskName.value.trim()) return;
  store.addTask(props.column.id, newTaskName.value.trim());
  newTaskName.value = "";
}
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
.tasks {
  margin-bottom: 10px;
  min-height: 100px;
}
.add-task {
  display: flex;
  gap: 8px;
  align-items: center;
}
.task-input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.add-task-btn {
  padding: 8px 12px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
