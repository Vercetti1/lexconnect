import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function LawyerDashboard() {
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
          <Link className="nav-link text-white active fw-semibold" to="/lawyer/dashboard">
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
          <Link to="/" className="btn btn-outline-light w-100 mt-4">Logout</Link>

        </div>
      </div>

      {/* ---------- Main Dashboard ---------- */}
      <div className="flex-grow-1 p-5">
        {/* Welcome Banner */}
        <div
          className="alert alert-success text-center fw-bold shadow-sm mb-4"
          style={{
            border: "2px solid #28a745",
            fontSize: "1rem",
          }}
        >
          ✅ Welcome, Barr. Aisha Bello! Your account has been verified and activated.
        </div>

        {/* Profile Header */}
        <div className="d-flex align-items-center mb-5">
          <img
            src="https://via.placeholder.com/120"
            alt="Lawyer Avatar"
            className="rounded-circle border border-3 border-success me-4"
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
          {[
            { title: "Cases", value: 12 },
            { title: "Consultations", value: 8 },
            { title: "Clients", value: 15 },
            { title: "Reviews", value: 9 },
          ].map((item, i) => (
            <div key={i} className="col-md-3">
              <div className="card text-center shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title text-muted">{item.title}</h5>
                  <p className="display-6 fw-bold text-success mb-0">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Action Buttons */}
        <div className="text-center">
          <button className="btn btn-primary btn-lg mx-2">
            View Client Requests
          </button>
          <button className="btn btn-success btn-lg mx-2">
            Start New Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

export default LawyerDashboard;
