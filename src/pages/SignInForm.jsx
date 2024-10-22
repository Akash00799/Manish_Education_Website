import React from "react";
import { preventDefault } from "../utils/formUtils";
import CustomButton from "../components/customButton";
import SocialIcons from "../components/SocialIcons";
import InputField from "../components/InputField";


const SignInForm = React.memo(() => {
  return (
    <div className="form-container sign-in">
      <form onSubmit={preventDefault}>
        <h1>Sign In</h1>
        <SocialIcons />
        <span>or use your email for password</span>
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />
        <a href="/forgot-password">Forget Your Password?</a>
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
});

export default SignInForm;
