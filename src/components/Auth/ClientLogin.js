import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ClientLogin() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f4f6f9" }}
    >
      <div className="card shadow p-5" style={{ maxWidth: "450px", width: "100%" }}>
        <h3 className="text-center fw-bold mb-4" style={{ color: "#001F3F" }}>
          Client Login
        </h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "/client/dashboard";
          }}
        >
          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input type="email" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input type="password" className="form-control" required />
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
      </div>
    </div>
  );
}

export default ClientLogin;
