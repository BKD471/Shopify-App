import React, { useEffect } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
//import { getRedirectResult } from "firebase/auth";
import "./authentication.styles.scss";

const Authentication = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) createUserDocumentFromAuth(response.user);
  // }, []);

  return (
    <div className="authentication-container">
      <SignInForm />
      {/* <button onClick={() => logGoogleUser()}>
        Sign In with Google Pop Up
      </button> */}

      <SignUpForm />
      {/* <button onClick={() => signInWithGoogleRedirect()}>
        Sign In with Google Redirect
      </button> */}
    </div>
  );
};

export default Authentication;
