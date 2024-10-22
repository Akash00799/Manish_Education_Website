import React, { useState, useCallback } from "react";
import SignInForm from "../pages/SignInForm";
import SignUpForm from "../pages/SignUpForm";
import TogglePanel from "../pages/TogglePanel";
import "../styles/SignUpIn.css";

const SignUpIn = React.memo(() => {
  const [isActive, setIsActive] = useState(false);

  const handleSignIn = useCallback(() => {
    if (isActive) setIsActive(false);
  }, [isActive]);

  const handleSignUp = useCallback(() => {
    if (!isActive) setIsActive(true);
  }, [isActive]);

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <SignUpForm />
      <SignInForm />
      <TogglePanel onSignIn={handleSignIn} onSignUp={handleSignUp} />
    </div>
  );
});

export default SignUpIn;
