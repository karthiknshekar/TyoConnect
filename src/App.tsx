import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-interview" element={<div>AI Interview Practice</div>} />
          <Route path="/expert-interview" element={<div>Expert Sessions</div>} />
          <Route path="/pricing" element={<div>Pricing</div>} />
          <Route path="/about" element={<div>About</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
