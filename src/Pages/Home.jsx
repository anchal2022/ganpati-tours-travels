// src/Pages/Home.jsx

import innovaImg from "../assets/innova.jpg";
import dzireImg from "../assets/dzire.jpg";
import brezzaImg from "../assets/brezza.jpg";
import cruiserImg from "../assets/cruisor.jpg";
import ertigaImg from "../assets/ertiga.jpg";
import visitingCard from "../assets/visitingcard.jpg";

function Home() {
  return (
    <div className="app-main">
      {/* TOP MAIN CARD */}
      <div className="card">
        <h1 className="page-title">
          Safe &amp; Trusted Cab Service Across Rajasthan
        </h1>

        <p className="page-subtitle">
          Family tours, weddings, airport pickup/drop and pilgrimage packages
          from Nokha, Bikaner and across Rajasthan. 24×7 cab booking – own cars
          + trusted partners.
        </p>

        {/* MAIN ACTION BUTTONS */}
        <div className="hero-actions">
          <a className="btn btn-primary" href="tel:+919314466050">
            📞 Call Now
          </a>
          <a
            className="btn btn-outline"
            href="https://wa.me/919314466050?text=Hi%2C%20I%20want%20to%20book%20a%20cab%20from%20Ganpati%20Tours."
            target="_blank"
            rel="noreferrer"
          >
            💬 WhatsApp Booking
          </a>
        </div>

        {/* SMALL INFO CARDS */}
        <div
          className="info-cards-grid"
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          }}
        >
          <div className="card" style={{ padding: 14 }}>
            <h3 style={{ fontSize: "1rem", marginBottom: 4 }}>Family Tours</h3>
            <p style={{ fontSize: "0.85rem", color: "#4b5563" }}>
              Innova, Ertiga &amp; Dzire for Rajasthan + all-India family
              trips.
            </p>
          </div>
          <div className="card" style={{ padding: 14 }}>
            <h3 style={{ fontSize: "1rem", marginBottom: 4 }}>Wedding Travel</h3>
            <p style={{ fontSize: "0.85rem", color: "#4b5563" }}>
              Cruiser &amp; other vehicles for baraat and wedding guests.
            </p>
          </div>
          <div className="card" style={{ padding: 14 }}>
            <h3 style={{ fontSize: "1rem", marginBottom: 4 }}>
              Airport &amp; Corporate
            </h3>
            <p style={{ fontSize: "0.85rem", color: "#4b5563" }}>
              Jaipur, Delhi and Jodhpur airport pickup–drop &amp; corporate cab
              contracts.
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE GANPATI TOURS */}
      <div style={{ marginTop: 32 }}>
        <h2
          className="page-title"
          style={{ fontSize: "1.6rem", marginBottom: 8 }}
        >
          Why choose Ganpati Tours?
        </h2>

        <div
          className="card"
          style={{
            maxWidth: 660,          // thoda narrow for better reading
            margin: "16px auto 0",
            padding: "18px 24px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gap: 8,
              fontSize: "0.95rem",
              color: "#374151",
            }}
          >
            <li>✅ On-time pickup &amp; safe driving.</li>
            <li>✅ Clean, comfortable AC cars.</li>
            <li>✅ Polite &amp; experienced drivers.</li>
            <li>✅ Clear pricing – no hidden extra charges.</li>
          </ul>
        </div>
      </div>

      {/* CAR PHOTO GALLERY */}
      <div style={{ marginTop: 32 }}>
        <h2
          className="page-title"
          style={{ fontSize: "1.6rem", marginBottom: 8 }}
        >
          About Our Cars
        </h2>
        <p className="page-subtitle" style={{ fontSize: "0.9rem" }}>
          These are real photos of our cars used for family tours, weddings and
          airport pickup &amp; drop.
        </p>

        <div
          style={{
            marginTop: 16,
            display: "flex",
            gap: 16,
            overflowX: "auto",
            paddingBottom: 8,
          }}
        >
          {/* Innova */}
          <div className="card" style={{ minWidth: 220, padding: 10 }}>
            <img
              src={innovaImg}
              alt="Innova Crysta"
              style={{
                width: "100%",
                height: 140,
                objectFit: "cover",
                borderRadius: 12,
              }}
            />
            <p style={{ marginTop: 8, fontWeight: 600 }}>Innova Crysta</p>
            <p style={{ fontSize: "0.8rem", color: "#4b5563" }}>
              Family tour &amp; long trips
            </p>
          </div>

          {/* Ertiga */}
          <div className="card" style={{ minWidth: 220, padding: 10 }}>
            <img
              src={ertigaImg}
              alt="Ertiga"
              style={{
                width: "100%",
                height: 140,
                objectFit: "cover",
                borderRadius: 12,
              }}
            />
            <p style={{ marginTop: 8, fontWeight: 600 }}>Ertiga</p>
            <p style={{ fontSize: "0.8rem", color: "#4b5563" }}>
              Family tours and weddings
            </p>
          </div>

          {/* Dzire */}
          <div className="card" style={{ minWidth: 220, padding: 10 }}>
            <img
              src={dzireImg}
              alt="Dzire"
              style={{
                width: "100%",
                height: 140,
                objectFit: "cover",
                borderRadius: 12,
              }}
            />
            <p style={{ marginTop: 8, fontWeight: 600 }}>Dzire</p>
            <p style={{ fontSize: "0.8rem", color: "#4b5563" }}>
              Tours, weddings &amp; airport pickup / drop
            </p>
          </div>

          {/* Brezza */}
          <div className="card" style={{ minWidth: 220, padding: 10 }}>
            <img
              src={brezzaImg}
              alt="Brezza"
              style={{
                width: "100%",
                height: 140,
                objectFit: "cover",
                borderRadius: 12,
              }}
            />
            <p style={{ marginTop: 8, fontWeight: 600 }}>Brezza</p>
            <p style={{ fontSize: "0.8rem", color: "#4b5563" }}>
              SUV for tours &amp; sightseeing
            </p>
          </div>

          {/* Cruiser */}
          <div className="card" style={{ minWidth: 220, padding: 10 }}>
            <img
              src={cruiserImg}
              alt="Cruiser"
              style={{
                width: "100%",
                height: 140,
                objectFit: "cover",
                borderRadius: 12,
              }}
            />
            <p style={{ marginTop: 8, fontWeight: 600 }}>Cruiser</p>
            <p style={{ fontSize: "0.8rem", color: "#4b5563" }}>
              Baraat &amp; group travel
            </p>
          </div>
        </div>
      </div>

      {/* VISITING CARD SECTION */}
      <div style={{ marginTop: 40 }}>
        <h2
          className="page-title"
          style={{ fontSize: "1.6rem", marginBottom: 8 }}
        >
          Ganpati Tours Visiting Card
        </h2>
        <p className="page-subtitle" style={{ fontSize: "0.9rem" }}>
          This is the same visiting card we share with customers. It helps in
          trust and authenticity.
        </p>

        <div
          className="card"
          style={{
            maxWidth: 420,
            margin: "16px auto 0",
            padding: 12,
          }}
        >
          <img
            src={visitingCard}
            alt="Ganpati Tours & Travels visiting card"
            style={{ width: "100%", borderRadius: 12 }}
          />
        </div>
      </div>

      {/* ABOUT PAPA / OUR STORY */}
      <div style={{ marginTop: 32, marginBottom: 32 }}>
        <h2
          className="page-title"
          style={{ fontSize: "1.6rem", marginBottom: 8 }}
        >
          Our Story
        </h2>
        <div
          className="card"
          style={{
            maxWidth: 720,
            margin: "16px auto 0",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "0.95rem", color: "#4b5563", marginBottom: 8 }}>
            <strong>Ganpati Tours &amp; Travels</strong> is a small family-run
            cab service based in Nokha, Bikaner. Since 15 years we have been
            arranging safe and comfortable tours and cab services for families.
          </p>
          <p style={{ fontSize: "0.95rem", color: "#4b5563", marginBottom: 8 }}>
            We regularly cover Rajasthan routes like Nokha, Bikaner, Jaipur,
            Jodhpur and Jaisalmer for family trips, weddings and airport travel.
          </p>
          <p style={{ fontSize: "0.95rem", color: "#4b5563" }}>
            Our aim is simple:{" "}
            <strong>safe journey, clean car and tension-free travel</strong> for
            every customer – just like we take care of our own family.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
