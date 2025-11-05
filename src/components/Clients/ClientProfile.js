import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ClientProfile() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafc",
      }}
    >
      <div
        className="card shadow p-5 text-center"
        style={{
          maxWidth: "600px",
          borderTop: "4px solid #001F3F",
        }}
      >
        <h3 className="fw-bold mb-3" style={{ color: "#001F3F" }}>
          Welcome, Sarah Johnson 👋
        </h3>
        <p className="text-muted mb-4">
          Your client dashboard will appear here soon.  
          You’ll be able to browse lawyers, view consultations, and send messages.
        </p>
        <button
          className="btn"
          style={{
            backgroundColor: "#001F3F",
            color: "white",
            fontWeight: "600",
          }}
        >
          Browse Lawyers
        </button>
      </div>
    </div>
  );
}

export default ClientProfile;
