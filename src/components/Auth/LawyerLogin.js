import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function LawyerLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lawyerID, setLawyerID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ⚙️ Simulated database check for demo purpose
    const VERIFIED_LAWYER_IDS = ["LXCN1234", "LXCN5678"]; // ✅ example IDs of verified lawyers

    // Fake check for verified lawyer
    if (VERIFIED_LAWYER_IDS.includes(lawyerID.trim().toUpperCase())) {
      navigate("/lawyer/dashboard"); // ✅ Verified lawyer
    } else {
      navigate("/lawyer/profile-pending"); // ⚠️ Pending verification
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
      }}
    >
      <div
        className="card shadow p-5"
        style={{
          maxWidth: "480px",
          width: "100%",
          borderTop: "4px solid #001F3F",
        }}
      >
        <h3 className="text-center fw-bold mb-4" style={{ color: "#001F3F" }}>
          Lawyer Login
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Lawyer Unique ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your unique lawyer ID (e.g., LXCN1234)"
              value={lawyerID}
              onChange={(e) => setLawyerID(e.target.value)}
              required
            />
            <small className="text-muted">
              Use the unique ID provided after verification.
            </small>
          </div>

          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "#001F3F",
              color: "white",
              fontWeight: "600",
            }}
          >
            Login
          </button>
        </form>

        <div className="mt-3 text-center text-muted">
          Don’t have an account?{" "}
          <a href="/signup" style={{ color: "#001F3F" }}>
            Sign up
          </a>
        </div>
      </div>

      {/* Optional future feature */}
      <div className="mt-4 text-center text-secondary">
        <small>🔒 Coming soon: Login with Face ID or Fingerprint</small>
      </div>
    </div>
  );
}

export default LawyerLogin;
