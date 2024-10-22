import React from "react";

const customButton = React.memo(({ onClick, children, className, type }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
});

export default customButton;
