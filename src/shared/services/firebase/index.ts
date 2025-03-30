import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../../../config/firebase";

const app = initializeApp(firebaseConfig);
export const fireStoreDB = getFirestore(app);
export const auth = getAuth(app);
