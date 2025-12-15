// src/Pages/Fleet.jsx

const FLEET = [
  {
    name: "Innova Crysta",
    type: "MUV",
    seats: "7+1 seater · AC",
    use: "Family tour, long trips, pilgrimage",
    tags: ["Family", "Outstation"],
  },
  {
    name: "Ertiga",
    type: "MUV",
    seats: "6+1 seater · AC",
    use: "Budget family tours & city rides",
    tags: ["Budget", "Family"],
  },
  {
    name: "Dzire",
    type: "Sedan",
    seats: "4+1 seater · AC",
    use: "Airport & local transfer",
    tags: ["Airport", "Local"],
  },
  {
    name: "Brezza",
    type: "SUV",
    seats: "4+1 seater · AC",
    use: "Comfortable SUV for tours",
    tags: ["SUV", "Tour"],
  },
  {
    name: "Tavera",
    type: "MUV",
    seats: "8–9 seater",
    use: "Group tours & darshan",
    tags: ["Group", "Pilgrimage"],
  },
  {
    name: "Tempo Traveller",
    type: "Traveller / Bus",
    seats: "12–17 seater",
    use: "Big family / group travel",
    tags: ["Group", "Tourist"],
  },
  {
    name: "Cruiser",
    type: "Baraat Vehicle",
    seats: "Open / decorated (on demand)",
    use: "Wedding baraat & events",
    tags: ["Wedding", "Baraat"],
  },
  {
    name: "Buses (partners)",
    type: "Bus",
    seats: "30–50 seater",
    use: "Marriage & big tour groups",
    tags: ["Bus", "Events"],
  },
  {
    name: "Fortuner (partner)",
    type: "Luxury SUV",
    seats: "Luxury SUV",
    use: "Groom entry & VIP travel",
    tags: ["Luxury", "Wedding"],
  },
];

function Fleet() {
  return (
    <div className="app-main">
      {/* PAGE TITLE */}
      <h1 className="page-title">Explore Our Fleet</h1>
      <p className="page-subtitle">
        All cars are well–maintained, clean and driven by experienced drivers.
        White colour preference available (subject to availability).
      </p>

      {/* ABOUT OUR CARS SECTION */}
      <div
        className="card"
        style={{
          maxWidth: 720,
          margin: "24px auto 24px",
          textAlign: "center",
          padding: "20px 24px",
        }}
      >
        <h2
          style={{
            fontSize: "1.4rem",
            marginBottom: 8,
          }}
        >
          About our cars
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#4b5563",
            marginBottom: 4,
          }}
        >
          At <strong>Ganpati Tours &amp; Travels</strong>, every car is cleaned
          before the trip, basic checks are done and seats are kept comfortable
          for family travel.
        </p>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#4b5563",
            marginBottom: 12,
          }}
        >
          From sedans to SUVs and travellers, we suggest the right vehicle as
          per your route, family size and budget.
        </p>

        <button
          className="btn btn-primary"
          onClick={() => {
            const text = encodeURIComponent(
              "Hi, I want to book a cab from Ganpati Tours. Please guide me with the best car option."
            );
            window.open(`https://wa.me/919314466050?text=${text}`, "_blank");
          }}
        >
          💬 WhatsApp for best car suggestion
        </button>
      </div>

      {/* FLEET LIST CARDS */}
      <div className="fleet-row">
        {FLEET.map((car) => (
          <div key={car.name} className="fleet-card">
            <div
              style={{
                fontSize: "0.8rem",
                textTransform: "uppercase",
                color: "#6b7280",
                marginBottom: 4,
              }}
            >
              {car.type}
            </div>
            <div className="fleet-name">{car.name}</div>

            <div style={{ fontSize: "0.85rem", color: "#4b5563" }}>
              {car.seats}
            </div>

            <p
              style={{
                fontSize: "0.85rem",
                color: "#374151",
                marginTop: 8,
                marginBottom: 4,
              }}
            >
              {car.use}
            </p>

            <div>
              {car.tags.map((t) => (
                <span key={t} className="fleet-tag">
                  {t}
                </span>
              ))}
            </div>

            <button
              className="btn btn-outline"
              style={{ marginTop: 12, width: "100%" }}
              onClick={() => {
                const text = encodeURIComponent(
                  `Hi, I want to know the price for ${car.name} from Ganpati Tours.`
                );
                window.open(`https://wa.me/919314466050?text=${text}`, "_blank");
              }}
            >
              🔍 Request price on WhatsApp
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fleet;
