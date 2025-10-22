import { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    API.get("/test")
      .then((res) => setMessage(res.data.message))
      .catch((err) => {
        console.error("Error:", err);
        setMessage("Error connecting to backend");
      });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">{message}</h1>
    </div>
  );
}

export default App;
