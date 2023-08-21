import { create } from "zustand";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

import { auth } from "@src/firebase/config";

interface UserState {
    user: any;
    registerUser: (email: string, password: string) => void;
    loginUser: (email: string, password: string) => void;
    logoutUser: () => void;
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
            set({ user: response.user.providerData[0] });
        } catch (err) {
            console.error(err);
        }
    },
    loginUser: async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            set({ user: response.user.providerData[0] });
        } catch (err) {
            console.error(err);
        }
    },
    logoutUser: async () => {
        try {
            await signOut(auth);
            window.location.replace("/auth/login");
        } catch (err) {
            console.error(err);
        }
    },
}));

export default useUserStore;
