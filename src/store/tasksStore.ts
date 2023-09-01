import { create } from "zustand";
import { collection, getDocs } from "firebase/firestore";

import { db } from "@src/firebase/config";

import useUserStore from "./user";
import useBoardStore from "./boardStore";
import useTaskListStore from "./taskListStore";

interface TasksState {
    tasksArray: any;
    fetchTasksData: (id: string) => any;
}

const useTasksStore = create<TasksState>((set, get) => ({
    tasksArray: [],
    fetchTasksData: async (taskListId) => {
        try {
            const userId = useUserStore.getState().user?.uid;
            const currentBoard = useBoardStore.getState().currentBoard;

            const docResponse = await getDocs(
                collection(
                    db,
                    `users/${userId}/boards/${currentBoard.firebaseDocId}/columns/${taskListId}/tasks`
                )
            );
            const resolvedResponse = [
                ...docResponse.docs.map((doc) => ({
                    ...doc.data(),
                    firebaseDocId: doc.id,
                })),
            ];
            const responseArray = [
                ...get().tasksArray,
                { taskListId, tasks: [...resolvedResponse] },
            ];
            const filteredArr = responseArray.reduceRight((acc, current) => {
                const x = acc.find(
                    (item: any) => item.taskListId === current.taskListId
                );
                if (!x) {
                    return acc.concat([current]);
                } else {
                    return acc;
                }
            }, []);

            set({ tasksArray: filteredArr });
        } catch (e) {
            console.error(e);
        }
    },
}));

export default useTasksStore;
