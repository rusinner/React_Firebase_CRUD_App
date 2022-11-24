import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDn53mTNPQkO-cAfXfg9DIkDzkOy1_8UWs",
  authDomain: "react-crud-app-project.firebaseapp.com",
  projectId: "react-crud-app-project",
  storageBucket: "react-crud-app-project.appspot.com",
  messagingSenderId: "299316062831",
  appId: "1:299316062831:web:0b643b3aff166cee27bb9a",
  measurementId: "G-7W0F1MHZC2",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
