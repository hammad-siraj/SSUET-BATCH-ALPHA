import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDejBkg-CUpx67tFr43rMg8WwhzsZrI_6Y",
    authDomain: "todo-app-99e32.firebaseapp.com",
    databaseURL: "https://todo-app-99e32.firebaseio.com",
    projectId: "todo-app-99e32",
    storageBucket: "",
    messagingSenderId: "276428454275",
    appId: "1:276428454275:web:ceba03dc1d240525519eb6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 export const db =firebase.database().ref('todos'); 