import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/customButton";
import { isValidOtp } from "../utils/formUtils";
import { useOtp } from "../hooks/useOtp";
import "../styles/SignUpIn.css";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const { otp, inputsRef, handleChange, handleKeyDown } = useOtp();

  const handleVerify = useCallback(() => {
    if (isValidOtp(otp)) {
      navigate("/change-password");
    } else {
      alert("Error");
    }
  }, [otp, navigate]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1vmax",
      }}
      className="containerForgotPassword"
    >
      <h1>Verify Email ID</h1>
      <span>Enter the OTP to verify your ID.</span>

      <div>
        {otp.map((data, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            value={data}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{
              width: "60px",
              height: "50px",
              textAlign: "center",
              marginRight: "8px",
              fontSize: "20px",
            }}
          />
        ))}
      </div>

      <CustomButton onClick={handleVerify}>Verify</CustomButton>
    </div>
  );
};

export default VerifyOtp;
