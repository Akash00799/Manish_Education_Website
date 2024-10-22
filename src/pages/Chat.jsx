import React, { useState } from "react";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import styles from "../styles/Chat.module.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, { id: messages.length + 1, text: newMessage }]);
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatMessages}>
        {messages.length > 0 ? (
          messages.map((msg) => <ChatMessage key={msg.id} message={msg.text} />)
        ) : (
          <p className={styles.noMessages}>
            No messages yet. Start the conversation!
          </p>
        )}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
