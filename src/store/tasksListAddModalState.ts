import { create } from "zustand";

import useTaskStore from "./taskStore";

interface TasksListModalAddState {
    isTasksListAddModalOpen: boolean;
    showTasksListAddModal: () => void;
    tasksListAddModalHandleOk: (title: string) => void;
    tasksListAddModalHandleCancel: () => void;
}

const useTasksListAddModalStore = create<TasksListModalAddState>((set) => ({
    isTasksListAddModalOpen: false,
    showTasksListAddModal: () => {
        set({ isTasksListAddModalOpen: true });
    },
    tasksListAddModalHandleOk: (title) => {
        useTaskStore.getState().addTaskList(title);
        set({ isTasksListAddModalOpen: false });
    },
    tasksListAddModalHandleCancel: () => {
        set({ isTasksListAddModalOpen: false });
    },
}));

export default useTasksListAddModalStore;
