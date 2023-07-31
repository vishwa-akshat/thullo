import { create } from "zustand";

import { Tasks } from "./tempTask";

interface TaskState {
    tasks: any;
}

const useTaskStore = create<TaskState>((set) => ({
    tasks: Tasks,
}));

export default useTaskStore;
