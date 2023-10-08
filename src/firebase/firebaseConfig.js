import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
  apiKey: "AIzaSyBhCpcrkB8r3JKMduNzIjxNSuyqf1dwzmw",
  authDomain: "moviesitedb2.firebaseapp.com",
  databaseURL: "https://moviesitedb2-default-rtdb.firebaseio.com",
  projectId: "moviesitedb2",
  storageBucket: "moviesitedb2.appspot.com",
  messagingSenderId: "545740535972",
  appId: "1:545740535972:web:9a060f17a0768274a2ce31",
  measurementId: "G-N89ND024RZ"
};
  
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}



