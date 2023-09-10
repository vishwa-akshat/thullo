import { create } from "zustand";
import { updateProfile } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import { auth, db } from "@src/firebase/config";

import useUserStore from "./user";

interface UserProfileState {
    userProfile: any;
    fetchUserProfile: () => void;
    updateUserProfileDetails: (details: any) => void;
}

const useUserProfileStore = create<UserProfileState>((set, get) => ({
    userProfile: null,
    fetchUserProfile: async () => {
        try {
            const userId = useUserStore.getState().user?.uid;
            const userDocRef = doc(db, "users", userId);

            const userSnapshot = await getDoc(userDocRef);

            set({ userProfile: userSnapshot.data() });
        } catch (e) {
            console.error(e);
        }
    },
    updateUserProfileDetails: async (details) => {
        try {
            const userId = useUserStore.getState().user?.uid;
            const userDocRef = doc(db, "users", userId);

            const dub = { ...details };

            if (details.bio) {
                delete dub.bio;
            }

            await updateDoc(userDocRef, {
                ...details,
            });

            await updateProfile(auth.currentUser, {
                ...dub,
            });

            useUserStore.setState((prev) => ({
                user: {
                    ...prev.user,
                    displayName: details.displayName,
                },
            }));

            get().fetchUserProfile();
        } catch (e) {
            console.error(e);
        }
    },
}));

export default useUserProfileStore;
