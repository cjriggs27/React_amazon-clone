import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYq7RGkJGHaIQgzLvBdvOZg1_KlRCiAKQ",
  authDomain: "clone-12157.firebaseapp.com",
  databaseURL: "https://clone-12157.firebaseio.com",
  projectId: "clone-12157",
  storageBucket: "clone-12157.appspot.com",
  messagingSenderId: "365444640439",
  appId: "1:365444640439:web:ffb469273890c9acb92732",
  measurementId: "G-4TFW0JZ6ZC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
