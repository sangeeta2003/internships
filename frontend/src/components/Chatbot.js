import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    const userMessage = { text: input, user: true };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const response = await axios.post("http://localhost:5000/api/chat", { message: input });
      const botMessage = { text: response.data.reply, user: false };
      setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error with chatbot", error);
    }
  };

  return (
    <div>
      {/* Chatbot icon to open the chat window */}
      <div onClick={toggleChat} className="chatbot-icon fixed bottom-10 right-10 bg-purple-600 p-3 rounded-full cursor-pointer">
        <span className="material-icons text-white text-3xl">
          chat
        </span>
      </div>

      {/* Chat window */}
      {isOpen && (
        <div className="chatbot fixed bottom-20 right-10 bg-gray-900 p-4 shadow-lg rounded-lg w-80 max-h-96 overflow-hidden">
          <h3 className="text-white text-xl mb-2">AI Chatbot</h3>
          <div className="chat-window max-h-60 overflow-y-auto text-white mb-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.user ? "bg-purple-600 text-right" : "bg-gray-700 text-left"} p-2 rounded-lg mb-2`}>
                {msg.text}
              </div>
            ))}
          </div>
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Ask me something..." 
            className="w-full p-2 border border-gray-300 rounded-md mb-2 bg-gray-800 text-white placeholder-gray-500"
          />
          <button 
            onClick={handleSend} 
            className="py-1 px-3 bg-purple-600 text-white rounded-md w-full mt-2 hover:bg-purple-700">
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
