// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvncKNW2svosBcwMAn3G5O6-S2Ehjarzo",
  authDomain: "thejourneyoforgans-e953a.firebaseapp.com",
  projectId: "thejourneyoforgans-e953a",
  storageBucket: "thejourneyoforgans-e953a.appspot.com",
  messagingSenderId: "186632718455",
  appId: "1:186632718455:web:3f5c710e49a509e1739e72",
  measurementId: "G-2B79V09CJP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);