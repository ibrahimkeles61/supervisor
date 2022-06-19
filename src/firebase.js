import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmjiOtCtZ77GUF_oFQp99CtXc7vW5t_NI",
  authDomain: "supervisor-16add.firebaseapp.com",
  projectId: "supervisor-16add",
  storageBucket: "supervisor-16add.appspot.com",
  messagingSenderId: "333428802698",
  appId: "1:333428802698:web:f13695f1cb70b84c631973",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
// const emailPasswordProvider = new firebase.auth.EmailAuthProvider();

export { auth, googleProvider };
