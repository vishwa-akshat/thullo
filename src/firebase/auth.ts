// useAuth.js
import { useEffect } from "react";
import { auth, db } from "./config";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import useUserStore from "@src/store/user";
import { doc, getDoc, setDoc } from "firebase/firestore";

const useAuth = () => {
    const { user, login, logout } = useUserStore();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                login({ ...user.providerData[0], uid: user.uid });
            } else {
                logout();
            }
        });

        return () => unsubscribe();
    }, []);

    const createUserDocumentFromAuth = async (
        userObj: any,
        additionalData: any = {}
    ) => {
        const userDocRef = doc(db, "users", userObj.uid);

        const userSnapshot = await getDoc(userDocRef);

        if (!userSnapshot.exists()) {
            const createdAt = new Date();

            try {
                await setDoc(userDocRef, {
                    createdAt,
                    ...userObj.providerData[0],
                    ...additionalData,
                });
            } catch (error) {
                console.error(error);
            }
        }

        return userDocRef;
    };

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const { user } = await signInWithPopup(auth, provider);
            await createUserDocumentFromAuth(user, { uid: user.uid });
        } catch (error) {
            console.error("Google Sign-In Error", error);
        }
    };

    const registerUser = async ({
        name,
        email,
        password,
    }: {
        name: string;
        email: string;
        password: string;
    }) => {
        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            await createUserDocumentFromAuth(user, {
                displayName: name,
                uid: user.uid,
            });
        } catch (err) {
            console.error(err);
        }
    };

    const loginUser = async ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    };

    const logOut = async () => {
        try {
            await signOut(auth);
            window.location.replace("/auth/login");
        } catch (error) {
            console.error("Sign-Out Error", error);
        }
    };

    return {
        user,
        loginUser,
        signInWithGoogle,
        registerUser,
        logOut,
    };
};

export default useAuth;
