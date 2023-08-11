import { create } from "zustand";

interface TaskAddModalState {
    isTaskAddModalOpen: boolean;
    showTaskAddModal: () => void;
    taskAddModalHandleOk: () => void;
    taskAddModalHandleCancel: () => void;
}

const useTaskAddModalStore = create<TaskAddModalState>((set) => ({
    isTaskAddModalOpen: false,
    showTaskAddModal: () => {
        set({ isTaskAddModalOpen: true });
    },
    taskAddModalHandleOk: () => {
        set({ isTaskAddModalOpen: false });
    },
    taskAddModalHandleCancel: () => {
        set({ isTaskAddModalOpen: false });
    },
}));

export default useTaskAddModalStore;
