// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgWc2tohDXSDwSNWH1TUJdCxF9KvyNgvw",
  authDomain: "librarium-1f6d0.firebaseapp.com",
  projectId: "librarium-1f6d0",
  storageBucket: "librarium-1f6d0.firebasestorage.app",
  messagingSenderId: "1059594357565",
  appId: "1:1059594357565:web:d4f2b60d4dbc89d2c39354"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)