import uniqid from "uniqid";
import { create } from "zustand";
import { collection, addDoc, getDocs } from "firebase/firestore";

import { db } from "@src/firebase/config";

import useUserStore from "./user";
import useBoardStore from "./boardStore";

interface TaskState {
    taskLists: any;
    currentTaskList: any;
    setCurrentTaskList: (taskList: any) => void;
    addTaskList: (title: string) => void;
    fetchTaskListsData: () => void;
}

const useTaskListStore = create<TaskState>((set, get) => ({
    taskLists: [],
    currentTaskList: null,
    setCurrentTaskList: (taskList) => {
        set({ currentTaskList: taskList });
    },
    addTaskList: async (title) => {
        try {
            const userId = useUserStore.getState().user?.uid;
            const currentBoard = useBoardStore.getState().currentBoard;
            const docRef = collection(
                db,
                `users/${userId}/boards/${currentBoard.firebaseDocId}/columns`
            );

            await addDoc(docRef, { title, id: uniqid() });
            get().fetchTaskListsData();
        } catch (err) {
            console.error(err);
        }
    },
    fetchTaskListsData: async () => {
        try {
            const userId = useUserStore.getState().user?.uid;
            const currentBoard = useBoardStore.getState().currentBoard;
            const docRef = collection(
                db,
                `users/${userId}/boards/${currentBoard.firebaseDocId}/columns`
            );
            const querySnapshot = await getDocs(docRef);
            set({
                taskLists: [
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
}));

export default useTaskListStore;
