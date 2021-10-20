import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2YMvkvZaBSnPX1Bw7kwE8hqxt6oCRS3I",
  authDomain: "shopproject-f46e0.firebaseapp.com",
  databaseURL: "https://shopproject-f46e0-default-rtdb.firebaseio.com",
  projectId: "shopproject-f46e0",
  storageBucket: "shopproject-f46e0.appspot.com",
  messagingSenderId: "379022920527",
  appId: "1:379022920527:web:bedbf08a88e198ef5f533a",
  measurementId: "G-Y1L7N8PCXG",
};

initializeApp(firebaseConfig);

export default getFirestore();
