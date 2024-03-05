// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a4748.firebaseapp.com",
  projectId: "mern-blog-a4748",
  storageBucket: "mern-blog-a4748.appspot.com",
  messagingSenderId: "693928145782",
  appId: "1:693928145782:web:7ec7c799f181cdc4cfc057"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);