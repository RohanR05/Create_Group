// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxzkvtI28blyGG3O2tDkqbDzJUqMR6gBI",
  authDomain: "assignment-10-ca854.firebaseapp.com",
  projectId: "assignment-10-ca854",
  storageBucket: "assignment-10-ca854.firebasestorage.app",
  messagingSenderId: "1070053294329",
  appId: "1:1070053294329:web:2de6a88115eba3a1366228"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app); 