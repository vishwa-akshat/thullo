import uniqid from "uniqid";
import { create } from "zustand";
import { addDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";

import { db } from "@src/firebase/config";

import useUserStore from "./user";
import useBoardStore from "./boardStore";
import useTaskListStore from "./taskListStore";

interface TaskAddState {
    activeTaskEdit: any;
    setActiveTaskEdit: (task: any) => void;
    setTitle: (title: string) => void;
    description: string;
    setDescription: (description: string) => void;
    addComment: (comment: string) => void;
}

const useTaskAddStore = create<TaskAddState>((set, get) => ({
    activeTaskEdit: null,
    setActiveTaskEdit: (task) => set({ activeTaskEdit: task }),
    setTitle: async (value) => {
        try {
            const userId = useUserStore.getState().user?.uid;
            const currentBoard = useBoardStore.getState().currentBoard;
            const currentTaskList = useTaskListStore.getState().currentTaskList;
            const docRef = doc(
                db,
                `users/${userId}/boards/${currentBoard.firebaseDocId}/columns/${currentTaskList.firebaseDocId}/tasks`,
                get().activeTaskEdit.firebaseDocId
            );
            await updateDoc(docRef, { title: value });
            set((state) => ({
                activeTaskEdit: { ...state.activeTaskEdit, title: value },
            }));
        } catch (err) {
            console.error(err);
        }
    },
    description: "",
    setDescription: (value) => set({ description: value }),
    addComment: async (comment) => {},
}));

export default useTaskAddStore;
