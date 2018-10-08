import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyABHtTmiowwCYAzZCYb0pBxwZ6ztZiqrbA",
  authDomain: "proplan-218f9.firebaseapp.com",
  databaseURL: "https://proplan-218f9.firebaseio.com",
  projectId: "proplan-218f9",
  storageBucket: "",
  messagingSenderId: "963636552784"
};

firebase.initializeApp(config);

firebase.firestore().settings({
  timestampsInSnapshots: true
});

const database = firebase.firestore();

export { firebase, database as default };
