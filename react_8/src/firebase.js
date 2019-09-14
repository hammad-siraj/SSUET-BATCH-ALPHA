import firebase from 'firebase'

export var firebaseConfig = {
    apiKey: "AIzaSyA0GHXL7pw7u-F09dLb9f1SPbLjs5E_BPw",
    authDomain: "myfirstfirebase-8f526.firebaseapp.com",
    databaseURL: "https://myfirstfirebase-8f526.firebaseio.com",
    projectId: "myfirstfirebase-8f526",
    storageBucket: "",
    messagingSenderId: "512108129863",
    appId: "1:512108129863:web:49fb78699dcd90f637cb62"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.database().ref('articles');