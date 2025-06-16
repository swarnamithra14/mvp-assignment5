// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8hPDciriqjlJMEYVsev4gw4l-HX_hOTA",
  authDomain: "mitti-mithra.firebaseapp.com",
  projectId: "mitti-mithra",
  storageBucket: "mitti-mithra.firebasestorage.app",
  messagingSenderId: "735418765597",
  appId: "1:735418765597:web:f5f564307cebc8ac9451f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
