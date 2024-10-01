import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBFHLO8QwImr1p7YuwE1v8REHXlA-aMaG4",
  authDomain: "aroma-cake2009.firebaseapp.com",
  projectId: "aroma-cake2009",
  storageBucket: "aroma-cake2009.appspot.com",
  messagingSenderId: "489470592193",
  appId: "1:489470592193:web:d49f3ce9e33b0ff78f4040"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


export{db};