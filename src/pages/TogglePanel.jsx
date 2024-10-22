import React from "react";
import CustomButton from "../components/customButton";
import styles from "../styles/TogglePannel.module.css";

const TogglePanel = React.memo(({ onSignIn, onSignUp }) => {
  return (
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1 className={styles.Heading}>Welcome Back!</h1>
          <p>
            Enter your personal details to use all of our budget-friendly
            education courses.
          </p>
          <CustomButton className="hidden" onClick={onSignIn}>
            Sign In
          </CustomButton>
        </div>
        <div className="toggle-panel toggle-right">
          <h1 className={styles.Heading}>Hello, Students!</h1>
          <p>
            Register with your personal details to use all of our
            budget-friendly education courses.
          </p>
          <CustomButton className="hidden" onClick={onSignUp}>
            Sign Up
          </CustomButton>
        </div>
      </div>
    </div>
  );
});

export default TogglePanel;
