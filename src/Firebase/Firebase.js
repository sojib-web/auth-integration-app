// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcXpcW2PG951thtxGtT6OxYB0hGbXGyWQ",
  authDomain: "auth-integration-9d034.firebaseapp.com",
  projectId: "auth-integration-9d034",
  storageBucket: "auth-integration-9d034.firebasestorage.app",
  messagingSenderId: "398016520294",
  appId: "1:398016520294:web:18d975972043f820074da7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
