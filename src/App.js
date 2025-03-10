import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar Component
import Home from "./Home";
import Subscription from "./Subscription";
import Payment from "./Payment";
import Team from "./Team";
import Logo from "./Logo";

function App() {
  return (
    <Router>
      <Navbar /> {/* Persistent Navbar on Every Page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/team" element={<Team />} />
        <Route path="/logo" element={<Logo />} />
      </Routes>
    </Router>
  );
}

export default App;
