// src/firebase/authService.js
import { auth } from "./firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut as firebaseSignOut,
} from "firebase/auth";

export async function loginEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function signupEmail(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
   await signOut(auth);
     return result;
}

export async function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

export async function signOut() {
  return firebaseSignOut(auth);
}


export async function logout() {
  return await signOut(auth);
}