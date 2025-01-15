import { NavLink } from 'react-router-dom';
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <p>📍 60 St Luke Court, Hatfield, Hertfordshire, United Kingdom | ✉️ info@bridgestonerecruitment.com | ☎️ +44 123 456 7890</p>
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
          <img src="/images/bridge_logo.png" alt="Bridgestone Logo" />
          <span>Bridgestone Recruitment</span>
        </div>
        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Services
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Contact
          </NavLink>
          <NavLink to="/careers" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Careers
          </NavLink>
          <NavLink to="/faqs" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            FAQs
          </NavLink>
          <NavLink to="/testimonials" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Testimonials
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
