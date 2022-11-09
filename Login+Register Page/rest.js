// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoTL-pNgBgcnxxzummtiHioI-jE3WhYcA",
    authDomain: "new-project-38d31.firebaseapp.com",
    databaseURL: "https://new-project-38d31-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "new-project-38d31",
    storageBucket: "new-project-38d31.appspot.com",
    messagingSenderId: "310061468981",
    appId: "1:310061468981:web:caa5c3a729b6abf499d07c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();