import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    fade: true,
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <p>📍 123 Recruitment Street, London, UK | ✉️ info@bridgestonerecruitment.com | ☎️ +44 123 456 7890</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      {/* Hero Section */}
      <header className="sticky-header">
        <h1>Bridgestone Recruitment</h1>
      </header>

      <div className="hero-slider">
        <Slider {...heroSliderSettings}>
          <div className="slider-item">
            <img src="https://source.unsplash.com/1600x900/?team,office" alt="Connecting Talent" className="hero-image" />
            <div className="slider-caption">
              <h2>Connecting Talent with Opportunities</h2>
              <p>Empowering businesses and professionals to succeed together.</p>
            </div>
          </div>
          <div className="slider-item">
            <img src="https://source.unsplash.com/1600x900/?recruitment,work" alt="Innovative Recruitment" className="hero-image" />
            <div className="slider-caption">
              <h2>Innovative Recruitment Solutions</h2>
              <p>Discover the future of staffing with Bridgestone Recruitment.</p>
            </div>
          </div>
        </Slider>
      </div>

      {/* About Us Section */}
      <section className="about">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              At Bridgestone Recruitment, we connect top talent with leading organizations, fostering growth 
              and success for both employers and employees. Our tailored recruitment strategies ensure the 
              perfect fit for every role.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Join Us Today</h2>
        <p>Partner with Bridgestone Recruitment to discover innovative staffing solutions.</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* Back-to-Top Button */}
      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑ Back to Top
        </button>
      )}
    </div>
  );
}

export default Home;
