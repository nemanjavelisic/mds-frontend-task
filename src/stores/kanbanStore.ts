import { defineStore } from "pinia";
import type { Task, Column } from "@/types/kanbanTypes";

const defaultColumns: Column[] = [
  {
    id: 1,
    title: "Backlog",
    tasks: [
      {
        id: Date.now(),
        title: "Create kanban board",
        description: "Create kanban board description",
      },
    ],
  },
  { id: 2, title: "Ready", tasks: [] },
  { id: 3, title: "In Progress", tasks: [] },
  { id: 4, title: "Done", tasks: [] },
];

export const useKanbanStore = defineStore("kanbanStore", {
  state: () => ({
    columns: defaultColumns,
    modalTask: null as Task | null,
    modalColumnId: null as number | null,
    isModalOpen: false,
  }),
  actions: {
    addColumn(title: string) {
      if (!title.trim()) return;
      this.columns.push({
        id: Date.now(),
        title,
        tasks: [],
      });
    },
    deleteColumn(columnId: number) {
      this.columns = this.columns.filter((col: Column) => col.id !== columnId);
    },
    addTask(columnId: number, taskTitle: string) {
      const column = this.columns.find((col: Column) => col.id === columnId);
      if (column && taskTitle.trim()) {
        column.tasks.push({
          id: Date.now(),
          title: taskTitle,
          description: "",
        });
      }
    },
    deleteTask(columnId: number, taskId: number) {
      const column = this.columns.find((col: Column) => col.id === columnId);
      if (column) {
        column.tasks = column.tasks.filter((task: Task) => task.id !== taskId);
      }
    },
    updateTaskDescription(
      columnId: number,
      taskId: number,
      description: string
    ) {
      const column = this.columns.find((col: Column) => col.id === columnId);
      if (column) {
        const taskIndex = column.tasks.findIndex(
          (task: Task) => task.id === taskId
        );
        if (taskIndex !== -1) {
          column.tasks[taskIndex].description = description;
        }
      }
    },
    openModal(task: Task, columnId: number) {
      this.modalTask = task;
      this.modalColumnId = columnId;
      this.isModalOpen = true;
    },
    closeModal() {
      this.modalTask = null;
      this.modalColumnId = null;
      this.isModalOpen = false;
    },
  },
});
