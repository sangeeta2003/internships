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
    <div className="fixed bottom-10 right-10 w-80 bg-white p-4 shadow-lg rounded-lg z-50">
      <h3 className="text-lg font-semibold mb-4 text-center">AI Chatbot</h3>
      <div className="chat-window max-h-60 overflow-y-auto mb-4 p-2 border-b">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.user ? "text-blue-500" : "text-gray-800"} mb-2`}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me something..."
        className="w-full p-2 border rounded-md mb-2"
      />
      <button
        onClick={handleSend}
        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
      >
        Send
      </button>
    </div>
  );
};

export default Chatbot;
