import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBjXcDHlOo90X5iBXc8udv9oCZTxWRlPAk",
    authDomain: "react--auth-f1a25.firebaseapp.com",
    projectId: "react--auth-f1a25",
    storageBucket: "react--auth-f1a25.appspot.com",
    messagingSenderId: "627008504533",
    appId: "1:627008504533:web:1142cb324d2340e7c0185c"
  };
  

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();