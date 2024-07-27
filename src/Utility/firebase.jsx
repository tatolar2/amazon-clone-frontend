// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZc9cMte6ckPEuyd2aa95wJjgfcll5y4o",
  authDomain: "clone-559ec.firebaseapp.com",
  projectId: "clone-559ec",
  storageBucket: "clone-559ec.appspot.com",
  messagingSenderId: "1073767124810",
  appId: "1:1073767124810:web:0d152cce62ce7f136c3bb3",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();








// //optinal firebase configration

// Import the functions you need from the SDKs you need

// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore"; 
// import "firebase/compat/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBZc9cMte6ckPEuyd2aa95wJjgfcll5y4o",
//   authDomain: "clone-559ec.firebaseapp.com",
//   projectId: "clone-559ec",
//   storageBucket: "clone-559ec.appspot.com",
//   messagingSenderId: "1073767124810",
//   appId: "1:1073767124810:web:0d152cce62ce7f136c3bb3",
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// // Initialize Firestore
// const db = firebase.firestore();

// // Initialize Auth
// const auth = firebase.auth();

// export { db, auth };
