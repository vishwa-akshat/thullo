import { create } from "zustand";
import uniqid from "uniqid";

import { Tasks } from "./tempTask";

interface TaskState {
    tasksList: any;
    addTaskList: (title: string) => void;
    removeTaskList: (id: string) => void;
}

const useTaskStore = create<TaskState>((set, get) => ({
    tasksList: [],
    addTaskList: (title) => {
        set((state) => ({
            tasksList: [
                ...state.tasksList,
                { id: uniqid(), title, tasksList: [] },
            ],
        }));
    },
    removeTaskList: (id) => {
        let updatedTaskList = get().tasksList.filter(
            (task: { id: string }) => task.id !== id
        );
        set({ tasksList: updatedTaskList });
    },
}));

export default useTaskStore;
