// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXlXo3YCl89m2pVYKl9Te55cBAG_QPpro",
  authDomain: "cyber-attack-6a11e.firebaseapp.com",
  projectId: "cyber-attack-6a11e",
  storageBucket: "cyber-attack-6a11e.appspot.com",
  messagingSenderId: "108161146518",
  appId: "1:108161146518:web:111fa7da380b5c777a6cb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
