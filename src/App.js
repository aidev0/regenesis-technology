import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Subscription from "./Subscription";
import Solutions from "./Solutions";
import FuturePlans from "./FuturePlans";
import Payment from "./Payment"; // Import Payment Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/future-plans" element={<FuturePlans />} />
        <Route path="/payment" element={<Payment />} /> {/* Payment Route */}
      </Routes>
    </Router>
  );
}

export default App;
