// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getDatabase, ref, update, } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut ,setPersistence,browserSessionPersistence} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
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

signIn.addEventListener('click', (e) => {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var LoginStatus = "Logged in"

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      var dt = Date();
      update(ref(database, 'Users in the system/' + user.uid), {
        LoginTime: dt,
        LoginStatus: LoginStatus,
        email: email
      })

      alert('User logged in!');
      // window.location.href = 'http://www.google.com';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });

});



update1.addEventListener('click', (e) => {
  // console.log("123");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      alert("Updated credits")
      update(ref(database, 'All users in database/' + user.uid), {
        TotalCredits: "updated credits"
        // extract from another page
      })
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
});


update2.addEventListener('click', (e) => {


  //record before signing off
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      update(ref(database, 'Users in the system/' + user.uid), {
        LoginStatus:"Logged Off",
        LoginTime:"NIL"
      })
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  signOut(auth).then(() => {
    // Sign-out successful.
    alert("signed out")
  }).catch((error) => {
    // An error happened.
  });

});


update3.addEventListener('click', (e) => {
  // console.log("123");
  var eth = document.getElementById().value;
  var btc = 0;
  var bnb = 0;
  var doge = 0;
  var sol = 0;
  var ada = 0;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      alert("Coins Updated")
      update(ref(database, 'All users in database/' + user.uid), {
        Eth: eth,
        Btc: btc,
        Bnb: bnb,
        Doge: doge,
        Sol: sol,
        Ada: ada,

        // extract from another page
      })
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
});



// var LoginStatus = "Logged Out";
// var LoginTime = "NIL";
// update(ref(database, 'Users in the system/' + user.uid), {
//   LoginTime: LoginTime,
//   LoginStatus: LoginStatus,
// })