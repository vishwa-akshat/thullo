import uniqid from "uniqid";
import { create } from "zustand";
import {
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
} from "firebase/firestore";

import { db } from "@src/firebase/config";

import useUserStore from "./user";

interface BoardState {
    boards: any[];
    visibilityOfBoard: string;
    coverOfBoard: string;
    currentBoard: any;
    setBoard: (boardInfo: any) => void;
    setVisibilityOfBoard: (option: string) => void;
    setCoverOfBoard: (coverUrl: string) => void;
    fetchBoardData: () => void;
    setCurrentBoard: (value: any) => void;
    updateBoardVisibility: (value: any) => void;
}

const DEFAULT_COVER =
    "https://images.unsplash.com/photo-1690081541249-5725c2cb5029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

const useBoardStore = create<BoardState>((set, get) => ({
    boards: [],
    currentBoard: null,
    setCurrentBoard: (value) => {
        set({ currentBoard: value });
    },
    visibilityOfBoard: "Public",
    coverOfBoard: DEFAULT_COVER,
    setBoard: async (boardInfo) => {
        try {
            const userId = useUserStore.getState().user?.uid;
            await addDoc(collection(db, `users/${userId}/boards`), {
                title: boardInfo.title,
                cover: boardInfo.cover,
                visibility: boardInfo.visibility,
                id: uniqid(),
            });
            get().fetchBoardData();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        set({ visibilityOfBoard: "Public" });
        set({ coverOfBoard: DEFAULT_COVER });
    },
    updateBoardVisibility: async (visibility) => {
        try {
            const userId = useUserStore.getState().user?.uid;
            await updateDoc(
                doc(
                    db,
                    `users/${userId}/boards`,
                    get().currentBoard.firebaseDocId
                ),
                {
                    visibility: visibility,
                }
            );
            get().fetchBoardData();
        } catch (e) {
            console.error("Error upating document: ", e);
        }
    },
    fetchBoardData: async () => {
        try {
            const userId = useUserStore.getState().user?.uid;
            const querySnapshot = await getDocs(
                collection(db, `users/${userId}/boards`)
            );
            set({
                boards: [
                    ...querySnapshot.docs.map((doc) => ({
                        ...doc.data(),
                        firebaseDocId: doc.id,
                    })),
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
