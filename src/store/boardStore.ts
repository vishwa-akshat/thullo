import { create } from "zustand";

interface BoardState {
    boards: Board[];
    visibilityOfBoard: string;
    setBoard: (boardInfo: Board) => void;
    setVisibilityOfBoard: (option: string) => void;
}
interface Board {
    cover: string;
    title: string;
    visibility?: string;
}

const useBoardStore = create<BoardState>((set) => ({
    boards: [],
    visibilityOfBoard: "Public",
    setBoard: (boardInfo: Board) => {
        set((state) => ({ boards: [...state.boards, { ...boardInfo }] }));
        set({ visibilityOfBoard: "Public" });
    },
    setVisibilityOfBoard: (option: string) =>
        set({ visibilityOfBoard: option }),
}));

export default useBoardStore;
