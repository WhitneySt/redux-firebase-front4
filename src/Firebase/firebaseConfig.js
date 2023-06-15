// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZQ4MxRvP3EW-GdqPqc-7IB2zMc9r6k-Q",
  authDomain: "redux-firebase-front4.firebaseapp.com",
  projectId: "redux-firebase-front4",
  storageBucket: "redux-firebase-front4.appspot.com",
  messagingSenderId: "861762051105",
  appId: "1:861762051105:web:1ebf9abb87cdfdc1299760",
  measurementId: "G-MDD5WNHWH8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);
