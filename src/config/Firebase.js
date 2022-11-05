import firebase from 'firebase'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyCwnDw5WkDgflxceLXme3mlFyl9im0FFl4",
    authDomain: "ways-todo.firebaseapp.com",
    projectId: "ways-todo",
    storageBucket: "ways-todo.appspot.com",
    messagingSenderId: "162156113120",
    appId: "1:162156113120:web:941f7a8316870e979d7485"
})

const Firebase = firebase;
export default Firebase;