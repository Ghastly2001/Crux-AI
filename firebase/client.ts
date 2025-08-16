import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnRWG9LzPc469V7vv9nSXyvBx3gxbheNc",
  authDomain: "crux-ai-69238.firebaseapp.com",
  projectId: "crux-ai-69238",
  storageBucket: "crux-ai-69238.firebasestorage.app",
  messagingSenderId: "126137662605",
  appId: "1:126137662605:web:2dbf6bc2f270ed589af6c4",
  measurementId: "G-CZ61X03NY6",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
