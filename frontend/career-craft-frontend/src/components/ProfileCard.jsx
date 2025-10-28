export default function ProfileCard() {
  return (
    <div style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      maxWidth: "400px",
      margin: "20px auto",
      textAlign: "center"
    }}>
      <img
        src="https://via.placeholder.com/100"
        alt="Profile"
        style={{ borderRadius: "50%", marginBottom: "15px" }}
      />
      <h2>John Doe</h2>
      <p>Email: johndoe@example.com</p>
      <p>Career Interest: Software Engineering</p>
      <button style={{
        marginTop: "10px",
        padding: "8px 12px",
        borderRadius: "5px",
        border: "none",
        background: "#4F46E5",
        color: "#fff",
        cursor: "pointer"
      }}>
        Edit Profile
      </button>
    </div>
  );
}
