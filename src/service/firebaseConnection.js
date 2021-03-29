import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB_K40MGIqJDvAPnTOUFHIIzlcle0ra_S4",
  authDomain: "sistema-764b2.firebaseapp.com",
  projectId: "sistema-764b2",
  storageBucket: "sistema-764b2.appspot.com",
  messagingSenderId: "425315818761",
  appId: "1:425315818761:web:d76ba49ce41a0ff89e07d8",
  measurementId: "G-V7SEMXKQB5"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;