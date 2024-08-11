// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2o78XcNEwkgmBZQSyEN-t-k0DKODkAFs",
  authDomain: "ai-travel-planner-2b4f5.firebaseapp.com",
  projectId: "ai-travel-planner-2b4f5",
  storageBucket: "ai-travel-planner-2b4f5.appspot.com",
  messagingSenderId: "920292312594",
  appId: "1:920292312594:web:06027407ca642cb51e7acb",
  measurementId: "G-3MHQ48B56D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);