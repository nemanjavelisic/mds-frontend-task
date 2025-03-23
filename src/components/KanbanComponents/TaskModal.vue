<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <h3>{{ store.modalTask?.title }}</h3>
      <textarea
        v-model="description"
        placeholder="Enter task description"
      ></textarea>
      <div class="modal-buttons">
        <button class="save-button" @click="save">Save</button>
        <button class="cancel-button" @click="close">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useKanbanStore } from "@/stores/kanbanStore";

const store = useKanbanStore();
const description = ref(store.modalTask?.description || "");

function save() {
  if (store.modalTask && store.modalColumnId) {
    store.updateTaskDescription(
      store.modalColumnId,
      store.modalTask.id,
      description.value
    );
  }
  close();
}

function close() {
  store.closeModal();
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  min-width: 300px;
}
textarea {
  width: 100%;
  height: 100px;
  margin-top: 10px;
  padding: 8px;
  border: 1px solid #0a0a0a;
  border-radius: 4px;
  resize: vertical;
}
.modal-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 15px;
}
button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.save-button {
  background-color: #4caf50;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.cancel-button {
  background-color: #ff6b6b;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  opacity: 0.9;
}
</style>
