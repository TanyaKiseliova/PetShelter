import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApZjtZlXH1XnOTPb078QBx6Gb1T63tIls",
  authDomain: "petshelter2-52679.firebaseapp.com",
  projectId: "petshelter2-52679",
  storageBucket: "petshelter2-52679.firebasestorage.app",
  messagingSenderId: "34235768695",
  appId: "1:34235768695:web:0468a0e2585ae282ac0b72"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);
export const auth = getAuth(app);
