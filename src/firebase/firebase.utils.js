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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth){
        return;
    }
   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const userSnapshot = await userRef.get();
   if (!userSnapshot.exists){
       const {displayName, email} = userAuth;
       const createdAt = new Date();

       try{
           await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
           })
       }catch(error){
            console.log("Error creating user", error.message);
       }
   }

   return userRef;

}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
