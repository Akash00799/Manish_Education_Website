import React from "react";
import styles from "../styles/ChatPage.module.css";

const ChatHeader = ({ title }) => {
  return (
    <div className={styles.chatHeader}>
      <h2>{title}</h2>
    </div>
  );
};

export default ChatHeader;
