// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9Gmw0y6MoQ67xSQreHszDZ9a2xxRn1T0",
  authDomain: "lauchpathpro.firebaseapp.com",
  projectId: "lauchpathpro",
  storageBucket: "lauchpathpro.appspot.com",
  messagingSenderId: "149510485652",
  appId: "1:149510485652:web:61b32b218a16d86433e681",
  measurementId: "G-SE8LVZH4Y7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export {app, analytics, db, auth}