import { create } from "zustand";

interface LabelAddModalState {
    isLabelAddModalOpen: boolean;
    showLabelAddModal: () => void;
    labelAddModalHandleOk: () => void;
    labelAddModalHandleCancel: () => void;
}

const useLabelAddModalStore = create<LabelAddModalState>((set) => ({
    isLabelAddModalOpen: false,
    showLabelAddModal: () => {
        set({ isLabelAddModalOpen: true });
    },
    labelAddModalHandleOk: () => {
        set({ isLabelAddModalOpen: false });
    },
    labelAddModalHandleCancel: () => {
        set({ isLabelAddModalOpen: false });
    },
}));

export default useLabelAddModalStore;
