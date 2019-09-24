import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA98_wMihlWB92EJAJHaE5pNT8U7-EL8oo",
    authDomain: "crwn-db-a710f.firebaseapp.com",
    databaseURL: "https://crwn-db-a710f.firebaseio.com",
    projectId: "crwn-db-a710f",
    storageBucket: "",
    messagingSenderId: "896956558230",
    appId: "1:896956558230:web:26a508ec4fc277b7b50bb7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
