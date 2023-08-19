import { create } from "zustand";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "@src/firebase/config";

interface UserState {
    user: any;
    registerUser: (email: string, password: string) => void;
}

const useUserStore = create<UserState>((set) => ({
    user: null,
    registerUser: async (email, password) => {
        try {
            const response = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            set({ user: response.user });
        } catch (err) {
            console.error(err);
        }
    },
}));

export default useUserStore;
