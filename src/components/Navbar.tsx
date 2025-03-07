import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <h1>TyöConnect</h1>
      </Link>

      <button className="navbar-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <i className="bi bi-x-lg icon-menu"></i> : <i className="bi bi-list icon-menu"></i>}
      </button>

      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/ai-interview" className="nav-link">
          <span className="nav-icon"><i className="bi bi-robot icon-robot"></i></span> AI Practice
        </Link>
        <Link to="/expert-interview" className="nav-link">
          <span className="nav-icon"><i className="bi bi-person-workspace icon-user"></i></span> Expert Sessions
        </Link>
        <Link to="/pricing" className="nav-link">Pricing</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>

      <div className={`navbar-auth ${isMenuOpen ? 'active' : ''}`}>
        <button className="login-btn">Log In</button>
        <button className="signup-btn">Try Free AI Practice</button>
      </div>
    </nav>
  );
};

export default Navbar;