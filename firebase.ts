// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnApqATxzVs1NFRzsRC0on8OdEKiCodm8",
    authDomain: "trivia-with-sam.firebaseapp.com",
    projectId: "trivia-with-sam",
    storageBucket: "trivia-with-sam.appspot.com",
    messagingSenderId: "1076402362075",
    appId: "1:1076402362075:web:6b9692c210e0a9caec1efe",
    measurementId: "G-YY8CZN86Z0"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }