import { useState } from "react";
import API from "../api";

export default function CareerAdvisor() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);

  const send = async () => {
    if (!query) return;
    setMessages(prev => [...prev, { sender: "user", text: query }]);
    setQuery("");
    try {
      const res = await API.post("/advisor", { query });
      setMessages(prev => [...prev, { sender: "bot", text: res.data.response }]);
    } catch (e) {
      setMessages(prev => [...prev, { sender: "bot", text: "Error connecting to AI" }]);
    }
  };

  return (
    <div className="glass p-4 rounded-xl neon-outline">
      <div className="h-60 overflow-y-auto mb-4">
        {messages.map((m,i) => (
          <div key={i} className={`mb-2 p-2 rounded ${m.sender==="user" ? "bg-[rgba(52,91,255,0.08)] text-right" : "bg-[rgba(255,255,255,0.02)] text-left"}`}>{m.text}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input value={query} onChange={e=>setQuery(e.target.value)} className="flex-1 p-2 rounded bg-transparent border border-[rgba(255,255,255,0.04)]" />
        <button onClick={send} className="btn-neon">Send</button>
      </div>
    </div>
  );
}
