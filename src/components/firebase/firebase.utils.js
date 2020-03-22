// This import loads the firebase namespace along with all its type information.
import firebase from "firebase/app";

// These imports load individual services into the firebase namespace.
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCIlJfuL1VeBgpIvEl0PBT44XPu99BQF34",
  authDomain: "crwn-db-a34ff.firebaseapp.com",
  databaseURL: "https://crwn-db-a34ff.firebaseio.com",
  projectId: "crwn-db-a34ff",
  storageBucket: "crwn-db-a34ff.appspot.com",
  messagingSenderId: "1037702228160",
  appId: "1:1037702228160:web:bb7d46b286e4dd9708a525",
  measurementId: "G-EPWR5RWE47"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
