import React from "react";
import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    console.log(response);
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
