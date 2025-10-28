export default function AdminPanel() {
  return (
    <div style={{
      padding: "40px",
      textAlign: "center",
      backgroundColor: "#f8fafc",
      minHeight: "100vh"
    }}>
      <h1 style={{ color: "#111827" }}>Admin Panel</h1>
      <p style={{ color: "#4b5563" }}>Welcome to the Admin Dashboard.</p>

      <div style={{
        marginTop: "30px",
        background: "#fff",
        borderRadius: "8px",
        padding: "20px",
        display: "inline-block",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <h2>System Controls</h2>
        <ul style={{ textAlign: "left" }}>
          <li>✅ Manage Users</li>
          <li>📊 View Analytics</li>
          <li>⚙️ Configure Settings</li>
        </ul>
      </div>
    </div>
  );
}
