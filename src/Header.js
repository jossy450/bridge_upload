import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from './images/bridge_logo.png'; // Adjust the relative path as needed

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <p>📍 60 St Luke Court, Hatfield, Hertfordshire, UK | ✉️ info@bridgestonerecruitment.com | ☎️ +44 123 456 7890</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="menu-bar">
        <div className="logo">
          <NavLink to="/">
          <img src={logo} alt="Logo" />
            <span>Bridgestone Recruitment</span>
          </NavLink>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <NavLink to="/careers" onClick={() => setMenuOpen(false)}>Careers</NavLink>
          <NavLink to="/faqs" onClick={() => setMenuOpen(false)}>FAQs</NavLink>
          <NavLink to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
