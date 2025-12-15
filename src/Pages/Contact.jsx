// src/Pages/Contact.jsx
function Contact() {
  return (
    <div className="app-main">
      <h1 className="page-title">Contact Us</h1>
      <p className="page-subtitle">
        24×7 support for cab, tour and wedding travel bookings.
      </p>

      {/* CONTACT DETAILS CARD */}
      <div className="card" style={{ maxWidth: 480, marginBottom: 24 }}>
        <p style={{ marginBottom: 10 }}>
          📞 Call / WhatsApp (Main): <strong>+91 93144 66050</strong>
        </p>
        <p style={{ marginBottom: 10 }}>
          📞 Alternate number: <strong>+91 99299 97151</strong>
        </p>
        <p style={{ marginBottom: 10 }}>
          📍 Location: Nokha, Bikaner, Rajasthan
        </p>
        <p style={{ fontSize: "0.85rem", color: "#4b5563" }}>
          We provide cabs for Rajasthan outstation tours, wedding travel and
          airport pickup &amp; drop with safe, comfortable vehicles.
        </p>
      </div>

      {/* GOOGLE MAP CARD */}
      <div className="card" style={{ maxWidth: 900 }}>
        <h3 style={{ fontSize: "1rem", marginBottom: 8 }}>Location on Map</h3>
        <p style={{ fontSize: "0.85rem", color: "#4b5563", marginBottom: 12 }}>
          Our base location near Nokha, Bikaner. Exact pickup point will be
          shared on WhatsApp at the time of booking.
        </p>

        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid #e5e7eb",
          }}
        >
          <iframe
            title="Ganpati Tours Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28298.443168897593!2d73.45175322236962!3d27.553030931333325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396aa9e6e10c0d53%3A0xe41ca0ff48b5976a!2sNokha%2C%20Rajasthan%20334803!5e0!3m2!1sen!2sin!4v1765010690602!5m2!1sen!2sin"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
