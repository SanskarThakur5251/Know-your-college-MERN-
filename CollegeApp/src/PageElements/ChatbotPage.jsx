import React, { useState } from "react";
import styles from "../ElementStyles/ChatbotStyles.module.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply || "No response" },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Chatbot error" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.all}>

    <div className={styles.chatContainer}>
      <h2 className={styles.title}>College Chatbot</h2>
      <div className={styles.chatBox}>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={msg.sender === "user" ? styles.userMsg : styles.botMsg}
          >
            {msg.text}
          </div>
        ))}
        {loading && <p className={styles.typing}>Bot is typing...</p>}
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className={styles.input}
        />
        <button onClick={sendMessage} className={styles.sendBtn}>
          Send
        </button>
      </div>
    </div>
    </div>
  );
}

export default Chatbot;
