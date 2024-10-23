import React, { useState } from "react";
import styles from "../styles/ChatInput.module.css";

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false); // To manage listening state

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Function to handle speech recognition
  const handleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US"; // Set the language of recognition

      recognition.onstart = () => {
        setIsListening(true); // Update state when listening starts
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setMessage(transcript); // Update the message input with recognized text
        setIsListening(false); // Stop listening
      };

      recognition.onerror = (event) => {
        console.error("Error occurred in recognition: ", event.error);
        setIsListening(false); // Stop listening on error
      };

      recognition.onend = () => {
        setIsListening(false); // Stop listening when recognition ends
      };

      recognition.start(); // Start speech recognition
    } else {
      console.error("Speech Recognition API not supported in this browser.");
    }
  };

  return (
    <div className={styles.chatInputContainer}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message here..."
        className={styles.chatInput}
      />

      {/* Microphone button */}
      <button onClick={handleVoiceInput} className={styles.micButton}>
        {isListening ? "🎙️" : "🎤"} {/* Mic icon changes based on state */}
      </button>

      <button onClick={handleSend} className={styles.sendButton}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;
