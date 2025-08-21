import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  // Handle sending messages
  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);

    try {
      // Call Flask API (your AI backend)
      const response = await fetch("https://arulfrancis.pythonanywhere.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      // Add bot reply
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Server error. Try again later." },
      ]);
    }

    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-white border rounded-xl shadow-lg flex flex-col">
      {/* Chat messages */}
      <div className="flex-1 p-3 overflow-y-auto max-h-96">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 p-2 rounded-lg ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end text-right"
                : "bg-gray-200 text-black self-start text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input box */}
      <div className="p-2 border-t flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-lg px-2 py-1 mr-2"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-1 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}