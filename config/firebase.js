// Import the functions you need from the SDKs you need
require('dotenv').config(); // Load environment variables from .env file
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from '@firebase/auth';
import { getFirestore } from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDNZyu7_hcKdeeLsNbzIa_SGW3qOQe9Nec',
  authDomain: 'monterya-firestore.firebaseapp.com',
  projectId: 'monterya-firestore',
  storageBucket: 'monterya-firestore.appspot.com',
  // storageBucket: "monterya-firestore.appspot.com",
  messagingSenderId: '817830792193',
  appId: '1:817830792193:web:aa7ad8beb876f4b9b3c400',
  measurementId: 'G-XWYLZ68WVP',
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
// Get Firebase Auth instance
const auth = getAuth();
// Get Firestore instance
const db = getFirestore();
const storage = getStorage(app, 'gs://monterya-firestore.appspot.com');
// Get FIrebase Storage
export { app, auth, db, storage };
