import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Import the functions you need from the SDKs you need
// import {initializeApp}  from 'firebase/app';
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2c8QPQLb-7OG_fOEdxRUIe72aDxcN544",
  authDomain: "reacttutsangelplan.firebaseapp.com",
  projectId: "reacttutsangelplan",
  storageBucket: "reacttutsangelplan.appspot.com",
  messagingSenderId: "69654402334",
  appId: "1:69654402334:web:2f1bfad920ee5de48b650f",
  measurementId: "G-G1P9RWN26Q"
};

// Initialize Firebase
const firebaseApp =firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp