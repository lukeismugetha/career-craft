import { useEffect, useState } from "react";

export default function DarkToggle(){
  const [dark, setDark] = useState(() => localStorage.getItem("dark")==="true");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("dark", dark ? "true" : "false");
  }, [dark]);
  return (
    <button onClick={() => setDark(d => !d)} className="px-3 py-1 rounded-md hover:bg-[rgba(255,255,255,0.02)]">
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
