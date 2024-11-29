/* global process */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "healthdonald-data.firebaseapp.com",
  projectId: "healthdonald-data",
  storageBucket: "healthdonald-data.firebasestorage.app",
  messagingSenderId: "280350485342",
  appId: "1:280350485342:web:3a1d53ef708aafd01e7dcf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Create a root reference
export const storage = getStorage(app);
