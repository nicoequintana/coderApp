// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1mLX-WdcTGRIPcNYDSE3_L8YhnlK5dNM",
  authDomain: "coderhouse-istore.firebaseapp.com",
  projectId: "coderhouse-istore",
  storageBucket: "coderhouse-istore.appspot.com",
  messagingSenderId: "878119684557",
  appId: "1:878119684557:web:77a9bdab48b765a8061c84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)