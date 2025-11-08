// src/config/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzirql2FJrbm66pfjt_pcp1f92mu7HQTQ",
  authDomain: "xay-dung-cb108.firebaseapp.com",
  projectId: "xay-dung-cb108",
  storageBucket: "xay-dung-cb108.firebasestorage.app",
  messagingSenderId: "439268776559",
  appId: "1:439268776559:web:73acb28ff25223d7ad0b9a",
  measurementId: "G-YELGJWR7DN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, storage, auth, db };