import * as firebase from "firebase";

const config = {
  apiKey: "keyhere",
  authDomain: "infohere.firebaseapp.com",
  databaseURL: "https://databaseName.firebaseio.com",
  projectId: "projectID",
  storageBucket: "storageBucket.appspot.com",
  messagingSenderId: "senderid"
};

firebase.initializeApp(config);

export const db = firebase.database();
export const storage = firebase.storage();
