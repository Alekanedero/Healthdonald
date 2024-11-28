// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
