import { create } from "zustand";

import useBoardStore from "./boardStore";

interface VisibilityModalState {
    isVisibilityModalOpen: boolean;
    showVisibilityModal: () => void;
    visibilityModalHandleOk: (optionName: string, isUpdate?: boolean) => void;
    visibilityModalHandleCancel: () => void;
}

const useVisibilityModalStore = create<VisibilityModalState>((set) => ({
    isVisibilityModalOpen: false,
    showVisibilityModal: () => {
        set({ isVisibilityModalOpen: true });
    },
    visibilityModalHandleOk: (option, isUpdate) => {
        if (isUpdate) {
            useBoardStore.getState().updateBoardVisibility(option);
        } else {
            useBoardStore.getState().setVisibilityOfBoard(option);
        }
        set({ isVisibilityModalOpen: false });
    },
    visibilityModalHandleCancel: () => {
        set({ isVisibilityModalOpen: false });
    },
}));

export default useVisibilityModalStore;
