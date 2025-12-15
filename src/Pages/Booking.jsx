import { useState } from "react";

// Backend ka base URL
// Local pe: http://127.0.0.1:5000
// Deploy pe: .env file me VITE_API_BASE_URL set kar dena
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:5000";

function Booking() {
  const [form, setForm] = useState({
    pickup: "",
    drop: "",
    date: "",
    time: "",
    vehicle: "",
    passengers: "",
    name: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ---- 1) Backend ko data bhejo ----
    const payload = {
      name: form.name,
      phone: form.phone,
      pickup: form.pickup,
      drop: form.drop,
      date: form.date,
      time: form.time,
      carType: form.vehicle,
      passengers: Number(form.passengers || 0),
      notes: form.notes,
    };

    try {
      const res = await fetch(`${API_BASE}/api/booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        console.error("Backend error:", data);
        // Chaaho to yahan alert bhi dikha sakti ho
      }
    } catch (err) {
      console.error("Network error:", err);
    }

    // ---- 2) Same data WhatsApp pe bhejo (tumhara purana code) ----
    const msg = `
New booking enquiry:

Name: ${form.name}
Phone: ${form.phone}
Pickup: ${form.pickup}
Drop: ${form.drop}
Date: ${form.date}
Time: ${form.time}
Vehicle: ${form.vehicle}
Passengers: ${form.passengers}
Notes: ${form.notes}
    `;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919314466050?text=${encoded}`, "_blank");
  };

  return (
    <div className="app-main">
      <h1 className="page-title">Quick Booking</h1>
      <p className="page-subtitle">
        Fill the details below and your enquiry will directly come to our
        WhatsApp. We will confirm price and car availability.
      </p>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Pickup city / location</label>
          <input
            name="pickup"
            value={form.pickup}
            onChange={handleChange}
            placeholder="e.g. Nokha, home, railway station"
            required
          />
        </div>

        <div className="form-row">
          <label>Drop city / location</label>
          <input
            name="drop"
            value={form.drop}
            onChange={handleChange}
            placeholder="e.g. Jaipur, Delhi Airport"
            required
          />
        </div>

        <div
          className="form-row"
          style={{
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            display: "grid",
            gap: 10,
          }}
        >
          <div className="form-row">
            <label>Journey date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label>Reporting time</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label>Passengers</label>
            <input
              type="number"
              name="passengers"
              value={form.passengers}
              onChange={handleChange}
              min="1"
              placeholder="4, 7, 12..."
              required
            />
          </div>
        </div>

        <div className="form-row">
          <label>Preferred vehicle</label>
          <select
            name="vehicle"
            value={form.vehicle}
            onChange={handleChange}
            required
          >
            <option value="">Select vehicle</option>
            <option>Dzire / Sedan</option>
            <option>Innova / Ertiga</option>
            <option>Brezza / SUV</option>
            <option>Tavera / Cruiser</option>
            <option>Tempo Traveller</option>
            <option>Bus</option>
            <option>Fortuner (groom)</option>
            <option>No preference</option>
          </select>
        </div>

        <div className="form-row">
          <label>Your name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label>Mobile (WhatsApp)</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label>Any special note</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="e.g. wedding, airport, elderly passengers, kids..."
          />
        </div>

        <button className="btn btn-primary" type="submit">
          ➤ Send Enquiry to WhatsApp
        </button>
      </form>
    </div>
  );
}

export default Booking;
