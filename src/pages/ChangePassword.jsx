import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignUpIn.css";
import { preventDefault } from "../utils/formUtils";
import CustomButton from "../components/customButton";
import InputField from "../components/InputField";

const ChangePassword = React.memo(() => {
  const navigate = useNavigate();

  const handleNextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="containerForgotPassword">
      <div className="changePassword">
        <form onSubmit={preventDefault}>
          <h1>Change Password</h1>
          <span>Update your password to keep your account secure</span>
          <InputField type="password" placeholder="Enter new password" />
          <InputField type="password" placeholder="Enter confirm password" />
          <CustomButton onClick={handleNextClick}>Next</CustomButton>
        </form>
      </div>
    </div>
  );
});

export default ChangePassword;
