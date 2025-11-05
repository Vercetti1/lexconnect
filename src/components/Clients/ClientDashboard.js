import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ClientDashboard({ lawyers = [] }) {
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
          <Link className="nav-link text-white-50" to="#">
            Dashboard
          </Link>
          <Link className="nav-link text-white-50" to="#">
            My Lawyers
          </Link>
          <Link className="nav-link text-white-50" to="#">
            Messages
          </Link>
          <Link className="nav-link text-white-50" to="#">
            Appointments
          </Link>
          <Link className="nav-link text-white-50" to="#">
            Payments
          </Link>
        </nav>

        <div className="mt-auto">
          <Link to="/" className="btn btn-outline-light w-100 mt-4">
            Logout
          </Link>
        </div>
      </div>

      {/* ---------- Main Dashboard ---------- */}
      <div className="flex-grow-1 p-5">
        <div className="mb-5">
          <h2 className="fw-bold">Welcome back, Sarah!</h2>
          <p className="text-muted">
            Here’s an overview of your legal activities on LexConnect.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="row g-4 mb-5">
          {[
            { label: "Booked Lawyers", value: 0 },
            { label: "Upcoming Appointments", value: 0 },
            { label: "Unread Messages", value: 0 },
            { label: "Payments Made", value: "₦0" },
          ].map((stat, i) => (
            <div key={i} className="col-md-3">
              <div className="card text-center shadow-sm border-0">
                <div className="card-body">
                  <h6 className="text-muted">{stat.label}</h6>
                  <h3 className="fw-bold text-primary">{stat.value}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          <button
            className="btn btn-primary btn-lg mx-2"
            style={{ backgroundColor: "#001F3F" }}
          >
            Find a Lawyer
          </button>
          <button
            className="btn btn-outline-primary btn-lg mx-2"
            style={{ borderColor: "#001F3F", color: "#001F3F" }}
          >
            View Messages
          </button>
        </div>

        {/* My Lawyers Section */}
        <div className="mt-5">
          <h4 className="fw-bold mb-3">My Lawyers</h4>
          {lawyers && lawyers.length > 0 ? (
            <div className="row g-3">
              {lawyers.map((lawyer) => (
                <div key={lawyer.id} className="col-md-4">
                  <div className="card shadow-sm">
                    <div className="card-body d-flex gap-3 align-items-center">
                      <img
                        src={lawyer.img}
                        alt={lawyer.name}
                        style={{ width: 64, height: 64, borderRadius: 8, objectFit: 'cover' }}
                      />
                      <div>
                        <h6 className="mb-1">{lawyer.name}</h6>
                        <small className="text-muted">{lawyer.title} • {lawyer.location}</small>
                      </div>
                      <div className="ms-auto text-end">
                        <div className="fw-bold">{lawyer.price}</div>
                        <small className="text-warning">{lawyer.rating} ★</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted">You have no saved lawyers yet. Use "Find a Lawyer" to add.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;
