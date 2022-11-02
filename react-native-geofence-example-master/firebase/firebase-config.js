// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {getDatabase} from "firebase/database"
import {getStorage} from "firebase/storage"

import { getUniqueId } from 'react-native-device-info';
import dayjs from 'dayjs';
// import SignIn from "../src/pages/SignIn";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk3VjXikz-I_drlnCJ6oxV3GNikZWtuK8",
  authDomain: "parentgeofencing-5d5e8.firebaseapp.com",
  projectId: "parentgeofencing-5d5e8",
  storageBucket: "parentgeofencing-5d5e8.appspot.com",
  messagingSenderId: "716755841297",
  appId: "1:716755841297:web:31fa301719561d48a49cb0",
  measurementId: "G-CTWJG6P0RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); 
export const auth = getAuth(app);
export const db = getDatabase(app)
export const storage = getStorage(app)


// export const storeLocation = (id, location) => {
//   try {
//       const itemId = dayjs(location.timestamp).format('HHmmss')
//       firebase.database().ref(`tracking/${id}/${itemId}`).set({
//           id: `${id}_${itemId}`,
//           location
//       });
      
//       firebase.database().ref(`tracking/${id}/latest`).set({
//           id: `${id}_${itemId}`,
//           location
//       });
//   } catch (e) {
//       console.log('Permission denied')
//   }
// }

// const getId = () => Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)