// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNFPGbs1_vINrIdnsBm4L5a3vpx1Hz6Z4",
  authDomain: "sherise-e05c3.firebaseapp.com",
  projectId: "sherise-e05c3",
  storageBucket: "sherise-e05c3.firebasestorage.app",
  messagingSenderId: "931556629852",
  appId: "1:931556629852:web:c82cbc9284c172f79b7599",
  measurementId: "G-G1ZEZ3Q27X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
};