import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_j7yefc5tX7Dor1FHuJdswiIYJ1UbYfU",
  authDomain: "newshopproject-da97b.firebaseapp.com",
  projectId: "newshopproject-da97b",
  storageBucket: "newshopproject-da97b.appspot.com",
  messagingSenderId: "607309279287",
  appId: "1:607309279287:web:6aeee8ced61247971c4fb2",
  measurementId: "G-F12RDTHC71",
};

initializeApp(firebaseConfig);

export default getFirestore();
