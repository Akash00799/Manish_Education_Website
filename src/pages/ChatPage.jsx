// src/pages/ChatPage.jsx
import React, { useState } from "react";
import ChatHeader from "../components/ChatHeader";
import MessageList from "../components/MessageList";
import ChatInput from "../components/ChatInput";
import TeacherList from "../components/TeacherList";
import styles from "../styles/ChatPage.module.css";

const ChatPage = () => {
  const [teachers] = useState([
    { id: 1, name: "Teacher A" },
    { id: 2, name: "Teacher B" },
    { id: 3, name: "Teacher C" },
  ]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      sender: "me",
      text: text,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
  };

  const handleSelectTeacher = (teacher) => {
    setSelectedTeacher(teacher);
    setMessages([]);
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.teacherSection}>
        <TeacherList
          teachers={teachers}
          onSelectTeacher={handleSelectTeacher}
        />
      </div>

      <div className={styles.chatSection}>
        {selectedTeacher ? (
          <>
            <ChatHeader title={`Chat with ${selectedTeacher.name}`} />
            <MessageList messages={messages} />
            <ChatInput onSendMessage={handleSendMessage} />
          </>
        ) : (
          <div className={styles.selectTeacherPrompt}>
            <p>Select a teacher to start chatting.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
