import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./Pages/Home.jsx";
import Fleet from "./Pages/Fleet.jsx";
import Booking from "./Pages/Booking.jsx";
import Contact from "./Pages/Contact.jsx";
import Feedback from "./Pages/Feedback.jsx";
import Packages from "./Pages/Packages.jsx";

// 🔐 Papa ke pages
import AdminLogin from "./Pages/AdminLogin.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";

function App() {
  return (
    <div className="app-shell">
      <Sidebar />

      <div className="app-content">
        <Routes>
          {/* Normal customer pages */}
          <Route path="/" element={<Home />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/packages" element={<Packages />} />

          {/* Papa only admin pages (URL se open karna) */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
