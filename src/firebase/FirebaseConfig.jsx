// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFeb2DXJLIFTUnJLCQM0GHZU48qHTp4iQ",
  authDomain: "myapp-b6537.firebaseapp.com",
  projectId: "myapp-b6537",
  storageBucket: "myapp-b6537.appspot.com",
  messagingSenderId: "826915198979",
  appId: "1:826915198979:web:1970f39b5a4ce6f6055636",
  measurementId: "G-D6FSTR17KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const analytics = getAnalytics(app);

export {auth , fireDB}
