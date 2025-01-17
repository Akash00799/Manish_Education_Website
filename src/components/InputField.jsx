import React from "react";

const InputField = React.memo(({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} />;
});

export default InputField;
