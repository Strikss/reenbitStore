import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBpG4MHOqzVbyDdrF8kf4QqQ_U1wciGnk",
  authDomain: "shopproject-2058d.firebaseapp.com",
  projectId: "shopproject-2058d",
  storageBucket: "shopproject-2058d.appspot.com",
  messagingSenderId: "828530404628",
  appId: "1:828530404628:web:fd8b12494e77fc6fc3a601",
  measurementId: "G-HMPGCNYYR5"
};

initializeApp(firebaseConfig);

export default getFirestore();
