import React from "react";
import MessageItem from "./MessageItem";
import styles from "../styles/ChatPage.module.css";

const MessageList = ({ messages }) => {
  return (
    <div className={styles.messageList}>
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          text={message.text}
          sender={message.sender}
          timestamp={message.timestamp}
        />
      ))}
    </div>
  );
};

export default MessageList;
