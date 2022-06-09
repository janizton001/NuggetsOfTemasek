// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCh5y8zQ7yM5wh9EOr5ganKkgqZ1fo2rvQ",
    authDomain: "nuggetsoftemasek-ad38e.firebaseapp.com",
    projectId: "nuggetsoftemasek-ad38e",
    storageBucket: "nuggetsoftemasek-ad38e.appspot.com",
    messagingSenderId: "479177543194",
    appId: "1:479177543194:web:6af25f69f159110ac6cba3"
  };

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

export const db = firebase.firestore()

export const auth = firebase.auth()

