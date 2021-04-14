import firebase from 'firebase'
  var firebaseConfig = {
    apiKey: "AIzaSyDuWpEF7Fz-T_-Ckn0T9tPps2yDFPRN1Zs",
    authDomain: "chichi-54a90.firebaseapp.com",
    projectId: "chichi-54a90",
    storageBucket: "chichi-54a90.appspot.com",
    messagingSenderId: "540626899550",
    appId: "1:540626899550:web:d2be9afb99570810c1dacf",
    measurementId: "G-YF7ZBKVFS4"
  };
  
firebase.initializeApp(firebaseConfig);
const dbfirebase=firebase.firestore();

export default dbfirebase;