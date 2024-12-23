// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP4iOWYG8bM3MwxarCcEveZAVFNApl8N0",
  authDomain: "otp-verification-c89d8.firebaseapp.com",
  projectId: "otp-verification-c89d8",
  storageBucket: "otp-verification-c89d8.firebasestorage.app",
  messagingSenderId: "367580873664",
  appId: "1:367580873664:web:a8a74239d8146158d2fe25",
  measurementId: "G-LWGNLDLWG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
