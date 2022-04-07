import React from "react";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign IN</h1>
      <button onClick={() => logGoogleUser()}>
        Sign In with Google Pop Up
      </button>
    </div>
  );
};

export default SignIn;
