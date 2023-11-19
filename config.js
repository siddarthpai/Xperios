import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDjVanUt1avR9zh3jI2Kyld6nAdGtFLBr8",
  authDomain: "xperios-8dda8.firebaseapp.com",
  projectId: "xperios-8dda8",
  storageBucket: "xperios-8dda8.appspot.com",
  messagingSenderId: "507370985844",
  appId: "1:507370985844:web:9d8d33791d6b19bab2f421",
  measurementId: "G-HJCNG0WCZW",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
