import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyB-5WlAOJZsTYvgGgLYYVKMYQmxMWt2U_8",
    authDomain: "nachan-ca361.firebaseapp.com",
    projectId: "nachan-ca361",
    storageBucket: "nachan-ca361.appspot.com",
    messagingSenderId: "621311460709",
    appId: "1:621311460709:web:452e61e2aec93cbe464d8c",
    measurementId: "G-RBBF9FF7GH"
};
export const init = () => {
    firebase.initializeApp(config);
}