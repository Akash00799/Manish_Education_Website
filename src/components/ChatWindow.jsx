import React from "react";
import styles from "../styles/ChatApp.module.css";

const ChatWindow = ({ chat }) => {
  const messages = [
    {
      id: 1,
      sender: "Lenskart",
      text: "Welcome to Lenskart!",
      time: "6:41 PM",
    },
    { id: 2, sender: "Me", text: "Thank you for shopping!", time: "6:42 PM" },
  ];

  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatHeader}>
        <h3>{chat.name}</h3>
      </div>

      <div className={styles.chatMessages}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`${styles.message} ${
              msg.sender === "Me" ? styles.sent : styles.received
            }`}
          >
            <p>{msg.text}</p>
            <span className={styles.messageTime}>{msg.time}</span>
          </div>
        ))}
      </div>

      <div className={styles.chatInput}>
        <input type="text" placeholder="Type a message" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
