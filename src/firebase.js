// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";

// Your app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCpy2hjbPy5XTHCaH8D7zw1HMteFSN_VWA",
    authDomain: "fir-auth-react-redux-9fa86.firebaseapp.com",
    projectId: "fir-auth-react-redux-9fa86",
    storageBucket: "fir-auth-react-redux-9fa86.appspot.com",
    messagingSenderId: "447624739341",
    appId: "1:447624739341:web:102dea81750cc42c4bb344",
    measurementId: "G-9T5K426J1P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Finally, export it to use it throughout your app
export default firebase;