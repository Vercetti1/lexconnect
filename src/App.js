import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

import Signup from "./components/Auth/Signup";
import LawyerProfilePending from "./components/Lawyers/LawyerProfilePending";
import LawyerDashboard from "./components/Lawyers/LawyerDashboard";
import LawyerLogin from "./components/Auth/LawyerLogin";
import ClientSignup from "./components/Clients/ClientSignup";
import ClientDashboard from "./components/Clients/ClientDashboard";
import ClientLogin from "./components/Auth/ClientLogin";



/* ---------- Dropdown Data ---------- */
const CATEGORIES = [
  "Family Law", "Criminal Law", "Business Law", "Real Estate",
  "Immigration", "Employment"
];

const LOCATIONS = [
  "Lagos", "Abuja", "Port Harcourt", "Enugu", "Ibadan",
  "Kano", "Kaduna", "Benin City"
];

const LAWYERS = [
  {
    id: 1,
    name: "Aisha Bello",
    title: "Senior Litigation Counsel",
    experience: "12 yrs",
    rating: 4.9,
    price: "₦20,000/hr",
    location: "Lagos, NG",
    img: "https://via.placeholder.com/300?text=Lawyer"
  },
  {
    id: 2,
    name: "Mike Okonkwo",
    title: "Corporate & Commercial",
    experience: "8 yrs",
    rating: 4.8,
    price: "₦15,000/hr",
    location: "Abuja, NG",
    img: "https://via.placeholder.com/300?text=Lawyer"
  },
  {
    id: 3,
    name: "Sadia Ibrahim",
    title: "Family Law Specialist",
    experience: "10 yrs",
    rating: 4.7,
    price: "₦18,000/hr",
    location: "Lagos, NG",
    img: "https://via.placeholder.com/300?text=Lawyer"
  }
];

/* ---------- Header ---------- */
function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "var(--navy)",
          color: "white",
          padding: "1rem 0",
        }}
      >
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center text-white" to="/">
            <div
              style={{
                width: 36,
                height: 36,
                background: "var(--gold)",
                borderRadius: 8,
                marginRight: 10,
              }}
            ></div>
            <span style={{ fontWeight: 700 }}>LexConnect</span>
          </Link>

          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item ms-3">
                <button
                  className="btn btn-outline-light"
                  onClick={() => setShowLoginModal(true)}
                >
                  Login
                </button>
              </li>
              <li className="nav-item ms-2">
                <Link
                  to="/signup"
                  className="btn"
                  style={{
                    background: "var(--gold)",
                    color: "var(--navy)",
                    fontWeight: 700,
                  }}
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ---------- LOGIN MODAL ---------- */}
      {showLoginModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-center p-4">
              <h5 className="fw-bold mb-3" style={{ color: "var(--navy)" }}>
                Login As
              </h5>

              <div className="d-flex justify-content-center gap-3">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                    setShowLoginModal(false);
                    navigate("/lawyer/login");
                  }}
                >
                  Lawyer
                </button>

                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    setShowLoginModal(false);
                    navigate("/client/login");
                  }}
                >
                  Client
                </button>
              </div>

              <button
                className="btn btn-outline-secondary mt-3"
                onClick={() => setShowLoginModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}



      
/* ---------- Hero ---------- */
function Hero({ onShowModal }) {
  return (
    <header className="hero text-white py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1 className="display-5 fw-bold">
              Find the right lawyer — fast, verified, trusted.
            </h1>
            <p className="lead mb-4">
              Search vetted lawyers by practice area, location, and availability.
              Book secure consultations in minutes.
            </p>
            <div className="search-card d-flex gap-2 align-items-center bg-white p-2 rounded">
              <select className="form-select text-dark">
                <option defaultValue>Select a practice area</option>
                {CATEGORIES.map((item, i) => (
                  <option key={i}>{item}</option>
                ))}
              </select>

              <select className="form-select text-dark">
                <option defaultValue>Select location</option>
                {LOCATIONS.map((loc, i) => (
                  <option key={i}>{loc}</option>
                ))}
              </select>

              <button
                className="btn"
                style={{
                  background: "var(--gold)",
                  color: "var(--navy)",
                  fontWeight: 700,
                }}
                onClick={onShowModal}
              >
                Search
              </button>
            </div>
            <div className="mt-4 d-flex flex-wrap gap-2">
              <span className="category-pill">Verified</span>
              <span className="category-pill">Instant booking</span>
              <span className="category-pill">Secure payments</span>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block text-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1661333820879-517c5e808bfe?auto=format&fit=crop&q=80&w=1204"
              alt="Lawyers discussing case"
              className="img-fluid rounded-4 shadow"
              style={{
                maxHeight: "360px",
                objectFit: "cover",
                border: "3px solid var(--gold)",
                borderRadius: "16px",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer
      className="footer text-center py-4"
      style={{
        backgroundColor: "var(--navy)",
        color: "white",
      }}
    >
      <div className="container">
        <small style={{ opacity: 0.9 }}>
          © {new Date().getFullYear()} <strong>LexConnect</strong> — All rights reserved.
        </small>
      </div>
    </footer>
  );
}

/* ---------- App ---------- */
function App() {
  const [showModal, setShowModal] = useState(false);
  const [loggedIn] = useState(false);

  return (
    <Router>
      <Header />

      <Routes>
        {/* ✅ Home Page (Hero + Footer) */}
        <Route
          path="/"
          element={
            <>
              <Hero onShowModal={() => !loggedIn && setShowModal(true)} />
              <Footer />
            </>
          }
        />

        {/* ✅ Signup Page */}
        <Route path="/signup" element={<Signup />} />

        {/* ✅ Lawyer: Pending Verification */}
        <Route path="/lawyer/profile-pending" element={<LawyerProfilePending />} />

        <Route path="/client/signup" element={<ClientSignup />} />
        
  <Route path="/client/dashboard" element={<ClientDashboard lawyers={LAWYERS} />} />
        <Route path="/client/login" element={<ClientLogin />} />




        {/* ✅ Lawyer: Verified Dashboard */}
       <Route path="/lawyer/dashboard" element={<LawyerDashboard />} />
       <Route path="/lawyer/login" element={<LawyerLogin />} />



      </Routes>

      {/* ✅ Login/Signup Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-center p-4">
              <h5 className="fw-bold mb-3" style={{ color: "var(--navy)" }}>
                Please Login or Sign Up
              </h5>
              <p className="text-muted mb-4">
                You must be logged in to search, view, or connect with lawyers.
              </p>

              <div className="d-flex justify-content-center gap-2">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>

                <Link
                  to="/signup"
                  className="btn"
                  style={{
                    background: "var(--gold)",
                    color: "var(--navy)",
                    fontWeight: 700,
                  }}
                  onClick={() => setShowModal(false)}
                >
                  Login / Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </Router>
  );
}


export default App;
