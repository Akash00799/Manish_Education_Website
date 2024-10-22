import React from "react";
import styles from "../styles/ChatPage.module.css";

const MessageItem = ({ text, sender, timestamp }) => {
  const isSent = sender === "me";

  return (
    <div
      className={`${styles.messageItem} ${
        isSent ? styles.sent : styles.received
      }`}
    >
      <div className={styles.messageText}>
        <p>{text}</p>
      </div>
      <span className={styles.timestamp}>{timestamp}</span>
    </div>
  );
};

export default MessageItem;
