import { create } from "zustand";

interface MenuDrawerState {
    isBoardMenuDrawerOpen: boolean;
    showBoardMenuDrawer: () => void;
    boardMenuDrawerHandleOk: (params: {
        cover: string;
        title: string;
        visibility: string;
    }) => void;
    boardMenuDrawerHandleCancel: () => void;
}

const useBoardMenuDrawerStore = create<MenuDrawerState>((set) => ({
    isBoardMenuDrawerOpen: false,
    showBoardMenuDrawer: () => {
        set({ isBoardMenuDrawerOpen: true });
    },
    boardMenuDrawerHandleOk: (args) => {
        set({ isBoardMenuDrawerOpen: false });
    },
    boardMenuDrawerHandleCancel: () => {
        set({ isBoardMenuDrawerOpen: false });
    },
}));

export default useBoardMenuDrawerStore;
