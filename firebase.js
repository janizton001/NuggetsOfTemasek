// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhaxCWjEiVedCuggQE3fd1ER7pVo1ttPY",
  authDomain: "nuggetsofnus.firebaseapp.com",
  projectId: "nuggetsofnus",
  storageBucket: "nuggetsofnus.appspot.com",
  messagingSenderId: "932849957300",
  appId: "1:932849957300:web:2876b4c0a5ddd0a59b5ae1"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
}

const auth = firebase.auth()

export { auth };

