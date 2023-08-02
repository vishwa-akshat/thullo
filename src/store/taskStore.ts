import { create } from "zustand";

import { Tasks } from "./tempTask";

interface TaskState {
    tasks: any;
    backlogTasksId: Number[];
    inProgressTasksId: Number[];
    inReviewTasksId: Number[];
    completedTasksId: Number[];
    getTasks: (ids: Number[]) => any;
}

const useTaskStore = create<TaskState>((set, get) => ({
    tasks: Tasks,
    backlogTasksId: [1, 2],
    inProgressTasksId: [3, 4, 5],
    inReviewTasksId: [6, 7],
    completedTasksId: [8],
    getTasks: (ids: Number[]) => {
        const resultTasks = get().tasks.filter((task: any) =>
            ids.includes(task.id)
        );
        return resultTasks;
    },
}));

export default useTaskStore;
