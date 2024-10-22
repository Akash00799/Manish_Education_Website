export const preventDefault = (e) => e.preventDefault();

export const isValidOtp = (otp) => otp.every((char) => /^[0-9]$/.test(char));

export const moveToNextInput = (inputsRef, currentIndex) => {
  if (currentIndex < inputsRef.current.length - 1) {
    inputsRef.current[currentIndex + 1].focus();
  }
};

export const moveToPreviousInput = (inputsRef, currentIndex) => {
  if (currentIndex > 0) {
    inputsRef.current[currentIndex - 1].focus();
  }
};

export const updateOtpValue = (otp, value, index, setOtp, inputsRef) => {
  if (/^[0-9]$/.test(value)) {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    moveToNextInput(inputsRef, index);
  }
};

export const handleBackSpace = (otp, index, setOtp, inputsRef) => {
  const newOtp = [...otp];

  if (newOtp[index]) {
    newOtp[index] = "";
    setOtp(newOtp);
  } else {
    moveToPreviousInput(inputsRef, index);
    newOtp[index - 1] = "";
    setOtp(newOtp);
  }
};
