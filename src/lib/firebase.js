import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNFYHuWjFFBrZsMSmET-Lf20YJOLIORWQ",
  authDomain: "reddit-clone-5dd98.firebaseapp.com",
  projectId: "reddit-clone-5dd98",
  storageBucket: "reddit-clone-5dd98.appspot.com",
  messagingSenderId: "865075373624",
  appId: "1:865075373624:web:9abaf024fc4914d87968cd",
  measurementId: "G-C7NSPKBTT7",
};

const initFirebase = firebase.initializeApp(firebaseConfig);
const db = initFirebase.firestore();

export default db;
