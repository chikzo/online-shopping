import Firebase from 'firebase';
import 'firebase/auth';
import'firebase/firestore';


 const firebaseConfig = {
   
    apiKey: "AIzaSyC4PoRMDA9Zsr8zCIccJW5A8bnjdnj20ts",
    authDomain: "shopping-app-fba91.firebaseapp.com",
    projectId: "shopping-app-fba91",
    storageBucket: "shopping-app-fba91.appspot.com",
    messagingSenderId: "715078067648",
    appId: "1:715078067648:web:bb247b80fad126c8d15425"
  };
  // Initialize Firebase
  
  const firebase = Firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth= firebase.auth();


  export{firebase, db , auth} 