// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAYV8YrdUjqD2HS8vmZJ_-KAEWMpjuOZng',
  authDomain: 'project02-44a94.firebaseapp.com',
  projectId: 'project02-44a94',
  storageBucket: 'project02-44a94.appspot.com',
  messagingSenderId: '231391389225',
  appId: '1:231391389225:web:cd72aa1c6681a9090ede38',
};


// const db = firebase.firestore()
// Initialize Firebase

// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();

export const db = firebase.firestore()
 