import React, { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);

    try {
      const response = await fetch(
        "https://arulfrancis.pythonanywhere.com/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );
      const data = await response.json();

      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Server error. Try again later." },
      ]);
    }

    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5">
      {/* Chat icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          title="Chat with us"
        >
          💬
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="w-96 max-w-full bg-white border border-gray-300 rounded-2xl shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white font-semibold px-4 py-2 flex justify-between items-center rounded-t-2xl">
            Chat Support
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-xl font-bold hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-2 max-h-96 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-4 py-2 rounded-xl max-w-[80%] break-words ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end text-right shadow-md"
                    : "bg-gray-200 text-black self-start text-left shadow-sm"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex p-3 border-t border-gray-300 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full shadow-md transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}