import { Firestore } from "firebase/firestore";
import { config } from "./config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = config;

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
