import { create } from "zustand";
import { persist } from "zustand/middleware";
import uniqid from "uniqid";

import { Tasks } from "./tempTask";

interface TaskState {
    tasksList: any;
    addTaskList: (title: string) => void;
}

const useTaskStore = create<TaskState>()(
    persist(
        (set) => ({
            tasksList: [],
            addTaskList: (title) => {
                set((state) => ({
                    tasksList: [
                        ...state.tasksList,
                        { id: uniqid(), title, tasksList: [] },
                    ],
                }));
            },
        }),
        {
            name: "task-storage",
        }
    )
);

export default useTaskStore;
