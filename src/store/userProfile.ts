import { create } from "zustand";
import { doc, getDoc } from "firebase/firestore";

import { db } from "@src/firebase/config";

import useUserStore from "./user";

interface UserProfileState {
    userProfile: any;
    fetchUserProfile: () => void;
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
}));

export default useUserProfileStore;
