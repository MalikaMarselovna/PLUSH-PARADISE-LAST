// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuBh9XMXMErtL4-grh48iiLaJC8yxIiY0",
  authDomain: "login-b7cdd.firebaseapp.com",
  projectId: "login-b7cdd",
  storageBucket: "login-b7cdd.appspot.com",
  messagingSenderId: "721111403561",
  appId: "1:721111403561:web:18780e1437000f7cf5a038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);