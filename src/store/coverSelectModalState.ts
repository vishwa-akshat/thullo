import { create } from "zustand";

import useBoardStore from "./boardStore";

interface CoverSelectModalState {
    isCoverSelectModalOpen: boolean;
    showCoverSelectModal: () => void;
    coverSelectModalHandleOk: (optionName: string) => void;
    coverSelectModalHandleCancel: () => void;
}

const useCoverSelectModalStore = create<CoverSelectModalState>((set) => ({
    isCoverSelectModalOpen: false,
    showCoverSelectModal: () => {
        set({ isCoverSelectModalOpen: true });
    },
    coverSelectModalHandleOk: (option) => {
        useBoardStore.getState().setCoverOfBoard(option);
        set({ isCoverSelectModalOpen: false });
    },
    coverSelectModalHandleCancel: () => {
        set({ isCoverSelectModalOpen: false });
    },
}));

export default useCoverSelectModalStore;
