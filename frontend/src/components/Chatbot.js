import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    const userMessage = { text: input, user: true };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const response = await axios.post("http://localhost:5000/api/chat", { message: input });
      const botMessage = { text: response.data.reply, user: false };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error with chatbot", error);
    }
  };

  return (
    <div className="chatbot fixed bottom-10 right-10 bg-black p-4 shadow-lg rounded-lg w-80">
      <h3 className="text-white text-xl">AI Chatbot</h3>
      <div className="chat-window max-h-60 overflow-y-auto text-white">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.user ? "user" : "bot"} mb-2`}>
            {msg.text}
          </div>
        ))}
      </div>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Ask me something..." 
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <button onClick={handleSend} className="mt-2 py-1 px-3 bg-purple-600 text-white rounded-md">
        Send
      </button>
    </div>
  );
};

export default Chatbot;
