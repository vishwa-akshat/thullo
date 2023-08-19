import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCl_nlCX_vgCQ738P7W8RTyNe98vm_9qTo",
    authDomain: "thullo-265bf.firebaseapp.com",
    projectId: "thullo-265bf",
    storageBucket: "thullo-265bf.appspot.com",
    messagingSenderId: "991778239508",
    appId: "1:991778239508:web:0b10198aae809d0f782301",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
