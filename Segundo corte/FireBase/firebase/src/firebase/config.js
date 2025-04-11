import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyACbr68AV2amtseVrmUo18c2_xnm37_FwQ",
  authDomain: "pruebafirebase-233d0.firebaseapp.com",
  projectId: "pruebafirebase-233d0",
  storageBucket: "pruebafirebase-233d0.appspot.com",
  messagingSenderId: "21924744230",
  appId: "1:21924744230:web:f16460c5bcb57513c46ae7",
  measurementId: "G-N3P0VFJCHP"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


export { auth }; 
