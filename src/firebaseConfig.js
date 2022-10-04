import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1mLX-WdcTGRIPcNYDSE3_L8YhnlK5dNM",
  authDomain: "coderhouse-istore.firebaseapp.com",
  projectId: "coderhouse-istore",
  storageBucket: "coderhouse-istore.appspot.com",
  messagingSenderId: "878119684557",
  appId: "1:878119684557:web:77a9bdab48b765a8061c84"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)