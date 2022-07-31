import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAE2AaJZ5gFtr-YYrJ9VoBxoshN2bG26zw",
    authDomain: "login-aa810.firebaseapp.com",
    projectId: "login-aa810",
    storageBucket: "login-aa810.appspot.com",
    messagingSenderId: "690339905864",
    appId: "1:690339905864:web:50b40563c51b2ce5e6737d"
  };
  
const fire = firebase.initializeApp(firebaseConfig);

export default fire;