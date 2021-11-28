import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRJn3K3Ny2Gr4D17ECEhnOWRDY6zt9iI4",
  authDomain: "shopproject-42038.firebaseapp.com",
  projectId: "shopproject-42038",
  storageBucket: "shopproject-42038.appspot.com",
  messagingSenderId: "863671062765",
  appId: "1:863671062765:web:d4829bd20150c6a1a33ce4",
  measurementId: "G-2JQW2EHLRM",
};

initializeApp(firebaseConfig);

export default getFirestore();
