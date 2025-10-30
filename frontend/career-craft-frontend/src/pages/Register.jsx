import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      return setError("Passwords do not match");
    }

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/register", {
        email,
        password,
      });

      alert("✅ Account created! You can now login");
      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.error || "Something went wrong. Try again later."
      );
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-surface text-slate-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <div className="flex justify-center items-center flex-1 p-6">
          <form
            onSubmit={handleRegister}
            className="bg-surface-muted rounded-xl p-8 w-full max-w-md shadow-neon-md animate-floaty"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-cyber-400">
              Create Account
            </h2>

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-surface mt-2 border border-cyber-600 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-surface mt-4 border border-cyber-600 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded bg-surface mt-4 border border-cyber-600 focus:outline-none"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />

            {error && (
              <p className="text-red-400 text-sm mt-3 text-center">{error}</p>
            )}

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-cyber-500 hover:bg-cyber-600 text-white py-3 rounded mt-6 transition-all shadow-neon-md disabled:opacity-50"
            >
              {loading ? "Creating..." : "Register"}
            </button>

            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <Link to="/" className="text-cyber-300 hover:underline">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
