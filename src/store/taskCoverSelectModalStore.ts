import { create } from "zustand";

interface TaskCoverSelectModalState {
    isTaskCoverSelectModalOpen: boolean;
    showTaskCoverSelectModal: () => void;
    taskCoverSelectModalHandleOk: (optionName: string) => void;
    taskCoverSelectModalHandleCancel: () => void;
}

const useTaskCoverSelectModalStore = create<TaskCoverSelectModalState>(
    (set) => ({
        isTaskCoverSelectModalOpen: false,
        showTaskCoverSelectModal: () => {
            set({ isTaskCoverSelectModalOpen: true });
        },
        taskCoverSelectModalHandleOk: (option) => {
            set({ isTaskCoverSelectModalOpen: false });
        },
        taskCoverSelectModalHandleCancel: () => {
            set({ isTaskCoverSelectModalOpen: false });
        },
    })
);

export default useTaskCoverSelectModalStore;
