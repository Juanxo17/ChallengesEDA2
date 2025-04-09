// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6nwA5mDk_Utz5py7sW5OmjmOqO8GGjnA",
  authDomain: "auth-6b928.firebaseapp.com",
  projectId: "auth-6b928",
  storageBucket: "auth-6b928.firebasestorage.app",
  messagingSenderId: "602614647348",
  appId: "1:602614647348:web:28783f95bb0189cfcb9861",
  measurementId: "G-J735HXGTXT"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize firebase auth.
const auth = getAuth()
