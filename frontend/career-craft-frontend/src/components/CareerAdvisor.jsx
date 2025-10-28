import { useState } from "react";
import API from "../api";

export default function CareerAdvisor() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async (e) => {
    e.preventDefault();
    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");

    try {
      const res = await API.post("/api/advisor", { query: input });
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: res.data.response },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error connecting to AI Advisor" },
      ]);
    }
  };

  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Career Path Advisor</h2>
      <div className="h-64 overflow-y-auto mb-4 border p-2 rounded">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 my-1 rounded ${
              msg.sender === "user"
                ? "bg-blue-100 text-right"
                : "bg-gray-200 text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask for career advice..."
          className="flex-grow border p-2 rounded-l"
        />
        <button className="bg-blue-500 text-white px-4 rounded-r">
          Send
        </button>
      </form>
    </div>
  );
}
