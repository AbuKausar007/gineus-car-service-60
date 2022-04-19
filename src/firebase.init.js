// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAngQTpZLth6VoBid6TE6fVNkEwlUf6RHY",
  authDomain: "genius-car-service-5817c.firebaseapp.com",
  projectId: "genius-car-service-5817c",
  storageBucket: "genius-car-service-5817c.appspot.com",
  messagingSenderId: "160238349202",
  appId: "1:160238349202:web:21dd0a77adb341bead2f4b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
