// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoESapBHb9w_CEbsgf1MQ9jeIK5E_o6sM",
  authDomain: "shoppers-28913.firebaseapp.com",
  projectId: "shoppers-28913",
  storageBucket: "shoppers-28913.appspot.com",
  messagingSenderId: "1045191242438",
  appId: "1:1045191242438:web:a2a09cc77590a1363d5dc7",
  measurementId: "G-KWN72QZFK5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);