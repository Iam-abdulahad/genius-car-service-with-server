// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAekDdUUdMK_Dox8DzwO-zyWo3KR2TTc5s",
  authDomain: "genius-car-a5993.firebaseapp.com",
  projectId: "genius-car-a5993",
  storageBucket: "genius-car-a5993.appspot.com",
  messagingSenderId: "98590524262",
  appId: "1:98590524262:web:2b65307469ce1042bf3ea7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;