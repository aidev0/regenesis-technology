import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar Component
import Home from "./Home";
import Products from "./Products";
import Payment from "./Payment";
import Team from "./Team";
import LogoPreview from "./LogoPreview";
import Solutions from "./Solutions";
import Deck from "./Deck";
import GeneticRiskReport from "./GeneticRiskReport";

function App() {
  return (
    <Router>
      <Navbar /> {/* Persistent Navbar on Every Page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/team" element={<Team />} />
        <Route path="/logo" element={<LogoPreview />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/deck" element={<Deck />} />
        <Route path="/report" element={<GeneticRiskReport />} />
      </Routes>
    </Router>
  );
}

export default App;
