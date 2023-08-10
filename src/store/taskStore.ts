import { create } from "zustand";
import { persist } from "zustand/middleware";
import uniqid from "uniqid";

import { Tasks } from "./tempTask";

interface TaskState {
    tasksList: any;
    addTaskList: (title: string) => void;
    removeTaskList: (id: string) => void;
}

const useTaskStore = create<TaskState>()(
    persist(
        (set, get) => ({
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
        }),
        {
            name: "task-storage",
        }
    )
);

export default useTaskStore;
