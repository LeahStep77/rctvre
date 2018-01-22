import * as firebase from "firebase";

const config = {
 apiKey: "AIzaSyDIQSnQP9mn5kbMAp2U6-HFjTDgTlYXmjw",
 authDomain: "formdatabasenew.firebaseapp.com",
databaseURL: "https://formdatabasenew.firebaseio.com",
projectId: "formdatabasenew",
storageBucket: "formdatabasenew.appspot.com",
messagingSenderId: "349969823981"
};

firebase.initializeApp(config);

export const db = firebase.database();
export const storage = firebase.storage();
