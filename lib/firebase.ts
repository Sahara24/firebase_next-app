import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB96GQ_FmuSYD1HwpA5TB47qC7S1BPmioY",
  authDomain: "first1-firebase.firebaseapp.com",
  projectId: "first1-firebase",
  storageBucket: "first1-firebase.appspot.com",
  messagingSenderId: "346515546436",
  appId: "1:346515546436:web:8e18541b922aa5ff0cb711",
  measurementId: "G-LW57Z1V32X",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

export const googleAuthProvider = new GoogleAuthProvider();
