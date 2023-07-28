import { create } from "zustand";

interface ModalAddState {
    isBoardAddModalOpen: boolean;
    showBoardAddModal: () => void;
    boardAddModalHandleOk: () => void;
    boardAddModalHandleCancel: () => void;
}

const useBoardAddModalStore = create<ModalAddState>((set) => ({
    isBoardAddModalOpen: false,
    showBoardAddModal: () => {
        set({ isBoardAddModalOpen: true });
    },
    boardAddModalHandleOk: () => {
        set({ isBoardAddModalOpen: false });
    },
    boardAddModalHandleCancel: () => {
        set({ isBoardAddModalOpen: false });
    },
}));

export default useBoardAddModalStore;
