import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    barNumber: "",
    phone: "",
    document: null,
  });

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Handle role selection
  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  // Submit Lawyer signup form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.barNumber ||
      !formData.phone ||
      !formData.document
    ) {
      alert("Please fill all required fields and upload your document.");
      return;
    }

    // Simulate backend approval step
    alert("Your information has been submitted. Verification pending...");
    navigate("/lawyer/profile-pending");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #001F3F 0%, #f8f9fa 70%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        className="bg-white shadow-lg p-5 rounded-4"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        {!role && (
          <div className="text-center">
            <h2 className="fw-bold mb-3" style={{ color: "var(--navy)" }}>
              Join <span style={{ color: "var(--gold)" }}>LexConnect</span>
            </h2>
            <p className="text-muted mb-4">Choose your role to continue</p>

            <div className="d-flex justify-content-center gap-3">
              <Link to="/client/signup" className="btn btn-primary">
  I’m a Client
</Link>

              <button
                onClick={() => handleRoleSelect("lawyer")}
                className="btn btn-outline-primary px-4 py-2"
              >
                I’m a Lawyer
              </button>
            </div>
          </div>
        )}

        {/* ---------- Lawyer Signup Form ---------- */}
        {role === "lawyer" && (
          <form onSubmit={handleSubmit}>
            <h4 className="fw-bold mb-4 text-center" style={{ color: "var(--navy)" }}>
              Lawyer Signup
            </h4>

            <div className="mb-3">
              <label className="form-label">Full Name ✳️</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email ✳️</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password ✳️</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Call to Bar Number ✳️</label>
              <input
                type="text"
                className="form-control"
                name="barNumber"
                value={formData.barNumber}
                onChange={handleChange}
                placeholder="e.g., SCN/1234"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Contact Phone ✳️</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Upload ID / Bar Certificate ✳️</label>
              <input
                type="file"
                className="form-control"
                name="document"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn w-100"
              style={{
                background: "var(--gold)",
                color: "var(--navy)",
                fontWeight: 700,
              }}
            >
              Submit for Verification
            </button>

            <div className="text-center mt-3">
              <button
                type="button"
                className="btn btn-link text-muted small"
                onClick={() => setRole("")}
              >
                ← Back to role selection
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Signup;
