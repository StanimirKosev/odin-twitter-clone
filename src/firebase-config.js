import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState, useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBXTulGONMy8lfjWvgSbbSTp_Xim7Hc0C8",
  authDomain: "twitter-clone-e522c.firebaseapp.com",
  projectId: "twitter-clone-e522c",
  storageBucket: "twitter-clone-e522c.appspot.com",
  messagingSenderId: "442898171006",
  appId: "1:442898171006:web:2ed440703e1c241be1442f",
};

initializeApp(firebaseConfig);

export default getFirestore();

const auth = getAuth();

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function logIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// custom hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}

export function logOut() {
  return signOut(auth);
}
