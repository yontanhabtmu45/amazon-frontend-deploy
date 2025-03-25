import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// import { } from 'firebase/firestore'
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa-Jd_um_6YsYjtRJwL_Frpr6is7Ly8fk",
  authDomain: "clone-7600a.firebaseapp.com",
  projectId: "clone-7600a",
  storageBucket: "clone-7600a.firebasestorage.app",
  messagingSenderId: "13726767652",
  appId: "1:13726767652:web:c7d6e03d5197fd85b6d6b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
