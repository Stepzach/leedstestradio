// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBFpZV-UFODiRIbS6BMRmhDI-7nWn85VI",
  authDomain: "mychatapp-56623.firebaseapp.com",
  projectId: "mychatapp-56623",
  storageBucket: "mychatapp-56623.firebasestorage.app",
  messagingSenderId: "183438867440",
  appId: "1:183438867440:web:9c96843122e778cc917b35",
  measurementId: "G-K1MBVJ8XB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app}