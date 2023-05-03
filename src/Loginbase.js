import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAYV8YrdUjqD2HS8vmZJ_-KAEWMpjuOZng',
  authDomain: 'project02-44a94.firebaseapp.com',
  projectId: 'project02-44a94',
  storageBucket: 'project02-44a94.appspot.com',
  messagingSenderId: '231391389225',
  appId: '1:231391389225:web:cd72aa1c6681a9090ede38',
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();

// ---------
export const myBase = initializeApp(firebaseConfig);
export const dbService = getFirestore();
export const storageService = getStorage();
