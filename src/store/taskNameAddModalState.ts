import uniqid from "uniqid";
import { create } from "zustand";
import { addDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";

import { db } from "@src/firebase/config";

import useUserStore from "./user";
import useBoardStore from "./boardStore";
import useTaskListStore from "./taskListStore";
import useTasksStore from "./tasksStore";

interface TaskNameModalAddState {
    isTaskNameAddModalOpen: boolean;
    showTaskNameAddModal: () => void;
    taskNameAddModalHandleOk: (title: string) => void;
    taskNameAddModalHandleCancel: () => void;
}

const DEFAULT_COVER =
    "https://images.unsplash.com/photo-1690081541249-5725c2cb5029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

const useTaskNameAddModalStore = create<TaskNameModalAddState>((set) => ({
    isTaskNameAddModalOpen: false,
    showTaskNameAddModal: () => {
        set({ isTaskNameAddModalOpen: true });
    },
    taskNameAddModalHandleOk: async (title) => {
        try {
            const userId = useUserStore.getState().user?.uid;
            const currentBoard = useBoardStore.getState().currentBoard;
            const currentTaskList = useTaskListStore.getState().currentTaskList;

            const docRef = collection(
                db,
                `users/${userId}/boards/${currentBoard.firebaseDocId}/columns/${currentTaskList.firebaseDocId}/tasks`
            );

            await addDoc(docRef, {
                id: uniqid(),
                title,
                description: "",
                attachments: [],
                comments: [],
                members: [],
                labels: [],
                cover: DEFAULT_COVER,
            });
            set({ isTaskNameAddModalOpen: false });
            useTasksStore.getState().fetchTasksData(currentTaskList);
        } catch (err) {
            console.error(err);
        }
    },
    taskNameAddModalHandleCancel: () => {
        set({ isTaskNameAddModalOpen: false });
    },
}));

export default useTaskNameAddModalStore;
