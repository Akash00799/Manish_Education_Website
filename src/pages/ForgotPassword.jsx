import React, { useCallback } from "react";
import "../styles/SignUpIn.css";
import { useNavigate } from "react-router-dom";
import { preventDefault } from "../utils/formUtils";
import CustomButton from "../components/customButton";
import InputField from "../components/InputField";

const ForgotPassword = React.memo(() => {
  const navigate = useNavigate();

  const handleNextClick = useCallback(() => {
    navigate("/verify-otp");
  }, [navigate]);

  return (
    <div className="containerForgotPassword">
      <div className="forgotPassword">
        <form onSubmit={preventDefault}>
          <h1>Forgot Password</h1>
          <span>
            Forgot your password? No worries! Enter your email address to reset
            it.
          </span>
          <InputField type="number" placeholder="Phone Number" />

          <CustomButton onClick={handleNextClick}>Next</CustomButton>
        </form>
      </div>
    </div>
  );
});

export default ForgotPassword;
