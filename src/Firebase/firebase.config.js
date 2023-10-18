// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWmius6tRZMnAnmxeAbmbBD_BFHtjrob0",
  authDomain: "the-auto-zone.firebaseapp.com",
  projectId: "the-auto-zone",
  storageBucket: "the-auto-zone.appspot.com",
  messagingSenderId: "999439180776",
  appId: "1:999439180776:web:3ff1b3b2e14aeffdcdfa5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;