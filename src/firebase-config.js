import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
