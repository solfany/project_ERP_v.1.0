import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/compat/firestore";

import "firebase/compat/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//     apiKey: "AIzaSyDk0ppxmk7hZ1GkuY4UXe4apARYfbiL2ng",
//     authDomain: "project02-a2811.firebaseapp.com",
//     projectId: "project02-a2811",
//     storageBucket: "project02-a2811.appspot.com",
//     messagingSenderId: "381941299812",
//     appId: "1:381941299812:web:93ce569d8ca79300013d71",
//     measurementId: "G-Y1NY904B7V"
//   };


//---------------------------------------------
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};
// ---------------------------------------------
// Initialize Firebase

// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();

// ---------

export const dbService = getFirestore();
export const storageService = getStorage();

//메신저용

export const db = firebase.firestore();
