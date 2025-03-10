import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Subscription from './Subscription';
import Solutions from './Solutions';
import FuturePlans from './FuturePlans';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/future-plans" element={<FuturePlans />} />
      </Routes>
    </Router>
  );
}

export default App;
