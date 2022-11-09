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

signUp.addEventListener('click', (e) => {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var TotalCredits = 5000;
    var eth = 0;
    var btc = 0;
    var bnb = 0;
    var doge = 0;
    var sol = 0;
    var ada = 0;
    var dt = Date();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            
            const user = userCredential.user;

            set(ref(database, 'All users in database/' + user.uid), {
                Email: email,
                TotalCredits: TotalCredits,
                DateRegistered:dt,
                Eth:eth,
                Btc:btc,
                Bnb:bnb,
                Doge:doge,
                Sol:sol,
                Ada:ada,
            })
            
            alert('user created!');
            window.location.href = "./Login.html";

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
            // ..
        });

});




// update1.addEventListener('click', (e) => {
//     // console.log("123");

//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             // User is signed in, see docs for a list of available properties
//             // https://firebase.google.com/docs/reference/js/firebase.User
//             const uid = user.uid;
//             console.log("123")
//             set(ref(database, 'All users in database/' + user.uid), {
//                 credits: "1423"
//             })
//             // ...
//         } else {
//             // User is signed out
//             // ...
//         }
//     });


// });


// console.log("123")
// set(ref(database, 'All users in database/'+ user.uid), {
//     credits: "1423"
// })






