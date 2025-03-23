<template>
  <div class="kanban-board">
    <div class="add-column">
      <input
        v-model="newColumnTitle"
        placeholder="New Column Title"
        class="new-column-input"
      />
      <button @click="handleAddColumn" class="add-column-btn">
        Add Column
      </button>
    </div>

    <draggable
      v-model="store.columns"
      group="columns"
      item-key="id"
      class="columns"
      animation="150"
    >
      <template #item="{ element }">
        <KanbanColumn :column="element" />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import KanbanColumn from "@/components/KanbanComponents/KanbanColumn.vue";
import { useKanbanStore } from "@/stores/kanbanStore";
import draggable from "vuedraggable";

const store = useKanbanStore();
const newColumnTitle = ref("");

function handleAddColumn() {
  store.addColumn(newColumnTitle.value);
  newColumnTitle.value = "";
}
</script>

<style scoped>
.kanban-board {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.columns {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}
.add-column {
  margin-top: 20px;
}
.new-column-input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 200px;
}
.add-column-btn {
  padding: 8px 12px;
  margin-left: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
