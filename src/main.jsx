import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrcc2t5wg3xJEagSXbOmbrM1OUzEtjDws",
  authDomain: "paginanitro.firebaseapp.com",
  projectId: "paginanitro",
  storageBucket: "paginanitro.appspot.com",
  messagingSenderId: "224938482209",
  appId: "1:224938482209:web:f5e950bdb723ba3101e160",
  measurementId: "G-GBXLNK2CVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
