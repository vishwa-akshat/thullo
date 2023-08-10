import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BoardState {
    boards: Board[];
    visibilityOfBoard: string;
    coverOfBoard: string;
    setBoard: (boardInfo: Board) => void;
    setVisibilityOfBoard: (option: string) => void;
    setCoverOfBoard: (coverUrl: string) => void;
}
interface Board {
    cover: string;
    title: string;
    visibility: string;
}

const DEFAULT_COVER =
    "https://images.unsplash.com/photo-1690081541249-5725c2cb5029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

const useBoardStore = create<BoardState>()(
    persist(
        (set) => ({
            boards: [],
            visibilityOfBoard: "Public",
            coverOfBoard: DEFAULT_COVER,
            setBoard: (boardInfo: Board) => {
                set((state) => ({
                    boards: [...state.boards, { ...boardInfo }],
                }));
                set({ visibilityOfBoard: "Public" });
                set({ coverOfBoard: DEFAULT_COVER });
            },
            setVisibilityOfBoard: (option: string) =>
                set({ visibilityOfBoard: option }),
            setCoverOfBoard: (coverUrl: string) =>
                set({ coverOfBoard: coverUrl }),
        }),
        {
            name: "board-storage",
        }
    )
);

export default useBoardStore;
