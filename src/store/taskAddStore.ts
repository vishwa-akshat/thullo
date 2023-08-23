import { create } from "zustand";

interface TaskAddState {
    title: string;
    setTitle: (title: string) => void;
}

const useTaskAddStore = create<TaskAddState>((set, get) => ({
    title: "",
    setTitle: (value) => set({ title: value }),
}));

export default useTaskAddStore;
