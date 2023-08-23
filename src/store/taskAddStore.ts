import { create } from "zustand";

interface TaskAddState {
    title: string;
    setTitle: (title: string) => void;
    description: string;
    setDescription: (description: string) => void;
}

const useTaskAddStore = create<TaskAddState>((set, get) => ({
    title: "",
    setTitle: (value) => set({ title: value }),
    description: "",
    setDescription: (value) => set({ description: value }),
}));

export default useTaskAddStore;
