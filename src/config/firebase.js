// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgGNUHipWQ9rONW2ZjIWL2Dpd5LK4aBhk",
  authDomain: "aroma-cake.firebaseapp.com",
  projectId: "aroma-cake",
  storageBucket: "aroma-cake.appspot.com",
  messagingSenderId: "398068025426",
  appId: "1:398068025426:web:76af31eac7dc9f5d05b78b",
  measurementId: "G-XGJ903HJ27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);