// src/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";              // ⬅ mobile toggle ke liye

import logo from "../assets/logo.png";

function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // ⬅ mobile menu state

  const linkStyle = (path) => ({
    color: "white",
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: location.pathname === path ? "700" : "500",
    backgroundColor:
      location.pathname === path ? "#1e293b" : "transparent", // active thoda bright
    padding: "8px 12px",
    borderRadius: "999px",
    display: "block",
    transition: "background-color 0.15s ease, transform 0.15s ease",
  });

  return (
    <div
      className={`sidebar ${isOpen ? "sidebar--open" : ""}`}   // ⬅ class add
      style={{
        width: "240px",
        height: "100vh",
        background: "#020617",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        padding: "22px 18px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        {/* TOP BRAND AREA WITH LOGO + MOBILE BUTTON */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 24,
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src={logo}
              alt="Ganpati Tours logo"
              style={{
                width: 40,
                height: 40,
                borderRadius: "999px",
                objectFit: "cover",
              }}
            />
            <div>
              <h2 style={{ marginBottom: 4, fontSize: "1.1rem" }}>
                Ganpati Tours
              </h2>
              <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
                Nokha · Bikaner · Rajasthan
              </p>
            </div>
          </div>

          {/* Hamburger button – desktop pe CSS se hide hoga */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>

        <ul
          className="sidebar-nav"        // ⬅ nav ke liye class
          style={{
            listStyle: "none",
            padding: 0,
            display: "grid",
            gap: 10,
          }}
        >
          <li>
            <Link to="/" style={linkStyle("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/fleet" style={linkStyle("/fleet")}>
              Fleet
            </Link>
          </li>
          <li>
            <Link to="/packages" style={linkStyle("/packages")}>
              Packages
            </Link>
          </li>
          <li>
            <Link to="/booking" style={linkStyle("/booking")}>
              Booking
            </Link>
          </li>
          <li>
            <Link to="/contact" style={linkStyle("/contact")}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/feedback" style={linkStyle("/feedback")}>
              Feedback
            </Link>
          </li>
        </ul>
      </div>

      <div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
        <p>24×7 Support</p>
        <p>📞 +91 93144 66050</p>
      </div>
    </div>
  );
}

export default Sidebar;
