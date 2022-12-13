import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC21LAgPxmC78QwFyJWhslJsKFLmZ55GBY",
  authDomain: "average-joe-game.firebaseapp.com",
  projectId: "average-joe-game",
  storageBucket: "average-joe-game.appspot.com",
  messagingSenderId: "1056056391046",
  appId: "1:1056056391046:web:bd591472c262019a17e807"
};

const firebaseApp = initializeApp(firebaseConfig);

export {firebaseApp};