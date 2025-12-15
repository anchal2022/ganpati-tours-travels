// src/Pages/Packages.jsx

function Packages() {
  return (
    <div className="app-main">
      <div className="card">
        <h1 className="page-title">Tour Packages</h1>

        <p className="page-subtitle">
          From Nokha / Bikaner we arrange tours to Jaipur, Jodhpur, Jaisalmer,
          Shirdi and other cities. These are sample packages – final plan can
          be customised as per your dates and budget.
        </p>

        <div
          style={{
            marginTop: 16,
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {/* Jaipur Package */}
          <div className="card" style={{ padding: 16 }}>
            <h3 style={{ marginBottom: 4 }}>Jaipur City Tour</h3>
            <p style={{ fontSize: "0.9rem", color: "#4b5563" }}>
              1–2 days · Hawa Mahal, City Palace, Jantar Mantar, Amer Fort,
              local shopping.
            </p>
            <ul style={{ fontSize: "0.85rem", color: "#4b5563", paddingLeft: 18 }}>
              <li>Pickup from Nokha / Bikaner / Jaipur station</li>
              <li>Comfortable AC cab (Dzire / Ertiga / Innova)</li>
              <li>Driver cum guide for sightseeing</li>
            </ul>
            <a
              className="btn btn-outline"
              href="https://wa.me/919314466050?text=Hi%2C%20please%20send%20details%20for%20Jaipur%20City%20Tour%20package."
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: 8, display: "inline-block" }}
            >
              📍 Ask price for Jaipur package
            </a>
          </div>

          {/* Jodhpur – Jaisalmer Package */}
          <div className="card" style={{ padding: 16 }}>
            <h3 style={{ marginBottom: 4 }}>Jodhpur – Jaisalmer Desert Tour</h3>
            <p style={{ fontSize: "0.9rem", color: "#4b5563" }}>
              3–4 days · Mehrangarh Fort, Umaid Bhawan, Sam Sand Dunes, camel
              safari and camping.
            </p>
            <ul style={{ fontSize: "0.85rem", color: "#4b5563", paddingLeft: 18 }}>
              <li>Pickup from Nokha / Bikaner / Jodhpur station</li>
              <li>Hotel / camp drop and local sightseeing</li>
              <li>Best for family and friend groups</li>
            </ul>
            <a
              className="btn btn-outline"
              href="https://wa.me/919314466050?text=Hi%2C%20please%20send%20details%20for%20Jodhpur%20Jaisalmer%20Tour%20package."
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: 8, display: "inline-block" }}
            >
              🏜️ Ask price for Jodhpur–Jaisalmer package
            </a>
          </div>

          {/* Shirdi / Pilgrimage Package */}
          <div className="card" style={{ padding: 16 }}>
            <h3 style={{ marginBottom: 4 }}>Shirdi / Pilgrimage Tour</h3>
            <p style={{ fontSize: "0.9rem", color: "#4b5563" }}>
              Customised yatra for temples and religious places as per your
              plan.
            </p>
            <ul style={{ fontSize: "0.85rem", color: "#4b5563", paddingLeft: 18 }}>
              <li>Safe and comfortable AC vehicles</li>
              <li>Special care for senior citizens</li>
              <li>Pickup & drop from home / station / airport</li>
            </ul>
            <a
              className="btn btn-outline"
              href="https://wa.me/919314466050?text=Hi%2C%20please%20send%20details%20for%20Pilgrimage%20Tour%20package."
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: 8, display: "inline-block" }}
            >
              🙏 Ask price for Pilgrimage package
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
