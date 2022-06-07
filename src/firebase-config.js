import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

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

/** auth*/
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
  window.location.reload(); // refreshes avatar
  return signOut(auth);
}

/** storage*/
const storage = getStorage();

export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + ".png");

  setLoading(true);
  await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, { photoURL });

  setLoading(false);
  alert(
    "Uploading complete. Switch between the home and profile tab's to see the changes."
  );
}
