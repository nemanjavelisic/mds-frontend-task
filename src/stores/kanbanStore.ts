import { defineStore } from "pinia";
import type { Column } from "@/types/kanbanTypes";

const defaultColumns: Column[] = [
  { id: 1, title: "Backlog", tasks: [] },
  { id: 2, title: "Ready", tasks: [] },
  { id: 3, title: "In Progress", tasks: [] },
  { id: 4, title: "Done", tasks: [] },
];

export const useKanbanStore = defineStore("kanbanStore", {
  state: () => ({
    columns: defaultColumns,
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
  },
});
