import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD59Ptxtoir-rLlmQAvPpAzYXqLbVzIb2w",
  authDomain: "clone-5eed5.firebaseapp.com",
  databaseURL: "https://clone-5eed5.firebaseio.com",
  projectId: "clone-5eed5",
  storageBucket: "clone-5eed5.appspot.com",
  messagingSenderId: "78184691955",
  appId: "1:78184691955:web:61c4eed7ffa4738e3a5f86",
  measurementId: "G-Q4N905H3XG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
