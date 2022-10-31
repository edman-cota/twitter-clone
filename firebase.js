import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_5bZXXNFAFBohyY7JAiclyrA33H5Er9Y",
  authDomain: "twitter-clone-9eea5.firebaseapp.com",
  projectId: "twitter-clone-9eea5",
  storageBucket: "twitter-clone-9eea5.appspot.com",
  messagingSenderId: "151623908567",
  appId: "1:151623908567:web:2ad7bba266edf580cd0492",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
