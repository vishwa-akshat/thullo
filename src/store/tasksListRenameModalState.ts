import { create } from "zustand";

import useTaskListStore from "./taskListStore";

interface TasksListRenameModalState {
    isTasksListRenameModalOpen: boolean;
    showTasksListRenameModal: () => void;
    tasksListRenameModalHandleOk: (title: string) => void;
    tasksListRenameModalHandleCancel: () => void;
}

const useTasksListRenameModalStore = create<TasksListRenameModalState>(
    (set) => ({
        isTasksListRenameModalOpen: false,
        showTasksListRenameModal: () => {
            set({ isTasksListRenameModalOpen: true });
        },
        tasksListRenameModalHandleOk: (title) => {
            const id =
                useTaskListStore.getState().currentTaskList.firebaseDocId;

            useTaskListStore.getState().renameTaskList(title, id);
            set({ isTasksListRenameModalOpen: false });
        },
        tasksListRenameModalHandleCancel: () => {
            set({ isTasksListRenameModalOpen: false });
        },
    })
);

export default useTasksListRenameModalStore;
