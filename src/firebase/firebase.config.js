// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfKevkZ_oyYGO_QyIUiDJ65RGsrvLewe0",
    authDomain: "dragon-news-d53ef.firebaseapp.com",
    projectId: "dragon-news-d53ef",
    storageBucket: "dragon-news-d53ef.appspot.com",
    messagingSenderId: "427785102293",
    appId: "1:427785102293:web:07b67b87ba4f732ffe935c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;