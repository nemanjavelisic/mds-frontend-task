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
      <button @click="store.resetStorage" class="reset-btn">
        Reset Local Storage
      </button>
    </div>

    <draggable
      v-model="store.columns"
      group="columns"
      item-key="id"
      class="columns"
      animation="150"
      @end="store.saveState"
    >
      <template #item="{ element }">
        <KanbanColumn :column="element" />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import KanbanColumn from "@/components/KanbanComponents/KanbanColumn.vue";
import { useKanbanStore } from "@/stores/kanbanStore";
import draggable from "vuedraggable";

const store = useKanbanStore();
const newColumnTitle = ref("");

onMounted(() => {
  store.initStore();
});

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
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}
.add-column {
  display: flex;
  align-items: center;
  gap: 10px;
}
.new-column-input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 200px;
}
.add-column-btn {
  padding: 8px 12px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
}
.add-column-btn:hover {
  background-color: #45a049;
}

.reset-btn {
  padding: 8px 12px;
  background-color: #f0f0f0;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
}

.reset-btn:hover {
  background-color: #e0e0e0;
}
</style>
