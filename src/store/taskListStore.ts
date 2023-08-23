import uniqid from "uniqid";
import { create } from "zustand";
import { doc, getDocs, updateDoc, arrayUnion } from "firebase/firestore";

import { db } from "@src/firebase/config";

import useUserStore from "./user";
import useBoardStore from "./boardStore";

interface TaskState {
    tasksList: any;
    addTaskList: (title: string) => void;
    removeTaskList: (id: string) => void;
}

const useTaskListStore = create<TaskState>((set, get) => ({
    tasksList: [],
    addTaskList: async (title) => {
        try {
            const userId = useUserStore.getState().user?.uid;
            const currentBoard = useBoardStore.getState().currentBoard;

            await updateDoc(
                doc(db, `users/${userId}/boards`, currentBoard.firebaseDocId),
                {
                    columns: arrayUnion({ title, id: uniqid() }),
                }
            );
            useBoardStore.getState().fetchBoardData();
        } catch (err) {
            console.error(err);
        }
    },
    removeTaskList: (id) => {
        let updatedTaskList = get().tasksList.filter(
            (task: { id: string }) => task.id !== id
        );
        set({ tasksList: updatedTaskList });
    },
}));

export default useTaskListStore;
