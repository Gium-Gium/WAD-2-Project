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
  document.getElementById('wallet').innerHTML = ' ' + data[uid].Bc
  document.getElementById('qty').innerHTML = ' ' + data[uid].Bnb
}

setTimeout(() => {
  addBuyEvent()
}, 1000);

setTimeout(() => {
  addSellEvent()
}, 1000);

function addBuyEvent() {
  buy.addEventListener('click', (d) => {
    var quantityBought = Number(document.getElementById('transactionqty').value)
    var balance = Number(document.getElementById('qty').textContent)
    var price = document.getElementById('price').textContent
    var totalCost = quantityBought * Number(price)
    var tv = Number(document.getElementById('wallet').textContent) - totalCost
    tv = tv.toFixed(2)
    if (tv >= 0) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          var totalbnb = quantityBought + balance
          var totalValue = totalbnb * price + tv
          update(ref(db, 'All users in database/' + user.uid), {
            Bnb: totalbnb,
            Bc: tv,
            Tv: totalValue
            // extract from another page
          })
          alert('Successfully Bought!')
          // ...
        } else {

        }
      });
    }
    else {
      alert("Not enough Bcs")
    }
  })
}


function addSellEvent() {
  sell.addEventListener('click', (e) => {
    var quantitySold = Number(document.getElementById('transactionqty').value)
    var balance = Number(document.getElementById('qty').textContent)
    var price = document.getElementById('price').textContent
    var totalCost = quantitySold * Number(price)
    var tv = Number(document.getElementById('wallet').textContent) + totalCost
    tv = tv.toFixed(2)
    // var coinValue = document.getElementById('coinName').textContent
    // var start = coinValue.indexOf('(')
    // var end = coinValue.indexOf(')')
    // var firstLetter = coinValue[start+1].toUpperCase()
    // var remaining = coinValue.substring(start+2,end).toLowerCase()
    // var symbol = firstLetter + remaining
    if (balance - quantitySold >= 0) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          var totalbnb = balance - quantitySold
          var totalValue = totalbnb * price + tv

          update(ref(db, 'All users in database/' + user.uid), {
            Bnb: totalbnb,
            Bc: tv,
            Tv: totalValue
            // extract from another page
          })
          alert("Successfully Sold!")
          // ...
        } else {

        }
      });
    }
    else {
      alert("Not enough quantity")
    }
  })
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