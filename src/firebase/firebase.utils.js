import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
