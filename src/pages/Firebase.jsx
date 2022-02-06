import firebase from "firebase/app";
 //firebase import
import "firebase/auth";
import "firebase/analytics";
import "firebase/firebase-firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCipoBqN81q5fYpjGJwmmRZ71Xmx1hCE64",
  authDomain: "notcha-bookse-8f064.firebaseapp.com",
  projectId: "notcha-bookse-8f064",
  storageBucket: "notcha-bookse-8f064.appspot.com",
  messagingSenderId: "727381700257",
  appId: "1:727381700257:web:bec1c484106077fa048ae0"
};

firebase.initializeApp(firebaseConfig); //func for config
