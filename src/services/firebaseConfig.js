import * as firebase from "firebase";
import "@firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCa_5dfUAkq03mHTKZvPEXLr6EFJjAVEts",
  authDomain: "mathapp-fafc8.firebaseapp.com",
  projectId: "mathapp-fafc8",
  storageBucket: "mathapp-fafc8.appspot.com",
  messagingSenderId: "60841090991",
  appId: "1:60841090991:web:31948efb728d6fb90f995a",
  measurementId: "G-XZXGWLPR8G",
};
// if user has already opened app atleasonce connect with FIREBASE
if (firebase.apps.length > 0 === false) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
