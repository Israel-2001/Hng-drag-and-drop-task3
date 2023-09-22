// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARMj4UjLSJax0NFwXNt8Ilmbxkjny_1YI",
  authDomain: "hng-drag-and-drop-task3.firebaseapp.com",
  projectId: "hng-drag-and-drop-task3",
  storageBucket: "hng-drag-and-drop-task3.appspot.com",
  messagingSenderId: "365226326418",
  appId: "1:365226326418:web:bb013cb437c4e50a6b694b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()