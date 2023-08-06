import { create } from "zustand";

import useBoardStore from "./boardStore";

interface VisibilityModalState {
    isVisibilityModalOpen: boolean;
    showVisibilityModal: () => void;
    visibilityModalHandleOk: (optionName: string) => void;
    visibilityModalHandleCancel: () => void;
}

const useVisibilityModalStore = create<VisibilityModalState>((set) => ({
    isVisibilityModalOpen: false,
    showVisibilityModal: () => {
        set({ isVisibilityModalOpen: true });
    },
    visibilityModalHandleOk: (option) => {
        useBoardStore.getState().setVisibilityOfBoard(option);
        set({ isVisibilityModalOpen: false });
    },
    visibilityModalHandleCancel: () => {
        set({ isVisibilityModalOpen: false });
    },
}));

export default useVisibilityModalStore;
