import React from "react";
import styles from "../styles/ChatMessage.module.css";

const ChatMessage = ({ message }) => {
  return (
    <div className={styles.chatMessage}>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
