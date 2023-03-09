import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBv0emDa3aAaOJo4d8BKTmqwSo8oR79Kz4",
  authDomain: "netflix-react-9e2bc.firebaseapp.com",
  projectId: "netflix-react-9e2bc",
  storageBucket: "netflix-react-9e2bc.appspot.com",
  messagingSenderId: "648316543487",
  appId: "1:648316543487:web:ced0ecd5cbcafd05fe07ca"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
