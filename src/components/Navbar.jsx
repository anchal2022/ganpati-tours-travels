import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
        backgroundColor: "#111827",
        color: "white",
      }}
    >
      <div style={{ fontWeight: "bold" }}>Ganpati Tours & Travels</div>

      <ul
        style={{
          display: "flex",
          gap: "16px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/fleet" style={{ color: "white", textDecoration: "none" }}>Fleet</Link></li>
        <li><Link to="/booking" style={{ color: "white", textDecoration: "none" }}>Booking</Link></li>
        <li><Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
