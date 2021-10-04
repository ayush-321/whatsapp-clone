import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHjHxT773CFW2XVGZYzHST76-QCfi3kn8",
  authDomain: "whatsapp-clone-df525.firebaseapp.com",
  projectId: "whatsapp-clone-df525",
  storageBucket: "whatsapp-clone-df525.appspot.com",
  messagingSenderId: "751771072374",
  appId: "1:751771072374:web:9b46aa4fded86969832c57",
  measurementId: "G-P3QEWFSPEC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
