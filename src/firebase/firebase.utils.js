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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            });
        } catch(error) {
            console.log('Error creating user: ', error.message);
        }
    }

    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });

    return transformedCollection.reduce((acc, collectionObj) => {
        acc[collectionObj.title.toLowerCase()] = collectionObj;
        return acc;
    }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
