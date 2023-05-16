import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/compat/firestore";

import "firebase/compat/storage";

//메신저용
import { getAuth } from "firebase/auth";

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
  apiKey: "AIzaSyAYV8YrdUjqD2HS8vmZJ_-KAEWMpjuOZng",
  authDomain: "project02-44a94.firebaseapp.com",
  projectId: "project02-44a94",
  storageBucket: "project02-44a94.appspot.com",
  messagingSenderId: "231391389225",
  appId: "1:231391389225:web:cd72aa1c6681a9090ede38"
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
