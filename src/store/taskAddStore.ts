import uniqid from "uniqid";
import { create } from "zustand";
import { addDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";

import { db } from "@src/firebase/config";

import useUserStore from "./user";
import useBoardStore from "./boardStore";
import useTaskListStore from "./taskListStore";

interface TaskAddState {
    title: string;
    setTitle: (title: string) => void;
    description: string;
    setDescription: (description: string) => void;
    addComment: (comment: string) => void;
}

const useTaskAddStore = create<TaskAddState>((set, get) => ({
    title: "",
    setTitle: (value) => set({ title: value }),
    description: "",
    setDescription: (value) => set({ description: value }),
    addComment: async (comment) => {
        // try {
        //     const userId = useUserStore.getState().user?.uid;
        //     const currentBoard = useBoardStore.getState().currentBoard;
        //     const currentTaskList = useTaskListStore.getState().currentTaskList;
        //     const docRef = collection(
        //         db,
        //         `users/${userId}/boards/${currentBoard.firebaseDocId}/columns/${currentTaskList.firebaseDocId}/tasks`
        //     );
        //     await addDoc(docRef, { id: uniqid() });
        //     // get().fetchTaskListsData();
        // } catch (err) {
        //     console.error(err);
        // }
    },
}));

export default useTaskAddStore;
