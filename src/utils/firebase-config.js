
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6lOJXny4qHCv5uQoosUOHI1qFi1sf5ZI",
  authDomain: "react-netflix-clone-app-55e5b.firebaseapp.com",
  projectId: "react-netflix-clone-app-55e5b",
  storageBucket: "react-netflix-clone-app-55e5b.appspot.com",
  messagingSenderId: "627076070950",
  appId: "1:627076070950:web:bbf42f18feebccab8a70e7",
  measurementId: "G-S1SY6BZN1Z"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);