import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/analytics'


// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlRXZynqmwFxtDPe0sWBDkCEcoTmpj50g",
    authDomain: "testlogin-326c4.firebaseapp.com",
    projectId: "testlogin-326c4",
    storageBucket: "testlogin-326c4.appspot.com",
    messagingSenderId: "45358315598",
    appId: "1:45358315598:web:6c852cd44ee2e9cb706b1f",
    measurementId: "G-VB8PQBPTJD"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const analytics = getAnalytics(app);

const auth = firebase.auth()
const db = firebase.firestore()
export { auth, db }
export default firebase