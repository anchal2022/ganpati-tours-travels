import { useState } from "react";

// Backend ka base URL
// Local: http://127.0.0.1:5000
// Deploy: .env me VITE_API_BASE_URL set kar dena
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:5000";

function Feedback() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    rating: "5",
    highlight: "",
    message: "",
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
      rating: Number(form.rating), // backend ko number milega
      highlight: form.highlight,
      comment: form.message,
    };

    try {
      const res = await fetch(`${API_BASE}/api/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        console.error("Backend error:", data);
        // yahan chaaho to alert bhi dikha sakti ho
      }
    } catch (err) {
      console.error("Network error:", err);
    }

    // ---- 2) Same feedback WhatsApp pe bhejo (tumhara purana code) ----
    const msg = `
New customer feedback:

Name: ${form.name}
Phone: ${form.phone || "-"}
Rating: ${form.rating} / 5
What they liked most: ${form.highlight || "-"}
Message: ${form.message}
    `;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919314466050?text=${encoded}`, "_blank");
  };

  return (
    <div className="app-main">
      <h1 className="page-title">Customer Feedback</h1>
      <p className="page-subtitle">
        Your feedback is important to us. Please fill the form below.
      </p>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Your name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>

        <div className="form-row">
          <label>Mobile (optional but helpful)</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="WhatsApp number"
          />
        </div>

        <div className="form-row">
          <label>Rating</label>
          <select name="rating" value={form.rating} onChange={handleChange}>
            <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
            <option value="4">⭐⭐⭐⭐ (Very Good)</option>
            <option value="3">⭐⭐⭐ (Good)</option>
            <option value="2">⭐⭐ (Average)</option>
            <option value="1">⭐ (Need improvement)</option>
          </select>
        </div>

        <div className="form-row">
          <label>What did you like the most?</label>
          <select
            name="highlight"
            value={form.highlight}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="On-time pickup & safe driving">
              On-time pickup & safe driving
            </option>
            <option value="Clean, comfortable AC cars">
              Clean, comfortable AC cars
            </option>
            <option value="Polite & experienced driver">
              Polite & experienced driver
            </option>
            <option value="Clear pricing, no extra charges">
              Clear pricing, no extra charges
            </option>
            <option value="Something else">Something else</option>
          </select>
        </div>

        <div className="form-row">
          <label>Your feedback</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Service kaisa laga? Driver behaviour, car condition, timing, etc."
            required
          />
        </div>

        <button className="btn btn-primary" type="submit">
          ➤ Send Feedback to WhatsApp
        </button>
      </form>
    </div>
  );
}

export default Feedback;
