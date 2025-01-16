import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
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
      {/* Hero Slider */}
      <div className="hero-slider">
        <Slider {...heroSliderSettings}>
          <div className="slider-item">
            <img
              src="https://media.istockphoto.com/id/1304714893/photo/job-interview-with-candidate-for-project-manager.jpg?s=612x612&w=0&k=20&c=DMm_XTqjXJEpIMrdq-N1kkJvk3pvfiWEuod9Es0WKKg="
              alt="Connecting Talent"
              className="hero-image"
            />
            <div className="slider-caption">
              <h2>Connecting Talent with Opportunities</h2>
              <p>Empowering businesses and professionals to succeed together.</p>
            </div>
          </div>
          <div className="slider-item">
            <img
              src="https://media.istockphoto.com/id/2169219531/photo/home-nurse-taking-care-of-senior-woman.webp?a=1&b=1&s=612x612&w=0&k=20&c=tMhXBK5q-jjTJ8A8Bpw_XLizVpz8wLZm_-WAc6Ttn_I="
              alt="Care Service"
              className="hero-image"
            />
            <div className="slider-caption">
              <h2>Our Care Service</h2>
              <p>Discover compassionate and empathetic professional carers worldwide.</p>
            </div>
          </div>
          <div className="slider-item">
            <img
              src="https://media.istockphoto.com/id/1632197665/photo/confident-truck-driver-on-parking-lot-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=cMm4DE0XXSSxXxU8CPZuVJPokhFiJXeAmC_fvjxIgfg="
              alt="Team Collaboration"
              className="hero-image"
            />
            <div className="slider-caption">
              <h2>Innovative Haulage Recruitment Solutions</h2>
              <p>Discover the future of staffing with Bridgestone Recruitment.</p>
            </div>
          </div>
        </Slider>
      </div>

      {/* About Us Section */}
      <section className="about">
        <h2>About Us</h2>
        <div className="about-content">
          <p>
            At Bridgestone Recruitment, we connect top talent with leading organizations, fostering growth 
            and success for both employers and employees. Our tailored recruitment strategies ensure the 
            perfect fit for every role.
          </p>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Join Us Today</h2>
        <p>
          Partner with Bridgestone Recruitment to discover innovative staffing solutions.
        </p>
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
