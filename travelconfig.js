import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

export const firebaseConfig = {
    apiKey: "AIzaSyDjVanUt1avR9zh3jI2Kyld6nAdGtFLBr8",
    authDomain: "xperios-8dda8.firebaseapp.com",
    projectId: "xperios-8dda8",
    storageBucket: "xperios-8dda8.appspot.com",
    messagingSenderId: "507370985844",
    appId: "1:507370985844:web:9d8d33791d6b19bab2f421",
    measurementId: "G-HJCNG0WCZW",
    databaseURL: "https://xperios-traveldata.asia-southeast1.firebasedatabase.app/",
  };


  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  
  export { app, db }; 