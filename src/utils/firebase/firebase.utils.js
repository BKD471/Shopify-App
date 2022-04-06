import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD73gNCPwNjTwTE1KytJqCFIBoQQDnI_Qg",
  authDomain: "crown-clothing-db-cbe28.firebaseapp.com",
  projectId: "crown-clothing-db-cbe28",
  storageBucket: "crown-clothing-db-cbe28.appspot.com",
  messagingSenderId: "718156648125",
  appId: "1:718156648125:web:e93c7919a59514172a71d4",
  measurementId: "G-8LNLW7J1G4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => {
  return signInWithPopup(auth, provider);
};
