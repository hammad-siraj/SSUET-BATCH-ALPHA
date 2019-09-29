import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAlIH-yxhNvYv2gRszqV2tRyx-b7Txz0bQ",
    authDomain: "authentication-9113a.firebaseapp.com",
    databaseURL: "https://authentication-9113a.firebaseio.com",
    projectId: "authentication-9113a",
    storageBucket: "",
    messagingSenderId: "973343868281",
    appId: "1:973343868281:web:1c5f057baee6919e761ba8",
    measurementId: "G-BGXV5GZVZT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
