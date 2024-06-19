import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-1f302.firebaseapp.com",
  projectId: "reactchat-1f302",
  storageBucket: "reactchat-1f302.appspot.com",
  messagingSenderId: "643310305834",
  appId: "1:643310305834:web:573f87dc1078a27b83b953"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();