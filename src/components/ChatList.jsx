import React from "react";
import styles from "../styles/ChatApp.module.css";

const ChatList = ({ onSelectChat }) => {
  const chats = [
    {
      id: 1,
      name: "Lenskart",
      message: "Welcome to Lenskart!",
      time: "6/6/2024",
    },
    { id: 2, name: "Adani One", message: "Khamma ghani", time: "Yesterday" },
    {
      id: 3,
      name: "PVX DASHBOARD",
      message: "Ye raghav left",
      time: "1:42 AM",
    },
  ];

  return (
    <div className={styles.chatList}>
      <input
        type="text"
        className={styles.searchBar}
        placeholder="Search or start a new chat"
      />
      <ul>
        {chats.map((chat) => (
          <li
            key={chat.id}
            onClick={() => onSelectChat(chat)}
            className={styles.chatItem}
          >
            <div className={styles.chatDetails}>
              <h4>{chat.name}</h4>
              <p>{chat.message}</p>
            </div>
            <span className={styles.chatTime}>{chat.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
