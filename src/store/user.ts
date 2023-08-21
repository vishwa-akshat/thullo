import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";

import { auth } from "@src/firebase/config";

interface UserState {
    user: any;
    registerUser: (email: string, password: string) => void;
    loginUser: (email: string, password: string) => void;
    logoutUser: () => void;
}

const useUserStore = create<UserState>()(
    persist(
        (set) => ({
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
            signInWithGoogle: async () => {
                try {
                    const provider = new GoogleAuthProvider();
                    const signInResponse = await signInWithPopup(
                        auth,
                        provider
                    );
                    set({ user: signInResponse.user.providerData[0] });
                } catch (err) {
                    console.error(err);
                }
            },
            logoutUser: async () => {
                try {
                    await signOut(auth);
                    set({ user: null });
                    window.location.replace("/auth/login");
                } catch (err) {
                    console.error(err);
                }
            },
        }),
        {
            name: "user-storage",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

export default useUserStore;
