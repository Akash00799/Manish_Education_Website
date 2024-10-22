import React, { useState } from "react";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import styles from "../styles/ChatApp.module.css";

const ChatApp = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className={styles.chatApp}>
      <div className={styles.sidebar}>
        <ChatList onSelectChat={handleSelectChat} />
      </div>
      <div className={styles.chatArea}>
        {selectedChat ? (
          <ChatWindow chat={selectedChat} />
        ) : (
          <div className={styles.noChatSelected}>
            <p>Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
