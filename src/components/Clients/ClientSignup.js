import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ClientSignup() {
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
          Client Signup
        </h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
           window.location.href = "/client/dashboard"; // ✅ redirect to the real dashboard

          }}
        >
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input type="text" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input type="email" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input type="password" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Phone Number</label>
            <input type="tel" className="form-control" required />
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
            Create Account
          </button>
        </form>
      </div>

      <div className="mt-3 text-muted">
        Already have an account? <a href="/client/login">Login</a>
      </div>
    </div>
  );
}

export default ClientSignup;
