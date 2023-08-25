
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCiw2lVv0-OKKl8ImAMLHGOHLy3IOlb0Ko",
  authDomain: "react-auth-e8dd5.firebaseapp.com",
  projectId: "react-auth-e8dd5",
  storageBucket: "react-auth-e8dd5.appspot.com",
  messagingSenderId: "1063567314210",
  appId: "1:1063567314210:web:5e87420b701e8b0f93a97b",
  measurementId: "G-VB3P6C8R0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getAuth(app);