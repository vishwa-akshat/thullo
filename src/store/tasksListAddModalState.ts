import { create } from "zustand";

import useTaskListStore from "./taskListStore";

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
        useTaskListStore.getState().addTaskList(title);
        set({ isTasksListAddModalOpen: false });
    },
    tasksListAddModalHandleCancel: () => {
        set({ isTasksListAddModalOpen: false });
    },
}));

export default useTasksListAddModalStore;
