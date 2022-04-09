import React, { useEffect } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopUp,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) createUserDocumentFromAuth(response.user);
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign IN</h1>
      <button onClick={() => logGoogleUser()}>
        Sign In with Google Pop Up
      </button>
      <SignUpForm />
      {/* <button onClick={() => signInWithGoogleRedirect()}>
        Sign In with Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
