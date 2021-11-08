import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
 import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyC-jQhaNWMqRXZ2vRm0pXFhr8e1PnnxNfA",
    authDomain: "crwn-db-58610.firebaseapp.com",
    projectId: "crwn-db-58610",
    storageBucket: "crwn-db-58610.appspot.com",
    messagingSenderId: "371652597939",
    appId: "1:371652597939:web:7a58d805f7d150bf8c38c6",
    measurementId: "G-SLHTJ2S5WP"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
