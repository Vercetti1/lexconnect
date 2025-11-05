import "../../App.css";



import "bootstrap/dist/css/bootstrap.min.css";

function LawyerProfilePending() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {/* ---------- Sidebar ---------- */}
      <div
        className="d-flex flex-column p-4"
        style={{
          width: "250px",
          backgroundColor: "#001F3F",
          color: "white",
          minHeight: "100vh",
        }}
      >
        <h4 className="fw-bold mb-4 text-center text-warning">LexConnect</h4>

        <nav className="nav flex-column gap-2">
          <Link className="nav-link text-white-50" to="/lawyer/dashboard">
            Dashboard
          </Link>
          <Link className="nav-link text-white-50" to="/lawyer/clients">
            Clients
          </Link>
          <Link className="nav-link text-white-50" to="/lawyer/messages">
            Messages
          </Link>
          <Link className="nav-link text-white-50" to="/lawyer/payments">
            Payments
          </Link>
          <Link className="nav-link text-white-50" to="/lawyer/settings">
            Profile Settings
          </Link>
        </nav>

        <div className="mt-auto">
          <button className="btn btn-outline-light w-100 mt-4">Logout</button>
        </div>
      </div>

      {/* ---------- Main Dashboard ---------- */}
      <div className="flex-grow-1 p-5 position-relative">
        {/* Verification Banner */}
        <div
          className="alert alert-warning text-center fw-bold shadow-sm mb-4"
          style={{
            border: "2px solid #FFD700",
            fontSize: "1rem",
          }}
        >
          ⚠️ Your verification is in progress. Please wait for approval from the LexConnect admin team.
        </div>

        {/* Profile Header */}
        <div className="d-flex align-items-center mb-5">
          <img
            src="https://via.placeholder.com/120"
            alt="Lawyer Avatar"
            className="rounded-circle border border-3 border-warning me-4"
            style={{ width: "120px", height: "120px" }}
          />
          <div>
            <h3 className="fw-bold mb-1">Barr. Aisha Bello</h3>
            <p className="text-muted mb-0">Call to Bar No: SCN/1234</p>
            <p className="text-muted">Email: aisha.bello@lexconnect.com</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row g-4 mb-5">
          {["Cases", "Consultations", "Clients", "Reviews"].map((item, i) => (
            <div key={i} className="col-md-3">
              <div
                className="card text-center shadow-sm"
                style={{ opacity: 0.5, cursor: "not-allowed" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{item}</h5>
                  <p className="display-6 fw-bold text-muted">—</p>
                  <small className="text-danger">Pending verification</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disabled Action Buttons */}
        <div className="text-center">
          <button className="btn btn-secondary btn-lg mx-2" disabled>
            View Client Requests
          </button>
          <button className="btn btn-secondary btn-lg mx-2" disabled>
            Start New Consultation
          </button>
        </div>

        {/* Transparent Overlay (Visual Lock) */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(4px)",
            pointerEvents: "none",
          }}
        >
          <div
            className="p-4 rounded shadow-sm bg-white border border-warning"
            style={{ maxWidth: "420px" }}
          >
            <h5 className="fw-bold mb-2 text-warning text-center">
              Verification in Progress
            </h5>
            <p className="text-center text-muted mb-0">
              Your documents are being reviewed. You’ll be notified once your
              account is approved.
            </p>
          </div>
        </div>
        {/* ✅ Simulation button (for demo only) */}
<div className="text-center mt-5 position-relative" style={{ zIndex: 10 }}>
  <button
    onClick={() => {
      setTimeout(() => {
        window.location.href = "/lawyer/dashboard"; // Redirect to verified dashboard
      }, 1500);
    }}
    className="btn btn-success px-4 py-2"
    style={{ fontWeight: "600", borderRadius: "8px" }}
  >
    ✅ Simulate Admin Approval
  </button>
  <p className="text-muted small mt-2">
    (Demo only — redirects to verified dashboard)
  </p>
</div>
      </div>
    </div>
  );
}


export default LawyerProfilePending;
