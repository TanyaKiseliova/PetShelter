import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
};

const app = initializeApp(firebaseConfig);

console.log('=== Firebase Config Debug ===');
console.log('apiKey:', process.env.REACT_APP_API_KEY);
console.log('authDomain:', process.env.REACT_APP_AUTH_DOMAIN);
console.log('projectId:', process.env.REACT_APP_PROJECT_ID);
console.log('Все переменные:', process.env); 

export const db = getFirestore(app);
export const auth = getAuth(app);

console.log('✅ Firebase app created:', app.name);
console.log('✅ Auth ready:', auth.currentUser);

