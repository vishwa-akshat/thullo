import { create } from "zustand";

import useBoardStore from "./boardStore";

interface ModalAddState {
    isBoardAddModalOpen: boolean;
    showBoardAddModal: () => void;
    boardAddModalHandleOk: (params: { cover: string; title: string }) => void;
    boardAddModalHandleCancel: () => void;
}

const useBoardAddModalStore = create<ModalAddState>((set) => ({
    isBoardAddModalOpen: false,
    showBoardAddModal: () => {
        set({ isBoardAddModalOpen: true });
    },
    boardAddModalHandleOk: (args) => {
        useBoardStore.getState().setBoard({ ...args });
        set({ isBoardAddModalOpen: false });
    },
    boardAddModalHandleCancel: () => {
        set({ isBoardAddModalOpen: false });
    },
}));

export default useBoardAddModalStore;
