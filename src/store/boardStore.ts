import { create } from "zustand";

interface BoardState {
    boards: Board[];
    setBoard: (boardInfo: Board) => void;
}
interface Board {
    cover: string;
    title: string;
}

const useBoardStore = create<BoardState>((set) => ({
    boards: [],
    setBoard: (boardInfo: Board) =>
        set((state) => ({ boards: [...state.boards, { ...boardInfo }] })),
}));

export default useBoardStore;
