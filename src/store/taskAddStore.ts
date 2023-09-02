import uniqid from "uniqid";
import { create } from "zustand";
import { addDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";

import { db } from "@src/firebase/config";

import useUserStore from "./user";
import useBoardStore from "./boardStore";
import useTaskListStore from "./taskListStore";
import useTasksStore from "./tasksStore";

interface TaskAddState {
    activeTaskEdit: any;
    setActiveTaskEdit: (task: any) => void;
    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
    addComment: (comment: any) => void;
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
            useTasksStore
                .getState()
                .fetchTasksData(currentTaskList.firebaseDocId);
        } catch (err) {
            console.error(err);
        }
    },
    setDescription: async (value) => {
        try {
            const userId = useUserStore.getState().user?.uid;
            const currentBoard = useBoardStore.getState().currentBoard;
            const currentTaskList = useTaskListStore.getState().currentTaskList;
            const docRef = doc(
                db,
                `users/${userId}/boards/${currentBoard.firebaseDocId}/columns/${currentTaskList.firebaseDocId}/tasks`,
                get().activeTaskEdit.firebaseDocId
            );
            await updateDoc(docRef, { description: value });
            set((state) => ({
                activeTaskEdit: { ...state.activeTaskEdit, description: value },
            }));
            useTasksStore
                .getState()
                .fetchTasksData(currentTaskList.firebaseDocId);
        } catch (err) {
            console.error(err);
        }
    },
    addComment: async (comment) => {
        try {
            const userId = useUserStore.getState().user?.uid;
            const currentBoard = useBoardStore.getState().currentBoard;
            const currentTaskList = useTaskListStore.getState().currentTaskList;
            const docRef = doc(
                db,
                `users/${userId}/boards/${currentBoard.firebaseDocId}/columns/${currentTaskList.firebaseDocId}/tasks`,
                get().activeTaskEdit.firebaseDocId
            );
            await updateDoc(docRef, { comments: arrayUnion(comment) });
            set((state) => ({
                activeTaskEdit: {
                    ...state.activeTaskEdit,
                    comments: [...state.activeTaskEdit.comments, comment],
                },
            }));
            useTasksStore
                .getState()
                .fetchTasksData(currentTaskList.firebaseDocId);
        } catch (err) {
            console.error(err);
        }
    },
}));

export default useTaskAddStore;
