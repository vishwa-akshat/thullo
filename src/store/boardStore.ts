import uniqid from "uniqid";
import { create } from "zustand";
import { collection, addDoc, getDocs } from "firebase/firestore";

import { db } from "@src/firebase/config";

import useUserStore from "./user";

interface BoardState {
    boards: any[];
    visibilityOfBoard: string;
    coverOfBoard: string;
    setBoard: (boardInfo: Board) => void;
    setVisibilityOfBoard: (option: string) => void;
    setCoverOfBoard: (coverUrl: string) => void;
    fetchBoardData: () => void;
}
interface Board {
    columns: [];
    id: string;
    cover: string;
    title: string;
    visibility: string;
}

const DEFAULT_COVER =
    "https://images.unsplash.com/photo-1690081541249-5725c2cb5029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

const useBoardStore = create<BoardState>((set, get) => ({
    boards: [],
    visibilityOfBoard: "Public",
    coverOfBoard: DEFAULT_COVER,
    setBoard: async (boardInfo: Board) => {
        try {
            const userId = useUserStore.getState().user?.uid;
            const docRef = await addDoc(
                collection(db, `users/${userId}/boards`),
                {
                    title: boardInfo.title,
                    columns: [],
                    cover: boardInfo.cover,
                    visibility: boardInfo.visibility,
                    id: uniqid(),
                }
            );
            get().fetchBoardData();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        set({ visibilityOfBoard: "Public" });
        set({ coverOfBoard: DEFAULT_COVER });
    },
    fetchBoardData: async () => {
        try {
            const userId = useUserStore.getState().user?.uid;
            const querySnapshot = await getDocs(
                collection(db, `users/${userId}/boards`)
            );
            set({
                boards: [
                    ...querySnapshot.docs.map((doc) => ({ ...doc.data() })),
                ],
            });
        } catch (e) {
            console.error(e);
        }
    },
    setVisibilityOfBoard: (option: string) =>
        set({ visibilityOfBoard: option }),
    setCoverOfBoard: (coverUrl: string) => set({ coverOfBoard: coverUrl }),
}));

export default useBoardStore;
