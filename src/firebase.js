// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFm4izMRhk7601anlXnmpXEgR_w_wYiUA",
  authDomain: "quora-5553a.firebaseapp.com",
  projectId: "quora-5553a",
  storageBucket: "quora-5553a.appspot.com",
  messagingSenderId: "332528845203",
  appId: "1:332528845203:web:074f8c12a22c15c71ce866",
  measurementId: "G-YRR7V06N1D"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);


export { auth, provider };
export default db;
