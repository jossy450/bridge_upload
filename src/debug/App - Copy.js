import React from 'react';
import AppRoutes from './Routes';
import Slider from 'react-slick';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import About from './About';
import Home from './Home';

function App() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    
    <div className="App">
      <header className="header">
        <div className="logo">Bridgestone Recruitment</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="/about">About Us</a>
          <a href="#services">Services</a>
          <a href="#news">News</a>
          <a href="#faq">FAQs</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        {/* Hero Section with Slider */}
        <section className="hero">
          <Slider {...sliderSettings}>
            <div>
              <img src="/images/recruitment1.jpg" alt="Team Collaboration" className="slider-image" />
            </div>
            <div>
              <img src="/images/recruitment2.jpg" alt="Professional Workspace" className="slider-image" />
            </div>
            <div>
              <img src="/images/recruitment3.jpg" alt="Successful Candidates" className="slider-image" />
            </div>
          </Slider>
        </section>

        {/* Welcome Section */}
        <section className="welcome">
          <h1>Welcome to Bridgestone Recruitment</h1>
          <p>Connecting top talent with leading organizations worldwide.</p>
        </section>
      </main>
      <footer className="footer">
        <p>© 2025 Bridgestone Recruitment. All Rights Reserved.</p>
        <p>Contact us: info@bridgestonerecruitment.com | +44 123 456 7890</p>
      </footer>
    </div>

  );
}

export default App;
