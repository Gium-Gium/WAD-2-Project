// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getDatabase, ref, update, onValue } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, setPersistence, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdBlsdTCADW3JrpXohnMBPMa9TgmCnG0M",
  authDomain: "crypto-buddies-a8d5c.firebaseapp.com",
  databaseURL: "https://crypto-buddies-a8d5c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crypto-buddies-a8d5c",
  storageBucket: "crypto-buddies-a8d5c.appspot.com",
  messagingSenderId: "1058373755726",
  appId: "1:1058373755726:web:04f25e1ecc36c3213a341f"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const coinRef = ref(db, 'All users in database');
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    onValue(coinRef, (snapshot) => {
      const data = snapshot.val();
      getValues(data, uid)
    });
    // ...
  } else {
    // User is signed out
    // ...
  }
});

function getValues(data, uid) {
  console.log(data[uid])
  var user = data[uid]
  var dateRegistered = user.DateRegistered
  var start = dateRegistered.indexOf('GMT')
  var dateRegistered = dateRegistered.substring(0, start)
  console.log(dateRegistered)
  var ada = user.Ada
  var bc = user.Bc
  var bnb = user.Bnb
  var btc = user.Btc
  var doge = user.Doge
  var eth = user.Eth
  var sol = user.Sol
  var tv = user.Tv
  var email = user.Email

  document.getElementById('email').innerHTML = 'Email: ' + email
  document.getElementById('registered').innerHTML = 'Last Registered: ' + dateRegistered
  document.getElementById('ADAquantity').innerHTML = ada
  document.getElementById('BNBquantity').innerHTML = bnb
  document.getElementById('BTCquantity').innerHTML = btc
  document.getElementById('DOGEquantity').innerHTML = doge
  document.getElementById('ETHquantity').innerHTML = eth
  document.getElementById('SOLquantity').innerHTML = sol
  document.getElementById('BCquantity').innerHTML = bc
}

setTimeout(() => {
  addListener()
}, 1000);

function addListener(){
  logout.addEventListener('click', (f) => {
    //record before signing off
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        update(ref(db, 'Users in the system/' + user.uid), {
          LoginStatus: "Logged Off",
          LoginTime: "NIL"
        })
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  
    signOut(auth).then(() => {
      // Sign-out successful.
      setTimeout(() => {
        alert("Signed out!")
        window.location.href = "../Login+Register Page/Login.html";
    }, 1000);
    }).catch((error) => {
      // An error happened.
    });
  
  });
}