// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT3QPhNODR_4lZ4CDQDeum_5CwnKqNDX8",
  authDomain: "chefscorner-101.firebaseapp.com",
  projectId: "chefscorner-101",
  storageBucket: "chefscorner-101.appspot.com",
  messagingSenderId: "1093147295418",
  appId: "1:1093147295418:web:78019f66dac70e9ede8c83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;