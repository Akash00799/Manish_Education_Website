import { useState, useRef, useCallback } from "react";
import { updateOtpValue, handleBackSpace } from "../utils/formUtils";

export const useOtp = (initialOtp = ["", "", "", ""]) => {
  const [otp, setOtp] = useState(initialOtp);
  const inputsRef = useRef([]);

  const handleChange = useCallback(
    (e, index) => {
      updateOtpValue(otp, e.target.value, index, setOtp, inputsRef);
    },
    [otp]
  );

  const handleKeyDown = useCallback(
    (e, index) => {
      if (e.key === "Backspace") {
        handleBackSpace(otp, index, setOtp, inputsRef);
      }
    },
    [otp]
  );

  return {
    otp,
    inputsRef,
    handleChange,
    handleKeyDown,
  };
};
