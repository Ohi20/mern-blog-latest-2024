// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-latest-2024.firebaseapp.com",
  projectId: "mern-blog-latest-2024",
  storageBucket: "mern-blog-latest-2024.appspot.com",
  messagingSenderId: "894048316494",
  appId: "1:894048316494:web:8d3979574b5e0c1bbe671f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
