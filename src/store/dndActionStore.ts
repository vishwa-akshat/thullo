import { create } from "zustand";
import { addDoc, collection, doc, deleteDoc } from "firebase/firestore";
import { db } from "@src/firebase/config";

import useUserStore from "./user";
import useBoardStore from "./boardStore";
import useTasksStore from "./tasksStore";

interface DNDActionState {
    handleDragAndDropAction: (active: any, over: any) => void;
}

const useDnDActionStore = create<DNDActionState>((set) => ({
    handleDragAndDropAction: async (active, over) => {
        try {
            const userId = useUserStore.getState().user?.uid;
            const currentBoard = useBoardStore.getState().currentBoard;

            const taskData = active.data.current.task;
            const delTaskListId = active.data.current.taskListId;
            const addTaskListId = over.data.current.taskListId;

            const delDocRef = doc(
                db,
                `users/${userId}/boards/${currentBoard.firebaseDocId}/columns/${delTaskListId}/tasks`,
                taskData.firebaseDocId
            );
            await deleteDoc(delDocRef);

            const addDocRef = collection(
                db,
                `users/${userId}/boards/${currentBoard.firebaseDocId}/columns/${addTaskListId}/tasks`
            );

            await addDoc(addDocRef, taskData);

            useTasksStore.getState().fetchTasksData(delTaskListId);
            useTasksStore.getState().fetchTasksData(addTaskListId);
        } catch (err) {
            console.error(err);
        }
    },
}));

export default useDnDActionStore;
