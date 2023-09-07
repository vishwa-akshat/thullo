import { create } from "zustand";

interface UserState {
    user: any;
    login: (user: any) => void;
    logout: () => void;
}

const useUserStore = create<UserState>()((set) => ({
    user: null,
    login: (user) => set({ user }),
    logout: () => {
        set({ user: null });
    },
}));

export default useUserStore;
