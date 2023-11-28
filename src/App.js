import React, { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

function App() {
  const [ loggedIn, setLoggedIn ] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setLoggedIn(true);
        
      }).catch((error) => {
        // Handle Errors here.
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      setLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>React Google Auth</h1>
      {loggedIn ? (
        <>
          <p>Welcome, {auth.currentUser.displayName}!</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      )}
    </div>
  );
}

export default App;