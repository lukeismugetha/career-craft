import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // 🔗 TODO: Connect to Flask backend auth route
    if (email && password) {
      navigate("/dashboard");
    }
  };

return (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <form
      onSubmit={handleLogin}
      className="glass neon-outline p-8 rounded-xl w-96 backdrop-blur-lg shadow-neon animate-fadeIn"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-cyan-300 drop-shadow-md">
        CareerCraft Login
      </h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-transparent border border-cyan-400 p-2 rounded mb-4 text-white placeholder-cyan-300 focus:ring-2 focus:ring-cyan-300"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full bg-transparent border border-cyan-400 p-2 rounded mb-6 text-white placeholder-cyan-300 focus:ring-2 focus:ring-cyan-300"
      />

      <button
        type="submit"
        className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-400 hover:-translate-y-1 duration-200 shadow-neon"
      >
        Login
      </button>

      <p className="text-center mt-4 text-sm">
        Don’t have an account?{" "}
       <Link to="/register" className="text-cyber-300 hover:underline">
        Create one here
       </Link>
      </p>

    </form>
  </div>
);

}
