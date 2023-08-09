import { create } from "zustand";
import uniqid from "uniqid";

import { Tasks } from "./tempTask";

interface TaskState {
    tasksList: any;
    addTaskList: (title: string) => void;
    // backlogTasks: any;
    // progressTasks: any;
    // reviewTasks: any;
    // completedTasks: any;
    // updateTasksStack: (ids: string) => void;
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
    // backlogTasks: Tasks,
    // progressTasks: [],
    // reviewTasks: [],
    // completedTasks: [],
    // getVariable: (taskList) => {
    //     switch (taskList) {
    //         case "backlog":
    //             return get().backlogTasks;
    //         case "progress":
    //             return get().progressTasks;
    //         case "review":
    //             return get().reviewTasks;
    //         case "completed":
    //             return get().completedTasks;
    //     }
    // },
    // updateTasksStack: (destination, source) => {
    //     const destinationList = get().getVariable(destination.droppableId);
    //     const sourceList = get().getVariable(source.droppableId);
    //     const addItem = sourceList.splice(source.index, 1);
    //     destinationList.splice(destination.index, 0, addItem[0]);
    // },
}));

export default useTaskStore;
