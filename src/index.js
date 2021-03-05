import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsfDQ5yFg4wuFodPdPW9Iv-FdUdTY5opo",
  authDomain: "crudproject-greg-lim.firebaseapp.com",
  projectId: "crudproject-greg-lim",
  storageBucket: "crudproject-greg-lim.appspot.com",
  messagingSenderId: "530839940830",
  appId: "1:530839940830:web:ffbbe962d189201d329c4f",
  measurementId: "G-600LKCTS1K"
};

firebase.default.initializeApp(firebaseConfig); 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
