import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:5000";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("ganpati_admin_token");

  useEffect(() => {
    // agar token hi nahi hai to login page pe bhej do
    if (!token) {
      navigate("/admin");
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    async function loadData() {
      try {
        const [bRes, fRes] = await Promise.all([
          fetch(`${API_BASE}/api/admin/bookings`, { headers }),
          fetch(`${API_BASE}/api/admin/feedbacks`, { headers }),
        ]);

        const bData = await bRes.json();
        const fData = await fRes.json();

        if (!bRes.ok || !bData.success) {
          throw new Error(bData.message || "Failed to load bookings");
        }
        if (!fRes.ok || !fData.success) {
          throw new Error(fData.message || "Failed to load feedbacks");
        }

        setBookings(bData.bookings || []);
        setFeedbacks(fData.feedbacks || []);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    }

    loadData();
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("ganpati_admin_token");
    navigate("/admin");
  };

  return (
    <div className="app-main">
      <div className="page-header" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div>
          <h1 className="page-title">Admin Dashboard</h1>
          <p className="page-subtitle">
            
          </p>
        </div>
        <button className="btn btn-secondary" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {error && (
        <p style={{ color: "red", marginBottom: 16 }}>
          {error}
        </p>
      )}

      <h2 className="section-title">Latest Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="card-list">
          {bookings.map((b) => (
            <div key={b._id} className="card">
              <p><strong>Name:</strong> {b.name}</p>
              <p><strong>Phone:</strong> {b.phone}</p>
              <p>
                <strong>Route:</strong> {b.pickup} → {b.drop}
              </p>
              <p>
                <strong>Date/Time:</strong> {b.date} {b.time || ""}
              </p>
              <p>
                <strong>Vehicle:</strong> {b.carType || "-"}
              </p>
              <p>
                <strong>Passengers:</strong> {b.passengers || "-"}
              </p>
              {b.notes && <p><strong>Notes:</strong> {b.notes}</p>}
            </div>
          ))}
        </div>
      )}

      <h2 className="section-title" style={{ marginTop: 32 }}>Customer Feedback</h2>
      {feedbacks.length === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        <div className="card-list">
          {feedbacks.map((f) => (
            <div key={f._id} className="card">
              <p><strong>Name:</strong> {f.name || "-"}</p>
              <p><strong>Phone:</strong> {f.phone || "-"}</p>
              <p><strong>Rating:</strong> {f.rating} / 5</p>
              {f.highlight && (
                <p><strong>Liked most:</strong> {f.highlight}</p>
              )}
              <p><strong>Comment:</strong> {f.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
