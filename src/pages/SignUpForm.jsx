import React from "react";
import { preventDefault } from "../utils/formUtils";
import CustomButton from "../components/customButton";
import SocialIcons from "../components/SocialIcons";
import InputField from "../components/InputField";


const SignUpForm = React.memo(() => {
  return (
    <div className="form-container sign-up">
      <form onSubmit={preventDefault}>
        <h1>Create Account</h1>
        <SocialIcons />
        <span>or use your email for registration</span>
        <InputField type="text" placeholder="Name" />
        <InputField type="email" placeholder="Email" />
        <InputField type="number" placeholder="Phone Number" />
        <InputField type="text" placeholder="Location" />
        <InputField type="password" placeholder="Password" />
        <InputField type="password" placeholder="Confirm Password" />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
});

export default SignUpForm;
